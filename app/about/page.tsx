"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { ParticleField } from "@/app/components/ui/AnimatedBackground";
import { SectionDivider } from "@/app/components/ui/SectionDivider";
import { FaCode, FaHandshake, FaRocket, FaTrophy } from "react-icons/fa";
import { useEffect, useRef } from "react";

// SEO metadata managed by layout

// Counter component for animated numbers
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function About() {
  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: 'var(--background-deep)',
        paddingTop: 'clamp(120px, 15vw, 180px)',
        paddingBottom: 'clamp(120px, 15vw, 180px)',
        zIndex: 1,
      }}>
        <ParticleField variant="light" />
        
        {/* Grid Pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {/* Badge */}
            <motion.div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                marginBottom: '2rem',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span style={{ fontSize: '1.25rem' }}>✨</span>
              <span className="body-sm" style={{ fontWeight: 600, color: 'var(--primary)' }}>
                About UiForge
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="heading-xl"
              style={{
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting Digital Excellence
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                One Line at a Time
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="body-lg"
              style={{
                color: 'var(--foreground-muted)',
                lineHeight: '1.8',
                maxWidth: '700px',
                margin: '0 auto 3rem',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a dedicated team of frontend developers and designers passionate about creating 
              exceptional digital experiences that combine cutting-edge technology with stunning design.
            </motion.p>

            {/* Core Values Pills */}
            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {['Craftsmanship', 'Transparency', 'Modern Stack', 'Results'].map((value, index) => (
                <motion.span
                  key={value}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: 'var(--foreground)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {value}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Comprehensive & SEO-Rich */}
      <section style={{ 
        position: 'relative',
        background: 'var(--background-charcoal)',
        paddingTop: 'clamp(100px, 12vw, 150px)',
        paddingBottom: 'clamp(100px, 12vw, 150px)',
        overflow: 'visible',
        zIndex: 2,
      }}>
        <SectionDivider variant="liquid" position="top" color="var(--background-deep)" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <ParticleField variant="light" />
        </div>
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.h2
              className="heading-lg"
              style={{
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #000000 0%, var(--primary) 50%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="body-lg"
              style={{ color: 'var(--foreground-muted)', maxWidth: '600px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The principles that guide every project we build and every relationship we forge
            </motion.p>
          </div>

          {/* Values Grid - Enhanced 2x2 Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Craftsmanship - Card 1 */}
            <motion.div
              style={{
                padding: '3rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
                border: '2px solid rgba(239, 68, 68, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                borderColor: 'rgba(239, 68, 68, 0.4)',
                boxShadow: '0 20px 60px rgba(239, 68, 68, 0.15)',
                scale: 1.02,
              }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <motion.div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    fontSize: '2.5rem',
                    color: 'var(--primary)',
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCode />
                </motion.div>
                
                <h3 className="heading-md" style={{ 
                  marginBottom: '1rem', 
                  color: 'var(--foreground)',
                  background: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Craftsmanship
                </h3>
                
                <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                  We treat web development as an art form. Every line of code is meticulously crafted, every pixel 
                  perfectly placed. Our attention to detail ensures that your website isn&apos;t just functional—it&apos;s a 
                  masterpiece of modern web development.
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Clean, maintainable code architecture',
                    'Pixel-perfect responsive design',
                    'Optimized performance and load times',
                    'Accessibility-first development',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem', 
                        color: 'var(--foreground-muted)', 
                        fontSize: '0.95rem',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{
                        backgroundColor: 'rgba(239, 68, 68, 0.05)',
                        x: 5,
                      }}
                    >
                      <motion.span 
                        style={{ 
                          color: 'var(--primary)', 
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                        }}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      >
                        →
                      </motion.span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Transparency */}
            <motion.div
              style={{
                padding: '3rem',
                borderRadius: '20px',
                background: 'rgba(239, 68, 68, 0.03)',
                border: '1px solid rgba(239, 68, 68, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                borderColor: 'rgba(239, 68, 68, 0.3)',
                boxShadow: '0 10px 40px rgba(239, 68, 68, 0.1)',
                y: -5,
              }}
            >
              <motion.div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '2rem',
                  color: 'var(--primary)',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaHandshake />
              </motion.div>
              
              <h3 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>
                Transparency
              </h3>
              
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                No surprises, no hidden fees, no vague promises. We believe in clear communication from day one. 
                You&apos;ll always know the project status, timeline, and costs. We&apos;re partners in your success, 
                and that starts with honest, open dialogue.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Clear project timelines and milestones',
                  'Upfront pricing with no hidden costs',
                  'Regular progress updates and reports',
                  'Direct access to development team',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--foreground-muted)', fontSize: '0.95rem' }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Modern Stack */}
            <motion.div
              style={{
                padding: '3rem',
                borderRadius: '20px',
                background: 'rgba(239, 68, 68, 0.03)',
                border: '1px solid rgba(239, 68, 68, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                borderColor: 'rgba(239, 68, 68, 0.3)',
                boxShadow: '0 10px 40px rgba(239, 68, 68, 0.1)',
                y: -5,
              }}
            >
              <motion.div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '2rem',
                  color: 'var(--primary)',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaRocket />
              </motion.div>
              
              <h3 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>
                Modern Stack
              </h3>
              
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                We leverage cutting-edge technologies like React, Next.js, and TypeScript to build scalable, 
                maintainable applications. Our modern tech stack ensures your project is built on a solid 
                foundation that can grow with your business and adapt to future needs.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'React & Next.js for blazing fast apps',
                  'TypeScript for type-safe code',
                  'Tailwind CSS for rapid styling',
                  'Modern deployment & CI/CD pipelines',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--foreground-muted)', fontSize: '0.95rem' }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              style={{
                padding: '3rem',
                borderRadius: '20px',
                background: 'rgba(239, 68, 68, 0.03)',
                border: '1px solid rgba(239, 68, 68, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                borderColor: 'rgba(239, 68, 68, 0.3)',
                boxShadow: '0 10px 40px rgba(239, 68, 68, 0.1)',
                y: -5,
              }}
            >
              <motion.div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '2rem',
                  color: 'var(--primary)',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaTrophy />
              </motion.div>
              
              <h3 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>
                Results
              </h3>
              
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Beautiful design and clean code mean nothing without measurable results. We focus on metrics 
                that matter: conversion rates, user engagement, page speed, and SEO performance. Your success 
                is our success, and we measure it in tangible outcomes.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Data-driven optimization strategies',
                  'Core Web Vitals optimization',
                  'Conversion-focused design principles',
                  'Comprehensive analytics integration',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--foreground-muted)', fontSize: '0.95rem' }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story & Stats Section */}
      <section style={{ 
        position: 'relative',
        background: 'var(--background-deep)',
        paddingTop: 'clamp(100px, 12vw, 150px)',
        paddingBottom: 'clamp(100px, 12vw, 150px)',
        overflow: 'visible',
        zIndex: 3,
      }}>
        <SectionDivider variant="drip" position="top" color="var(--background-charcoal)" />
        <ParticleField variant="light" />
        
        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '5rem', alignItems: 'center' }}>
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                }}
              >
                🚀 Our Journey
              </motion.div>
              
              <h2 className="heading-lg" style={{ 
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Building the Future of Web Development
              </h2>
              
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                UiForge was founded on a simple belief: every business deserves a digital presence that truly 
                represents their vision and values. We combine technical expertise with creative design to deliver 
                solutions that not only look stunning but perform flawlessly across all devices and platforms.
              </p>
              
              <p className="body-md" style={{ color: 'var(--foreground-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Our team of experienced developers and designers has worked with startups, established businesses, 
                and everything in between. We understand that every project is unique, and we tailor our approach 
                to meet your specific needs and goals.
              </p>
              
              <p className="body-md" style={{ color: 'var(--foreground-muted)', lineHeight: '1.8' }}>
                From concept to deployment and beyond, we are committed to delivering exceptional results that 
                drive real business value and create lasting impressions on your users.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { value: 50, suffix: '+', label: 'Projects Delivered', description: 'Successfully launched and maintained' },
                { value: 100, suffix: '%', label: 'Client Satisfaction', description: 'Rated by our happy clients' },
                { value: 5, suffix: '+', label: 'Years Experience', description: 'Building exceptional web experiences' },
                { value: 98, suffix: '%', label: 'Performance Score', description: 'Average Lighthouse score' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    padding: '2rem',
                    borderRadius: '16px',
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.15)',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                    boxShadow: '0 10px 30px rgba(239, 68, 68, 0.15)',
                  }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '100px',
                      height: '100px',
                      background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                      zIndex: 0,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3
                      className="heading-xl"
                      style={{
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        display: 'inline-block',
                      }}
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="body-sm" style={{ color: 'var(--foreground)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {stat.label}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)' }}>
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section style={{ 
        position: 'relative',
        background: 'var(--background-charcoal)',
        paddingTop: 'clamp(80px, 10vw, 120px)',
        paddingBottom: 'clamp(80px, 10vw, 120px)',
        overflow: 'visible',
        zIndex: 4,
      }}>
        <SectionDivider variant="wave" position="top" color="var(--background-deep)" flip={true} />
        <ParticleField variant="light" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            style={{
              position: 'relative',
              maxWidth: '900px',
              margin: '0 auto',
              padding: 'clamp(3rem, 5vw, 4rem)',
              borderRadius: '24px',
              background: 'rgba(28, 28, 28, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              boxShadow: '0 20px 60px rgba(239, 68, 68, 0.2)',
              overflow: 'hidden',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              borderColor: 'rgba(239, 68, 68, 0.5)',
              boxShadow: '0 25px 70px rgba(239, 68, 68, 0.3)',
            }}
          >
            {/* Animated Border Glow 1 - Horizontal Movement */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-100px',
                left: '-100px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              animate={{
                x: ['0%', '100%', '100%', '0%', '0%'],
                y: ['0%', '0%', '100%', '100%', '0%'],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Animated Border Glow 2 - Opposite Direction */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-100px',
                right: '-100px',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              animate={{
                x: ['0%', '-100%', '-100%', '0%', '0%'],
                y: ['0%', '0%', '-100%', '-100%', '0%'],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Corner Glows - Stationary */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '30%',
                height: '30%',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '30%',
                height: '30%',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                💼 Let&apos;s Collaborate
              </motion.div>

              <h2 className="heading-lg" style={{ 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #FFFFFF 0%, var(--primary) 50%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Ready to Build Something Amazing?
              </h2>
              
              <p className="body-lg" style={{ color: 'var(--foreground-muted)', marginBottom: '3rem', lineHeight: '1.7' }}>
                Whether you have a detailed project plan or just an idea, we&apos;d love to hear from you. 
                Let&apos;s discuss how we can help bring your vision to life with cutting-edge technology and exceptional design.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className="btn btn-primary btn-lg"
                    style={{ 
                      padding: '1.25rem 3rem',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    Start Your Project
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/work" 
                    className="btn btn-secondary btn-lg"
                    style={{ 
                      padding: '1.25rem 3rem',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
