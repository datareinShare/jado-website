"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const commitments = [
  {
    number: "01",
    title: "AIは手段、主役は人",
    description:
      "AIは評価するためのツールではなく、\n一人ひとりの可能性を引き出すための\n手段として使います。",
  },
  {
    number: "02",
    title: "福祉・教育・社会をつなぐ設計",
    description:
      "支援の場にとどまらず、\n就労・社会参加・地域連携へと\n段階的につながる仕組みを設計します。",
  },
  {
    number: "03",
    title: "「もしも」を現実の選択肢にする",
    description:
      "「もし学校以外の学び方が選べたなら」\n「もし特性が強みになる場所があったなら」\nそうした声を仕組みとして\n社会に実装し続けます。",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-brown-300/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/images/jado-logo.jpg"
              alt="JADO — 一般社団法人 日本AI人材育成機構"
              width={240}
              height={80}
              className="h-20 w-auto object-contain mx-auto"
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
              About Us
            </span>
          </motion.div>
          <TextReveal delay={0.3}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              私たちについて
            </h1>
          </TextReveal>
          <motion.p
            className="mt-4 text-sm text-brown-400 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Japan AI Development Organization
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brown-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brown-100">
              <h2 className="text-xl font-bold text-brown-800 mb-6">法人概要</h2>
              <dl className="space-y-4">
                {[
                  [
                    "法人名",
                    "一般社団法人 日本AI人材育成機構（JADO: Japan AI Development Organization）",
                  ],
                  ["設立", "2026年2月6日"],
                  [
                    "所在地",
                    "愛知県名古屋市中村区平池町4丁目60-5 ロイヤルパークスERささしま",
                  ],
                  ["代表理事", "鈴木 健斗"],
                  [
                    "事業内容",
                    "AI人材育成事業、放課後等デイサービス、\n企業向けAI研修・セミナー、子ども向けAIスクール",
                  ],
                ].map(([term, desc]) => (
                  <div
                    key={term}
                    className="flex flex-col sm:flex-row sm:gap-8 py-3 border-b border-brown-100 last:border-0"
                  >
                    <dt className="text-sm font-medium text-brown-400 sm:w-32 flex-shrink-0">
                      {term}
                    </dt>
                    <dd className="text-brown-700 mt-1 sm:mt-0 whitespace-pre-line">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Background */}
      <section className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-white to-brown-50/50">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.30] pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/bg-about-background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-brown-50/40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <SectionHeading title="設立の背景" label="Background" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-brown-800 text-center mb-10">
              「AIを使えること」より、
              <br className="sm:hidden" />
              「AIと共に生きられること」を。
            </h3>
          </FadeIn>
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <FadeIn delay={0.3}>
              <p className="text-brown-600 leading-[2] font-light">
                AIが仕事・学習・創作のあらゆる場面に浸透している今、
                <br />
                求められているのは操作スキルだけではありません。
                <br />
                自分は何が向いているのか、社会とどう関わればよいのか——
                <br />
                そうした問いと向き合いながら、
                <br />
                自分らしく生きていける力こそが、これからの時代に必要なものだとJADOは考えます。
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-brown-600 leading-[2] font-light">
                単なるIT教育でも、単なる福祉支援でもない。
                <br />
                AIという支援技術を使いながら「試し・考え・形にする場」を設計・提供することで、
                <br />
                子どもから大人まで、社会で活きる力を広げていける環境をつくります。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-brown-700 to-brown-600 text-brown-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                  Our Commitment
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                JADOの3つのこだわり
              </h2>
            </div>
          </FadeIn>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {commitments.map((item) => (
              <motion.div
                key={item.number}
                variants={staggerItem}
                className="bg-brown-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/15 hover:bg-brown-900/50 transition-all duration-300"
              >
                <span className="text-6xl font-bold text-white/15">
                  {item.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-brown-100 leading-relaxed font-light whitespace-pre-line text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
