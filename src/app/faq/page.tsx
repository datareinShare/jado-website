"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const faqSections = [
  {
    title: "放課後等デイサービス ALTIFについて",
    items: [
      { q: "対象年齢を教えてください。", a: "小学生〜高校生が対象です。年齢よりも発達段階・興味・意欲を大切にしていますので、まずはご相談ください。" },
      { q: "パソコンやAIの知識がなくても大丈夫ですか？", a: "まったく問題ありません。PC操作の基礎から、お子さんのペースに合わせて丁寧にサポートします。" },
      { q: "利用するには何が必要ですか？", a: "障害児通所受給者証が必要です。お持ちでない場合も、取得手続きについてご案内しますので、お気軽にご相談ください。" },
      { q: "見学はできますか？", a: "はい、随時受け付けています。お問い合わせフォームよりご連絡ください。" },
      { q: "どんな活動をしていますか？", a: "ゲーム・外出活動・料理・自然体験など、充実した日常の体験を届けながら、AIを使った作品づくりや発信活動も行います。" },
    ],
  },
  {
    title: "子ども向けAIスクール mirAIについて",
    items: [
      { q: "対象年齢を教えてください。", a: "小学生・中学生・高校生が対象です。" },
      { q: "どんな形式で受講しますか？", a: "オンラインでの1対1個別指導です。自宅から受講できます。" },
      { q: "体験授業はありますか？", a: "はい、無料相談会・体験を実施しています。まずはお気軽にご連絡ください。" },
    ],
  },
  {
    title: "企業向け研修・セミナーについて",
    items: [
      { q: "研修費用はいくらですか？", a: "基本料金は10万円（税別）です。人材開発支援助成金を活用いただくことで、実質約1万5,000円〜のご負担でご受講いただけるケースがあります。" },
      { q: "助成金の申請サポートはしてもらえますか？", a: "はい、ご相談に応じます。まずはお問い合わせください。" },
      { q: "オンライン研修は可能ですか？", a: "対面・オンライン・ハイブリッドいずれにも対応しています。" },
      { q: "使用するAIツールはどれですか？", a: "主にChatGPT（OpenAI）およびGoogleのAIツール（Gemini等）を使用します。ご希望に応じてカスタマイズも可能です。" },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brown-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-brown-800 font-medium group-hover:text-accent transition-colors">
          Q. {q}
        </span>
        <motion.svg
          className="w-5 h-5 text-brown-400 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-brown-600 leading-relaxed pl-6">A. {a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
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
            FAQ
          </motion.p>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900">よくあるご質問</h1>
          </TextReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqSections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.1}>
                <div>
                  <h2 className="text-xl font-bold text-brown-800 mb-6">{section.title}</h2>
                  <div className="bg-white rounded-2xl px-6 shadow-sm border border-brown-100">
                    {section.items.map((item) => (
                      <FAQItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
