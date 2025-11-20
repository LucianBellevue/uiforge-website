"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ScrollReveal, 
  ParticleField, 
  AnimatedGradient,
  StaggerContainer,
  StaggerItem 
} from "@/app/components/ui";

export default function Pricing() {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', background: 'var(--background-deep)', overflow: 'hidden' }}>
        <ParticleField />
        <AnimatedGradient />
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
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative' }}>
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
        background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #EF4444 100%)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
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
        {/* Dark overlay for better contrast */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
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
      <section className="section-padding" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <AnimatedGradient />
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
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
              {[
                { name: 'Logo + Brand Kit (3 concepts)', price: '$300 – $800' },
                { name: 'Additional Page', price: '$150 – $300' },
                { name: 'Copywriting (per page)', price: '$150' },
                { name: 'Custom API integration', price: '$400 – $1,200' },
                { name: 'Blog migration (10–50 posts)', price: '$200 – $600' },
                { name: 'Analytics dashboard (custom)', price: '$300 – $600' },
                { name: 'Speed Optimization Overhaul', price: '$300 – $800' },
              ].map((addon) => (
                <StaggerItem key={addon.name}>
                  <motion.div 
                    className="glass"
                    style={{ 
                      padding: '2rem',
                      borderRadius: '1rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start'
                    }}
                    whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="heading-sm" style={{ marginBottom: '1.5rem', color: 'var(--foreground)', fontSize: '1.125rem' }}>
                      {addon.name}
                    </h3>
                    <div className="body-lg" style={{ 
                      fontWeight: '700',
                      fontSize: '1.5rem',
                      background: 'linear-gradient(135deg, var(--primary), #F87171)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {addon.price}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose UIForge - Comparison */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <AnimatedGradient />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="heading-lg" style={{ 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
              }}>
                Why Choose UIForge Instead of Wix / WordPress / Shopify?
              </h2>
            </div>
          </ScrollReveal>

          {/* Reasons Grid */}
          <StaggerContainer staggerDelay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
              {[
                {
                  number: '1',
                  title: 'Performance that converts',
                  description: 'Wix and WordPress templates often load in 2–6 seconds.',
                  highlight: '0.6–1.2 seconds on average',
                  detail: '— thanks to Next.js + server components.'
                },
                {
                  number: '2',
                  title: 'You get full code ownership',
                  description: 'No vendor lock-in. No subscription traps. No bloat.',
                  highlight: null,
                  detail: null
                },
                {
                  number: '3',
                  title: 'SEO that actually ranks',
                  description: 'Template builders produce messy, bloated HTML.',
                  highlight: 'Semantic • Accessible • Optimized for Google Core Web Vitals',
                  detail: null
                },
                {
                  number: '4',
                  title: 'Scalable & flexible',
                  description: 'Add features, integrate APIs, connect CRMs, expand the CMS — anytime.',
                  highlight: null,
                  detail: null
                },
                {
                  number: '5',
                  title: 'Built for your unique business',
                  description: 'No cookie-cutter template. Every UI is hand-crafted with Tailwind.',
                  highlight: null,
                  detail: null
                },
                {
                  number: '6',
                  title: 'Better long-term cost',
                  description: 'Builder tools require: $40–$100/mo subscriptions, paid plugins, theme limits, template redesign costs.',
                  highlight: 'Your UIForge site is a one-time build with full control.',
                  detail: null
                },
              ].map((reason) => (
                <StaggerItem key={reason.number}>
                  <motion.div
                    className="glass"
                    style={{
                      padding: '2.5rem',
                      borderRadius: '1.25rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    whileHover={{ y: -4, boxShadow: '0 15px 50px rgba(239, 68, 68, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Number Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--primary), #F87171)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '1.25rem',
                      color: 'white',
                      boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
                    }}>
                      {reason.number}
                    </div>

                    <h3 className="heading-md" style={{ 
                      color: 'var(--primary)', 
                      marginBottom: '1rem',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      paddingRight: '60px'
                    }}>
                      {reason.title}
                    </h3>

                    <p className="body-md" style={{ 
                      color: 'var(--foreground-muted)', 
                      lineHeight: '1.7',
                      marginBottom: reason.highlight ? '1.25rem' : '0'
                    }}>
                      {reason.description}
                    </p>

                    {reason.highlight && (
                      <div style={{
                        padding: '1rem 1.25rem',
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                        borderLeft: '3px solid var(--primary)',
                        borderRadius: '0.5rem',
                        marginTop: 'auto'
                      }}>
                        <p className="body-md" style={{ 
                          color: 'var(--foreground)', 
                          fontWeight: 600,
                          lineHeight: '1.6'
                        }}>
                          {reason.highlight}
                        </p>
                        {reason.detail && (
                          <p className="body-sm" style={{ 
                            color: 'var(--foreground-muted)',
                            marginTop: '0.25rem'
                          }}>
                            {reason.detail}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Comparison Table */}
          <ScrollReveal direction="up">
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              paddingTop: '3rem',
              borderTop: '1px solid rgba(239, 68, 68, 0.1)'
            }}>
              <h3 className="heading-md" style={{ 
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                See How We Stack Up
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="glass" style={{ 
              borderRadius: '1.5rem', 
              padding: '2rem', 
              overflowX: 'auto',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
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
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="heading-lg" style={{ 
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
              }}>
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.1}>
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              {[
                {
                  question: 'Do you require a deposit?',
                  answer: 'Yes — 50% upfront, 50% on completion.'
                },
                {
                  question: 'Do you offer design?',
                  answer: 'We build custom layouts but do not offer full Figma/UX design packages. If you have designs, we build them. If not, we create clean functional layouts.'
                },
                {
                  question: 'How long does a project take?',
                  answer: 'Starter: 1–2 weeks\nGrowth: 4–6 weeks\nPremium: 6–8 weeks',
                  isList: true
                },
                {
                  question: 'Can I upgrade later?',
                  answer: 'Yes — you can add pages, components, or migrate to the Premium plan anytime.'
                },
              ].map((faq, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="glass"
                    style={{ 
                      padding: '2.5rem',
                      borderRadius: '1.25rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    whileHover={{ y: -4, boxShadow: '0 15px 50px rgba(239, 68, 68, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="heading-sm" style={{ 
                      marginBottom: '1.25rem',
                      color: 'var(--primary)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}>
                      <span style={{ flexShrink: 0, fontSize: '1.5rem' }}>Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    {faq.isList ? (
                      <div style={{ 
                        color: 'var(--foreground)',
                        lineHeight: '1.8',
                        paddingLeft: '2.25rem'
                      }}>
                        {faq.answer.split('\n').map((line, i) => (
                          <p key={i} className="body-md" style={{ 
                            marginBottom: i < faq.answer.split('\n').length - 1 ? '0.5rem' : '0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="body-md" style={{ 
                        color: 'var(--foreground)',
                        lineHeight: '1.8',
                        paddingLeft: '2.25rem'
                      }}>
                        {faq.answer}
                      </p>
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: '8rem 0', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--background-deep) 0%, #1a0a0a 50%, var(--background-deep) 100%)'
      }}>
        <ParticleField variant="light" />
        <AnimatedGradient />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.2) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} />
        
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="scale">
            <h2 className="heading-xl" style={{ 
              marginBottom: '2rem',
              color: 'white',
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
                  color: 'white', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  backdropFilter: 'blur(10px)', 
                  padding: '1.25rem 3rem', 
                  fontSize: '1.125rem', 
                  fontWeight: 600,
                  border: '2px solid white'
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
