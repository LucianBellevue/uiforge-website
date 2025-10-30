# UIForge Quick Reference

## 🎨 Color Variables

```css
var(--primary)              /* #FF7E29 - Molten Orange */
var(--primary-light)        /* #FFB347 - Accent Light */
var(--background-deep)      /* #0E0E0E - Main Background */
var(--background-charcoal)  /* #1C1C1C - Cards/Sections */
var(--foreground)           /* #FFFFFF - Primary Text */
var(--foreground-muted)     /* #A0A0A0 - Secondary Text */
```

## 📝 Typography Classes

```html
<h1 class="heading-xl">Hero Heading</h1>      <!-- 3-6rem -->
<h2 class="heading-lg">Section Heading</h2>   <!-- 2.5-4rem -->
<h3 class="heading-md">Subsection</h3>        <!-- 2-3rem -->
<h4 class="heading-sm">Card Title</h4>        <!-- 1.5-2rem -->

<p class="body-lg">Large text</p>             <!-- 1.125-1.25rem -->
<p class="body-md">Normal text</p>            <!-- 1rem -->
<p class="body-sm">Small text</p>             <!-- 0.875rem -->
```

## 🔘 Buttons

```html
<!-- Primary -->
<button class="btn btn-primary">Click Me</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-sm">Small</button>

<!-- Secondary -->
<button class="btn btn-secondary">Outline</button>

<!-- Ghost -->
<button class="btn btn-ghost">Subtle</button>
```

## 🎴 Cards

```html
<!-- Standard Card -->
<div class="card">
  <h3 class="heading-sm">Title</h3>
  <p class="body-md">Content</p>
</div>

<!-- Highlighted Card with Gradient Border -->
<div class="card-highlight" style="border-radius: 1rem; padding: 2rem;">
  <h3 class="heading-sm">Featured</h3>
  <p class="body-md">Premium content</p>
</div>
```

## 🌈 Gradients

```html
<!-- Gradient Text -->
<h1 class="gradient-text">Colorful Heading</h1>

<!-- Gradient Background -->
<div class="gradient-primary" style="padding: 2rem; border-radius: 1rem;">
  Content
</div>

<!-- Gradient Border -->
<div class="gradient-border" style="border-radius: 1rem; padding: 2rem;">
  Content
</div>
```

## 📦 Layout

```html
<!-- Container (max-width 1280px, centered) -->
<div class="container-custom">
  Content
</div>

<!-- Section with Padding (5rem mobile, 8rem desktop) -->
<section class="section-padding">
  <div class="container-custom">
    Content
  </div>
</section>
```

## ✨ Effects

```html
<!-- Glow Effect -->
<div class="card glow-primary">Glowing card</div>

<!-- Pulsing Glow Animation -->
<button class="btn btn-primary animate-pulse-glow">Pulse</button>

<!-- Fade In Up Animation -->
<div class="animate-fade-in-up">Animated content</div>

<!-- Backdrop Blur -->
<div class="backdrop-blur" style="background: rgba(28,28,28,0.7);">
  Frosted glass effect
</div>
```

## 🎯 Common Patterns

### Hero Section
```html
<section class="section-padding">
  <div class="container-custom" style="text-align: center;">
    <h1 class="heading-xl gradient-text">Your Heading</h1>
    <p class="body-lg" style="color: var(--foreground-muted); margin-top: 1rem;">
      Subtitle text
    </p>
    <button class="btn btn-primary btn-lg" style="margin-top: 2rem;">
      Get Started
    </button>
  </div>
</section>
```

### Feature Grid
```html
<div class="container-custom">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
    <div class="card">
      <h3 class="heading-sm">Feature 1</h3>
      <p class="body-md" style="color: var(--foreground-muted);">Description</p>
    </div>
    <div class="card">
      <h3 class="heading-sm">Feature 2</h3>
      <p class="body-md" style="color: var(--foreground-muted);">Description</p>
    </div>
    <div class="card">
      <h3 class="heading-sm">Feature 3</h3>
      <p class="body-md" style="color: var(--foreground-muted);">Description</p>
    </div>
  </div>
</div>
```

### CTA Section
```html
<section class="gradient-primary" style="padding: 5rem 0;">
  <div class="container-custom" style="text-align: center;">
    <h2 class="heading-lg" style="color: white;">Ready to Start?</h2>
    <p class="body-lg" style="color: white; margin-top: 1rem;">
      Transform your vision into reality
    </p>
    <button class="btn btn-secondary btn-lg" style="margin-top: 2rem;">
      Contact Us
    </button>
  </div>
</section>
```

## 🚀 Pro Tips

1. **Responsive Typography**: All heading classes use `clamp()` for fluid scaling
2. **Color Consistency**: Always use CSS variables instead of hardcoded colors
3. **Spacing**: Use rem units for consistent spacing (0.5rem, 1rem, 1.5rem, 2rem, 3rem)
4. **Hover States**: All interactive elements have built-in hover effects
5. **Accessibility**: Focus states are styled automatically with the primary color

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base: Mobile (< 768px) */
/* Tablet: 768px+ */
/* Desktop: 1024px+ */
/* Large: 1280px+ */

@media (min-width: 768px) {
  /* Tablet and up */
}
```
