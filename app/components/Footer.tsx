"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    Services: [
      { href: "/services#websites", label: "Custom Websites" },
      { href: "/services#applications", label: "Web Applications" },
      { href: "/services#design", label: "UI/UX Design" },
      { href: "/pricing", label: "Pricing" },
    ],
    Resources: [
      { href: "/blog", label: "Blog" },
      { href: "/components", label: "Components" },
      { href: "#", label: "Documentation" },
      { href: "#", label: "Support" },
    ],
    Legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  };

  const socialLinks = [
    { href: "https://github.com", label: "GitHub", icon: "🔗" },
    { href: "https://twitter.com", label: "Twitter", icon: "🐦" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: "💼" },
    { href: "https://dribbble.com", label: "Dribbble", icon: "🎨" },
  ];

  return (
    <footer className="section-padding" style={{ background: "var(--background-charcoal)", borderTop: "1px solid rgba(255, 126, 41, 0.1)" }}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Image
                src="/uiforge_logo.svg"
                alt="UIForge Logo"
                width={40}
                height={40}
              />
              <span className="heading-sm" style={{ fontWeight: 700 }}>
                UIForge
              </span>
            </Link>
            <p className="body-sm" style={{ color: "var(--foreground-muted)", marginBottom: "1.5rem", maxWidth: "280px" }}>
              Crafting exceptional digital experiences with cutting-edge frontend development.
            </p>
            
            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover-lift"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="heading-xs" style={{ marginBottom: "1rem", color: "var(--primary)" }}>
                {category}
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="body-sm transition-colors hover:text-[var(--primary)]"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="glass rounded-2xl p-6 mb-3rem"
          style={{ marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "center" }}>
            <div>
              <h3 className="heading-sm" style={{ marginBottom: "0.5rem" }}>
                Stay Updated
              </h3>
              <p className="body-sm" style={{ color: "var(--foreground-muted)" }}>
                Get the latest updates on web development trends and UIForge news.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="neumorphic-inset"
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  background: "var(--background-deep-black)",
                  border: "1px solid rgba(255, 126, 41, 0.2)",
                  color: "var(--foreground)",
                  outline: "none",
                }}
              />
              <button className="btn btn-primary hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 126, 41, 0.1)",
          }}
          className="md:flex-row"
        >
          <p className="body-sm" style={{ color: "var(--foreground-muted)" }}>
            © {currentYear} UIForge. All rights reserved.
          </p>
          <p className="body-sm" style={{ color: "var(--foreground-muted)" }}>
            Built with <span style={{ color: "var(--primary)" }}>❤️</span> using Next.js & React
          </p>
        </div>
      </div>
    </footer>
  );
}
