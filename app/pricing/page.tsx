import Link from "next/link";

export default function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-xl gradient-text">Transparent Pricing</h1>
            <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem' }}>
              Choose the perfect plan for your project. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Starter */}
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Starter</h3>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem' }}>
                Perfect for small businesses and personal projects
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <span className="heading-lg gradient-text">$2,500</span>
                <span className="body-md" style={{ color: 'var(--foreground-muted)' }}> / project</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Up to 5 pages
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Responsive design
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Basic SEO setup
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Contact form
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  2 weeks delivery
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  30 days support
                </li>
              </ul>
              <Link href="/contact" className="btn btn-ghost" style={{ width: '100%' }}>
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div className="card-highlight" style={{ borderRadius: '1rem', padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: '600' }}>
                POPULAR
              </div>
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Professional</h3>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem' }}>
                Ideal for growing businesses and complex sites
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <span className="heading-lg gradient-text">$5,500</span>
                <span className="body-md" style={{ color: 'var(--foreground-muted)' }}> / project</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Up to 15 pages
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Custom design system
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Advanced SEO
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  CMS integration
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Analytics setup
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  4 weeks delivery
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  90 days support
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Enterprise</h3>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem' }}>
                For large-scale applications and custom solutions
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <span className="heading-lg gradient-text">Custom</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Unlimited pages
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Full web application
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Custom features
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  API development
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Priority support
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Custom timeline
                </li>
                <li className="body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="gradient-text">✓</span>
                  Dedicated team
                </li>
              </ul>
              <Link href="/contact" className="btn btn-ghost" style={{ width: '100%' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>Add-Ons & Extras</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>E-Commerce</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                Full shopping cart and payment integration
              </p>
              <p className="body-lg gradient-text" style={{ fontWeight: '600' }}>+$1,500</p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Blog System</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                Custom blog with CMS integration
              </p>
              <p className="body-lg gradient-text" style={{ fontWeight: '600' }}>+$800</p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Multilingual</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                Support for multiple languages
              </p>
              <p className="body-lg gradient-text" style={{ fontWeight: '600' }}>+$600</p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Custom Animations</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1rem' }}>
                Advanced animations and interactions
              </p>
              <p className="body-lg gradient-text" style={{ fontWeight: '600' }}>+$500</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>Frequently Asked Questions</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>What&apos;s included in the price?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                All prices include design, development, testing, deployment, and the specified support period. You own all the code and assets.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Do you offer payment plans?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Yes! We offer flexible payment plans with 50% upfront and 50% upon completion for all projects.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>What if I need changes after launch?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                All packages include a support period for bug fixes and minor adjustments. Additional changes can be handled through our maintenance plans.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Can I upgrade my plan later?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Absolutely! You can start with a smaller package and add features or upgrade as your needs grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary" style={{ padding: '6rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Ready to Start Your Project?
          </h2>
          <p className="body-lg" style={{ color: 'white', marginBottom: '2.5rem' }}>
            Get in touch for a free consultation and custom quote.
          </p>
          <Link href="/contact" className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--primary)', border: 'none' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
