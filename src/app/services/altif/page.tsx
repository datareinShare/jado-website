"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const activities = [
  "ゲーム・遊び・外出活動",
  "料理・自然体験・制作",
  "AIを使った作品づくり・発信",
  "日常の振り返りとスケジュール管理",
];

const traits = [
  { label: "ASD", strengths: "集中力・専門性" },
  { label: "ADHD", strengths: "行動力・アイデア力" },
  { label: "LD", strengths: "発想力・空間認知" },
];

const pillars = [
  {
    title: "放デイ5領域 × AI支援",
    description:
      "健康・生活、運動・感覚、認知・行動、言語・コミュニケーション、人間関係・社会性の5領域を、AIの力でさらに強化します。",
  },
  {
    title: "社会との接続",
    description:
      "ALTIFは、福祉の中だけで完結しません。「自分の得意を知る」→「成功体験を積む」→「社会とつながる」——その先に、未来の選択肢が広がります。",
  },
];

export default function Altif() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-background py-24 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-[10%] w-64 h-64 bg-green-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image
              src="/images/altif-logo.png"
              alt="ALTIF"
              width={200}
              height={200}
              className="h-32 w-auto object-contain mx-auto"
            />
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              放課後等デイサービス ALTIF
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AIを使って、「自分に合った未来」を安全に試せる場所。
          </motion.p>
        </div>
      </section>

      {/* What is ALTIF */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              <h2 className="text-2xl font-bold text-brown-800 mb-6">ALTIFとは</h2>
              <p className="text-brown-600 leading-relaxed text-lg">
                ALTIFは、AIを活用した「未来探索型」放課後等デイサービスです。
              </p>
              <p className="mt-4 text-brown-600 leading-relaxed">
                ここでは、子どもたちが試して・失敗して・また試すことを、安心できる環境で繰り返すことができます。AIは主役ではありません。子どもの得意を引き出し、考えを形にするための支援ツールとして活用します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Daily Life */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="ALTIFでの過ごし方"
              subtitle="体験があって、AIがある。それがALTIFです。"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-center text-brown-600 leading-relaxed max-w-3xl mx-auto mb-12">
              ゲームで遊んだり、みんなで外に出かけたり、料理や自然体験をしたり——子どもたちにとって大切な体験と仲間との時間を、丁寧に届けます。そこにAIが加わることで、体験の記録・振り返り・表現の幅がさらに広がります。
            </p>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto" staggerDelay={0.1}>
            {activities.map((activity) => (
              <motion.div
                key={activity}
                variants={staggerItem}
                className="flex items-center gap-4 bg-green-50 rounded-xl p-5 hover:bg-green-100/70 transition-colors duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-brown-700 font-medium">{activity}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Target */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="こんなお子さんへ" />
          </FadeIn>
          <StaggerChildren className="space-y-4 max-w-2xl mx-auto" staggerDelay={0.1}>
            {[
              "学校生活に違和感や生きづらさを感じている",
              "不登校・登校しぶりがある",
              "ASD・ADHD・LD/SLDなど、発達特性による得意不得意の差が大きい",
              "将来への不安はあるけど、何かやってみたい気持ちはある",
            ].map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-brown-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-accent mt-0.5 text-lg">✓</span>
                <span className="text-brown-700">{item}</span>
              </motion.div>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.5}>
            <p className="text-center text-brown-500 mt-8">対象年齢：小学生〜高校生</p>
          </FadeIn>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="発達特性は「才能の裏返し」"
              subtitle="特性の裏側にある強みをAIと教育で引き出し、「社会で使える形」に変えていきます。"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            {traits.map((trait) => (
              <motion.div
                key={trait.label}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center bg-green-50 rounded-2xl p-8"
              >
                <span className="text-3xl font-bold text-accent">{trait.label}</span>
                <p className="mt-3 text-brown-700 font-medium">{trait.strengths}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="学びの3本柱" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brown-100 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-brown-800">{pillar.title}</h3>
                <p className="mt-3 text-brown-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
              まずは、見に来てください。
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-brown-600">
              「うちの子に合うかな？」という気持ちで大丈夫です。見学・体験は無料です。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <CTAButton href="/contact" variant="secondary">
                見学・体験を申し込む
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
