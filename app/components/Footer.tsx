"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaTwitter, FaDribbble } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerLinks = {
    Company: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/contact", label: "Contact" },
    ],
    Services: [
      { href: "/services#websites", label: "Custom Websites" },
      { href: "/services#applications", label: "Web Applications" },
      { href: "/pricing", label: "Pricing" },
    ],
    Resources: [
      { href: "#", label: "Support" },
      { href: "/blog", label: "Blog" },
    ],
  };

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ];

  const socialLinks = [
    { href: "https://github.com", label: "GitHub", icon: <FaGithub /> },
    { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer style={{ background: "var(--background-charcoal)", borderTop: "1px solid rgba(239, 68, 68, 0.1)", position: "relative", overflow: "hidden" }}>
      {/* Animated Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(239, 68, 68, ${0.05 + i * 0.02}) 0%, transparent 70%)`,
              filter: "blur(60px)",
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
      </div>

      <div className="container-custom" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "3rem" }}>
        {/* Main Footer Content */}
        <motion.div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "5rem" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div style={{ gridColumn: "span 1" }} variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src="/uiforge_logo.svg"
                    alt="UiForge Logo"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <span className="heading-sm" style={{ fontWeight: 700, background: "linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  UiForge
                </span>
              </Link>
            </motion.div>
            <p className="body-sm" style={{ color: "var(--foreground-muted)", marginBottom: "2rem", maxWidth: "280px", lineHeight: "1.7" }}>
              Crafting exceptional digital experiences with cutting-edge frontend development.
            </p>
            
            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    color: "var(--foreground-muted)",
                    background: "rgba(239, 68, 68, 0.05)",
                    border: "1px solid rgba(239, 68, 68, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    color: "var(--primary)",
                    borderColor: "rgba(239, 68, 68, 0.3)",
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="heading-xs" style={{ 
                marginBottom: "1.5rem", 
                color: "var(--primary)",
                fontWeight: 600,
                letterSpacing: "0.5px",
                position: "relative",
                paddingBottom: "0.75rem"
              }}>
                {category}
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, var(--primary), transparent)",
                    width: "40px",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.5 }}
                />
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {links.map((link, index) => {
                  const linkKey = `${category}-${index}`;
                  return (
                    <motion.li
                      key={linkKey}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="body-sm"
                        style={{ 
                          color: hoveredLink === linkKey ? "var(--primary)" : "var(--foreground-muted)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          transition: "all 0.3s ease",
                          position: "relative",
                        }}
                        onMouseEnter={() => setHoveredLink(linkKey)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <motion.span
                          animate={{ x: hoveredLink === linkKey ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.label}
                        </motion.span>
                        <motion.span
                          style={{ fontSize: "0.75rem", opacity: 0 }}
                          animate={{ opacity: hoveredLink === linkKey ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaArrowRight />
                        </motion.span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section - Enhanced */}
        <motion.div
          style={{ 
            marginBottom: "5rem", 
            padding: "3rem",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)",
            border: "1px solid rgba(239, 68, 68, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated gradient background */}
          <motion.div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  marginBottom: "1rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                📬 Newsletter
              </motion.div>
              <h3 className="heading-md" style={{ 
                marginBottom: "1rem",
                background: "linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Stay in the Loop
              </h3>
              <p className="body-sm" style={{ color: "var(--foreground-muted)", lineHeight: "1.7", maxWidth: "400px" }}>
                Get exclusive insights, web development tips, and early access to our latest features.
              </p>
            </motion.div>
            
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <motion.input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: "240px",
                    padding: "1.125rem 1.5rem",
                    borderRadius: "12px",
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    color: "var(--foreground)",
                    outline: "none",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                  }}
                  whileFocus={{
                    borderColor: "rgba(239, 68, 68, 0.5)",
                    boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)",
                  }}
                />
                <motion.button
                  className="btn btn-primary"
                  style={{ 
                    whiteSpace: "nowrap",
                    padding: "1.125rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 600,
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.4)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>🔒</span>
                <span>We respect your privacy. Unsubscribe at any time.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar - Enhanced */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(239, 68, 68, 0.1)",
          }}
          className="md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.p 
            className="body-sm" 
            style={{ 
              color: "var(--foreground-muted)", 
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
            whileHover={{ color: "var(--foreground)" }}
          >
            <span>©</span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {currentYear}
            </motion.span>
            <span style={{ fontWeight: 600, color: "var(--foreground)" }}>UiForge</span>
            <span>•</span>
            <span>All rights reserved</span>
          </motion.p>
          
          <motion.p 
            className="body-sm" 
            style={{ 
              color: "var(--foreground-muted)", 
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <span>Built with</span>
            <motion.span
              style={{ 
                color: "var(--primary)",
                display: "inline-block",
              }}
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ❤️
            </motion.span>
            <span>using</span>
            <motion.span
              style={{ fontWeight: 600, color: "var(--foreground)" }}
              whileHover={{ color: "var(--primary)", scale: 1.05 }}
            >
              Next.js
            </motion.span>
            <span>&</span>
            <motion.span
              style={{ fontWeight: 600, color: "var(--foreground)" }}
              whileHover={{ color: "var(--primary)", scale: 1.05 }}
            >
              React
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Legal Links - Subtle & Elegant */}
        <motion.div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingBottom: "1rem",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          {legalLinks.map((link, index) => (
            <motion.span 
              key={link.label} 
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className="body-sm"
                  style={{ 
                    color: "rgba(255, 255, 255, 0.25)", 
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.25)";
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
              {index < legalLinks.length - 1 && (
                <span style={{ 
                  color: "rgba(255, 255, 255, 0.15)", 
                  fontSize: "0.8rem",
                  fontWeight: 300,
                }}>
                  |
                </span>
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
