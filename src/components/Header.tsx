"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/about", label: "JADOについて" },
  {
    href: "/services",
    label: "事業紹介",
    children: [
      { href: "/services/altif", label: "放課後等デイ ALTIF" },
      { href: "/services/mirai", label: "子ども向けAIスクール" },
      { href: "/services/training", label: "企業向けAI研修" },
      { href: "/services/seminar", label: "セミナー・講演" },
    ],
  },
  { href: "/founder", label: "代表紹介" },
  { href: "/faq", label: "よくある質問" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brown-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-22">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/jado-logo.jpg"
                alt="JADO"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
              <div className="hidden sm:flex flex-col border-l border-brown-200 pl-3">
                <span className="text-[10px] text-brown-500 leading-tight tracking-wide">一般社団法人</span>
                <span className="text-xs font-medium text-brown-700 leading-tight">日本AI人材育成機構</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <motion.button
                    className="px-3 py-2 text-sm font-medium text-brown-700 hover:text-brown-900 transition-colors relative"
                    whileHover={{ y: -1 }}
                  >
                    {item.label}
                  </motion.button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-brown-100 py-2 mt-1"
                      >
                        {item.children.map((child, j) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                          >
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-brown-700 hover:bg-brown-50 hover:text-brown-900 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div key={item.href} whileHover={{ y: -1 }}>
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-brown-700 hover:text-brown-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="ml-4 px-5 py-2.5 bg-brown-700 text-white text-sm font-medium rounded-full hover:bg-brown-800 transition-colors shadow-md hover:shadow-lg"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-brown-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-brown-100 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) =>
                item.children ? (
                  <div key={item.href}>
                    <p className="px-3 py-2 text-sm font-medium text-brown-500">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block pl-6 py-2 text-sm text-brown-700 hover:text-brown-900"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-brown-700 hover:text-brown-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
