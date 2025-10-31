"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="heading-xl gradient-text">Get In Touch</h1>
            <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginTop: '2rem' }}>
              Ready to start your project? Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding" style={{ background: 'var(--background-charcoal)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Form */}
            <div>
              <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" className="body-md" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'var(--background-deep)',
                      color: 'var(--foreground)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="body-md" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'var(--background-deep)',
                      color: 'var(--foreground)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="body-md" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'var(--background-deep)',
                      color: 'var(--foreground)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="body-md" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'var(--background-deep)',
                      color: 'var(--foreground)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="website">Custom Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="design">UI/UX Design</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="body-md" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'var(--background-deep)',
                      color: 'var(--foreground)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="body-md" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'var(--background-deep)',
                      color: 'var(--foreground)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Contact Information</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="card">
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>📧 Email</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    hello@uiforge.io
                  </p>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    support@uiforge.io
                  </p>
                </div>

                <div className="card">
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>💬 Response Time</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    We typically respond within 24 hours during business days.
                  </p>
                </div>

                <div className="card">
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>🕐 Business Hours</h3>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                  <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                    Weekend: Closed
                  </p>
                </div>

                <div className="card">
                  <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>🔗 Connect With Us</h3>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <Link href="#" className="btn btn-ghost btn-sm">
                      Twitter
                    </Link>
                    <Link href="#" className="btn btn-ghost btn-sm">
                      LinkedIn
                    </Link>
                    <Link href="#" className="btn btn-ghost btn-sm">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center" style={{ marginBottom: '4rem' }}>Before You Reach Out</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>What information should I include?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Tell us about your project goals, timeline, budget, and any specific requirements or features you need.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>How long does a typical project take?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-3 months or more.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Do you work with international clients?</h3>
              <p className="body-md" style={{ color: 'var(--foreground-muted)' }}>
                Yes! We work with clients worldwide and are experienced in remote collaboration across different time zones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
