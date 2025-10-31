# UIForge Advanced Components Guide

## 🎨 Component Library Overview

This guide covers all the advanced animated components built with Framer Motion for the UIForge website.

---

## 📦 Installation

Already installed:
```bash
npm install framer-motion clsx
```

---

## 🌊 Parallax Components

### ParallaxSection
Creates a parallax scrolling effect for entire sections.

```tsx
import { ParallaxSection } from '@/app/components/ui';

<ParallaxSection speed={0.5}>
  <h1>This content moves with parallax</h1>
</ParallaxSection>
```

**Props:**
- `speed` (number): Parallax speed multiplier (default: 0.5)
- `className` (string): Additional CSS classes

### ParallaxLayer
Individual layers with different scroll speeds for depth effect.

```tsx
<ParallaxLayer speed={0.3} className="z-10">
  <div>Background layer</div>
</ParallaxLayer>
<ParallaxLayer speed={0.7} className="z-20">
  <div>Foreground layer</div>
</ParallaxLayer>
```

### ParallaxCard
3D tilt effect that follows mouse movement.

```tsx
<ParallaxCard className="card">
  <h3>Interactive 3D Card</h3>
  <p>Tilts based on mouse position</p>
</ParallaxCard>
```

---

## 🔮 Glassmorphism Components

### GlassCard
Beautiful frosted glass effect cards.

```tsx
import { GlassCard } from '@/app/components/ui';

<GlassCard variant="default" hover={true} animate={true}>
  <h3>Glass Card</h3>
  <p>With backdrop blur effect</p>
</GlassCard>
```

**Variants:**
- `default` - Dark glass with blur
- `light` - Light transparent glass
- `primary` - Orange-tinted glass

### GlassNavbar
Sticky navigation with glass effect.

```tsx
<GlassNavbar>
  <nav>Your navigation content</nav>
</GlassNavbar>
```

### GlassModal
Modal dialog with glassmorphism.

```tsx
const [isOpen, setIsOpen] = useState(false);

<GlassModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content</p>
</GlassModal>
```

---

## 🎯 Neumorphic/Skeuomorphic Components

### NeumorphicCard
Soft UI cards with realistic shadows.

```tsx
import { NeumorphicCard } from '@/app/components/ui';

<NeumorphicCard variant="raised">
  <h3>Neumorphic Card</h3>
  <p>Soft, tactile design</p>
</NeumorphicCard>
```

**Variants:**
- `raised` - Elevated appearance
- `inset` - Pressed/indented appearance
- `embossed` - Embossed effect

### NeumorphicButton
Tactile button with depth.

```tsx
<NeumorphicButton onClick={() => console.log('clicked')}>
  Click Me
</NeumorphicButton>
```

### NeumorphicInput
Input field with neumorphic styling.

```tsx
<NeumorphicInput 
  placeholder="Enter text"
  value={value}
  onChange={setValue}
/>
```

---

## 📜 Scroll Animation Components

### ScrollReveal
Reveal elements as they enter viewport.

```tsx
import { ScrollReveal } from '@/app/components/ui';

<ScrollReveal direction="up" delay={0.2}>
  <div>Fades in from bottom</div>
</ScrollReveal>
```

**Directions:**
- `up` - Slides from bottom
- `down` - Slides from top
- `left` - Slides from right
- `right` - Slides from left
- `scale` - Scales up

### StaggerContainer & StaggerItem
Stagger animations for lists.

```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem><div>Item 1</div></StaggerItem>
  <StaggerItem><div>Item 2</div></StaggerItem>
  <StaggerItem><div>Item 3</div></StaggerItem>
</StaggerContainer>
```

### ScrollProgress
Progress bar that fills as you scroll.

```tsx
<ScrollProgress />
```

### ParallaxText
Text with parallax scroll effect.

```tsx
<ParallaxText speed={0.5}>
  <h1>Parallax Heading</h1>
</ParallaxText>
```

### ScrollFade
Fade in/out based on scroll position.

```tsx
<ScrollFade>
  <div>Fades in and out</div>
</ScrollFade>
```

---

## 🌟 Animated Background Components

### FloatingOrbs
Animated floating gradient orbs.

```tsx
import { FloatingOrbs } from '@/app/components/ui';

<div style={{ position: 'relative' }}>
  <FloatingOrbs />
  <div>Your content here</div>
</div>
```

### GridPattern
Animated grid background.

