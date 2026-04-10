import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brown-900 to-brown-900/95 text-brown-300 relative">
      <div className="absolute top-0 left-0 w-full h-px deco-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-2xl font-bold text-white tracking-widest uppercase mb-4">
              JADO
            </p>
            <p className="text-sm leading-loose max-w-sm mb-4">
              一般社団法人 日本AI人材育成機構
              <br />
              テクノロジーと人の共存をデザインし、
              <br />
              誰一人取り残されない社会基盤を作る。
            </p>
            <p className="text-sm">
              〒453-0872
              <br />
              愛知県名古屋市中村区平池町4丁目60-5
              <br />
              ロイヤルパークスERささしま
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/services/altif"
                  className="hover:text-white transition-colors"
                >
                  放課後等デイサービス ALTIF
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mirai"
                  className="hover:text-white transition-colors"
                >
                  子ども向けAIスクール
                </Link>
              </li>
              <li>
                <Link
                  href="/services/training"
                  className="hover:text-white transition-colors"
                >
                  企業向けAI研修
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seminar"
                  className="hover:text-white transition-colors"
                >
                  セミナー・講演
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div className="md:col-span-4">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
              Organization
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  JADOについて
                </Link>
              </li>
              <li>
                <Link
                  href="/founder"
                  className="hover:text-white transition-colors"
                >
                  代表紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brown-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wider">
          <p>&copy; 2026 JADO All Rights Reserved.</p>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
