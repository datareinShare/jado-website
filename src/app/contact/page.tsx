"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { sendContactForm } from "./actions/send";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactForm, null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brown-100 to-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.p>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900">お問い合わせ</h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ご質問・ご相談・見学のお申し込みなど、お気軽にご連絡ください。
            <br />
            担当者より、通常2営業日以内にご返信いたします。
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              {state?.success ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-brown-800 mb-4">送信が完了しました</p>
                  <p className="text-brown-600">
                    お問い合わせありがとうございます。
                    <br />
                    担当者より2営業日以内にご返信いたします。
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  {state?.success === false && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {state.message}
                    </div>
                  )}

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-brown-700 mb-2">
                      お問い合わせ種別
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    >
                      <option value="">選択してください</option>
                      <option value="altif">放課後等デイサービス ALTIF について</option>
                      <option value="mirai">子ども向けAIスクールについて</option>
                      <option value="training">企業向けAI研修について</option>
                      <option value="seminar">セミナー・講演について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="kana" className="block text-sm font-medium text-brown-700 mb-2">
                        フリガナ
                      </label>
                      <input
                        type="text"
                        id="kana"
                        name="kana"
                        className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brown-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="org" className="block text-sm font-medium text-brown-700 mb-2">
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      id="org"
                      name="org"
                      className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full rounded-lg border border-brown-200 px-4 py-3 text-brown-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200 resize-y"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-brown-700 text-white py-4 rounded-full font-medium hover:bg-brown-800 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={isPending ? {} : { scale: 1.02 }}
                    whileTap={isPending ? {} : { scale: 0.98 }}
                  >
                    {isPending ? "送信中..." : "送信する"}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 text-center text-brown-500 text-sm">
              <p>メールでのお問い合わせ</p>
              <button
                type="button"
                className="text-accent hover:underline"
                onClick={() => {
                  const u = "Kento0124ss";
                  const d = "gmail.com";
                  window.location.href = `mailto:${u}@${d}`;
                }}
              >
                メールを送る
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
