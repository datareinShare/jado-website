"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";
import { CountUp } from "@/components/animations/CountUp";
import { TiltCard } from "@/components/TiltCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WaveDivider } from "@/components/WaveDivider";

const services = [
  {
    number: "01",
    title: "放課後等デイサービス",
    subtitle: "ALTIF",
    description:
      "AIを活用した個別の学習支援と、社会性を育む次世代の居場所。一人ひとりの特性に合わせた体験を提供します。",
    href: "/services/altif",
    image: "/images/seminar-1.jpg",
  },
  {
    number: "02",
    title: "子ども向け",
    subtitle: "AIスクール",
    description:
      "小中高生を対象としたオンラインAI・IT教育スクール。1対1の個別指導で未来を生き抜く力を育成します。",
    href: "/services/mirai",
    image: "/images/seminar-2.jpg",
  },
  {
    number: "03",
    title: "企業向け",
    subtitle: "AI研修",
    description:
      "ツール導入で終わらせない、業務フローの根本改善。組織全体のITリテラシー底上げとDX推進を実現します。",
    href: "/services/training",
    image: "/images/seminar-4.png",
  },
  {
    number: "04",
    title: "セミナー・",
    subtitle: "講演活動",
    description:
      "AIの最前線から倫理的課題まで。行政・教育機関向けに、本質的な知識を届ける活動を行っています。",
    href: "/services/seminar",
    image: "/images/seminar-3.jpg",
  },
];

