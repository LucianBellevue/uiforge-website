import Link from "next/link";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-xl gradient-text">Our Services</h1>
            <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem' }}>
              From concept to deployment, we offer comprehensive frontend development services tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Websites */}
      <section id="websites" className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Custom Websites</h2>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                Beautiful, responsive websites that capture your brand essence and engage your audience. Every site is custom-built to your specifications.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Fully responsive design
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  SEO optimized
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Lightning-fast performance
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Content management system
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                View Pricing
              </Link>
            </div>
            <div className="card" style={{ padding: '3rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌐</div>
                <p className="body-lg" style={{ color: 'var(--foreground-muted)' }}>Professional Web Presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Applications */}
      <section id="applications" className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="card-highlight" style={{ borderRadius: '1rem', padding: '3rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>⚡</div>
                <p className="body-lg" style={{ color: 'var(--foreground-muted)' }}>Powerful Applications</p>
              </div>
            </div>
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Web Applications</h2>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                Complex, interactive applications built with modern frameworks. From dashboards to SaaS platforms, we bring your ideas to life.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  React, Next.js, Vue.js
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Real-time functionality
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  API integration
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Scalable architecture
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section id="design" className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>UI/UX Design</h2>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                User-centered design that combines aesthetics with functionality. We create interfaces that users love to interact with.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Wireframing & prototyping
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  User research & testing
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Design systems
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text" style={{ fontSize: '1.5rem' }}>✓</span>
                  Brand identity
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                View Pricing
              </Link>
            </div>
            <div className="card" style={{ padding: '3rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎨</div>
                <p className="body-lg" style={{ color: 'var(--foreground-muted)' }}>Beautiful Interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>Additional Services</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>E-Commerce</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Full-featured online stores with payment integration, inventory management, and more.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Maintenance & Support</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Ongoing updates, security patches, and technical support to keep your site running smoothly.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Performance Optimization</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Speed up your existing site with expert optimization techniques and best practices.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Migration & Redesign</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Modernize your outdated website with a fresh design and updated technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary" style={{ padding: '6rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Ready to Get Started?
          </h2>
          <p className="body-lg" style={{ color: 'white', marginBottom: '2.5rem' }}>
            Let&apos;s discuss your project and find the perfect solution for your needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--primary)', border: 'none' }}>
              Contact Us
            </Link>
            <Link href="/pricing" className="btn btn-ghost btn-lg" style={{ borderColor: 'white', color: 'white' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
