"use server";

import nodemailer from "nodemailer";

type FormState = {
  success: boolean;
  message: string;
} | null;

function sanitize(input: string): string {
  return input.replace(/[\r\n]/g, "").trim();
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(email: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1時間
  const maxRequests = 5;

  const timestamps = (rateLimitMap.get(email) || []).filter(
    (t) => now - t < windowMs
  );

  if (timestamps.length >= maxRequests) {
    return false;
  }

  timestamps.push(now);
  rateLimitMap.set(email, timestamps);
  return true;
}

export async function sendContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const type = formData.get("type") as string;
  const name = sanitize((formData.get("name") as string) || "");
  const kana = sanitize((formData.get("kana") as string) || "");
  const email = sanitize((formData.get("email") as string) || "");
  const phone = sanitize((formData.get("phone") as string) || "");
  const org = sanitize((formData.get("org") as string) || "");
  const message = ((formData.get("message") as string) || "").trim();

  if (!name || !email || !message) {
    return { success: false, message: "必須項目を入力してください。" };
  }

  if (name.length > 100 || kana.length > 100 || org.length > 200) {
    return { success: false, message: "入力文字数が多すぎます。" };
  }
  if (email.length > 254 || !emailRegex.test(email)) {
    return { success: false, message: "有効なメールアドレスを入力してください。" };
  }
  if (phone.length > 20) {
    return { success: false, message: "電話番号が長すぎます。" };
  }
  if (message.length > 5000) {
    return { success: false, message: "お問い合わせ内容は5000文字以内でお願いします。" };
  }

  if (!checkRateLimit(email)) {
    return { success: false, message: "送信回数の上限に達しました。時間をおいて再度お試しください。" };
  }

  const typeLabels: Record<string, string> = {
    altif: "放課後等デイサービス ALTIF について",
    mirai: "子ども向けAIスクールについて",
    training: "企業向けAI研修について",
    seminar: "セミナー・講演について",
    other: "その他",
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const body = [
    `【お問い合わせ種別】${typeLabels[type] || "未選択"}`,
    `【お名前】${name}`,
    kana ? `【フリガナ】${kana}` : null,
    `【メールアドレス】${email}`,
    phone ? `【電話番号】${phone}` : null,
    org ? `【会社名・団体名】${org}` : null,
    "",
    "【お問い合わせ内容】",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    // 管理者への通知メール
    await transporter.sendMail({
      from: `"JADOお問い合わせ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[JADO] お問い合わせ: ${typeLabels[type] || "その他"} - ${sanitize(name)}様`,
      text: body,
    });

    // 送信者への自動返信メール
    await transporter.sendMail({
      from: `"JADO（日本AI人材育成機構）" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "【JADO】お問い合わせありがとうございます",
      text: [
        `${name} 様`,
        "",
        "この度はお問い合わせいただき、ありがとうございます。",
        "以下の内容でお問い合わせを受け付けました。",
        "担当者より2営業日以内にご返信いたします。",
        "",
        "─────────────────────────",
        body,
        "─────────────────────────",
        "",
        "※このメールは自動送信です。",
        "※お心当たりのない場合は、このメールを破棄してください。",
        "",
        "──",
        "一般社団法人 日本AI人材育成機構（JADO）",
        "〒453-0872 愛知県名古屋市中村区平池町4丁目60-5",
        "ロイヤルパークスERささしま",
        "https://jado.or.jp",
      ].join("\n"),
    });

    return { success: true, message: "送信が完了しました。" };
  } catch {
    return {
      success: false,
      message: "送信に失敗しました。時間をおいて再度お試しください。",
    };
  }
}
