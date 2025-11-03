"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    { href: "https://github.com", label: "GitHub", icon: <FaGithub /> },
    { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin /> },
  ];

  return (
    <footer className="section-padding" style={{ background: "var(--background-charcoal)", borderTop: "1px solid rgba(239, 68, 68, 0.1)" }}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Image
                src="/uiforge_logo.svg"
                alt="UiForge Logo"
                width={40}
                height={40}
              />
              <span className="heading-sm" style={{ fontWeight: 700 }}>
                UiForge
              </span>
            </Link>
            <p className="body-sm" style={{ color: "var(--foreground-muted)", marginBottom: "1.5rem", maxWidth: "280px" }}>
              Crafting exceptional digital experiences with cutting-edge frontend development.
            </p>
            
            {/* Social Links */}
            <div style={{ display: "flex", gap: "1rem" }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover-lift"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "var(--foreground-muted)",
                    transition: "color 0.3s ease",
                  }}
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
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
                {links.map((link, index) => (
                  <li key={`${category}-${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="body-sm transition-colors"
                      style={{ color: "var(--foreground-muted)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--foreground-muted)"}
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
          className="glass rounded-2xl"
          style={{ marginBottom: "4rem", padding: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
            <div>
              <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>
                Stay Updated
              </h3>
              <p className="body-sm" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Get the latest updates on web development trends and UiForge news.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: "200px",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.75rem",
                  background: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  color: "var(--foreground)",
                  outline: "none",
                  fontSize: "0.95rem",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => e.target.style.borderColor = "rgba(239, 68, 68, 0.5)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(239, 68, 68, 0.2)"}
              />
              <button className="btn btn-primary hover-lift" style={{ whiteSpace: "nowrap" }}>
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
            gap: "1.25rem",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(239, 68, 68, 0.1)",
          }}
          className="md:flex-row"
        >
          <p className="body-sm" style={{ color: "var(--foreground-muted)", fontSize: "0.9rem" }}>
            © {currentYear} UiForge. All rights reserved.
          </p>
          <p className="body-sm" style={{ color: "var(--foreground-muted)", fontSize: "0.9rem" }}>
            Built with <span style={{ color: "var(--primary)" }}>❤️</span> using Next.js & React
          </p>
        </div>
      </div>
    </footer>
  );
}
