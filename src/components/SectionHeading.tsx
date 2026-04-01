interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-brown-800">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brown-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-16 h-1 bg-accent mx-auto rounded-full" />
    </div>
  );
}
