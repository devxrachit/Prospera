"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Explore Careers", href: "/explore" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Guarantees", href: "/#guarentees" },
];

const ShowcaseNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-nav">
        <div className="container-page flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/logo.webp"
              alt="Prospera Logo"
              width={1000}
              height={1000}
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 font-medium text-sm hover:text-brand-700 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-x-3">
            <Link
              href="/meeting"
              className="hidden md:inline-flex py-2 px-5 text-sm font-semibold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
            >
              Book a Call
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-200 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-medium text-base hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/meeting"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center py-2.5 px-5 text-sm font-semibold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover transition-all duration-200 mt-2"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShowcaseNavbar;
