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
      "AIは評価するためのツールではなく、一人ひとりの可能性を引き出すための手段として使います。",
  },
  {
    number: "02",
    title: "福祉・教育・社会をつなぐ設計",
    description:
      "支援の場にとどまらず、就労・社会参加・地域連携へと段階的につながる仕組みを設計します。",
  },
  {
    number: "03",
    title: "「もしも」を現実の選択肢にする",
    description:
      "「もし学校以外の学び方が選べたなら」「もし特性が強みになる場所があったなら」——そうした声を、仕組みとして社会に実装し続けます。",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brown-100 to-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image
              src="/images/jado-logo.jpg"
              alt="JADO"
              width={240}
              height={80}
              className="h-20 w-auto object-contain mx-auto"
            />
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              私たちについて
            </h1>
          </TextReveal>
          <motion.p
            className="mt-4 text-sm text-brown-400 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Japan AI Development Organization
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              <h2 className="text-xl font-bold text-brown-800 mb-6">法人概要</h2>
              <dl className="space-y-4">
                {[
                  ["法人名", "一般社団法人 日本AI人材育成機構（JADO: Japan AI Development Organization）"],
                  ["設立", "2026年2月6日"],
                  ["所在地", "愛知県名古屋市中村区平池町4丁目60-5 ロイヤルパークスERささしま"],
                  ["代表理事", "鈴木 健斗"],
                  ["事業内容", "AI人材育成事業、放課後等デイサービス、企業向けAI研修・セミナー、子ども向けAIスクール"],
                ].map(([term, desc]) => (
                  <div
                    key={term}
                    className="flex flex-col sm:flex-row sm:gap-8 py-3 border-b border-brown-50 last:border-0"
                  >
                    <dt className="text-sm font-medium text-brown-500 sm:w-32 flex-shrink-0">
                      {term}
                    </dt>
                    <dd className="text-brown-700 mt-1 sm:mt-0">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="設立の背景" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <h3 className="text-xl md:text-2xl font-bold text-brown-800 text-center mb-8">
              「AIを使えること」より、
              <br className="sm:hidden" />
              「AIと共に生きられること」を。
            </h3>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="space-y-6 text-brown-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                AIが仕事・学習・創作のあらゆる場面に浸透している今、求められているのは操作スキルだけではありません。自分は何が向いているのか、社会とどう関わればよいのか——そうした問いと向き合いながら、自分らしく生きていける力こそが、これからの時代に必要なものだとJADOは考えます。
              </p>
              <p>
                単なるIT教育でも、単なる福祉支援でもない。AIという支援技術を使いながら「試し・考え・形にする場」を設計・提供することで、子どもから大人まで、社会で活きる力を広げていける環境をつくります。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="JADOの3つのこだわり" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {commitments.map((item) => (
              <motion.div
                key={item.number}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brown-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-5xl font-bold text-brown-100">
                  {item.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brown-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-brown-600 leading-relaxed">
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