```tsx
<div style={{ position: 'relative' }}>
  <GridPattern />
  <div>Content</div>
</div>
```

### AnimatedGradient
Pulsing gradient background.

```tsx
<div style={{ position: 'relative' }}>
  <AnimatedGradient />
  <div>Content</div>
</div>
```

### ParticleField
Floating particles animation.

```tsx
<div style={{ position: 'relative' }}>
  <ParticleField />
  <div>Content</div>
</div>
```

### WaveBackground
Animated wave effect.

```tsx
<div style={{ position: 'relative' }}>
  <WaveBackground />
  <div>Content</div>
</div>
```

---

## 🎨 CSS Utility Classes

### Glassmorphism
- `.glass` - Standard glass effect
- `.glass-light` - Light glass
- `.glass-primary` - Primary colored glass

### 3D & Neumorphic
- `.card-3d` - 3D transform on hover
- `.neumorphic` - Raised neumorphic style
- `.neumorphic-inset` - Inset neumorphic style
- `.embossed` - Embossed effect
- `.raised-button` - Tactile button

### Animations
- `.animate-float` - Floating animation
- `.animate-rotate-3d` - 3D rotation
- `.animate-shimmer` - Shimmer effect
- `.animate-slide-in-left` - Slide from left
- `.animate-slide-in-right` - Slide from right
- `.animate-scale-in` - Scale up
- `.animate-gradient` - Animated gradient

### Hover Effects
- `.hover-lift` - Lifts on hover
- `.hover-tilt` - Tilts on hover
- `.hover-glow-intense` - Intense glow on hover

### Gradients
- `.gradient-border-animated` - Animated gradient border
- `.gradient-bg-animated` - Animated gradient background

---

## 💡 Usage Examples

### Hero Section with Parallax
```tsx
<section style={{ position: 'relative', minHeight: '100vh' }}>
  <FloatingOrbs />
  <ParallaxSection speed={0.3}>
    <div className="container-custom">
      <ScrollReveal direction="up">
        <h1 className="heading-xl gradient-text">
          Welcome to UIForge
        </h1>
      </ScrollReveal>
    </div>
  </ParallaxSection>
</section>
```

### Glass Card Grid
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
  <GlassCard variant="default">
    <h3>Feature 1</h3>
  </GlassCard>
  <GlassCard variant="primary">
    <h3>Feature 2</h3>
  </GlassCard>
  <GlassCard variant="light">
    <h3>Feature 3</h3>
  </GlassCard>
</div>
```

### Staggered List
```tsx
<StaggerContainer>
  {items.map((item, i) => (
    <StaggerItem key={i}>
      <NeumorphicCard>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </NeumorphicCard>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Interactive 3D Cards
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
  {projects.map((project) => (
    <ParallaxCard key={project.id} className="card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </ParallaxCard>
  ))}
</div>
```

---

## ⚡ Performance Tips

1. **Use sparingly**: Don't overload pages with too many animated elements
2. **Lazy load**: Import components only where needed
3. **Reduce motion**: Respect `prefers-reduced-motion` media query
4. **Optimize images**: Use optimized images in animated components
5. **Test on devices**: Ensure smooth performance on mobile devices

---

## 🎯 Best Practices

1. **Consistency**: Use similar animation speeds throughout the site
2. **Purpose**: Every animation should serve a purpose
3. **Subtlety**: Subtle animations are often more effective
4. **Accessibility**: Provide alternatives for users who prefer reduced motion
5. **Performance**: Monitor frame rates and optimize as needed

---

## 🔧 Customization

All components accept className props for custom styling:

```tsx
<GlassCard className="custom-padding custom-border">
  Content
</GlassCard>
```

Combine with Tailwind or custom CSS:

```tsx
<ScrollReveal className="max-w-4xl mx-auto">
  <NeumorphicCard className="p-8">
    Content
  </NeumorphicCard>
</ScrollReveal>
```

---

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [CSS Glassmorphism Generator](https://ui.glass/generator/)
- [Neumorphism Design](https://neumorphism.io/)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

---

## 🐛 Troubleshooting

### Animations not working
- Ensure `"use client"` directive is present
- Check that Framer Motion is installed
- Verify component imports

### Performance issues
- Reduce number of animated elements
- Use `will-change` CSS property sparingly
- Consider using CSS animations for simple effects

### Hydration errors
- Ensure server and client render the same content
- Use `useEffect` for client-only code
- Check for browser-specific APIs

---

Happy animating! 🎉
