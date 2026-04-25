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
    number: "01",
    title: "AI活用",
    description: "文章生成・画像生成・\nアイデア生成・資料制作",
  },
  {
    number: "02",
    title: "IT基礎",
    description: "PC操作・タイピング・\n各種ツール活用",
  },
  {
    number: "03",
    title: "創作活動",
    description: "動画制作・デザイン・\nゲーム企画・発信",
  },
];

export default function Altif() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/images/altif-logo.png"
              alt="ALTIF — AIを活用した未来探索型 放課後等デイサービス"
              width={200}
              height={200}
              className="h-32 w-auto object-contain mx-auto"
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
              Day Service
            </span>
          </motion.div>
          <TextReveal delay={0.3}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              放課後等デイサービス ALTIF
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AIを使って、「自分に合った未来」を安全に試せる場所。
          </motion.p>
        </div>
      </section>

      {/* What is ALTIF */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.30] pointer-events-none rounded-t-[3rem]"
          style={{ backgroundImage: "url('/images/bg/bg-altif-intro.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/50 pointer-events-none rounded-t-[3rem]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="bg-green-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100">
              <h2 className="font-serif text-2xl font-bold text-brown-800 mb-6">
                ALTIFとは
              </h2>
              <p className="text-brown-600 leading-[2] text-lg font-light">
                ALTIFは、AIを活用した「未来探索型」
                <br />
                放課後等デイサービスです。
              </p>
              <p className="mt-6 text-brown-600 leading-[2] font-light">
                ここでは、子どもたちが試して・失敗して・また試すことを、
                <br />
                安心できる環境で繰り返すことができます。
                <br />
                AIは主役ではありません。
                <br />
                子どもの得意を引き出し、考えを形にするための支援ツールとして活用します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Daily Life */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/bg-altif-daily.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/15 to-white/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <SectionHeading
              title="ALTIFでの過ごし方"
              subtitle="体験があって、AIがある。それがALTIFです。"
              label="Daily Life"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-center text-brown-600 leading-[2] max-w-2xl mx-auto mb-12 font-light">
              ゲームで遊んだり、みんなで外に出かけたり、料理や自然体験をしたり——
              <br />
              子どもたちにとって大切な体験と仲間との時間を、丁寧に届けます。
              <br />
              そこにAIが加わることで、体験の記録・振り返り・表現の幅がさらに広がります。
            </p>
          </FadeIn>
          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
            staggerDelay={0.1}
          >
            {activities.map((activity) => (
              <motion.div
                key={activity}
                variants={staggerItem}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-brown-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-brown-700 font-medium">{activity}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Target */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="こんなお子さんへ" label="For Your Child" />
          </FadeIn>
          <StaggerChildren
            className="space-y-4 max-w-2xl mx-auto"
            staggerDelay={0.1}
          >
            {[
              "学校生活に違和感や生きづらさを感じている",
              "不登校・登校しぶりがある",
              "ASD・ADHD・LD/SLDなど、発達特性による得意不得意の差が大きい",
              "将来への不安はあるけど、何かやってみたい気持ちはある",
            ].map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex items-start gap-4 bg-brown-50/50 backdrop-blur-sm rounded-2xl p-5 border border-brown-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-accent mt-0.5 text-lg font-bold">
                  &#10003;
                </span>
                <span className="text-brown-700">{item}</span>
              </motion.div>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.5}>
            <p className="text-center text-brown-400 mt-8 text-sm">
              対象年齢：小学生〜高校生
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-brown-900 to-brown-800 text-brown-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.40] pointer-events-none mix-blend-screen"
          style={{ backgroundImage: "url('/images/bg/bg-altif-strengths.jpg')" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/15 via-transparent to-brown-800/30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                  Strengths
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                発達特性は「才能の裏返し」
              </h2>
              <p className="mt-4 text-brown-400 max-w-2xl mx-auto">
                特性の裏側にある強みをAIと教育で引き出し、「社会で使える形」に変えていきます。
              </p>
            </div>
          </FadeIn>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            staggerDelay={0.15}
          >
            {traits.map((trait) => (
              <motion.div
                key={trait.label}
                variants={staggerItem}
                className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-4xl font-bold text-accent">
                  {trait.label}
                </span>
                <p className="mt-3 text-white font-medium">{trait.strengths}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/bg-altif-pillars.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/15 to-white/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <SectionHeading title="学びの3本柱" label="Pillars" />
          </FadeIn>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            staggerDelay={0.15}
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="bg-white rounded-3xl p-8 border border-brown-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-5xl font-bold text-brown-100">
                  {pillar.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brown-800">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-brown-600 leading-relaxed font-light whitespace-pre-line">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative bg-brown-200 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-accent/20 to-brown-800/10 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brown-900">
                まずは、見に来てください。
              </h2>
              <p className="mt-4 text-brown-600 font-light">
                「うちの子に合うかな？」という気持ちで大丈夫です。見学・体験は無料です。
              </p>
              <div className="mt-8">
                <CTAButton href="/contact" variant="secondary">
                  見学・体験を申し込む
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
