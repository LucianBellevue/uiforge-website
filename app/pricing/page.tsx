"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ScrollReveal, 
  ParticleField, 
  AnimatedGradient,
  StaggerContainer,
  StaggerItem,
  SectionDivider,
} from "@/app/components/ui";

const AddonsPattern = () => (
  <>
    <div className="addons-pattern">
      {[0, 1, 2, 3].map((line) => (
        <div key={line} className={`addons-line line-${line}`}>
          <span className="addons-dot" />
        </div>
      ))}
    </div>
    <style jsx>{`
      .addons-pattern {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        opacity: 0.6;
      }
      .addons-line {
        position: absolute;
        width: 140%;
        height: 2px;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(239,68,68,0.35) 50%, rgba(255,255,255,0) 100%);
        filter: blur(0.3px);
      }
      .addons-line.line-0 { top: 15%; left: -20%; transform: rotate(-6deg); }
      .addons-line.line-1 { top: 40%; left: -10%; transform: rotate(4deg); }
      .addons-line.line-2 { top: 65%; left: -15%; transform: rotate(-2deg); }
      .addons-line.line-3 { top: 85%; left: -5%; transform: rotate(7deg); }
      .addons-dot {
        position: absolute;
        top: -4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(239,68,68,0.9);
        box-shadow: 0 0 12px rgba(239,68,68,0.9), 0 0 24px rgba(239,68,68,0.5);
        animation: addons-dot-move 6s linear infinite;
      }
      .addons-line.line-1 .addons-dot { animation-duration: 7.5s; }
      .addons-line.line-2 .addons-dot { animation-duration: 5.5s; }
      .addons-line.line-3 .addons-dot { animation-duration: 8s; }
      @keyframes addons-dot-move {
        0% { left: -5%; }
        100% { left: 105%; }
      }
    `}</style>
  </>
);

