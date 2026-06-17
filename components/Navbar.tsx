"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import Seal from "./Seal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? "border-b border-gold/10 bg-obsidian/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-3 text-ivory transition-colors hover:text-gold"
        >
          <Seal className="h-9 w-9 text-gold transition-transform duration-700 ease-luxe group-hover:rotate-[25deg]" />
          <span className="font-display text-lg tracking-wide">
            {profile.firstName} <span className="italic text-gold">{profile.lastName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] uppercase tracking-widest2 text-smoke transition-colors duration-300 hover:text-ivory"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-300 ease-luxe group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden font-mono text-[11px] uppercase tracking-widest2 text-gold border border-gold/40 px-5 py-3 transition-all duration-300 ease-luxe hover:border-gold hover:bg-gold/10 lg:inline-block"
        >
          Let&rsquo;s Talk
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ivory lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-gold/10 bg-obsidian/95 backdrop-blur-md lg:hidden"
          >
            <div className="container-luxe flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ivory transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block w-fit font-mono text-[11px] uppercase tracking-widest2 text-gold border border-gold/40 px-5 py-3"
              >
                Let&rsquo;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
