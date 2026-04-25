"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/animations/StaggerChildren";
import { TextReveal } from "@/components/animations/TextReveal";

const career = [
  "名古屋市立大学 データサイエンス学部 1期生として入学",
  "大学1年の冬から生成AIを軸に活動開始、19歳で起業",
  "DATAREIN合同会社 創業",
  "東進ゼミナールにて新規事業立ち上げに参画",
  "富士通・ビックカメラ等、大手企業でのAI研修実施",
  "NTTデータにて営業コンサル",
  "ZIP FMラジオ出演",
  "愛知県議会議員・市議会議員向け約150名規模のセミナー登壇",
  "一般社団法人 日本AI人材育成機構（JADO）設立、代表理事就任",
];

export default function Founder() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
              Founder
            </span>
          </motion.div>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900">
              代表紹介
            </h1>
          </TextReveal>
        </div>
      </section>

      {/* Profile */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <FadeIn direction="left" delay={0.2} className="w-full lg:w-7/12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-900">
                  鈴木 健斗
                </h2>
                <p className="text-brown-400 mt-1">すずき けんと</p>
                <p className="text-accent font-medium mt-2">
                  一般社団法人 日本AI人材育成機構 JADO 代表理事
                </p>
                <div className="mt-6 w-16 h-px bg-brown-200" />
                <p className="mt-6 text-brown-600 leading-[2] font-light text-lg">
                  大手から中小まで幅広い企業へのAI研修実績、
                  <br />
                  ZIP FMラジオ出演、
                  <br />
                  愛知県・市議会議員向け約150名規模のセミナー登壇——
                  <br />
                  行政・民間・メディアを横断して活躍する、21歳の起業家。
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="w-full lg:w-5/12">
              <div className="flex-shrink-0">
                <Image
                  src="/images/founder.png"
                  alt="JADO代表理事 鈴木 健斗 — プロフィール写真"
                  width={600}
                  height={900}
                  className="w-full md:w-[28rem] h-auto rounded-3xl object-contain shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
          <div className="relative w-[40rem] h-[40rem] -ml-20 lg:ml-0">
            <Image
              src="/images/seminar-3.jpg"
              alt=""
              fill
              className="object-cover object-top rounded-full opacity-[0.07]"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="プロフィール" label="Profile" />
          </FadeIn>
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.15}>
              <div className="relative flex-shrink-0 w-full lg:w-auto">
                <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                  <Image
                    src="/images/seminar-3.jpg"
                    alt="鈴木 健斗 — 登壇の様子"
                    fill
                    className="object-cover object-top rounded-full shadow-2xl ring-8 ring-brown-50"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-6 text-brown-600 leading-[2] font-light">
                <p>
                  愛知県豊橋市出身。豊橋の高校を卒業後、
                  <br />
                  名古屋市立大学データサイエンス学部に同学部1期生として入学。
                  <br />
                  大学1年の冬から生成AIを軸に活動を開始し、19歳で起業。
                </p>
                <p>
                  富士通・ビックカメラ・東進ゼミナール・キンブルをはじめとした
                  <br />
                  大手から中小まで幅広い企業へのAI活用研修を実施し、
                  <br />
                  業務への具体的な落とし込みまで一貫して支援。
                  <br />
                  東進ゼミナールにおける新規事業立ち上げにも携わるなど、
                  <br />
                  民間企業での実績を積み重ねてきた。
                </p>
                <p>
                  ZIP FMへのラジオ出演などメディア活動も行いながら、
                  <br />
                  直近では愛知県議会議員・市議会議員を対象とした約150名規模のセミナーに登壇するなど、
                  <br />
                  行政・民間を問わず幅広い分野で講義・講演を行っている。
                </p>
                <p>
                  現在は大学3年生（21歳）として在学しながら、
                  <br />
                  一般社団法人 日本AI人材育成機構（JADO）を設立し代表理事を務める。
                  <br />
                  AI活用の普及と事業開発の両軸で精力的に活動中。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-brown-900 to-brown-800 text-brown-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px deco-line" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none mix-blend-screen"
          style={{ backgroundImage: "url('/images/bg/bg-founder-message.jpg')" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/30 via-brown-900/20 to-brown-800/40 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
                  Message
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                代表メッセージ
              </h2>
              <p className="mt-4 text-brown-400">
                今後日本を支える子供のために
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-brown-100 leading-[2] font-light bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/15">
              <p>
                私には10歳下の弟がいます。
                <br />
                ずっと一緒に過ごしてきた、大好きな弟です。
              </p>
              <p>
                もともと保育士を目指していたのも、その弟の存在があったから。
                <br />
                子どものそばで、何かできる人間になりたいという気持ちが、
                <br />
                ずっと自分の中にありました。
              </p>
              <p>
                AIと出会い、起業という道を歩みながらも、
                <br />
                その根っこにある想いは変わっていません。
              </p>
              <p>
                将来、日本を支える子どもたちが、自分の得意を活かして社会に出ていける。
                <br />
                発達特性がある子も、学校になじめない子も、
                <br />
                AIを通じて自分の強みを形にできる。
              </p>
              <p className="text-white font-medium">
                そういう社会をつくるために、JADOとALTIFをつくりました。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Career */}
      <section className="py-32 md:py-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="主な経歴" label="Career" />
          </FadeIn>
          <div className="max-w-lg mx-auto md:ml-[20%]">
            <StaggerChildren className="relative" staggerDelay={0.08}>
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brown-200" />
              <div className="space-y-6">
                {career.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-6 relative"
                  >
                    <div className="w-4 h-4 rounded-full bg-accent/20 border-2 border-accent flex-shrink-0 mt-1 relative z-10" />
                    <span className="text-brown-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>
    </>
  );
}
