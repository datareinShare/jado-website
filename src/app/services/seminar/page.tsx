"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const examples = [
  { title: "生成AI入門セミナー", description: "AIの基礎から実際の活用事例まで、\n初心者向けに分かりやすく解説" },
  { title: "業務効率化ワークショップ", description: "ChatGPT・Geminiを使った\n業務効率化の実践ハンズオン" },
  { title: "AI戦略・DX推進", description: "組織全体でのAI導入戦略と\nロードマップ策定" },
  { title: "教育機関向け", description: "学校・教育委員会向けの\nAI活用セミナー" },
  { title: "行政・議員向け", description: "行政サービスにおける\nAI活用と政策立案" },
  { title: "カスタムプログラム", description: "ご要望に合わせた\nオーダーメイドのセミナー設計" },
];

export default function Seminar() {
  return (
    <>
      {/* Hero — full width photo */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/seminar-1.jpg"
          alt="愛知県議会議員・市議会議員向けセミナー（約150名規模）"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 via-brown-900/60 to-brown-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-300">
              Seminar & Lecture
            </span>
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              セミナー・講演
            </h1>
          </TextReveal>
          <motion.p
            className="mt-6 text-lg text-brown-200 max-w-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            行政・民間・教育機関向け、AI活用セミナー・講演
          </motion.p>
        </div>
      </section>

      {/* Photos */}
      <section className="py-32 md:py-40 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="研修の様子" label="Gallery" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            <motion.div variants={staggerItem} className="rounded-3xl overflow-hidden border border-brown-100 hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/seminar-2.jpg"
                alt="企業向けAI研修の様子"
                width={800}
                height={450}
                className="w-full h-72 object-cover ken-burns"
              />
              <p className="p-5 text-sm text-brown-600 bg-brown-50/50 font-light">企業向けAI活用研修</p>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-3xl overflow-hidden border border-brown-100 hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/seminar-4-v2.png"
                alt="ハンズオン研修の様子"
                width={800}
                height={450}
                className="w-full h-72 object-cover ken-burns"
              />
              <p className="p-5 text-sm text-brown-600 bg-brown-50/50 font-light">ハンズオン形式のAI活用研修</p>
            </motion.div>
          </StaggerChildren>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <FadeIn direction="left" className="w-full lg:w-5/12">
              <div className="w-full flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/seminar-5.png"
                  alt="「AI × 教育で日本を変える」ステージ登壇"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="w-full lg:w-7/12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="uppercase tracking-widest text-sm font-bold text-brown-400">Track Record</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brown-900 mb-6">
                  幅広い実績
                </h2>
                <p className="text-brown-600 leading-[2] text-lg font-light">
                  JADOでは、企業・行政・学校・地域団体など
                  <br />
                  幅広い機関に向けたAI活用セミナー・講演を実施しています。
                </p>
                <p className="mt-6 text-brown-600 leading-[2] font-light">
                  「AIって何から始めればいいの？」という入門レベルから、
                  <br />
                  組織としてのAI戦略・DX推進まで、聴衆に合わせた内容でお届けします。
                  <br />
                  ZIP FMへのラジオ出演や、愛知県議会議員・市議会議員を対象とした
                  <br />
                  約150名規模のセミナー登壇など、メディア・行政・民間を問わず幅広い実績があります。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-white">
        <Image
          src="/images/seminar-6.png"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="料金について" label="Pricing" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-brown-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto text-center border border-brown-100">
              <p className="text-5xl font-bold text-brown-900">
                10万円〜<span className="text-lg font-normal text-brown-400">（税別）</span>
              </p>
              <p className="mt-4 text-brown-600 font-light">
                プログラム内容・規模により変動します。まずはお気軽にご相談ください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Examples */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="セミナー対応例" label="Programs" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
            {examples.map((example) => (
              <motion.div
                key={example.title}
                variants={staggerItem}
                className="bg-white rounded-3xl p-6 border border-brown-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-brown-800">{example.title}</h3>
                <p className="mt-2 text-sm text-brown-600 leading-relaxed font-light whitespace-pre-line">{example.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative bg-brown-200 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-accent/20 to-brown-800/10 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 md:p-16 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brown-900">
                セミナー・講演のご依頼
              </h2>
              <p className="mt-4 text-brown-600 font-light">
                対面・オンライン・ハイブリッドいずれにも対応しています。
              </p>
              <div className="mt-8">
                <CTAButton href="/contact">セミナー・講演を依頼する</CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