export default function Pricing() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const pricingTiers = [
    {
      name: "Starter Site",
      priceRange: "$2,000 – $3,000",
      bestFor: "small businesses, personal brands, landing pages, first-time business sites",
      deliveryTime: "1–2 weeks",
      features: [
        "1–3 fully responsive custom pages (Home, About, Contact)",
        "Built with Next.js + Tailwind",
        "Client-editable content via lightweight CMS (Sanity)",
        "Integrated contact form",
        "Basic SEO setup (title tags, meta, OG data)",
        "Google Analytics or Vercel Analytics",
        "Fast hosting setup (Vercel)",
      ],
      perfectWhen: "a clean, modern, fast website that makes your business look legit.",
      ctaText: "Start with Starter Site",
      ctaLink: "/contact?plan=starter",
      popular: false
    },
    {
      name: "Growth Site",
      priceRange: "$4,000 – $5,500",
      bestFor: "service businesses, coaches, agencies, SaaS landing sites, creators",
      deliveryTime: "4–6 weeks",
      features: [
        "Everything in Starter PLUS:",
        "5–7 fully custom pages",
        "Blog or articles page (CMS powered)",
        "Custom components (pricing grid, FAQ accordion, testimonials, galleries)",
        "Mobile-first animations (Framer Motion)",
        "Advanced SEO setup",
        "Onboarding call + training session",
      ],
      perfectWhen: "a custom website that feels branded, credible, and built to scale with your growth.",
      ctaText: "Build My Growth Site",
      ctaLink: "/contact?plan=growth",
      popular: true
    },
    {
      name: "Premium Site",
      priceRange: "$6,500 – $8,000",
      bestFor: "growing brands, established businesses, startups wanting flexible architecture",
      deliveryTime: "6–8 weeks",
      features: [
        "Everything in Growth PLUS:",
        "8–12 fully custom pages",
        "Dynamic routes & advanced CMS structures (blog categories, reusable modules)",
        "API integrations (newsletter, CRM, Stripe payments, booking tools)",
        "Advanced performance optimization",
        "High-conversion architecture",
        "Priority support",
      ],
      perfectWhen: "a fast, scalable, modern site that looks and performs like a $20k agency build.",
      ctaText: "Start My Premium Build",
      ctaLink: "/contact?plan=premium",
      popular: false
    }
  ];

  const addOnItems = [
    { name: 'Logo + Brand Kit (3 concepts)', price: '$300 – $800', note: 'Rapid visual identity refresh' },
    { name: 'Additional Page', price: '$150 – $300', note: 'Fully custom responsive page' },
    { name: 'Copywriting (per page)', price: '$150', note: 'Conversion-focused copy' },
    { name: 'Custom API integration', price: '$400 – $1,200', note: 'CRMs, booking tools, payment gateways' },
    { name: 'Blog migration (10–50 posts)', price: '$200 – $600', note: 'Structured content import + redirects' },
    { name: 'Analytics dashboard (custom)', price: '$300 – $600', note: 'KPIs in a single view' },
    { name: 'Speed Optimization Overhaul', price: '$300 – $800', note: 'Core Web Vitals improvements' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', background: 'var(--background-deep)', overflow: 'hidden' }}>
        <ParticleField />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <ScrollReveal direction="up">
              <h1 className="heading-xl" style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                lineHeight: '1.2', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
              }}>
                Custom Next.js websites that load fast, rank higher, and convert more.
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: '1.8', maxWidth: '750px', margin: '0 auto' }}>
                Transparent pricing for SEO-friendly, high-converting business websites built with Next.js, Tailwind, and a modern CMS — optimized for performance, scalability, and real revenue growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative', overflow: 'visible', paddingTop: 'clamp(120px, 15vw, 180px)' }}>
        <SectionDivider variant="wave" position="top" color="var(--background-deep)" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ 
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--primary)',
              }}>
                🏷️ PRICING
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', maxWidth: '1300px', margin: '0 auto' }}>
              {pricingTiers.map((tier) => (
                <StaggerItem key={tier.name}>
                  <motion.div 
                    className={`glass ${tier.popular ? 'border-2 border-primary/40' : ''}`}
                    style={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      padding: '3rem 2.5rem',
                      borderRadius: '1.5rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(239, 68, 68, 0.2)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {tier.popular && (
                      <div style={{ 
                        position: 'absolute', 
                        top: '20px', 
                        right: '20px', 
                        background: 'linear-gradient(135deg, var(--primary), #F87171)', 
                        color: 'white', 
                        padding: '0.4rem 1rem', 
                        borderRadius: '8px', 
                        fontSize: '0.75rem', 
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                      }}>
                        MOST POPULAR
                      </div>
                    )}

                    {/* Tier Name & Badge */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 className="heading-md" style={{ 
                        color: 'var(--primary)', 
                        marginBottom: '0.5rem',
                        fontWeight: 700,
                        fontSize: '1.75rem'
                      }}>
                        {tier.name}
                      </h3>
                      <div className="heading-lg" style={{ 
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
                        fontWeight: 700,
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {tier.priceRange}
                      </div>
                    </div>

                    {/* Best For */}
                    <div style={{ 
                      padding: '1rem 1.25rem', 
                      background: 'rgba(239, 68, 68, 0.05)', 
                      borderLeft: '3px solid var(--primary)',
                      borderRadius: '0.5rem',
                      marginBottom: '1.75rem'
                    }}>
                      <p className="body-sm" style={{ color: 'var(--foreground-muted)', fontWeight: 600, marginBottom: '0.25rem' }}>
                        BEST FOR
                      </p>
                      <p className="body-md" style={{ color: 'var(--foreground)', lineHeight: '1.6' }}>
                        {tier.bestFor}
                      </p>
                    </div>

                    {/* Features List */}
                    <div style={{ marginBottom: '2rem', flex: 1 }}>
                      <p className="body-sm" style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.5px' }}>
                        INCLUDES:
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="body-md" style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '0.75rem',
                            color: 'var(--foreground)',
                            lineHeight: '1.6'
                          }}>
                            <span style={{ 
                              color: 'var(--primary)', 
                              fontSize: '1.25rem',
                              fontWeight: 'bold',
                              flexShrink: 0
                            }}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Delivery Time */}
                    <div style={{ 
                      padding: '0.875rem', 
                      background: 'rgba(0, 0, 0, 0.3)', 
                      borderRadius: '0.5rem',
                      marginBottom: '1.5rem',
                      textAlign: 'center'
                    }}>
                      <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>
                        ⚡ <strong style={{ color: 'var(--primary)' }}>Delivery in {tier.deliveryTime}</strong>
                      </p>
                    </div>

                    {/* Perfect When */}
                    <div style={{ 
                      padding: '1.25rem', 
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.02) 100%)', 
                      borderRadius: '0.75rem',
                      marginBottom: '2rem',
                      border: '1px solid rgba(239, 68, 68, 0.15)'
                    }}>
                      <p className="body-sm" style={{ color: 'var(--foreground-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        PERFECT WHEN YOU WANT:
                      </p>
                      <p className="body-md" style={{ color: 'var(--foreground)', lineHeight: '1.6', fontStyle: 'italic' }}>
                        {tier.perfectWhen}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href={tier.ctaLink}
                      className={`btn ${tier.popular ? 'btn-primary' : 'btn-ghost'} btn-lg hover-lift`}
                      style={{ 
                        width: '100%',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        ...(tier.popular && {
                          boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)'
                        })
                      }}
                    >
                      {tier.ctaText} →
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="section-padding" style={{ 
        background: 'var(--primary)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(120px, 15vw, 180px)'
      }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-charcoal)" flip={true} />
        {/* Dark particles overlay */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          overflow: 'hidden', 
          zIndex: 0, 
          pointerEvents: 'none', 
          opacity: 0.6,
          filter: 'invert(1) brightness(0.3) contrast(2)'
        }}>
          <ParticleField />
        </div>
        
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '4rem', overflow: 'visible', padding: '2rem 1rem' }}>
              <h2 className="heading-lg" style={{ 
                marginBottom: '1.5rem',
                color: '#1C1C1C',
                fontWeight: 800,
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.4))',
                padding: '0.5rem 0',
                lineHeight: '1.3'
              }}>
                Keep Your Site Running Smooth
              </h2>
              <p className="body-lg" style={{ 
                color: 'rgba(0, 0, 0, 0.8)', 
                maxWidth: '700px', 
                margin: '0 auto',
                fontWeight: 500
              }}>
                Ongoing support, updates, and optimization to keep your website fast, secure, and up-to-date.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
              {[
                {
                  name: 'Basic Care',
                  price: '$150',
                  period: '/mo',
                  features: [
                    'Hosting optimizations',
                    'Monitoring + backups',
                    'Minor bug fixes',
                  ],
                  popular: false
                },
                {
                  name: 'Pro Care',
                  price: '$250',
                  period: '/mo',
                  features: [
                    'Everything in Basic plus:',
                    'Monthly SEO review',
                    'Page updates (2 included per month)',
                    'Monthly performance audit',
                  ],
                  popular: true
                },
                {
                  name: 'Elite Care',
                  price: '$350',
                  period: '/mo',
                  features: [
                    'Everything in Pro plus:',
                    'Up to 4 updates / new components per month',
                    'Priority support',
                    'Quarterly strategy call',
                  ],
                  popular: false
                }
              ].map((plan) => (
                <StaggerItem key={plan.name}>
                  <motion.div
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '2.5rem',
                      borderRadius: '1.25rem',
                      position: 'relative',
                      overflow: 'hidden',
                      background: plan.popular 
                        ? 'rgba(0, 0, 0, 0.9)'
                        : 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(20px)',
                      border: plan.popular 
                        ? '2px solid rgba(0, 0, 0, 1)' 
                        : '1px solid rgba(0, 0, 0, 0.8)',
                      boxShadow: plan.popular
                        ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                        : '0 4px 16px rgba(0, 0, 0, 0.3)'
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                      background: plan.popular ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.popular && (
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'linear-gradient(135deg, #000000, #1a1a1a)',
                        color: 'var(--primary)',
                        padding: '0.4rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        border: '1px solid var(--primary)',
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)'
                      }}>
                        RECOMMENDED
                      </div>
                    )}

                    <div style={{ marginBottom: '2rem' }}>
                      <h3 className="heading-md" style={{ 
                        color: 'var(--primary)', 
                        marginBottom: '1rem',
                        fontWeight: 700,
                        fontSize: '1.5rem'
                      }}>
                        {plan.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                        <span className="heading-xl" style={{ 
                          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                          fontWeight: 700,
                          color: 'var(--primary)'
                        }}>
                          {plan.price}
                        </span>
                        <span className="body-lg" style={{ color: 'rgba(239, 68, 68, 0.8)', fontWeight: 500 }}>
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '1rem', 
                      marginBottom: '2.5rem',
                      flex: 1
                    }}>
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="body-md" style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '0.75rem',
                          color: 'var(--primary)',
                          lineHeight: '1.6'
                        }}>
                          <span style={{ 
                            color: 'var(--primary)', 
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            flexShrink: 0
                          }}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={`/contact?plan=maintenance-${plan.name.toLowerCase().replace(' ', '-')}`}
                      className="btn hover-lift"
                      style={{ 
                        width: '100%',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        background: plan.popular ? 'white' : 'transparent',
                        color: plan.popular ? '#000000' : 'var(--primary)',
                        border: plan.popular ? 'none' : '2px solid var(--primary)'
                      }}
                    >
                      Get {plan.name} →
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'visible', paddingTop: 'clamp(120px, 15vw, 180px)' }}>
        {/* Wave wrapper with soft dark blend under the divider for smooth transition */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '220px',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {/* Soft dark blend under the wave to avoid a hard line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '140px',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 70%)',
            }}
          />
          {/* Wave divider on top, using primary color so it stays in sync */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <SectionDivider variant="liquid" position="top" color="var(--primary)" />
          </div>
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ 
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                marginBottom: '1rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--primary)',
              }}>
                🔧 ADD-ONS
              </div>
              <h2 className="heading-lg" style={{ 
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
              }}>
                Extend Your Site
              </h2>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginTop: '0.75rem' }}>
                Mix-and-match add-ons to layer in branding, content, integrations, and performance boosts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <motion.div
              style={{
                position: 'relative',
                padding: '3.5rem 3rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                background: 'rgba(10, 10, 10, 0.85)',
                boxShadow: '0 15px 60px rgba(239, 68, 68, 0.18)',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AddonsPattern />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  color: 'var(--primary)'
                }}>
                  <span style={{ fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem' }}>SERVICE</span>
                  <span style={{ fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem' }}>INVESTMENT</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {addOnItems.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        padding: '1.25rem 1.5rem',
                        borderRadius: '1rem',
                        background: 'rgba(255,255,255,0.015)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        justifyContent: 'space-between',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 12px rgba(239,68,68,0.9)' }} />
                          <p className="body-lg" style={{ margin: 0, color: 'var(--foreground)', fontWeight: 600 }}>
                            {item.name}
                          </p>
                        </div>
                        <span className="body-sm" style={{ color: 'var(--foreground-muted)', paddingLeft: '1.35rem' }}>
                          {item.note}
                        </span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p
                          className="heading-sm"
                          style={{
                            margin: 0,
                            color: 'var(--primary)',
                            fontWeight: 800,
                            fontSize: '1.35rem',
                          }}
                        >
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose UIForge - Comparison */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'visible', paddingTop: 'clamp(120px, 15vw, 180px)' }}>
        <SectionDivider variant="wave" position="top" color="var(--background-deep)" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="heading-lg" style={{ 
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
              }}>
                Why UIForge Wins
              </h2>
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', maxWidth: '720px', margin: '0 auto' }}>
                Built-to-perform code, total ownership, and an obsessive focus on conversion—something no template stack can touch.
              </p>
            </div>
          </ScrollReveal>

          {/* Chart Hero */}
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.85rem' }}>HEAD-TO-HEAD</span>
            </div>
          </ScrollReveal>

          {/* Impact statements */}
          <StaggerContainer staggerDelay={0.12}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
              {[
                {
                  label: 'Speed',
                  headline: '0.6s launch-ready sites',
                  body: 'Server-rendered Next.js stacks tuned for Core Web Vitals—no multi-second drag from plugins or page builders.',
                },
                {
                  label: 'Control',
                  headline: 'You own every line of code',
                  body: 'No licenses, no lock-in, no feature paywalls. Fork it, scale it, connect it to anything you need—forever.',
                },
                {
                  label: 'Revenue impact',
                  headline: 'Designed to convert',
                  body: 'Conversion-focused architecture, CMS flexibility, and performance tracking baked in so marketing moves faster.',
                },
              ].map((tile, idx) => (
                <StaggerItem key={tile.label}>
                  <motion.div
                    className="glass"
                    style={{
                      padding: '2.25rem',
                      borderRadius: '1.25rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                    whileHover={{ y: -4, boxShadow: '0 15px 50px rgba(239, 68, 68, 0.15)' }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.75rem' }}>{tile.label}</span>
                    <h3 className="heading-md" style={{ color: 'var(--foreground)', margin: 0 }}>{tile.headline}</h3>
                    <p className="body-md" style={{ color: 'var(--foreground-muted)', lineHeight: '1.7', margin: 0 }}>{tile.body}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Chart Hero */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="glass" style={{ 
              borderRadius: '1.75rem', 
              padding: '2.5rem', 
              overflowX: 'auto',
              maxWidth: '1150px',
              margin: '0 auto 2rem',
              marginTop: '1.75rem',
              boxShadow: '0 25px 80px rgba(0,0,0,0.35)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h3 className="heading-md" style={{ 
                  margin: 0,
                  background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  How We Stack Up
                </h3>
              </div>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                minWidth: '600px'
              }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(239, 68, 68, 0.2)' }}>
                    <th className="body-md" style={{ 
                      textAlign: 'left', 
                      padding: '1.25rem 1rem', 
                      color: 'var(--foreground)',
                      fontWeight: 600
                    }}>
                      Feature
                    </th>
                    <th className="heading-sm" style={{ 
                      textAlign: 'center', 
                      padding: '1.25rem 1rem', 
                      color: 'var(--primary)',
                      fontWeight: 700,
                      background: 'rgba(239, 68, 68, 0.05)',
                      fontSize: '1rem'
                    }}>
                      UIForge.io
                    </th>
                    <th className="body-md" style={{ 
                      textAlign: 'center', 
                      padding: '1.25rem 1rem', 
                      color: 'var(--foreground-muted)',
                      fontWeight: 500
                    }}>
                      Wix
                    </th>
                    <th className="body-md" style={{ 
                      textAlign: 'center', 
                      padding: '1.25rem 1rem', 
                      color: 'var(--foreground-muted)',
                      fontWeight: 500
                    }}>
                      WordPress
                    </th>
                    <th className="body-md" style={{ 
                      textAlign: 'center', 
                      padding: '1.25rem 1rem', 
                      color: 'var(--foreground-muted)',
                      fontWeight: 500
                    }}>
                      Shopify
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      feature: 'Custom Code', 
                      uiforge: '✅', 
                      wix: '❌', 
                      wordpress: '⚠️ Requires dev', 
                      shopify: '❌' 
                    },
                    { 
                      feature: 'Performance', 
                      uiforge: '🚀 Excellent', 
                      wix: '❌ Poor', 
                      wordpress: '⚠️ Variable', 
                      shopify: '⚠️ Average' 
                    },
                    { 
                      feature: 'SEO', 
                      uiforge: '🔥 High', 
                      wix: '😐 Limited', 
                      wordpress: 'Good with plugins', 
                      shopify: 'Good' 
                    },
                    { 
                      feature: 'Ownership', 
                      uiforge: 'Full', 
                      wix: 'None', 
                      wordpress: 'Partial', 
                      shopify: 'None' 
                    },
                    { 
                      feature: 'Scalability', 
                      uiforge: 'High', 
                      wix: 'Low', 
                      wordpress: 'Medium', 
                      shopify: 'Medium' 
                    },
                    { 
                      feature: 'Integrations', 
                      uiforge: 'Unlimited', 
                      wix: 'Limited', 
                      wordpress: 'Medium', 
                      shopify: 'Medium' 
                    },
                    { 
                      feature: 'Cost Over Time', 
                      uiforge: 'Low', 
                      wix: 'High', 
                      wordpress: 'Medium', 
                      shopify: 'High' 
                    },
                  ].map((row, index) => (
                    <tr key={row.feature} style={{ 
                      borderBottom: index < 6 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      transition: 'background 0.2s'
                    }}>
                      <td className="body-md" style={{ 
                        padding: '1.25rem 1rem', 
                        fontWeight: 600,
                        color: 'var(--foreground)'
                      }}>
                        {row.feature}
                      </td>
                      <td className="body-sm" style={{ 
                        padding: '1.25rem 1rem', 
                        textAlign: 'center', 
                        color: 'var(--primary)',
                        fontWeight: 600,
                        background: 'rgba(239, 68, 68, 0.03)',
                        fontSize: '0.95rem'
                      }}>
                        {row.uiforge}
                      </td>
                      <td className="body-sm" style={{ 
                        padding: '1.25rem 1rem', 
                        textAlign: 'center', 
                        color: 'var(--foreground-muted)',
                        fontSize: '0.9rem'
                      }}>
                        {row.wix}
                      </td>
                      <td className="body-sm" style={{ 
                        padding: '1.25rem 1rem', 
                        textAlign: 'center', 
                        color: 'var(--foreground-muted)',
                        fontSize: '0.9rem'
                      }}>
                        {row.wordpress}
                      </td>
                      <td className="body-sm" style={{ 
                        padding: '1.25rem 1rem', 
                        textAlign: 'center', 
                        color: 'var(--foreground-muted)',
                        fontSize: '0.9rem'
                      }}>
                        {row.shopify}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Bottom CTA */}
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ 
              textAlign: 'center', 
              marginTop: '4rem',
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.02) 100%)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(239, 68, 68, 0.15)'
            }}>
              <p className="body-lg" style={{ 
                color: 'var(--foreground)', 
                marginBottom: '1.5rem',
                fontSize: '1.125rem',
                fontWeight: 500
              }}>
                Ready to build something better than a template?
              </p>
              <Link 
                href="/contact"
                className="btn btn-primary btn-lg hover-lift hover-glow-intense"
                style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}
              >
                Get Your Custom Quote →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative', overflow: 'visible', paddingTop: 'clamp(120px, 15vw, 180px)' }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" flip={true} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="heading-lg" style={{ 
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
              }}>
                Frequently Asked Questions
              </h2>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', maxWidth: '620px', margin: '0.5rem auto 0' }}>
                Answers to the most common questions about timelines, scope, pricing, and ongoing support.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08}>
            <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  question: 'Do you require a deposit?',
                  answer: 'Yes — projects start with a 50% deposit and 50% on completion. For larger builds, we can split this into milestones.'
                },
                {
                  question: 'What exactly is included in the price?',
                  answer: 'You get a custom Next.js site (no templates), responsive layouts, basic SEO setup, analytics, CMS integration, and deployment to production. Any add-ons or maintenance plans are quoted separately.'
                },
                {
                  question: 'How long does a project take?',
                  answer: 'Starter: 1–2 weeks\nGrowth: 4–6 weeks\nPremium: 6–8 weeks (depending on complexity and approvals).',
                  isList: true
                },
                {
                  question: 'Do you offer design as well as development?',
                  answer: 'We create clean, conversion-focused layouts but do not sell full-scale UX/Figma packages. If you already have designs, we implement them. If not, we design directly in code with modern UI patterns.'
                },
                {
                  question: 'What happens after launch?',
                  answer: 'You own the code and the infrastructure. If you choose a maintenance plan, we handle updates, monitoring, backups, performance optimization, and minor changes each month.'
                },
                {
                  question: 'Can I upgrade or add features later?',
                  answer: 'Yes — you can add pages, components, integrations, or upgrade from Starter to Growth or Premium later. We scope those as separate mini-projects or as part of a maintenance plan.'
                },
                {
                  question: 'Do you work with existing sites or only new builds?',
                  answer: 'We can modernize or fully rebuild an existing site if it makes sense technically. In many cases, migrating to a fresh Next.js codebase is faster and more maintainable long term.'
                },
              ].map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <StaggerItem key={faq.question}>
                    <motion.div
                      style={{
                        borderRadius: '1rem',
                        border: isOpen ? '1px solid rgba(239, 68, 68, 0.9)' : '1px solid rgba(239, 68, 68, 0.4)',
                        boxShadow: isOpen
                          ? '0 0 30px rgba(239, 68, 68, 0.4)'
                          : '0 0 18px rgba(239, 68, 68, 0.18)',
                        background: 'rgba(10,10,10,0.85)',
                        backdropFilter: 'blur(18px)',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease',
                      }}
                      whileHover={{ y: -2, boxShadow: '0 0 40px rgba(239, 68, 68, 0.45)' }}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          padding: '1.25rem 1.5rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <span
                            style={{
                              flexShrink: 0,
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              color: 'var(--primary)',
                            }}
                          >
                            Q
                          </span>
                          <p
                            className="body-md"
                            style={{
                              margin: 0,
                              color: 'var(--foreground)',
                              fontWeight: 600,
                            }}
                          >
                            {faq.question}
                          </p>
                        </div>
                        <motion.span
                          style={{
                            fontSize: '1.4rem',
                            color: 'var(--primary)',
                            flexShrink: 0,
                          }}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{
                          overflow: 'hidden',
                          borderTop: '1px solid rgba(239, 68, 68, 0.25)',
                          background: 'rgba(0,0,0,0.7)',
                        }}
                      >
                        <div style={{ padding: '1.25rem 1.75rem 1.5rem' }}>
                          {faq.isList ? (
                            <div
                              style={{
                                color: 'var(--foreground)',
                                lineHeight: '1.8',
                              }}
                            >
                              {faq.answer.split('\n').map((line, i) => (
                                <p
                                  key={i}
                                  className="body-md"
                                  style={{
                                    marginBottom:
                                      i < faq.answer.split('\\n').length - 1 ? '0.35rem' : 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                  }}
                                >
                                  <span
                                    style={{
                                      color: 'var(--primary)',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    •
                                  </span>
                                  {line}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p
                              className="body-md"
                              style={{
                                color: 'var(--foreground)',
                                lineHeight: '1.8',
                              }}
                            >
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: '8rem 0', 
        position: 'relative', 
        overflow: 'visible',
        background: 'linear-gradient(135deg, var(--background-deep) 0%, #1a0a0a 50%, var(--background-deep) 100%)',
        paddingTop: 'clamp(120px, 15vw, 180px)'
      }}>
        <SectionDivider variant="wave" position="top" color="var(--background-charcoal)" />
        <ParticleField variant="light" />
        <AnimatedGradient />
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="scale">
            <h2 className="heading-xl" style={{ 
              marginBottom: '2rem',
              color: 'var(--primary)',
              textShadow: '0 0 30px rgba(239, 68, 68, 0.5), 0 0 60px rgba(239, 68, 68, 0.3)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)'
            }}>
              Ready to forge your new website?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="body-lg" style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              maxWidth: '600px', 
              margin: '0 auto 3rem',
              fontSize: '1.125rem',
              lineHeight: '1.8'
            }}>
              Let&apos;s discuss your project and build something exceptional together.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <Link 
                href="/contact?type=strategy-call" 
                className="btn btn-lg hover-lift hover-glow-intense" 
                style={{ 
                  background: 'white', 
                  color: 'var(--primary)', 
                  border: 'none', 
                  padding: '1.25rem 3rem', 
                  fontSize: '1.125rem', 
                  fontWeight: 600,
                  boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)'
                }}
              >
                Book a Free Strategy Call
              </Link>
              
              <span className="body-lg" style={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 500,
                fontSize: '1.125rem'
              }}>
                or
              </span>
              
              <Link 
                href="/contact" 
                className="btn btn-lg hover-lift" 
                style={{ 
                  borderColor: 'white', 
                  color: 'red', 
                  background: 'rgba(0,0,0,0.1)', 
                  backdropFilter: 'blur(10px)', 
                  padding: '1.25rem 3rem', 
                  fontSize: '1.125rem', 
                  fontWeight: 600,
                  border: '2px solid red',
                  boxShadow: '0 8px 30px rgba(255,0,0,0.3)'
                }}
              >
                Start Your Project →
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal direction="up" delay={0.4}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '3rem', 
              marginTop: '5rem',
              flexWrap: 'wrap',
              opacity: 0.8
            }}>
              <div style={{ textAlign: 'center' }}>
                <div className="heading-md" style={{ 
                  color: 'white', 
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                }}>
                  50+
                </div>
                <div className="body-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Projects Delivered
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="heading-md" style={{ 
                  color: 'white', 
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                }}>
                  100%
                </div>
                <div className="body-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Client Satisfaction
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="heading-md" style={{ 
                  color: 'white', 
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                }}>
                  0.8s
                </div>
                <div className="body-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Avg Load Time
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
