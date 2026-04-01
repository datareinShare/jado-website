import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brown-800 text-brown-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/jado-logo.jpg"
              alt="JADO"
              width={160}
              height={52}
              className="h-11 w-auto object-contain brightness-0 invert mb-2"
            />
            <p className="text-xs text-brown-300 tracking-wider mb-1">
              Japan AI Development Organization
            </p>
            <p className="text-sm leading-relaxed">
              一般社団法人 日本AI人材育成機構
            </p>
            <p className="text-sm mt-2">
              〒453-0872
              <br />
              愛知県名古屋市中村区平池町4丁目60-5
              <br />
              ロイヤルパークスERささしま
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4">事業紹介</h4>
            <ul className="space-y-2 text-sm">
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
                  子ども向けAIスクール mirAI
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

          <div>
            <h4 className="text-white text-sm font-bold mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
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

        <div className="mt-10 pt-8 border-t border-brown-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 JADO All Rights Reserved.</p>
          <Link
            href="/privacy"
            className="text-sm hover:text-white transition-colors"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
