import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-40 md:py-56 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-8xl font-bold text-brown-100 mb-6">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-brown-900 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-brown-600 mb-10 font-light">
          申し訳ございません。お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium bg-accent text-white hover:bg-accent-dark transition-colors shadow-[0_10px_30px_rgba(90,154,90,0.3)]"
        >
          トップページへ戻る
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
