interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  label,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {label && (
        <div
          className={`flex items-center gap-4 mb-4 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="uppercase tracking-widest text-sm font-bold text-brown-400">
            {label}
          </span>
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brown-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
