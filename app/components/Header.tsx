"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" className="hover-lift" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Image
              src="/uiforge_logo.svg"
              alt="UIForge Logo"
              width={40}
              height={40}
              priority
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 126, 41, 0.6)) drop-shadow(0 0 20px rgba(255, 126, 41, 0.3))' }}
            />
            <span className="heading-sm gradient-text" style={{ fontWeight: 700, textShadow: '0 0 20px rgba(255, 126, 41, 0.5), 0 0 40px rgba(255, 126, 41, 0.3)' }}>
              UIForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "body-md transition-colors duration-200",
                  pathname === link.href
                    ? "gradient-text font-semibold"
                    : "hover:text-[var(--primary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary btn-sm hover-lift">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover-lift"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "24px" }}>
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--primary)",
                  borderRadius: "2px",
                }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--primary)",
                  borderRadius: "2px",
                }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--primary)",
                  borderRadius: "2px",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass rounded-2xl mt-4 overflow-hidden"
            >
              <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "body-md block py-3 px-4 rounded-lg transition-colors",
                        pathname === link.href
                          ? "gradient-text font-semibold bg-[var(--background-charcoal)]"
                          : "hover:bg-[var(--background-charcoal)]"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  style={{ marginTop: "1rem" }}
                >
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full hover-lift"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
