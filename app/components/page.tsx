export default function ComponentsDemo() {
  return (
    <div style={{ background: 'var(--background-deep)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="heading-xl gradient-text text-center animate-fade-in-up">
            UIForge Design System
          </h1>
          <p className="body-lg text-center" style={{ color: 'var(--foreground-muted)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            A comprehensive showcase of all available components and styles
          </p>
        </div>
      </section>

      {/* Typography Section */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Typography</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Heading XL</p>
              <h1 className="heading-xl">The Quick Brown Fox</h1>
            </div>
            
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Heading LG</p>
              <h2 className="heading-lg">The Quick Brown Fox</h2>
            </div>
            
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Heading MD</p>
              <h3 className="heading-md">The Quick Brown Fox</h3>
            </div>
            
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Heading SM</p>
              <h4 className="heading-sm">The Quick Brown Fox</h4>
            </div>
            
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Body LG</p>
              <p className="body-lg">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
            </div>
            
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Body MD</p>
              <p className="body-md">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
            </div>
            
            <div>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Body SM</p>
              <p className="body-sm">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Buttons</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Primary Buttons */}
            <div>
              <h3 className="heading-sm" style={{ marginBottom: '1.5rem' }}>Primary Buttons</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button className="btn btn-primary btn-lg">Large Button</button>
                <button className="btn btn-primary">Default Button</button>
                <button className="btn btn-primary btn-sm">Small Button</button>
              </div>
            </div>
            
            {/* Secondary Buttons */}
            <div>
              <h3 className="heading-sm" style={{ marginBottom: '1.5rem' }}>Secondary Buttons</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button className="btn btn-secondary btn-lg">Large Button</button>
                <button className="btn btn-secondary">Default Button</button>
                <button className="btn btn-secondary btn-sm">Small Button</button>
              </div>
            </div>
            
            {/* Ghost Buttons */}
            <div>
              <h3 className="heading-sm" style={{ marginBottom: '1.5rem' }}>Ghost Buttons</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button className="btn btn-ghost btn-lg">Large Button</button>
                <button className="btn btn-ghost">Default Button</button>
                <button className="btn btn-ghost btn-sm">Small Button</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Cards</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Standard Card</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                This is a standard card with hover effects. It features a subtle border and smooth transitions.
              </p>
              <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Learn More</button>
            </div>
            
            <div className="card-highlight" style={{ borderRadius: '1rem', padding: '2rem' }}>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Highlighted Card</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                This card features a gradient border to draw attention to premium or featured content.
              </p>
              <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Get Started</button>
            </div>
            
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Another Card</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Cards are perfect for organizing content into digestible sections with consistent styling.
              </p>
              <button className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Gradients</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Gradient Text */}
            <div>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Gradient Text</h3>
              <h2 className="heading-lg gradient-text">Molten Orange Gradient</h2>
            </div>
            
            {/* Gradient Background */}
            <div>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Gradient Background</h3>
              <div className="gradient-primary" style={{ padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
                <h3 className="heading-md" style={{ color: 'white' }}>Full Gradient Background</h3>
                <p className="body-lg" style={{ color: 'white', marginTop: '1rem' }}>
                  Perfect for hero sections and call-to-action areas
                </p>
              </div>
            </div>
            
            {/* Gradient Border */}
            <div>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Gradient Border</h3>
              <div className="gradient-border" style={{ borderRadius: '1rem', padding: '3rem', textAlign: 'center' }}>
                <h3 className="heading-md">Gradient Border Effect</h3>
                <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '1rem' }}>
                  Subtle yet striking border treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects Section */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Visual Effects</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="card glow-primary">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Glow Effect</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Box shadow glow effect
              </p>
            </div>
            
            <div className="card animate-pulse-glow">
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Pulse Glow</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Animated pulsing glow
              </p>
            </div>
            
            <div className="card backdrop-blur" style={{ background: 'rgba(28, 28, 28, 0.7)' }}>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Backdrop Blur</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Frosted glass effect
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Color Palette</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--primary)', height: '100px', borderRadius: '0.5rem', marginBottom: '1rem' }}></div>
              <p className="body-md" style={{ fontWeight: 600 }}>Primary</p>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>#FF7E29</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--primary-light)', height: '100px', borderRadius: '0.5rem', marginBottom: '1rem' }}></div>
              <p className="body-md" style={{ fontWeight: 600 }}>Primary Light</p>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>#FFB347</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--background-charcoal)', height: '100px', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}></div>
              <p className="body-md" style={{ fontWeight: 600 }}>Charcoal</p>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>#1C1C1C</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--background-deep)', height: '100px', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}></div>
              <p className="body-md" style={{ fontWeight: 600 }}>Deep Black</p>
              <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>#0E0E0E</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container-custom">
          <p className="body-md text-center" style={{ color: 'var(--foreground-muted)' }}>
            UIForge Design System © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
