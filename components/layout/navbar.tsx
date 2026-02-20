"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Approche", href: "/approche" },
  { label: "Agents", href: "/agents" },
  { label: "Intégrations", href: "/#integrations" },
  { label: "Cas d'usage", href: "/agents/daf" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E4E4EF] py-3 shadow-sm shadow-black/[0.04]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F6EF7] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="font-semibold text-[#0F0F18] text-[15px] tracking-tight">
              nextstrato <span className="gradient-text">ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-[#0F0F18] bg-[#F5F5FA]"
                    : "text-[#71718A] hover:text-[#0F0F18] hover:bg-[#F5F5FA]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Réserver un diagnostic
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#71718A] hover:text-[#0F0F18] transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={cn("block h-0.5 bg-current transition-all duration-300", mobileOpen && "rotate-45 translate-y-[7px]")} />
              <span className={cn("block h-0.5 bg-current transition-all duration-300", mobileOpen && "opacity-0")} />
              <span className={cn("block h-0.5 bg-current transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[7px]")} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="py-4 flex flex-col gap-1 border-t border-[#E4E4EF] mt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-[#71718A] hover:text-[#0F0F18] hover:bg-[#F5F5FA] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                Réserver un diagnostic
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
