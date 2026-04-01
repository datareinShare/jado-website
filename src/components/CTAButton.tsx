import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium transition-all duration-200";
  const variants = {
    primary: "bg-brown-700 text-white hover:bg-brown-800 shadow-md hover:shadow-lg",
    secondary: "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg",
    outline:
      "border-2 border-brown-700 text-brown-700 hover:bg-brown-700 hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
