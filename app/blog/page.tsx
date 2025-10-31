import Link from "next/link";

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-xl gradient-text">Blog</h1>
            <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem' }}>
              Insights, tutorials, and updates from the world of frontend development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div className="card-highlight" style={{ borderRadius: '1rem', padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div style={{ height: '300px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                ⚡
              </div>
              <div>
                <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                  FEATURED POST
                </p>
                <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                  The Future of Web Development in 2024
                </h2>
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                  Explore the latest trends, technologies, and best practices shaping the future of frontend development.
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
                  <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>By UIForge Team</p>
                  <span style={{ color: 'var(--foreground-muted)' }}>•</span>
                  <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>5 min read</p>
                </div>
                <Link href="/blog/future-of-web-development" className="btn btn-primary">
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Latest Articles</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Post 1 */}
            <div className="card">
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                🎨
              </div>
              <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                DESIGN
              </p>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                Creating Effective Design Systems
              </h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                Learn how to build scalable design systems that improve consistency and development speed.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Dec 15, 2024</p>
                <Link href="/blog/design-systems" className="btn btn-ghost btn-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Post 2 */}
            <div className="card">
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                ⚡
              </div>
              <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                PERFORMANCE
              </p>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                Optimizing React Applications
              </h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                Practical tips and techniques to improve the performance of your React applications.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Dec 10, 2024</p>
                <Link href="/blog/react-optimization" className="btn btn-ghost btn-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Post 3 */}
            <div className="card">
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                🚀
              </div>
              <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                TUTORIAL
              </p>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                Getting Started with Next.js 14
              </h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                A comprehensive guide to building modern web applications with Next.js 14.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Dec 5, 2024</p>
                <Link href="/blog/nextjs-guide" className="btn btn-ghost btn-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Post 4 */}
            <div className="card">
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                🔧
              </div>
              <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                TOOLS
              </p>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                Essential Frontend Tools for 2024
              </h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                Discover the must-have tools and libraries that will boost your productivity.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Nov 28, 2024</p>
                <Link href="/blog/frontend-tools" className="btn btn-ghost btn-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Post 5 */}
            <div className="card">
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                💡
              </div>
              <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                BEST PRACTICES
              </p>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                Writing Clean, Maintainable Code
              </h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                Best practices and patterns for writing code that scales and stands the test of time.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Nov 20, 2024</p>
                <Link href="/blog/clean-code" className="btn btn-ghost btn-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Post 6 */}
            <div className="card">
              <div style={{ height: '200px', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                🎯
              </div>
              <p className="body-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                STRATEGY
              </p>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                SEO for Modern Web Apps
              </h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem' }}>
                How to optimize your single-page applications for search engines effectively.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ color: 'var(--foreground-muted)' }}>Nov 15, 2024</p>
                <Link href="/blog/seo-web-apps" className="btn btn-ghost btn-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="gradient-primary" style={{ padding: '6rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Stay Updated
          </h2>
          <p className="body-lg" style={{ color: 'white', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Subscribe to our newsletter for the latest articles, tips, and updates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                minWidth: '250px',
                padding: '1rem 1.5rem', 
                borderRadius: '0.5rem', 
                border: 'none', 
                fontSize: '1rem',
                background: 'white',
                color: 'var(--background-deep)'
              }} 
            />
            <button className="btn btn-secondary" style={{ background: 'var(--background-deep)', color: 'white', border: 'none' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
