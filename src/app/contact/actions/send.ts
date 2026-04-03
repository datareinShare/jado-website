"use server";

import nodemailer from "nodemailer";

type FormState = {
  success: boolean;
  message: string;
} | null;

export async function sendContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const type = formData.get("type") as string;
  const name = formData.get("name") as string;
  const kana = formData.get("kana") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const org = formData.get("org") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "必須項目を入力してください。" };
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
    await transporter.sendMail({
      from: `"JADOお問い合わせ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[JADO] お問い合わせ: ${typeLabels[type] || "その他"} - ${name}様`,
      text: body,
    });

    return { success: true, message: "送信が完了しました。" };
  } catch {
    return {
      success: false,
      message: "送信に失敗しました。時間をおいて再度お試しください。",
    };
  }
}
