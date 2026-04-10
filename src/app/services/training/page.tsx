"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { CountUp } from "@/components/animations/CountUp";
import { TextReveal } from "@/components/animations/TextReveal";

const clients = [
  "富士通",
  "ビックカメラ",
  "東進ゼミナール",
  "キンブル",
  "愛知県議会議員・市議会議員向けセミナー（約150名規模）",
];

export default function Training() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/seminar-2.jpg"
            alt="企業向けAI研修の様子"
            width={1400}
            height={800}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
              Corporate Training
            </span>
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              企業向けAI研修・リスキリング
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            「使える生成AI」を、組織に実装する。
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brown-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brown-100">
              <p className="text-brown-600 leading-[2] text-lg font-light">
                JADOは、企業・団体向けの生成AI研修・リスキリング支援を提供しています。
                <br />
                ビックカメラ・東進ゼミナール・キンブル・富士通をはじめとした
                <br />
                大手から中小まで幅広い企業への研修実績と、
                <br />
                愛知県議会議員・市議会議員を含む行政機関への登壇経験をもとに、
                <br />
                貴社の課題・規模・目的に合わせたプログラムを設計します。
              </p>
              <p className="mt-6 text-brown-600 leading-[2] font-light">
                ChatGPTをはじめ、GoogleのAIツール（Gemini等）を活用した実践的な研修を行います。
                <br />
                単なる操作習得ではなく、「業務でAIを実際に使いこなせる状態」になることをゴールに設定します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-b from-brown-900 to-brown-800 text-brown-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-brown-700/50">
            <FadeIn>
              <div className="text-center md:px-6 pt-8 md:pt-0">
                <p className="text-brown-400 text-sm font-medium tracking-widest uppercase mb-4">研修実施人数</p>
                <div className="flex items-baseline justify-center gap-2">
                  <CountUp end={3000} className="text-6xl md:text-7xl font-bold tracking-tighter text-white" />
                  <span className="text-2xl text-accent font-bold">名+</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="text-center md:px-6 pt-8 md:pt-0">
                <p className="text-brown-400 text-sm font-medium tracking-widest uppercase mb-4">行政セミナー規模</p>
                <div className="flex items-baseline justify-center gap-2">
                  <CountUp end={150} className="text-6xl md:text-7xl font-bold tracking-tighter text-white" />
                  <span className="text-2xl text-accent font-bold">名</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center md:px-6 pt-8 md:pt-0">
                <p className="text-brown-400 text-sm font-medium tracking-widest uppercase mb-4">対応規模</p>
                <p className="text-3xl md:text-4xl font-bold text-white">大手〜中小</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="登壇実績" label="Track Record" />
          </FadeIn>
          <StaggerChildren className="space-y-4 max-w-2xl mx-auto" staggerDelay={0.08}>
            {clients.map((client) => (
              <motion.div
                key={client}
                variants={staggerItem}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-brown-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-brown-700">{client}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="料金・助成金について" label="Pricing" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-green-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-green-100">
              <h3 className="text-xl font-bold text-brown-800">
                助成金の活用で、企業負担を大幅に軽減できる可能性があります。
              </h3>
              <p className="mt-6 text-brown-600 leading-[2] font-light">
                研修費用は10万円（税込・プログラム内容により変動）。
                <br />
                厚生労働省の「人材開発支援助成金」を活用した場合、
                <br />
                中小企業は研修費用の最大75%が助成される可能性があり、
                <br />
                実質的な企業負担が約1万5,000円〜2万5,000円程度になるケースもあります。
              </p>
              <p className="mt-6 text-sm text-brown-400 leading-relaxed">
                ※助成金の受給には雇用契約期間・訓練内容・事前申請等の要件があり、
                <br />
                支給を保証するものではありません。詳細はお問い合わせください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative bg-brown-200 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-brown-800/20 to-accent/20 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brown-900">
                まずはお気軽にご相談ください
              </h2>
              <p className="mt-4 text-brown-600 font-light">
                貴社の課題に合わせた研修プログラムをご提案します。
              </p>
              <div className="mt-8">
                <CTAButton href="/contact">企業向け研修を相談する</CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