const stats = [
  { label: "研修実績", value: 50, suffix: "社+" },
  { label: "総受講者数", value: 1000, suffix: "名+" },
  { label: "セミナー登壇", value: 20, suffix: "回+" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          >
            <Image
              src="/images/bg/bg-hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-right"
            />
          </motion.div>
          {/* Dark scrim: stronger on the left where the headline sits, plus a soft bottom fade into the page */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 via-brown-900/45 to-brown-900/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/30 from-0% via-transparent via-55% to-background to-100%" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 pt-32 md:pt-44">
          <div className="max-w-4xl">
            <motion.p
              className="text-accent font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Alternative for the Future
            </motion.p>

            <TextReveal delay={0.4}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                もし、あなたに合った未来が
              </h1>
            </TextReveal>
            <TextReveal delay={0.6}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight bg-gradient-to-r from-white via-brown-100 to-accent bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                ここにあったなら。
              </h1>
            </TextReveal>

            <motion.div
              className="mt-10 w-24 h-px bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              一般社団法人 日本AI人材育成機構（JADO）は、
              <br className="hidden sm:block" />
              テクノロジーを人と社会の「可能性」に変えるための
              <br className="hidden sm:block" />
              プラットフォームです。
            </motion.p>

            <motion.div
              className="mt-12 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Link
                href="#services"
                className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/40 hover:border-accent hover:bg-accent transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>
              <span className="text-sm font-medium tracking-widest uppercase text-white/70">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider color="#ffffff" className="-mb-1 relative z-10" />

      {/* Mission */}
      <section className="py-32 md:py-48 relative bg-white z-10 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/bg-mission.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            {/* Vertical text (desktop) */}
            <div className="lg:col-span-3 hidden lg:flex justify-end pr-8 border-r border-brown-200">
              <FadeIn direction="left">
                <h2 className="writing-vertical text-4xl font-light text-brown-900 tracking-[0.3em] leading-relaxed">
                  人と社会の
                  <br />
                  <span className="text-accent font-medium">可能性</span>
                  を拡張する
                </h2>
              </FadeIn>
            </div>

            {/* Main content */}
            <div className="lg:col-span-9 lg:pl-12">
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                    Our Mission
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-12 text-brown-900">
                  テクノロジーの進化に
                  <br />
                  置いていかれる人をゼロに。
                </h3>
              </FadeIn>

              {/* Mobile vertical text */}
              <FadeIn delay={0.2}>
                <p className="lg:hidden text-2xl font-light text-brown-900 tracking-wider mb-12">
                  人と社会の<span className="text-accent font-medium">可能性</span>
                  を拡張する
                </p>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.3}>
                  <p className="text-brown-600 leading-[2] font-light">
                    AI技術は急速に発展していますが、それを「使いこなせる人」と「そうでない人」の分断が起きています。
                    <br />
                    JADOは、誰もが自らの能力を拡張するための「道具」としてAIを社会に行き渡らせることを使命としています。
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-brown-600 leading-[2] font-light">
                    子どもたちの未来の選択肢を増やす教育から、企業の競争力を高めるリスキリングまで。
                    <br />
                    「人」の温かみと可能性を中心に据え、次世代のスタンダードを創出します。
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={0.5}>
                <div className="mt-16 pt-8 border-t border-brown-200 flex justify-between items-center">
                  <span className="text-xl font-medium tracking-wide text-brown-700">
                    Japan AI Development Organization
                  </span>
                  <svg
                    className="w-6 h-6 text-accent opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                  </svg>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 md:py-48 bg-brown-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                    What We Do
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-brown-900">
                  事業内容
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <p className="max-w-md text-brown-600 font-light leading-relaxed">
                教育からビジネスまで、4つの軸でAIの社会実装と人材育成を包括的にサポートします。
              </p>
            </FadeIn>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {services.map((service, i) => (
              <FadeIn key={service.href} delay={i * 0.1}>
                <TiltCard className={i % 2 === 1 ? "lg:mt-20" : ""}>
                <Link
                  href={service.href}
                  className="group relative block h-[400px] md:h-[450px] rounded-3xl overflow-hidden bg-brown-900"
                >
                  {/* Background image */}
                  <Image
                    src={service.image}
                    alt={`${service.title} ${service.subtitle}`}
                    fill
                    className="object-cover opacity-40 transition-all duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-50"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-white text-xs font-bold tracking-widest mb-4 backdrop-blur-sm">
                        SERVICE {service.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {service.title}
                        <br />
                        <span className="font-light tracking-wider">
                          {service.subtitle}
                        </span>
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="py-12 bg-brown-50 border-y border-brown-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-sm font-medium tracking-widest uppercase text-brown-400 mb-6">
              Trusted By
            </p>
            <LogoMarquee />
          </FadeIn>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-24 bg-gradient-to-b from-brown-900 to-brown-800 text-brown-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.15}>
                <div className="text-center px-6 py-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                  <p className="text-brown-400 text-sm font-medium tracking-widest uppercase mb-4">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <CountUp
                      end={stat.value}
                      className="text-6xl md:text-7xl font-bold tracking-tighter text-white"
                    />
                    <span className="text-2xl text-accent font-bold">
                      {stat.suffix}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-white to-brown-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brown-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 dot-pattern opacity-40 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Founder image */}
            <FadeIn direction="left" className="w-full lg:w-5/12">
              <div className="relative">
                <div className="absolute -inset-3 rounded-t-full rounded-bl-full bg-gradient-to-br from-accent/20 via-transparent to-brown-300/20 blur-sm z-0" />
                <div className="aspect-[4/5] rounded-t-full rounded-bl-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <Image
                    src="/images/seminar-3.jpg"
                    alt="JADO代表理事 鈴木 健斗 — セミナー登壇の様子"
                    fill
                    className="object-cover object-[15%_center] ken-burns"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl z-0" />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right" delay={0.2} className="w-full lg:w-7/12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                    Representative
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-900 mb-8 leading-tight">
                  「若い世代だからこそ描ける、
                  <br />
                  テクノロジーと人の共存。」
                </h2>

                <div className="space-y-6 text-brown-600 leading-loose font-light mb-10">
                  <p>
                    大手から中小まで幅広い企業でのAI研修実績を持ち、ZIP
                    FM出演や愛知県・市議会議員向け約150名規模のセミナーへの登壇など、行政・民間を問わず活躍する21歳の起業家。
                  </p>
                  <p>
                    技術はあくまでツールであり、主役は人間。年齢や経歴に関係なく、誰もがテクノロジーの恩恵を受け、自己実現できる社会をデザインするためにJADOを設立しました。
                  </p>
                </div>

                <div className="flex items-center gap-6 border-t border-brown-200 pt-8">
                  <div>
                    <p className="text-sm text-brown-400 mb-1">
                      一般社団法人 日本AI人材育成機構 代表理事
                    </p>
                    <p className="text-2xl font-medium tracking-widest text-brown-900">
                      鈴木 健斗
                    </p>
                  </div>
                </div>

                <motion.div className="mt-8" whileHover={{ scale: 1.02 }}>
                  <Link
                    href="/founder"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brown-700 text-brown-700 text-sm font-medium hover:bg-brown-700 hover:text-white transition-all duration-300"
                  >
                    代表紹介を見る
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-brown-50 to-brown-100/50 relative">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                    News
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brown-900">
                  お知らせ
                </h2>
              </div>
            </div>
          </FadeIn>
          <StaggerChildren className="space-y-4" staggerDelay={0.1}>
            {[
              {
                date: "2026.04",
                tag: "事業",
                title: "放課後等デイサービス ALTIF 開設準備中",
              },
              {
                date: "2026.03",
                tag: "登壇",
                title:
                  "愛知県議会議員・市議会議員向けAI活用セミナーに登壇（約150名規模）",
              },
              {
                date: "2026.02",
                tag: "法人",
                title: "一般社団法人 日本AI人材育成機構（JADO）設立",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex items-start gap-6 bg-white rounded-2xl p-5 border border-brown-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 text-sm text-brown-400 font-medium w-20">
                  {item.date}
                </div>
                <span className="flex-shrink-0 px-3 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-bold">
                  {item.tag}
                </span>
                <span className="text-brown-700">{item.title}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <WaveDivider color="#e0d5c8" className="-mb-1" />

      {/* CTA */}
      <section className="py-32 relative bg-brown-200 overflow-hidden">
        {/* Abstract backdrop */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-brown-800/20 to-accent/20 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-white/40 to-brown-800/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 md:p-20 shadow-2xl text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brown-900 mb-6 leading-tight">
                未来の選択肢を、
                <br />
                あなたと共に。
              </h2>
              <p className="text-brown-600 mb-12 text-lg font-light">
                研修のご相談、講演依頼、見学のお申し込みなど、お気軽にお問い合わせください。
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 accent-glow-strong hover:accent-glow-strong"
                >
                  <span>お問い合わせフォームへ</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
