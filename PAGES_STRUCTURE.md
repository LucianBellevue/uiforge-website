# UIForge Website - Pages Structure

## Complete Page Hierarchy

```
uiforge-website/
├── app/
│   ├── page.tsx                    # Home
│   ├── about/
│   │   └── page.tsx               # About
│   ├── services/
│   │   └── page.tsx               # Services
│   ├── pricing/
│   │   └── page.tsx               # Pricing
│   ├── work/
│   │   └── page.tsx               # Portfolio/Work
│   ├── blog/
│   │   └── page.tsx               # Blog
│   ├── contact/
│   │   └── page.tsx               # Contact
│   ├── privacy/
│   │   └── page.tsx               # Privacy Policy
│   ├── terms/
│   │   └── page.tsx               # Terms of Service
│   └── components/
│       └── page.tsx               # Design System Demo
```

## Page Routes

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, services preview, why choose us, CTA |
| **About** | `/about` | Company story, values, process, stats |
| **Services** | `/services` | Detailed service offerings with features |
| **Pricing** | `/pricing` | Pricing tiers, add-ons, FAQ |
| **Work** | `/work` | Portfolio showcase, testimonials |
| **Blog** | `/blog` | Blog posts listing, featured post |
| **Contact** | `/contact` | Contact form, info, FAQ |
| **Privacy** | `/privacy` | Privacy policy |
| **Terms** | `/terms` | Terms of service |
| **Components** | `/components` | Design system showcase |

## Page Features

### Home (`/`)
- **Hero Section**: Main headline with gradient text, CTA buttons
- **Services Preview**: 3-card grid showcasing main services
- **Why Choose Us**: 4 features with icons
- **CTA Section**: Call-to-action with gradient background

### About (`/about`)
- **Hero**: Company introduction
- **Our Story**: Narrative with statistics card
- **Our Values**: 4 core values in card grid
- **Our Process**: 4-step process with numbered badges
- **CTA**: Get in touch section

### Services (`/services`)
- **Hero**: Services overview
- **Custom Websites**: Detailed section with features list
- **Web Applications**: Highlighted section with gradient border
- **UI/UX Design**: Design services section
- **Additional Services**: 4 extra services in grid
- **CTA**: Dual CTA buttons

### Pricing (`/pricing`)
- **Hero**: Pricing introduction
- **Pricing Tiers**: 3 plans (Starter, Professional, Enterprise)
- **Add-ons**: Additional services pricing
- **FAQ**: Common pricing questions
- **CTA**: Contact for quote

### Work (`/work`)
- **Hero**: Portfolio introduction
- **Portfolio Grid**: 6 project cards with gradients
- **Testimonials**: 3 client testimonials
- **CTA**: Start project invitation

### Blog (`/blog`)
- **Hero**: Blog introduction
- **Featured Post**: Large highlighted article
- **Latest Articles**: 6 blog post cards
- **Newsletter CTA**: Email subscription form

### Contact (`/contact`)
- **Hero**: Contact introduction
- **Contact Form**: Full form with validation (client-side)
- **Contact Info**: Email, hours, social links
- **FAQ**: Pre-contact questions
- **Interactive**: Form with state management

### Privacy (`/privacy`)
- **Legal Document**: Comprehensive privacy policy
- **Sections**: Information collection, usage, sharing, security, rights
- **Contact**: Privacy-specific contact info

### Terms (`/terms`)
- **Legal Document**: Terms of service
- **Sections**: Services, payments, IP, warranties, liability, cancellation
- **Contact**: Legal-specific contact info

## Design Patterns Used

### Layout Components
- `.container-custom` - Max-width container with responsive padding
- `.section-padding` - Consistent vertical spacing (5rem mobile, 8rem desktop)

### Typography
- `.heading-xl` - Hero headings
- `.heading-lg` - Section headings
- `.heading-md` - Subsection headings
- `.heading-sm` - Card titles
- `.body-lg`, `.body-md`, `.body-sm` - Body text variants

### Interactive Elements
- `.btn-primary` - Primary CTA buttons
- `.btn-secondary` - Secondary buttons
- `.btn-ghost` - Subtle buttons
- `.card` - Standard cards with hover effects
- `.card-highlight` - Featured cards with gradient borders

### Visual Effects
- `.gradient-text` - Gradient text effect
- `.gradient-primary` - Gradient backgrounds
- `.animate-fade-in-up` - Entrance animations
- `.glow-primary` - Glow effects

## Navigation Structure

### Main Navigation (Suggested)
- Home
- About
- Services
- Pricing
- Work
- Blog
- Contact

### Footer Navigation (Suggested)
- **Company**: About, Work, Blog
- **Services**: Custom Websites, Web Apps, UI/UX Design
- **Legal**: Privacy Policy, Terms of Service
- **Connect**: Contact, Social Links

## Next Steps

1. **Add Navigation Component**: Create a header with navigation menu
2. **Add Footer Component**: Create footer with links and info
3. **Add Metadata**: Update SEO metadata for each page
4. **Add Analytics**: Integrate analytics tracking
5. **Add Forms Backend**: Connect contact form to backend/email service
6. **Add Blog Posts**: Create individual blog post pages
7. **Add Portfolio Details**: Create case study pages for projects
8. **Optimize Images**: Add actual project images and optimize
9. **Add Animations**: Enhance with scroll animations
10. **Test Responsiveness**: Ensure all pages work on all devices

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## URLs

- **Development**: http://localhost:3000
- **Component Demo**: http://localhost:3000/components
- **All Pages**: Navigate using the routes listed above
