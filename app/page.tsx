"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { 
  ScrollProgress, 
  SectionDivider,
  ParticleField,
  ScrollReveal,
  ScrollFade,
  AnimatedGradient,
  ParallaxText,
  GlassCard,
  StaggerContainer,
  StaggerItem
} from "@/app/components/ui";

// Animated Counter Component
function AnimatedMetric({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="glass" style={{ padding: '3rem 2rem', borderRadius: '1.5rem', textAlign: 'center', minWidth: '240px', flex: '1' }}>
      <div className="heading-xl" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1, color: 'var(--primary)' }}>
        {count}{suffix}
      </div>
      <div className="body-lg" style={{ color: 'var(--foreground-muted)', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

// Results & Metrics Section Component
function ResultsMetricsSection() {
  const metrics = [
    { value: 3, suffix: 'x', label: 'Faster Load Times' },
    { value: 95, suffix: '+', label: 'PageSpeed Score' },
    { value: 50, suffix: '%', label: 'Higher Conversions' },
    { value: 100, suffix: '%', label: 'Mobile Optimized' },
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'visible', zIndex: 4, paddingBottom: 'clamp(120px, 15vw, 180px)' }}>
      <SectionDivider variant="drip" position="top" color="var(--background-charcoal)" />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <AnimatedGradient />
      </div>
      <ParticleField />
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <ScrollReveal direction="up">
          <h2 className="heading-lg text-center" style={{ 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)'
          }}>
            Real Results That Drive Growth
          </h2>
          <p className="body-lg text-center" style={{ color: 'var(--foreground-muted)', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Our clients see measurable improvements in performance, conversions, and user engagement.
          </p>
        </ScrollReveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={index}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="body-md text-center" style={{ color: 'var(--foreground-muted)', marginTop: '3rem', fontStyle: 'italic' }}>
            Built with Next.js, TypeScript & Modern Tools
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  const services = [
    { title: 'Custom Websites', description: 'Beautifully designed, fully responsive websites that capture your brand essence and engage your audience.', href: '/services#websites', variant: 'default' as const, buttonStyle: 'ghost' as const },
    { title: 'Web Applications', description: 'Complex, interactive applications built with modern frameworks and best practices for optimal performance.', href: '/services#applications', variant: 'primary' as const, buttonStyle: 'primary' as const, featured: true },
    { title: 'UI/UX Design', description: 'User-centered design that combines aesthetics with functionality for exceptional user experiences.', href: '/services#design', variant: 'default' as const, buttonStyle: 'ghost' as const },
  ];

  const comparisonData = [
    { feature: 'Performance', uiforge: 'Blazing-fast Next.js sites (90+ Lighthouse score)', competitors: 'Bloated, plugin-heavy code' },
    { feature: 'Customization', uiforge: 'Fully tailored UI/UX design', competitors: 'Limited templates' },
    { feature: 'Ownership', uiforge: '100% code ownership', competitors: 'Platform-locked' },
    { feature: 'SEO', uiforge: 'Clean semantic HTML + custom meta control', competitors: 'Generic SEO tools' },
    { feature: 'Support', uiforge: 'Dedicated developer & designer', competitors: 'Customer service chatbot' },
    { feature: 'Scalability', uiforge: 'Grows with your business', competitors: 'Hard to migrate' },
  ];

  const processSteps = [
    { number: 1, title: 'Discover', description: 'Free consultation to define goals, understand your vision, and map out the perfect strategy.', icon: '🔍', color: 'rgba(239, 68, 68, 0.2)' },
    { number: 2, title: 'Design', description: 'Figma prototypes + brand strategy to visualize your project before a single line of code.', icon: '🎨', color: 'rgba(239, 68, 68, 0.3)' },
    { number: 3, title: 'Develop', description: 'Modern code, smooth animations, and CMS integration built with cutting-edge technology.', icon: '⚡', color: 'rgba(239, 68, 68, 0.4)' },
    { number: 4, title: 'Deliver', description: 'Launch, SEO optimization, analytics setup, and ongoing support to ensure success.', icon: '🚀', color: 'rgba(239, 68, 68, 0.5)' },
  ];

  const testimonials = [
    { quote: "UiForge transformed our online presence completely. The attention to detail and professionalism was outstanding.", name: "Sarah Johnson", title: "CEO, TechStart Inc." },
    { quote: "Working with UiForge was a breeze. They delivered exactly what we needed, on time and within budget.", name: "Michael Chen", title: "Founder, Digital Ventures" },
    { quote: "The performance improvements were incredible. Our site went from sluggish to lightning-fast.", name: "Emily Rodriguez", title: "Marketing Director, GrowthCo" }
  ];

  return (
    <>
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', background: 'var(--background-deep)', overflow: 'visible', zIndex: 2, paddingBottom: 'clamp(120px, 15vw, 180px)' }}>
        <ParticleField />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <ScrollReveal direction="scale">
              <h1 className="heading-xl" style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                lineHeight: '1.1', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2)'
              }}>
                We Forge Interfaces That Convert.
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem', maxWidth: '750px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8' }}>
                High-performance, modern websites built with Next.js — not cookie-cutter templates.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn btn-primary btn-lg hover-lift hover-glow-intense" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                  View Pricing
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-lg hover-lift" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', background: 'transparent', border: '2px solid var(--primary)', color: 'white' }}>
                  Book a Free Strategy Call
                </Link>
              </div>
            </ScrollReveal>
            <ScrollFade>
              <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="heading-lg" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>50+</div>
                  <div className="body-sm" style={{ color: 'var(--foreground-muted)', marginTop: '0.5rem' }}>Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="heading-lg" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>100%</div>
                  <div className="body-sm" style={{ color: 'var(--foreground-muted)', marginTop: '0.5rem' }}>Satisfaction</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="heading-lg" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>5+</div>
                  <div className="body-sm" style={{ color: 'var(--foreground-muted)', marginTop: '0.5rem' }}>Years</div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative', overflow: 'visible', zIndex: 1, paddingBottom: 'clamp(120px, 15vw, 180px)' }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <AnimatedGradient />
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <ParallaxText speed={0.5}>
            <h2 className="heading-lg text-center" style={{ 
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)'
            }}>What We Forge</h2>
          </ParallaxText>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="body-lg text-center" style={{ color: 'var(--foreground-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
              From complete websites to complex web applications, we craft digital experiences that stand out.
            </p>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <GlassCard 
                    variant={service.variant} 
                    hover={true} 
                    animate={true} 
                    className={`group ${service.featured ? 'border-2 border-primary/30' : ''}`}
                    style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2.5rem' }}
                  >
                    <div className={`absolute inset-0 bg-linear-to-br ${service.featured ? 'from-primary/20' : 'from-primary/10'} to-transparent ${service.featured ? 'opacity-50' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <h3 className="heading-sm" style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}>{service.title}</h3>
                      <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', flex: 1, lineHeight: '1.7' }}>
                        {service.description}
                      </p>
                      <Link 
                        href={service.href} 
                        className={`btn btn-${service.buttonStyle} hover-lift ${service.featured ? 'hover-glow-intense' : ''}`}
                        style={{ alignSelf: 'flex-start' }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose UiForge - Comparison Table */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'visible', zIndex: 2, paddingBottom: 'clamp(120px, 15vw, 180px)' }}>
        <SectionDivider variant="drip" position="top" color="var(--background-charcoal)" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <AnimatedGradient />
        </div>
        <ParticleField />
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="up">
            <h2 className="heading-lg text-center" style={{ 
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)'
            }}>Why Choose UiForge</h2>
            <p className="body-lg text-center" style={{ color: 'var(--foreground-muted)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
              Your website shouldn&apos;t be just another template — it should perform, convert, and impress.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="glass rounded-2xl" style={{ padding: '2.5rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(239, 68, 68, 0.3)' }}>
                    <th className="body-md" style={{ textAlign: 'left', padding: '1.25rem', color: 'var(--foreground)' }}></th>
                    <th className="heading-sm" style={{ textAlign: 'center', padding: '1.25rem', color: 'var(--primary)' }}>UiForge.io</th>
                    <th className="body-md" style={{ textAlign: 'center', padding: '1.25rem', color: 'var(--foreground-muted)' }}>Wix / Shopify / WordPress</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} style={{ borderBottom: index < comparisonData.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none' }}>
                      <td className="body-md" style={{ padding: '1.25rem', fontWeight: 600 }}>{row.feature}</td>
                      <td className="body-sm" style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--primary)' }}>{row.uiforge}</td>
                      <td className="body-sm" style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--foreground-muted)' }}>{row.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative', overflow: 'visible', zIndex: 3, paddingBottom: 'clamp(140px, 15vw, 200px)' }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" flip={true} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <AnimatedGradient />
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="up">
            <h2 className="heading-lg text-center" style={{ 
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)'
            }}>Our Process</h2>
            <p className="body-lg text-center" style={{ color: 'var(--foreground-muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
              From discovery to delivery, we follow a proven process to bring your vision to life.
            </p>
          </ScrollReveal>
          
          <div style={{ maxWidth: '900px', margin: '0 auto 3rem', position: 'relative' }}>
            <StaggerContainer staggerDelay={0.2}>
              {processSteps.map((step) => (
                <StaggerItem key={step.number}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                    {/* Step Number Circle & Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div className="gradient-primary" style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)', flexShrink: 0 }}>
                        {step.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{step.number}.</span>
                          <h3 className="heading-md" style={{ margin: 0, color: 'var(--primary)' }}>{step.title}</h3>
                        </div>
                        <p className="body-md" style={{ color: 'var(--foreground-muted)', lineHeight: '1.7', margin: 0 }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Process CTA */}
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Ready to start your project with a proven process?
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg hover-lift hover-glow-intense">
                Start Your Free Consultation →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results & Metrics */}
      <ResultsMetricsSection />

      {/* Testimonials */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative', overflow: 'visible', zIndex: 5, paddingBottom: 'clamp(120px, 15vw, 180px)' }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" flip={true} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="up">
            <h2 className="heading-lg text-center" style={{ 
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)'
            }}>What Our Clients Say</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <GlassCard variant="default" hover={true} animate={true} style={{ height: '100%', padding: '2.5rem' }}>
                    <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: '1.7' }}>
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="body-md" style={{ fontWeight: '600' }}>{testimonial.name}</p>
                      <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>{testimonial.title}</p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '8rem 0', position: 'relative', overflow: 'visible', background: 'linear-gradient(135deg, var(--background-deep) 0%, #1a0a0a 50%, var(--background-deep) 100%)', zIndex: 6 }}>
        <SectionDivider variant="wave" position="top" color="var(--background-charcoal)" />
        <ParticleField variant="light" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="scale">
            <h2 className="heading-xl" style={{ 
              marginBottom: '2rem',
              color: 'white',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2)'
            }}>
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '600px', margin: '0 auto 3rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)', lineHeight: '1.8' }}>
              Let&apos;s bring your vision to life with a custom solution designed just for you.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-lg hover-lift hover-glow-intense" style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '1rem 2.5rem', fontSize: '1.125rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)' }}>
                Get in Touch
              </Link>
              <Link href="/pricing" className="btn btn-lg hover-lift" style={{ borderColor: 'white', color: 'white', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '1rem 2.5rem', fontSize: '1.125rem', fontWeight: 600 }}>
                View Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
