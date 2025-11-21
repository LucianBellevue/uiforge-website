"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { SectionDivider, ParticleField, AnimatedGradient, ScrollReveal } from "@/app/components/ui";

const featuredProjects = [
  {
    title: "NimbusOne Launch Platform",
    category: "App Landing · Headless CMS Blog",
    description:
      "We designed a conversion-first launch site for NimbusOne&apos;s productivity app and paired it with a fully modeled blog running on a headless CMS to keep their content ops lean.",
    deliverables: [
      "Hero funnel with progressive disclosure",
      "Composable blog powered by Sanity",
      "Component library for rapid campaign pages",
    ],
    impact: "62% lift in waitlist sign-ups after launch",
    client: {
      name: "Lena Abbott",
      role: "Founder, NimbusOne",
      quote:
        "UIForge treated our launch like their own. The CMS workflow they built keeps our team shipping content weekly without engineers involved.",
    },
    accent: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
    accentHover: "linear-gradient(135deg, #5a7dcf 0%, #283a5f 100%)",
    icon: "🚀",
    imagePlaceholder: "/projects/nimbusone-preview.jpg", // Add your image here
  },
  {
    title: "ShieldSure Insurance",
    category: "Insurance Experience · Custom Form + API",
    description:
      "A ground-up redesign for an independent agency, complete with a multi-step intake that validates policy data and posts directly into their CRM via secure APIs.",
    deliverables: [
      "Persona-specific landing flows",
      "Dynamic coverage estimator",
      "Custom form that syncs to HubSpot + Twilio alerts",
    ],
    impact: "3x more qualified submissions in the first quarter",
    client: {
      name: "Derrick Patel",
      role: "Operations Director, ShieldSure",
      quote:
        "Their API-first mindset means every submission hits our systems cleanly. We finally have a pipeline we trust.",
    },
    accent: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    accentHover: "linear-gradient(135deg, #ffa635 0%, #ffdd33 100%)",
    icon: "🛡️",
    imagePlaceholder: "/projects/shieldsure-preview.jpg", // Add your image here
  },
  {
    title: "Elevate HVAC Studio",
    category: "Local Service · Responsive Next.js",
    description:
      "A full brand and site refresh for a growing HVAC collective, engineered with Next.js 15, image optimization, and on-device speed budgets to dominate local search.",
    deliverables: [
      "Mobile-first booking journey",
      "Service menu managed via MDX",
      "Field photo gallery with edge caching",
    ],
    impact: "38% increase in booked service calls from mobile",
    client: {
      name: "Maria Lopez",
      role: "Owner, Elevate HVAC",
      quote:
        "Customers mention the new site on calls. It&apos;s fast, trustworthy, and finally reflects the quality of our crew.",
    },
    accent: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    accentHover: "linear-gradient(135deg, #33d4ff 0%, #3388ff 100%)",
    icon: "❄️",
    imagePlaceholder: "/projects/elevate-hvac-preview.jpg", // Add your image here
  },
];

