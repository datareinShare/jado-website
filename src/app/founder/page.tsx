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
      <section className="bg-gradient-to-b from-brown-100 to-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Founder
          </motion.p>
          <TextReveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-brown-900">代表紹介</h1>
          </TextReveal>
        </div>
      </section>

      {/* Profile */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <FadeIn direction="left">
              <div className="flex-shrink-0">
                <Image
                  src="/images/seminar-3.jpg"
                  alt="鈴木 健斗"
                  width={900}
                  height={600}
                  className="w-full md:w-[42rem] h-auto rounded-2xl object-contain shadow-lg"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-brown-800">鈴木 健斗</h2>
                <p className="text-brown-500 mt-1">すずき けんと</p>
                <p className="text-accent font-medium mt-2">
                  一般社団法人 日本AI人材育成機構 JADO 代表理事
                </p>
                <p className="mt-6 text-brown-600 leading-relaxed">
                  大手から中小まで幅広い企業へのAI研修実績、ZIP
                  FMラジオ出演、愛知県・市議会議員向け約150名規模のセミナー登壇——行政・民間・メディアを横断して活躍する、21歳の起業家。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="プロフィール" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-6 text-brown-600 leading-relaxed">
              <p>
                愛知県豊橋市出身。豊橋の高校を卒業後、名古屋市立大学データサイエンス学部に同学部1期生として入学。大学1年の冬から生成AIを軸に活動を開始し、19歳で起業。
              </p>
              <p>
                富士通・ビックカメラ・東進ゼミナール・キンブルをはじめとした大手から中小まで幅広い企業へのAI活用研修を実施し、業務への具体的な落とし込みまで一貫して支援。東進ゼミナールにおける新規事業立ち上げにも携わるなど、民間企業での実績を積み重ねてきた。
              </p>
              <p>
                ZIP FMへのラジオ出演などメディア活動も行いながら、直近では愛知県議会議員・市議会議員を対象とした約150名規模のセミナーに登壇するなど、行政・民間を問わず幅広い分野で講義・講演を行っている。
              </p>
              <p>
                現在は大学3年生（21歳）として在学しながら、一般社団法人
                日本AI人材育成機構（JADO）を設立し代表理事を務める。AI活用の普及と事業開発の両軸で精力的に活動中。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Message */}
      <section className="py-24 md:py-32 bg-brown-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="代表メッセージ" subtitle="今後日本を支える子供のために" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-brown-600 leading-relaxed bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brown-100">
              <p>私には10歳下の弟がいます。ずっと一緒に過ごしてきた、大好きな弟です。</p>
              <p>
                もともと保育士を目指していたのも、その弟の存在があったから。子どものそばで、何かできる人間になりたいという気持ちが、ずっと自分の中にありました。
              </p>
              <p>
                AIと出会い、起業という道を歩みながらも、その根っこにある想いは変わっていません。
              </p>
              <p>
                将来、日本を支える子どもたちが、自分の得意を活かして社会に出ていける。発達特性がある子も、学校になじめない子も、AIを通じて自分の強みを形にできる。
              </p>
              <p>そういう社会をつくるために、JADOとALTIFをつくりました。</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading title="主な経歴" />
          </FadeIn>
          <StaggerChildren className="space-y-4" staggerDelay={0.08}>
            {career.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                <span className="text-brown-700">{item}</span>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
