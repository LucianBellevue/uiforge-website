import Link from "next/link";

export default function Work() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-xl gradient-text">Our Work</h1>
            <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem' }}>
              Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            
            {/* Project 1 */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '250px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '4rem' }}>🏢</div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Corporate Website</h3>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                  E-Commerce • React • Next.js
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  A modern corporate website with integrated e-commerce functionality and custom CMS.
                </p>
                <Link href="#" className="btn btn-ghost btn-sm">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '250px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '4rem' }}>📱</div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>SaaS Dashboard</h3>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                  Web App • TypeScript • React
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  Complex analytics dashboard with real-time data visualization and user management.
                </p>
                <Link href="#" className="btn btn-ghost btn-sm">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '250px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '4rem' }}>🎨</div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Design Agency Portfolio</h3>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                  Portfolio • Next.js • Animations
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  Stunning portfolio website with custom animations and interactive elements.
                </p>
                <Link href="#" className="btn btn-ghost btn-sm">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '250px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '4rem' }}>🛍️</div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>E-Commerce Platform</h3>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                  E-Commerce • Next.js • Stripe
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  Full-featured online store with payment processing and inventory management.
                </p>
                <Link href="#" className="btn btn-ghost btn-sm">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 5 */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '250px', background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '4rem' }}>📚</div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Educational Platform</h3>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                  Web App • React • Video Streaming
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  Online learning platform with course management and video streaming capabilities.
                </p>
                <Link href="#" className="btn btn-ghost btn-sm">
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 6 */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '250px', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '4rem' }}>🍽️</div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Restaurant Website</h3>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                  Website • Next.js • Reservations
                </p>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  Beautiful restaurant website with online ordering and reservation system.
                </p>
                <Link href="#" className="btn btn-ghost btn-sm">
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>What Our Clients Say</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &quot;UIForge transformed our online presence completely. The attention to detail and professionalism was outstanding.&quot;
              </p>
              <div>
                <p className="body-md" style={{ fontWeight: '600' }}>Sarah Johnson</p>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>CEO, TechStart Inc.</p>
              </div>
            </div>
            
            <div className="card">
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &quot;Working with UIForge was a breeze. They delivered exactly what we needed, on time and within budget.&quot;
              </p>
              <div>
                <p className="body-md" style={{ fontWeight: '600' }}>Michael Chen</p>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Founder, DesignCo</p>
              </div>
            </div>
            
            <div className="card">
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &quot;The quality of work and level of support we received was exceptional. Highly recommended!&quot;
              </p>
              <div>
                <p className="body-md" style={{ fontWeight: '600' }}>Emily Rodriguez</p>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Marketing Director, GrowthLab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary" style={{ padding: '6rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className="body-lg" style={{ color: 'white', marginBottom: '2.5rem' }}>
            Ready to see your project featured in our portfolio?
          </p>
          <Link href="/contact" className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--primary)', border: 'none' }}>
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
