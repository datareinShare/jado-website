import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-6xl font-bold text-brown-200 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-brown-800 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-brown-600 mb-8">
          申し訳ございません。お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium bg-brown-700 text-white hover:bg-brown-800 transition-colors shadow-md"
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}
