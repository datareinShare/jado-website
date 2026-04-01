"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const examples = [
  { title: "生成AI入門セミナー", description: "AIの基礎から実際の活用事例まで、初心者向けに分かりやすく解説" },
  { title: "業務効率化ワークショップ", description: "ChatGPT・Geminiを使った業務効率化の実践ハンズオン" },
  { title: "AI戦略・DX推進", description: "組織全体でのAI導入戦略とロードマップ策定" },
  { title: "教育機関向け", description: "学校・教育委員会向けのAI活用セミナー" },
  { title: "行政・議員向け", description: "行政サービスにおけるAI活用と政策立案" },
  { title: "カスタムプログラム", description: "ご要望に合わせたオーダーメイドのセミナー設計" },
];

export default function Seminar() {
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
            Seminar & Lecture
          </motion.p>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900 leading-tight">
              セミナー・講演
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            行政・民間・教育機関向け、AI活用セミナー・講演
          </motion.p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="登壇の様子" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            <motion.div variants={staggerItem} className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/seminar-1.jpg"
                alt="新政あいち 秋季セミナーでの登壇（約150名規模）"
                width={800}
                height={450}
                className="w-full h-64 object-cover"
              />
              <p className="p-4 text-sm text-brown-600 bg-brown-50">愛知県議会議員・市議会議員向けセミナー（約150名規模）</p>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/seminar-2.jpg"
                alt="企業向けAI研修の様子"
                width={800}
                height={450}
                className="w-full h-64 object-cover"
              />
              <p className="p-4 text-sm text-brown-600 bg-brown-50">企業向けAI活用研修</p>
            </motion.div>
          </StaggerChildren>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              <p className="text-brown-600 leading-relaxed text-lg">
                JADOでは、企業・行政・学校・地域団体など幅広い機関に向けたAI活用セミナー・講演を実施しています。
              </p>
              <p className="mt-4 text-brown-600 leading-relaxed">
                「AIって何から始めればいいの？」という入門レベルから、組織としてのAI戦略・DX推進まで、聴衆に合わせた内容でお届けします。ZIP
                FMへのラジオ出演や、愛知県議会議員・市議会議員を対象とした約150名規模のセミナー登壇など、メディア・行政・民間を問わず幅広い実績があります。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="料金について" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-brown-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
              <p className="text-4xl font-bold text-brown-800">
                10万円〜<span className="text-lg font-normal text-brown-500">（税別）</span>
              </p>
              <p className="mt-4 text-brown-600">
                プログラム内容・規模により変動します。まずはお気軽にご相談ください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Examples */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="セミナー対応例" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
            {examples.map((example) => (
              <motion.div
                key={example.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brown-100 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-bold text-brown-800">{example.title}</h3>
                <p className="mt-2 text-sm text-brown-600 leading-relaxed">{example.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-brown-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
              セミナー・講演のご依頼
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-brown-600">
              対面・オンライン・ハイブリッドいずれにも対応しています。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <CTAButton href="/contact">セミナー・講演を依頼する</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
