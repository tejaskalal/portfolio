"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300",
          scrolled
            ? "bg-[#050709]/90 backdrop-blur-xl border-b border-[rgba(79,142,247,0.12)]"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-mono text-base font-bold text-[#4f8ef7] hover:text-[#6ba3ff] transition-colors"
        >
          &lt;TK /&gt;
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-xs font-bold uppercase tracking-widest text-[#8892a4] hover:text-[#4f8ef7] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("#contact")}
            className="font-mono text-xs border border-[#4f8ef7] text-[#4f8ef7] px-4 py-2 rounded hover:bg-[rgba(79,142,247,0.1)] transition-all"
          >
            Hire Me →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8892a4] hover:text-[#4f8ef7] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 px-6 bg-[#050709]/97 backdrop-blur-xl flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left font-mono text-lg text-[#e8edf5] hover:text-[#4f8ef7] py-3 border-b border-[rgba(79,142,247,0.08)] transition-colors uppercase tracking-widest"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => scrollTo("#contact")}
              className="mt-6 font-mono text-sm border border-[#4f8ef7] text-[#4f8ef7] py-3 rounded hover:bg-[rgba(79,142,247,0.1)] transition-all"
            >
              Hire Me →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
