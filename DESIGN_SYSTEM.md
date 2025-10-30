# UIForge Design System

## Brand Identity

### Color Palette

#### Primary Colors
- **Molten Orange Neon**: `#FF7E29` - Main brand color
- **Accent Light**: `#FFB347` - Gradient accent

#### Backgrounds
- **Deep Black**: `#0E0E0E` - Primary background
- **Charcoal**: `#1C1C1C` - Secondary background, cards

#### Text Colors
- **Foreground**: `#FFFFFF` - Primary text
- **Muted**: `#A0A0A0` - Secondary text

#### Semantic Colors
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`
- **Info**: `#3B82F6`

### Typography

**Primary Font**: Space Grotesk (300, 400, 500, 600, 700)
**Monospace Font**: Geist Mono

#### Heading Classes
- `.heading-xl` - Hero headings (3rem - 6rem, responsive)
- `.heading-lg` - Section headings (2.5rem - 4rem, responsive)
- `.heading-md` - Subsection headings (2rem - 3rem, responsive)
- `.heading-sm` - Card headings (1.5rem - 2rem, responsive)

#### Body Text Classes
- `.body-lg` - Large body text (1.125rem - 1.25rem)
- `.body-md` - Standard body text (1rem)
- `.body-sm` - Small text (0.875rem)

---

## Component Classes

### Buttons

#### Base Button
```html
<button class="btn btn-primary">Primary Button</button>
```

#### Variants
- `.btn-primary` - Gradient background with glow
- `.btn-secondary` - Transparent with orange border
- `.btn-ghost` - Subtle border, minimal style

#### Sizes
- `.btn-lg` - Large button (1rem x 2rem padding)
- `.btn` - Default size (0.75rem x 1.5rem padding)
- `.btn-sm` - Small button (0.5rem x 1rem padding)

### Cards

#### Standard Card
```html
<div class="card">
  <h3 class="heading-sm">Card Title</h3>
  <p class="body-md">Card content</p>
</div>
```

#### Highlighted Card
```html
<div class="card-highlight">
  <h3 class="heading-sm">Featured Card</h3>
  <p class="body-md">With gradient border</p>
</div>
```

### Gradients

#### Background Gradient
```html
<div class="gradient-primary">
  <!-- Content with gradient background -->
</div>
```

#### Text Gradient
```html
<h1 class="gradient-text">Gradient Text</h1>
```

#### Border Gradient
```html
<div class="gradient-border" style="border-radius: 1rem; padding: 2rem;">
  <!-- Content with gradient border -->
</div>
```

---

## Layout Classes

### Container
```html
<div class="container-custom">
  <!-- Max-width 1280px, centered, responsive padding -->
</div>
```

### Section Padding
```html
<section class="section-padding">
  <!-- 5rem mobile, 8rem desktop vertical padding -->
</section>
```

---

## Utility Classes

### Visual Effects
- `.glow-primary` - Orange glow box-shadow
- `.text-glow` - Orange glow text-shadow
- `.backdrop-blur` - Blur effect for overlays

### Animations
- `.animate-fade-in-up` - Fade in from bottom (0.6s)
- `.animate-pulse-glow` - Pulsing glow effect (2s infinite)

### Scroll
- `.smooth-scroll` - Smooth scrolling behavior

---

## Usage Examples

### Hero Section
```html
<section class="section-padding">
  <div class="container-custom">
    <h1 class="heading-xl gradient-text">
      Forge Your Digital Future
    </h1>
    <p class="body-lg" style="color: var(--foreground-muted);">
      Premium frontend development services
    </p>
    <button class="btn btn-primary btn-lg">Get Started</button>
  </div>
</section>
```

### Service Card Grid
```html
<div class="container-custom">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
    <div class="card">
      <h3 class="heading-sm">Custom Websites</h3>
      <p class="body-md">Tailored web solutions</p>
    </div>
    <div class="card">
      <h3 class="heading-sm">Web Applications</h3>
      <p class="body-md">Complex interactive apps</p>
    </div>
    <div class="card-highlight">
      <h3 class="heading-sm">Premium Package</h3>
      <p class="body-md">Full-service development</p>
    </div>
  </div>
</div>
```

---

## CSS Variables

Access design tokens directly:
```css
.custom-element {
  color: var(--primary);
  background: var(--background-charcoal);
  font-family: var(--font-sans);
}
```

### Available Variables
- `--primary` / `--primary-light`
- `--background-charcoal` / `--background-deep`
- `--foreground` / `--foreground-muted`
- `--success` / `--warning` / `--error` / `--info`
- `--font-sans` / `--font-mono`

---

## Best Practices

1. **Consistency**: Use predefined classes instead of inline styles
2. **Responsive**: All typography uses `clamp()` for fluid scaling
3. **Accessibility**: Focus states and semantic colors included
4. **Performance**: Minimal animations, optimized transitions
5. **Maintainability**: CSS variables for easy theme updates

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid & Flexbox
- CSS Custom Properties
- CSS `clamp()` function
- Backdrop filters (with fallbacks)
