"use client";

const clients = [
  "富士通",
  "ビックカメラ",
  "東進ゼミナール",
  "キンブル",
  "NTTデータ",
  "愛知県議会",
  "ZIP FM",
];

export function LogoMarquee() {
  return (
    <div className="overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center mx-8 md:mx-12 flex-shrink-0"
          >
            <span className="text-brown-300 text-lg md:text-xl font-medium tracking-wider">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
