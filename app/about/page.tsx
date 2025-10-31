import Link from "next/link";
import { ScrollReveal, NeumorphicCard, ParallaxText, StaggerContainer, StaggerItem, AnimatedGradient } from "@/app/components/ui";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedGradient />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <ScrollReveal direction="scale">
              <h1 className="heading-xl gradient-text">About UIForge</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem' }}>
                We are a team of passionate frontend developers and designers dedicated to crafting exceptional digital experiences.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <div>
                <ParallaxText speed={0.3}>
                  <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Our Story</h2>
                </ParallaxText>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  UIForge was born from a simple belief: every business deserves a digital presence that truly represents their vision and values.
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  We combine technical expertise with creative design to deliver solutions that not only look stunning but perform flawlessly across all devices and platforms.
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                  Our commitment to excellence and attention to detail has helped dozens of clients transform their digital presence and achieve their business goals.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <NeumorphicCard variant="raised" className="hover-lift">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h3 className="heading-xl gradient-text">50+</h3>
                    <p className="body-lg" style={{ color: 'var(--foreground-muted)' }}>Projects Completed</p>
                  </div>
                  <div>
                    <h3 className="heading-xl gradient-text">100%</h3>
                    <p className="body-lg" style={{ color: 'var(--foreground-muted)' }}>Client Satisfaction</p>
                  </div>
                  <div>
                    <h3 className="heading-xl gradient-text">5+</h3>
                    <p className="body-lg" style={{ color: 'var(--foreground-muted)' }}>Years Experience</p>
                  </div>
                </div>
              </NeumorphicCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>Our Values</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Quality First</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                We never compromise on quality. Every line of code, every design element is crafted with precision and care.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Innovation</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                We stay ahead of the curve, constantly learning and implementing the latest technologies and best practices.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Collaboration</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Your input matters. We work closely with you throughout the entire process to ensure your vision comes to life.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Transparency</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Clear communication, honest timelines, and no hidden costs. You always know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>Our Process</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div className="gradient-primary" style={{ minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                1
              </div>
              <div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Discovery</h3>
                <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                  We start by understanding your goals, target audience, and project requirements through detailed consultation.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div className="gradient-primary" style={{ minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                2
              </div>
              <div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Design</h3>
                <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                  Our designers create mockups and prototypes that bring your vision to life, ensuring every detail aligns with your brand.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div className="gradient-primary" style={{ minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                3
              </div>
              <div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Development</h3>
                <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                  We build your project using modern technologies, following best practices for performance, security, and scalability.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div className="gradient-primary" style={{ minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                4
              </div>
              <div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Launch & Support</h3>
                <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                  We deploy your project and provide ongoing support to ensure everything runs smoothly and continues to evolve with your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary" style={{ padding: '6rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Ready to Work Together?
          </h2>
          <p className="body-lg" style={{ color: 'white', marginBottom: '2.5rem' }}>
            Let&apos;s discuss how we can help bring your project to life.
          </p>
          <Link href="/contact" className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--primary)', border: 'none' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
