import Link from "next/link";
import { FloatingOrbs, ParticleField, AnimatedGradient, ScrollReveal, GlassCard, StaggerContainer, StaggerItem, ScrollProgress, ParallaxText, ScrollFade } from "@/app/components/ui";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <ParticleField />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <ScrollReveal direction="scale">
              <h1 className="heading-xl animate-shimmer" style={{ textShadow: '0 0 40px rgba(239, 68, 68, 0.8), 0 0 80px rgba(239, 68, 68, 0.4), 0 0 120px rgba(239, 68, 68, 0.2)' }}>
                Forge Your Digital Future
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem', maxWidth: '700px', margin: '2rem auto 0' }}>
                Transform your vision into stunning web experiences with premium frontend development services tailored to your needs.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn btn-primary btn-lg hover-lift hover-glow-intense">
                  Explore Services
                </Link>
                <Link href="/work" className="btn btn-secondary btn-lg hover-lift">
                  View Our Work
                </Link>
              </div>
            </ScrollReveal>
            <ScrollFade>
              <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="heading-lg gradient-text">50+</div>
                  <div className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="heading-lg gradient-text">100%</div>
                  <div className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Satisfaction</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="heading-lg gradient-text">5+</div>
                  <div className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Years</div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <AnimatedGradient />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ParallaxText speed={0.5}>
            <h2 className="heading-lg text-center animate-shimmer" style={{ marginBottom: '1rem', textShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}>What We Forge</h2>
          </ParallaxText>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="body-lg text-center" style={{ color: 'var(--foreground-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '1rem auto 4rem' }}>
              From complete websites to complex web applications, we craft digital experiences that stand out.
            </p>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <StaggerItem>
                <GlassCard variant="default" hover={true} animate={true} className="group" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h3 className="heading-sm gradient-text" style={{ marginBottom: '1.25rem' }}>Custom Websites</h3>
                    <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', flex: 1, lineHeight: '1.7' }}>
                      Beautifully designed, fully responsive websites that capture your brand essence and engage your audience.
                    </p>
                    <Link href="/services#websites" className="btn btn-ghost hover-lift" style={{ alignSelf: 'flex-start' }}>
                      Learn More →
                    </Link>
                  </div>
                </GlassCard>
              </StaggerItem>
              
              <StaggerItem>
                <GlassCard variant="primary" hover={true} animate={true} className="group border-2 border-primary/30" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h3 className="heading-sm gradient-text" style={{ marginBottom: '1.25rem' }}>Web Applications</h3>
                    <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', flex: 1, lineHeight: '1.7' }}>
                      Complex, interactive applications built with modern frameworks and best practices for optimal performance.
                    </p>
                    <Link href="/services#applications" className="btn btn-primary hover-lift hover-glow-intense" style={{ alignSelf: 'flex-start' }}>
                      Learn More →
                    </Link>
                  </div>
                </GlassCard>
              </StaggerItem>
              
              <StaggerItem>
                <GlassCard variant="default" hover={true} animate={true} className="group" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h3 className="heading-sm gradient-text" style={{ marginBottom: '1.25rem' }}>UI/UX Design</h3>
                    <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', flex: 1, lineHeight: '1.7' }}>
                      User-centered design that combines aesthetics with functionality for exceptional user experiences.
                    </p>
                    <Link href="/services#design" className="btn btn-ghost hover-lift" style={{ alignSelf: 'flex-start' }}>
                      Learn More →
                    </Link>
                  </div>
                </GlassCard>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <ParticleField />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ParallaxText speed={0.3}>
            <h2 className="heading-lg text-center animate-shimmer" style={{ marginBottom: '4rem', textShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}>Why Choose UiForge</h2>
          </ParallaxText>
          
          <StaggerContainer staggerDelay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
              <StaggerItem>
                <div style={{ textAlign: 'center' }}>
                  <div className="gradient-primary animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                    ⚡
                  </div>
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Lightning Fast</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    Optimized performance and blazing-fast load times for superior user experience.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div style={{ textAlign: 'center' }}>
                  <div className="gradient-primary animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', animationDelay: '0.5s' }}>
                    🎨
                  </div>
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Pixel Perfect</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    Meticulous attention to detail ensuring every element is crafted to perfection.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div style={{ textAlign: 'center' }}>
                  <div className="gradient-primary animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', animationDelay: '1s' }}>
                    📱
                  </div>
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Fully Responsive</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    Seamless experiences across all devices, from mobile to desktop.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div style={{ textAlign: 'center' }}>
                  <div className="gradient-primary animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', animationDelay: '1.5s' }}>
                    🚀
                  </div>
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Modern Stack</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    Built with cutting-edge technologies like React, Next.js, and TypeScript.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg-animated" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <AnimatedGradient />
        <ParticleField variant="dark" />
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="scale">
            <h2 className="heading-xl animate-shimmer" style={{ color: 'white', marginBottom: '1.5rem', textShadow: '0 0 30px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.4)' }}>
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="body-lg" style={{ color: 'white', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
              Let&apos;s bring your vision to life with a custom solution designed just for you.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-secondary btn-lg hover-lift hover-glow-intense" style={{ background: 'white', color: 'var(--primary)', border: 'none' }}>
                Get in Touch
              </Link>
              <Link href="/pricing" className="btn btn-ghost btn-lg hover-lift" style={{ borderColor: 'white', color: 'white' }}>
                View Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
