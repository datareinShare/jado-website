"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";

const faqSections = [
  {
    title: "放課後等デイサービス ALTIFについて",
    items: [
      {
        q: "対象年齢を教えてください。",
        a: "小学生〜高校生が対象です。\n年齢よりも発達段階・興味・意欲を大切にしていますので、まずはご相談ください。",
      },
      {
        q: "パソコンやAIの知識がなくても大丈夫ですか？",
        a: "まったく問題ありません。\nPC操作の基礎から、お子さんのペースに合わせて丁寧にサポートします。",
      },
      {
        q: "利用するには何が必要ですか？",
        a: "障害児通所受給者証が必要です。\nお持ちでない場合も、取得手続きについてご案内しますので、\nお気軽にご相談ください。",
      },
      {
        q: "見学はできますか？",
        a: "はい、随時受け付けています。\nお問い合わせフォームよりご連絡ください。",
      },
      {
        q: "どんな活動をしていますか？",
        a: "ゲーム・外出活動・料理・自然体験など、充実した日常の体験を届けながら、\nAIを使った作品づくりや発信活動も行います。",
      },
    ],
  },
  {
    title: "子ども向けAIスクールについて",
    items: [
      {
        q: "対象年齢を教えてください。",
        a: "小学生・中学生・高校生が対象です。",
      },
      {
        q: "どんな形式で受講しますか？",
        a: "オンラインでの1対1個別指導です。\n自宅から受講できます。",
      },
      {
        q: "体験授業はありますか？",
        a: "はい、無料相談会・体験を実施しています。\nまずはお気軽にご連絡ください。",
      },
    ],
  },
  {
    title: "企業向け研修・セミナーについて",
    items: [
      {
        q: "研修費用はいくらですか？",
        a: "基本料金は10万円（税別）です。\n人材開発支援助成金を活用いただくことで、\n実質約1万5,000円〜のご負担でご受講いただけるケースがあります。",
      },
      {
        q: "助成金の申請サポートはしてもらえますか？",
        a: "はい、ご相談に応じます。\nまずはお問い合わせください。",
      },
      {
        q: "オンライン研修は可能ですか？",
        a: "対面・オンライン・ハイブリッドいずれにも対応しています。",
      },
      {
        q: "使用するAIツールはどれですか？",
        a: "主にChatGPT（OpenAI）およびGoogleのAIツール（Gemini等）を使用します。\nご希望に応じてカスタマイズも可能です。",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brown-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-brown-800 font-medium group-hover:text-accent transition-colors">
          Q. {q}
        </span>
        <motion.div
          className="w-8 h-8 rounded-full bg-brown-50 group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-4 h-4 text-brown-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
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
            <div className="pb-6 text-brown-600 leading-[2] pl-6 font-light whitespace-pre-line">
              A. {a}
            </div>
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
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[250px] h-[250px] bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
              FAQ
            </span>
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900">
              よくあるご質問
            </h1>
          </TextReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqSections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <h2 className="text-xl font-bold text-brown-800">
                      {section.title}
                    </h2>
                  </div>
                  <div className="bg-brown-50/50 backdrop-blur-sm rounded-3xl px-6 md:px-8 border border-brown-100">
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
