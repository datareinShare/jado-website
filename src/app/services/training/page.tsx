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
      <section className="relative bg-gradient-to-b from-brown-100 to-background py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/seminar-2.jpg"
            alt="企業向けAI研修の様子"
            width={1400}
            height={800}
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p
            className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Corporate Training
          </motion.p>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              企業向けAI研修・リスキリング
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            「使える生成AI」を、組織に実装する。
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              <p className="text-brown-600 leading-relaxed text-lg">
                JADOは、企業・団体向けの生成AI研修・リスキリング支援を提供しています。ビックカメラ・東進ゼミナール・キンブル・富士通をはじめとした大手から中小まで幅広い企業への研修実績と、愛知県議会議員・市議会議員を含む行政機関への登壇経験をもとに、貴社の課題・規模・目的に合わせたプログラムを設計します。
              </p>
              <p className="mt-4 text-brown-600 leading-relaxed">
                ChatGPTをはじめ、GoogleのAIツール（Gemini等）を活用した実践的な研修を行います。単なる操作習得ではなく、「業務でAIを実際に使いこなせる状態」になることをゴールに設定します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="実績" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center mb-16" staggerDelay={0.15}>
            <motion.div variants={staggerItem} className="bg-brown-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-accent">
                <CountUp end={3000} suffix="+" />
              </p>
              <p className="mt-2 text-brown-600">研修実施人数</p>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-brown-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-accent">
                <CountUp end={150} suffix="名" />
              </p>
              <p className="mt-2 text-brown-600">行政セミナー規模</p>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-brown-50 rounded-2xl p-8">
              <p className="text-4xl font-bold text-accent">大手〜中小</p>
              <p className="mt-2 text-brown-600">幅広い企業規模に対応</p>
            </motion.div>
          </StaggerChildren>

          <FadeIn>
            <h3 className="text-lg font-bold text-brown-800 mb-6 text-center">登壇実績</h3>
          </FadeIn>
          <StaggerChildren className="space-y-3 max-w-2xl mx-auto" staggerDelay={0.08}>
            {clients.map((client) => (
              <motion.div
                key={client}
                variants={staggerItem}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-brown-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-brown-700">{client}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="料金・助成金について" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-green-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-brown-800">
                助成金の活用で、企業負担を大幅に軽減できる可能性があります。
              </h3>
              <p className="mt-4 text-brown-600 leading-relaxed">
                研修費用は10万円（税込・プログラム内容により変動）。厚生労働省の「人材開発支援助成金」を活用した場合、中小企業は研修費用の最大75%が助成される可能性があり、実質的な企業負担が約1万5,000円〜2万5,000円程度になるケースもあります。
              </p>
              <p className="mt-4 text-sm text-brown-500">
                ※助成金の受給には雇用契約期間・訓練内容・事前申請等の要件があり、支給を保証するものではありません。詳細はお問い合わせください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-brown-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
              まずはお気軽にご相談ください
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-brown-600">
              貴社の課題に合わせた研修プログラムをご提案します。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <CTAButton href="/contact">企業向け研修を相談する</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
