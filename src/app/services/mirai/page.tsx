"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const reasons = [
  {
    number: "01",
    title: "AIリテラシーを軸にした安心のカリキュラム",
    description:
      "AIの仕組みや社会的影響を学ぶ「AIリテラシー教育」、情報モラル・著作権・AI生成物の扱いを学ぶ「安心な使い方の習得」、そして実際にAIを活用して作品づくりや課題解決を行う「生成AI実践」の3段階で構成しています。",
  },
  {
    number: "02",
    title: "1対1だからこそ、深く向き合える",
    description:
      "講師との1対1の対話を大切にしています。勉強だけでなく、親御様には話しにくい悩みの相談や将来についてのメンタリングなど、信頼関係の中で深いコミュニケーションが可能です。",
  },
  {
    number: "03",
    title: "子どもの「好き」が出発点",
    description:
      "「イラストが好き」「物語をつくるのが楽しい」——そうした好きを大切にしながら、AIやデジタルの力と結びつけていきます。好奇心から始まる学びだからこそ、自然にスキルが身につきます。",
  },
  {
    number: "04",
    title: "日常で使えるAI活用術が身につく",
    description:
      "現役AIエンジニアと、子育て経験を持つ主婦講師が在籍。「日常でどう使えるか」「どんな場面で役立つか」を子どもの目線に寄り添いながら一緒に考え、育てる教育スタイルです。",
  },
  {
    number: "05",
    title: "将来の進路・就活にもつながる",
    description:
      "作品発表会・プレゼン・ポートフォリオづくりなど、アウトプットの機会を多く用意しています。AIで制作した成果物は、受験や進学、将来の就職活動においても活用できます。",
  },
];

export default function Mirai() {
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
              src="/images/mirai-logo.png"
              alt="mirAI"
              width={280}
              height={140}
              className="h-24 w-auto object-contain mx-auto"
            />
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              子ども向けAIスクール mirAI
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AIを味方に。小中高生のうちから、未来を生き抜く力を。
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              <p className="text-brown-600 leading-relaxed text-lg">
                生成AIスクールは、小中高生を対象としたオンラインAI・IT教育スクールです。AIの正しい使い方から実践的な活用スキルまで、1対1の個別指導で丁寧に育てます。
              </p>
              <p className="mt-4 text-brown-600 leading-relaxed">
                「知識を詰め込む」のではなく、子ども自身の「好き」と「好奇心」を出発点に、AIという新しい道具を使って表現し、未来を切り拓く力を身につけていきます。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="選ばれる5つの理由" />
          </FadeIn>
          <StaggerChildren className="space-y-6" staggerDelay={0.1}>
            {reasons.map((reason) => (
              <motion.div
                key={reason.number}
                variants={staggerItem}
                className="flex gap-6 items-start bg-brown-50 rounded-2xl p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-4xl font-bold text-brown-200 flex-shrink-0">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brown-800">{reason.title}</h3>
                  <p className="mt-2 text-brown-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Info */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="対象・受講スタイル" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brown-100 max-w-lg mx-auto">
              <dl className="space-y-4">
                <div className="flex justify-between py-3 border-b border-brown-50">
                  <dt className="text-brown-500 font-medium">対象</dt>
                  <dd className="text-brown-700">小学生・中学生・高校生</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-brown-500 font-medium">形式</dt>
                  <dd className="text-brown-700">オンライン個別指導（1対1）</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-brown-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
              まずは無料体験から
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-brown-600">
              お子さまに合うかどうか、無料相談会・体験でお試しください。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <CTAButton href="/contact">無料相談会・体験に申し込む</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
