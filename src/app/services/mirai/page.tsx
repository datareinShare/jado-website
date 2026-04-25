"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";
import { CountUp } from "@/components/animations/CountUp";

const reasons = [
  {
    number: "01",
    title: "AIリテラシーを軸にした安心のカリキュラム",
    description:
      "AIの仕組みや社会的影響を学ぶ「AIリテラシー教育」、\n情報モラル・著作権・AI生成物の扱いを学ぶ「安心な使い方の習得」、\nそして実際にAIを活用して作品づくりや課題解決を行う「生成AI実践」。\nこの3段階で構成しています。",
  },
  {
    number: "02",
    title: "1対1だからこそ、深く向き合える",
    description:
      "講師との1対1の対話を大切にしています。\n勉強だけでなく、親御様には話しにくい悩みの相談や将来についてのメンタリングなど、\n信頼関係の中で深いコミュニケーションが可能です。",
  },
  {
    number: "03",
    title: "子どもの「好き」が出発点",
    description:
      "「イラストが好き」「物語をつくるのが楽しい」——\nそうした好きを大切にしながら、AIやデジタルの力と結びつけていきます。\n好奇心から始まる学びだからこそ、自然にスキルが身につきます。",
  },
  {
    number: "04",
    title: "日常で使えるAI活用術が身につく",
    description:
      "現役AIエンジニアと、子育て経験を持つ主婦講師が在籍。\n「日常でどう使えるか」「どんな場面で役立つか」を\n子どもの目線に寄り添いながら一緒に考え、育てる教育スタイルです。",
  },
  {
    number: "05",
    title: "将来の進路・就活にもつながる",
    description:
      "作品発表会・プレゼン・ポートフォリオづくりなど、\nアウトプットの機会を多く用意しています。\nAIで制作した成果物は、受験や進学、将来の就職活動においても活用できます。",
  },
];

const skillAreas = [
  {
    title: "コミュニケーション能力",
    description: "AIとの対話を通じて、\n自分の考えを論理的に\n伝える力を養います。",
  },
  {
    title: "デジタルリテラシー",
    description: "AIツールの正しい使い方と、\n情報を見極める力を\n身につけます。",
  },
  {
    title: "課題解決力",
    description: "AIを活用して、自ら課題を見つけ、\n解決策を考え、実行する力を\n育てます。",
  },
  {
    title: "学び続ける力",
    description: "変化の速い時代に適応し、\n新しい技術を自ら学び取る\n姿勢を育みます。",
  },
];

const courseExamples = [
  { interest: "ゲーム好き", content: "AIでオリジナルキャラをデザイン、\nゲームプランナー体験" },
  { interest: "絵を描くのが好き", content: "AIでアイデアを無限に広げ、\n自分だけの画集を制作" },
  { interest: "物語が好き", content: "AIと協力して世界に一つの絵本を創作" },
  { interest: "勉強が苦手", content: "AIが君だけの家庭教師に。\n苦手な科目も好きになる" },
];

export default function Mirai() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
              AI School
            </span>
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              子ども向けAIスクール
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AIを相棒に、自ら課題を見つけ、創造し、解決する力を育てる。
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-baseline gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-brown-100 shadow-sm">
              <CountUp end={95} duration={2} className="text-4xl font-bold text-accent" />
              <span className="text-lg text-brown-500">% 満足度</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.30] pointer-events-none rounded-t-[3rem]"
          style={{ backgroundImage: "url('/images/bg/bg-mirai-overview.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/50 pointer-events-none rounded-t-[3rem]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="bg-brown-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brown-100">
              <p className="text-brown-600 leading-[2] text-lg font-light">
                AIスクールは、小中高生を対象とした
                <br />
                オーダーメイド型のAI教育スクールです。
                <br />
                AI開発のプロ集団が設計したカリキュラムで、
                <br />
                AIの正しい使い方から実践的な活用スキルまで、1対1の個別指導で丁寧に育てます。
              </p>
              <p className="mt-6 text-brown-600 leading-[2] font-light">
                「知識を詰め込む」のではなく、子ども自身の「好き」と「好奇心」を出発点に、
                <br />
                AIという新しい道具を使って表現し、未来を切り拓く力を身につけていきます。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4 Skills */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/bg-mirai-skills.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/15 to-white/40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <SectionHeading title="育成する4つの力" label="Skills" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {skillAreas.map((skill) => (
              <motion.div
                key={skill.title}
                variants={staggerItem}
                className="bg-white rounded-3xl p-6 md:p-8 border border-brown-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-brown-800">{skill.title}</h3>
                <p className="mt-3 text-brown-600 leading-relaxed text-sm font-light whitespace-pre-line">{skill.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Course Examples */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-brown-900 to-brown-800 text-brown-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.40] pointer-events-none mix-blend-screen"
          style={{ backgroundImage: "url('/images/bg/bg-mirai-courses.jpg')" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/15 via-transparent to-brown-800/30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="uppercase tracking-widest text-sm font-bold text-brown-400">Courses</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">お子さまの「好き」に合わせたコース</h2>
              <p className="mt-4 text-brown-400">興味・能力に合わせてカリキュラムを個別に設計します</p>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {courseExamples.map((course) => (
              <motion.div
                key={course.interest}
                variants={staggerItem}
                className="bg-brown-900/40 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:bg-brown-900/50 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-white">{course.interest}なら</h3>
                <p className="mt-2 text-brown-100 leading-relaxed text-sm font-light whitespace-pre-line">{course.content}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/bg-mirai-reasons.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/15 to-white/40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <SectionHeading title="選ばれる5つの理由" label="Why Choose Us" />
          </FadeIn>
          <StaggerChildren className="space-y-6" staggerDelay={0.1}>
            {reasons.map((reason) => (
              <motion.div
                key={reason.number}
                variants={staggerItem}
                className="flex gap-6 items-start bg-white rounded-3xl p-6 md:p-8 border border-brown-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-5xl font-bold text-brown-100 flex-shrink-0">{reason.number}</span>
                <div>
                  <h3 className="text-lg font-bold text-brown-800">{reason.title}</h3>
                  <p className="mt-2 text-brown-600 leading-relaxed font-light whitespace-pre-line">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Info */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="対象・受講スタイル" label="Details" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-brown-50/50 backdrop-blur-sm rounded-3xl p-8 border border-brown-100 max-w-lg mx-auto">
              <dl className="space-y-4">
                <div className="flex justify-between py-3 border-b border-brown-100">
                  <dt className="text-brown-400 font-medium">対象</dt>
                  <dd className="text-brown-700">小学生・中学生・高校生</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-brown-100">
                  <dt className="text-brown-400 font-medium">形式</dt>
                  <dd className="text-brown-700">オンライン個別指導（1対1）</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-brown-400 font-medium">カリキュラム</dt>
                  <dd className="text-brown-700">オーダーメイド型</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative bg-brown-200 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-accent/20 to-brown-800/10 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brown-900">まずは無料体験から</h2>
              <p className="mt-4 text-brown-600 font-light">
                お子さまに合うかどうか、無料体験授業・説明会でお試しください。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/contact">無料体験授業に申し込む</CTAButton>
                <CTAButton href="/contact" variant="secondary">無料説明会に参加する</CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
