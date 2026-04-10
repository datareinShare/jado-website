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
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
              Contact
            </span>
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900">
              お問い合わせ
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 font-light"
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
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brown-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brown-100">
              {state?.success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-brown-800 mb-4">
                    送信が完了しました
                  </p>
                  <p className="text-brown-600 font-light">
                    お問い合わせありがとうございます。
                    <br />
                    担当者より2営業日以内にご返信いたします。
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  {state?.success === false && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700 text-sm">
                      {state.message}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-brown-700 mb-2"
                    >
                      お問い合わせ種別
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    >
                      <option value="">選択してください</option>
                      <option value="altif">
                        放課後等デイサービス ALTIF について
                      </option>
                      <option value="mirai">子ども向けAIスクールについて</option>
                      <option value="training">企業向けAI研修について</option>
                      <option value="seminar">セミナー・講演について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-brown-700 mb-2"
                      >
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="kana"
                        className="block text-sm font-medium text-brown-700 mb-2"
                      >
                        フリガナ
                      </label>
                      <input
                        type="text"
                        id="kana"
                        name="kana"
                        className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brown-700 mb-2"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-brown-700 mb-2"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="org"
                      className="block text-sm font-medium text-brown-700 mb-2"
                    >
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      id="org"
                      name="org"
                      className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-brown-700 mb-2"
                    >
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      aria-required="true"
                      className="w-full rounded-2xl border border-brown-200 px-4 py-3 text-brown-700 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200 resize-y"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-accent text-white py-4 rounded-full font-medium hover:bg-accent-dark transition-colors shadow-[0_10px_30px_rgba(90,154,90,0.3)] hover:shadow-[0_15px_40px_rgba(90,154,90,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={isPending ? {} : { y: -2 }}
                    whileTap={isPending ? {} : { scale: 0.98 }}
                  >
                    {isPending && (
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                    )}
                    {isPending ? "送信中..." : "送信する"}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 text-center text-brown-400 text-sm">
              <p>メールでのお問い合わせ</p>
              <button
                type="button"
                className="text-accent hover:underline mt-1"
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