// Mouse Glow Grid Component
function MouseGlowGrid({ 
  children, 
  glowColor = "rgba(239, 68, 68, 0.4)",
  glowSize = 400 
}: { 
  children: React.ReactNode; 
  glowColor?: string;
  glowSize?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Glow effect that follows mouse */}
      <div
        style={{
          position: "absolute",
          width: `${glowSize}px`,
          height: `${glowSize}px`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          pointerEvents: "none",
          transform: `translate(${mousePos.x - glowSize / 2}px, ${mousePos.y - glowSize / 2}px)`,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />
      {children}
    </div>
  );
}

// Project Card Component with hover animations
function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      key={project.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: 0,
        overflow: "hidden",
        position: "relative",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
        boxShadow: isHovered
          ? "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(239, 68, 68, 0.1)"
          : "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Image Placeholder Section */}
      <div
        style={{
          position: "relative",
          height: "280px",
          background: isHovered ? project.accentHover : project.accent,
          transition: "all 0.5s ease",
          overflow: "hidden",
        }}
      >
        {/* Animated gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
            opacity: isHovered ? 0.5 : 0.3,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Placeholder for project image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <span
            style={{
              fontSize: "4rem",
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))",
              transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          >
            {project.icon}
          </span>
          <div
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              opacity: isHovered ? 1 : 0.7,
              transition: "opacity 0.3s ease",
            }}
          >
            <p
              className="body-sm"
              style={{
                color: "rgba(255,255,255,0.9)",
                margin: 0,
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              📸 Project Screenshot
            </p>
          </div>
        </div>

        {/* Category Badge - Top Right */}
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            padding: "0.5rem 1rem",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
            color: "rgba(255,255,255,0.95)",
            fontSize: "0.8rem",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.15)",
            fontWeight: 500,
            letterSpacing: "0.5px",
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 0.3s ease",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          background: "var(--background-charcoal)",
          position: "relative",
        }}
      >
        {/* Accent Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: project.accent,
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        <div>
          <h3
            className="heading-md"
            style={{
              color: "white",
              marginBottom: "0.75rem",
              transition: "color 0.3s ease",
            }}
          >
            {project.title}
          </h3>
          <p className="body-md" style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
            {project.description}
          </p>
        </div>

        {/* Deliverables */}
        <div>
          <p
            className="eyebrow"
            style={{
              color: "var(--primary)",
              marginBottom: "0.75rem",
              fontWeight: 600,
            }}
          >
            Delivered
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {project.deliverables.map((item, i) => (
              <li
                key={item}
                className="body-md"
                style={{
                  color: "var(--foreground-muted)",
                  paddingLeft: "1.5rem",
                  position: "relative",
                  animation: isHovered ? `slideInLeft 0.3s ease ${i * 0.1}s both` : "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "var(--primary)",
                    fontWeight: "bold",
                  }}
                >
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact & CTA */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              color: "var(--primary)",
              fontSize: "0.85rem",
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              fontWeight: 600,
              border: "1px solid rgba(239, 68, 68, 0.3)",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            {project.impact}
          </span>
          <Link
            href={`/contact?project=${encodeURIComponent(project.title)}`}
            className="btn btn-ghost btn-sm"
            style={{
              opacity: isHovered ? 1 : 0.7,
              transition: "opacity 0.3s ease",
            }}
          >
            Discuss scope →
          </Link>
        </div>

        {/* Client Testimonial */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.25rem",
            marginTop: "0.5rem",
          }}
        >
          <p
            className="body-md"
            style={{
              fontStyle: "italic",
              color: "var(--foreground-muted)",
              marginBottom: "1rem",
              lineHeight: "1.6",
            }}
          >
            &ldquo;{project.client.quote}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: project.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                flexShrink: 0,
              }}
            >
              {project.client.name.charAt(0)}
            </div>
            <div>
              <p className="body-md" style={{ fontWeight: 600, marginBottom: "0.1rem" }}>
                {project.client.name}
              </p>
              <p className="body-sm" style={{ color: "var(--foreground-muted)" }}>
                {project.client.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "visible", zIndex: 1 }}>
        <ParticleField />
        <div className="container-custom" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "var(--primary)" }}>
              Proof of execution
            </p>
            <h1 
              className="heading-xl" 
              style={{
                background: "linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)"
              }}
            >
              Recent Work, Real Referrals
            </h1>
            <p
              className="body-lg"
              style={{ color: "var(--foreground-muted)", marginTop: "2rem" }}
            >
              We keep our case studies focused on the engagements happening right now.
              Three builds, three partners who actively refer us because we delivered
              measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding" style={{ background: "var(--background-charcoal)", position: "relative", overflow: "visible", zIndex: 2, paddingBottom: "clamp(120px, 15vw, 180px)" }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "400px", overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
              alignItems: "flex-end",
              marginBottom: "3rem",
            }}
          >
            <div style={{ maxWidth: "580px" }}>
              <p className="eyebrow" style={{ color: "var(--foreground-muted)" }}>
                Featured engagements
              </p>
              <h2 
                className="heading-lg" 
                style={{ 
                  color: "white",
                  background: "linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)"
                }}
              >
                Built for launch, scale, and local dominance
              </h2>
            </div>
            <Link href="/contact" className="btn btn-secondary btn-sm">
              Request a similar build
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Websites Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "visible", zIndex: 3, paddingBottom: "clamp(120px, 15vw, 180px)" }}>
        <SectionDivider variant="drip" position="top" color="var(--background-charcoal)" />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "400px", overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
          <AnimatedGradient />
        </div>
        <ParticleField />
        <div className="container-custom" style={{ position: "relative", zIndex: 10 }}>
          <ScrollReveal direction="up">
            <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
              <p className="eyebrow" style={{ color: "var(--primary)" }}>
                Digital Foundation
              </p>
              <h2 
                className="heading-lg" 
                style={{ 
                  marginBottom: "1.5rem",
                  background: "linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)"
                }}
              >
                What Custom Websites Mean to You
              </h2>
              <p className="body-lg" style={{ color: "var(--foreground-muted)", lineHeight: "1.8" }}>
                A custom website isn&apos;t just a digital brochure—it&apos;s your brand&apos;s 24/7 salesperson, 
                first impression, and competitive advantage. We build sites that convert visitors into customers 
                through strategic design, lightning-fast performance, and content that resonates.
              </p>
            </div>
          </ScrollReveal>

          <MouseGlowGrid glowColor="rgba(239, 68, 68, 0.5)" glowSize={500}>
            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Brand Identity</h3>
              <p className="body-md" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Your website reflects your unique value proposition with custom design, 
                tailored messaging, and a memorable user experience that sets you apart from competitors.
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚡</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Performance</h3>
              <p className="body-md" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Built with Next.js and modern optimization techniques, your site loads in under 2 seconds, 
                ranks higher in search results, and keeps visitors engaged.
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📱</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Mobile-First</h3>
              <p className="body-md" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Over 60% of web traffic is mobile. We ensure pixel-perfect responsiveness across all devices, 
                providing seamless experiences whether on phone, tablet, or desktop.
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔧</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Full Control</h3>
              <p className="body-md" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Own 100% of your code and content. No platform lock-ins, no monthly fees to third parties, 
                and complete freedom to evolve your site as your business grows.
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔍</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>SEO Optimized</h3>
              <p className="body-md" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Clean semantic HTML, proper meta tags, structured data, and performance optimization 
                ensure your site ranks well and attracts organic traffic from day one.
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💼</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Business Growth</h3>
              <p className="body-md" style={{ color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                Strategic CTAs, conversion-focused design, and integrated analytics help you understand 
                visitor behavior and continuously optimize for better results.
              </p>
            </div>
          </MouseGlowGrid>
        </div>
      </section>

      {/* Custom Web Applications Section */}
      <section className="section-padding" style={{ background: "var(--primary)", position: "relative", overflow: "hidden", zIndex: 4, paddingTop: "clamp(120px, 15vw, 180px)", paddingBottom: "clamp(120px, 15vw, 180px)" }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" flip={true} />
        {/* Dark particles overlay */}
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          overflow: "hidden", 
          zIndex: 0, 
          pointerEvents: "none", 
          opacity: 0.6,
          filter: "invert(1) brightness(0.3) contrast(2)"
        }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "4rem", overflow: "visible", padding: "2rem 1rem" }}>
              <p className="eyebrow" style={{ color: "rgba(0, 0, 0, 0.7)", fontWeight: 600 }}>
                Advanced Solutions
              </p>
              <h2 
                className="heading-lg" 
                style={{ 
                  marginBottom: "1.5rem",
                  color: "#1C1C1C",
                  fontWeight: 800,
                  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.4))",
                  padding: "0.5rem 0",
                  lineHeight: "1.3"
                }}
              >
                Custom Web Applications Explained
              </h2>
              <p className="body-lg" style={{ color: "rgba(0, 0, 0, 0.8)", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto", fontWeight: 500 }}>
                Web applications go beyond static pages—they&apos;re interactive tools that solve specific 
                business problems, automate workflows, and provide dynamic experiences. From dashboards 
                to customer portals, we build scalable applications that drive operational efficiency.
              </p>
            </div>
          </ScrollReveal>

          <MouseGlowGrid glowColor="rgba(0, 0, 0, 0.8)" glowSize={450}>
            <div style={{ 
              padding: "2rem", 
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🗄️</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Data Management</h3>
              <p className="body-md" style={{ color: "var(--primary)", lineHeight: "1.6", opacity: 0.9 }}>
                Real-time databases, secure APIs, and dynamic content systems allow you to manage complex 
                data flows, user accounts, and business logic with full control and security.
              </p>
            </div>

            <div style={{ 
              padding: "2rem", 
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👥</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>User Authentication</h3>
              <p className="body-md" style={{ color: "var(--primary)", lineHeight: "1.6", opacity: 0.9 }}>
                Secure login systems, role-based access control, and personalized user experiences 
                protect sensitive data while delivering tailored content to each visitor.
              </p>
            </div>

            <div style={{ 
              padding: "2rem", 
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔗</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>API Integration</h3>
              <p className="body-md" style={{ color: "var(--primary)", lineHeight: "1.6", opacity: 0.9 }}>
                Connect to payment processors, CRMs, marketing tools, and third-party services. 
                We build seamless integrations that synchronize your entire business ecosystem.
              </p>
            </div>

            <div style={{ 
              padding: "2rem", 
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📊</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Real-Time Features</h3>
              <p className="body-md" style={{ color: "var(--primary)", lineHeight: "1.6", opacity: 0.9 }}>
                Live dashboards, instant notifications, collaborative tools, and dynamic updates 
                keep your team and customers informed without page refreshes.
              </p>
            </div>

            <div style={{ 
              padding: "2rem", 
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🛠️</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Custom Workflows</h3>
              <p className="body-md" style={{ color: "var(--primary)", lineHeight: "1.6", opacity: 0.9 }}>
                Automate repetitive tasks, build multi-step forms, create approval systems, and 
                streamline operations with logic tailored exactly to your business processes.
              </p>
            </div>

            <div style={{ 
              padding: "2rem", 
              borderRadius: "1rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📈</div>
              <h3 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--primary)" }}>Scalable Architecture</h3>
              <p className="body-md" style={{ color: "var(--primary)", lineHeight: "1.6", opacity: 0.9 }}>
                Built to grow with you—from MVP to enterprise scale. Modern frameworks, cloud 
                infrastructure, and best practices ensure your app handles increasing demand.
              </p>
            </div>
          </MouseGlowGrid>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 0", position: "relative", overflow: "visible", background: "linear-gradient(135deg, var(--background-deep) 0%, #1a0a0a 50%, var(--background-deep) 100%)", zIndex: 5 }}>
        <SectionDivider variant="wave" position="top" color="var(--primary)" />
        <ParticleField variant="light" />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-custom" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <h2 className="heading-lg" style={{ color: "white", marginBottom: "1.5rem" }}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className="body-lg" style={{ color: "white", marginBottom: "2.5rem" }}>
            Ready to see your project become the next referral-backed story?
          </p>
          <Link
            href="/contact"
            className="btn btn-secondary btn-lg"
            style={{ background: "white", color: "var(--primary)", border: "none" }}
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
