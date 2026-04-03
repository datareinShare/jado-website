"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";

const sections = [
  {
    title: "1. 個人情報の定義",
    content:
      "本ポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、氏名、住所、電話番号、メールアドレス等、特定の個人を識別できる情報をいいます。",
  },
  {
    title: "2. 個人情報の収集方法",
    content:
      "当法人は、お問い合わせフォーム、サービスのお申し込み、イベントへの参加登録等を通じて、適正な手段により個人情報を収集いたします。",
  },
  {
    title: "3. 個人情報の利用目的",
    items: [
      "サービスの提供・運営のため",
      "お問い合わせに対する回答・連絡のため",
      "セミナー・イベント等のご案内のため",
      "サービスの改善・新サービスの開発のため",
      "利用規約に違反した方への対応のため",
    ],
  },
  {
    title: "4. 個人情報の第三者提供",
    content:
      "当法人は、以下の場合を除き、あらかじめご本人の同意を得ることなく、第三者に個人情報を提供することはありません。",
    items: [
      "法令に基づく場合",
      "人の生命・身体または財産の保護のために必要がある場合",
      "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合",
      "国の機関もしくは地方公共団体等が法令の定める事務を遂行することに対して協力する必要がある場合",
    ],
  },
  {
    title: "5. 個人情報の管理",
    content:
      "当法人は、個人情報の正確性及び安全性を確保するために、セキュリティ対策を講じ、個人情報の漏洩、滅失、き損の防止及び是正に努めます。",
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    content:
      "ご本人から個人情報の開示・訂正・削除を求められた場合には、本人確認を行った上で、合理的な期間内に対応いたします。下記のお問い合わせ窓口までご連絡ください。",
  },
  {
    title: "7. Cookieの使用について",
    content:
      "当サイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。Cookieによって個人を特定できる情報を収集することはありません。ブラウザの設定によりCookieの受け取りを拒否することも可能です。",
  },
  {
    title: "8. プライバシーポリシーの変更",
    content:
      "本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更できるものとします。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。",
  },
  {
    title: "9. お問い合わせ窓口",
    content:
      "本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。",
  },
];

export default function Privacy() {
  return (
    <>
      <section className="bg-gradient-to-b from-brown-100 to-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              プライバシーポリシー
            </h1>
          </TextReveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-brown-600 leading-relaxed mb-12">
              一般社団法人日本AI人材育成機構（以下「当法人」）は、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
            </p>
          </FadeIn>

          <div className="space-y-10">
            {sections.map((section) => (
              <FadeIn key={section.title}>
                <div>
                  <h2 className="text-lg font-bold text-brown-800 mb-3">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-brown-600 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-brown-600 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-brown-300 mt-1.5 flex-shrink-0">
                            &#8226;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 pt-8 border-t border-brown-100">
              <p className="text-sm text-brown-400">
                制定日: 2026年4月4日
              </p>
              <p className="text-sm text-brown-400">
                一般社団法人 日本AI人材育成機構
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
