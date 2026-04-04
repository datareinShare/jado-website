"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  {
    title: "放課後等デイサービス ALTIF",
    description:
      "AIを活用した「未来探索型」放課後等デイサービス。子どもが自分に合った未来を安全に試せる場所。",
    href: "/services/altif",
    icon: "🌱",
  },
  {
    title: "子ども向けAIスクール",
    description:
      "小中高生を対象としたオンラインAI・IT教育スクール。1対1の個別指導で未来を生き抜く力を。",
    href: "/services/mirai",
    icon: "💡",
  },
  {
    title: "企業向けAI研修",
    description:
      "大手から中小まで幅広い企業への研修実績。「使える生成AI」を組織に実装する。",
    href: "/services/training",
    icon: "🏢",
  },
  {
    title: "セミナー・講演",
    description:
      "行政・民間・教育機関向け、AI活用セミナー・講演。入門からAI戦略・DX推進まで。",
    href: "/services/seminar",
    icon: "🎤",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-brown-100 via-brown-50 to-background overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-[10%] w-72 h-72 bg-green-100/40 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-[5%] w-96 h-96 bg-brown-200/30 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-[20%] w-48 h-48 bg-accent/5 rounded-full blur-2xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Alternative for the Future
            </motion.p>

            <TextReveal delay={0.4}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 leading-[1.2]">
                もし、あなたに合った未来が、
              </h1>
            </TextReveal>
            <TextReveal delay={0.6}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 leading-[1.2]">
                ここにあったなら。
              </h1>
            </TextReveal>

            <motion.div
              className="mt-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-lg md:text-xl text-brown-600 leading-relaxed">
                教育・福祉・人材育成をひとつにつなぐ、
                <br className="hidden sm:block" />
                一般社団法人 日本AI人材育成機構（JADO）
              </p>
              <p className="mt-2 text-sm text-brown-400 tracking-wider">
                Japan AI Development Organization
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <CTAButton href="#services">事業紹介を見る</CTAButton>
              <CTAButton href="/contact" variant="outline">
                お問い合わせ・見学申し込み
              </CTAButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-brown-300 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-brown-400 rounded-full"
              animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-6">
              Mission
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-2xl md:text-3xl font-bold text-brown-800 leading-relaxed">
              JADOは、AIを目的ではなく、
              <br className="hidden sm:block" />
              人が社会で生きる力を拡張するための手段として活用する、
              <br className="hidden sm:block" />
              人材育成・教育機構です。
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 space-y-4" staggerDelay={0.15}>
            {[
              "「もし、学校以外の学び方が選べたなら」",
              "「もし、自分に合った働き方ができたなら」",
              "「もし、特性が不利にならない社会だったなら」",
            ].map((text) => (
              <motion.p
                key={text}
                className="text-brown-600 text-lg leading-relaxed"
                variants={staggerItem}
              >
                {text}
              </motion.p>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.6}>
            <p className="mt-10 text-brown-700 font-medium text-lg">
              JADOは、そんな&quot;もしも&quot;を、テクノロジーと制度を使って現実の選択肢に変えていきます。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="事業紹介" subtitle="JADOが展開する4つの事業" />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
            {services.map((service) => (
              <motion.div key={service.href} variants={staggerItem}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-8 shadow-sm border border-brown-100 hover:shadow-lg hover:border-brown-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <motion.span
                    className="text-3xl block"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.span>
                  <h3 className="mt-4 text-xl font-bold text-brown-800 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-brown-600 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all duration-300">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Founder Preview */}
      <section className="py-24 md:py-32 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn direction="left">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src="/images/seminar-3.jpg"
                  alt="鈴木 健斗"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-2">
                  Founder
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-brown-800">
                  鈴木 健斗
                </h2>
                <p className="text-brown-500 mt-1">JADO 代表理事</p>
                <p className="mt-4 text-brown-600 leading-relaxed max-w-xl">
                  大手から中小まで幅広い企業でのAI研修実績を持ち、ZIP
                  FM出演や愛知県・市議会議員向け約150名規模のセミナーへの登壇など、行政・民間を問わず活躍する21歳の起業家。
                </p>
                <CTAButton href="/founder" variant="outline" className="mt-6">
                  代表紹介を見る
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-brown-700 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              まずはお気軽にご相談ください
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-brown-200 text-lg">
              事業のご相談、見学のお申し込み、研修のご依頼など、何でもお気軽にお問い合わせください。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-brown-700 font-bold rounded-full hover:bg-brown-50 transition-colors shadow-lg"
                >
                  お問い合わせ・見学申し込み
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
