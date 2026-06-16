# LAGENIO Store - E-Commerce Platform

A premium bilingual (Swedish/English) e-commerce platform for Lagenio phones (Rhino 1 Pro & Eagle Pro) built with Next.js, React, and Tailwind CSS.

## 🚀 Features

### Consumer Pages
- **Overview Tab**: Specification comparison between Rhino 1 Pro and Eagle Pro
- **Hype Section**: Countdown and marketing for new model release (August 5th)
- **Rhino 1 Pro Tab**: Detailed specifications and features
- **Eagle Pro Tab**: Detailed specifications and features
- Responsive phone card layout with SVG phone outlines

### Retail Page
- **Price Calculator**: Dynamic calculator for volume pricing
- **Volume Discounts**: Tiered pricing system
  - 1-10 units: Full price
  - 11-50 units: 5-6% discount
  - 51-100 units: 11% discount
  - 100+ units: 16% discount
- **Shipping Calculator**: DDP shipping with volume scaling
- **Detailed Pricing Tiers**: Clear breakdown for both models

### About Page
- Company information (Shenzhen Lagenio Technology Co., Limited)
- Swedish importer details (Ernst-William Hertz)
- Key certifications and standards
- Core values and company vision

### Navigation
- Bilingual support (English/Swedish)
- Language switcher in navigation
- Shopping cart icon (placeholder)
- Responsive mobile menu
- Clean brand navigation

### Admin Panel (Upcoming)
- Hidden admin link in footer (invisible font, requires password)
- Password: `Yb07tw44!`
- Order management system
- Customer information display
- Order tracking

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#0052CC` (Lagenio Blue)
- **Dark Blue**: `#003399`
- **Light Blue**: `#E6F0FF`
- **Text Primary**: `#1a1a1a`
- **Text Secondary**: `#666666`

### Components
- Phone Cards with hover effects
- Specification comparison tables
- Price calculators with increment/decrement
- Hype sections for promotions
- Call-to-action buttons

## 📁 Project Structure

```
lagenio-website/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home/Consumer page
│   ├── retail/
│   │   └── page.tsx         # Retail page
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── PhoneCard.tsx        # Phone display card
│   ├── HypeSection.tsx      # New model hype section
│   ├── SpecificationComparison.tsx
│   ├── RetailCalculator.tsx # Price calculator
│   └── Footer.tsx           # Footer component
├── i18n.config.ts           # Language configuration
├── public/                  # Static files
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.js
└── postcss.config.js
```

## 🌐 Language Support

### Supported Languages
- **English** (Default)
- **Swedish**

### Translation Keys
All text is managed through `i18n.config.ts`. Language switcher in the top-right of the navigation bar.

## 🛒 Pricing Information

### Rhino 1 Pro
- 1-10 units: 8,999 SEK
- 11-50 units: 8,500 SEK
- 51-100 units: 8,000 SEK
- 100+ units: 7,500 SEK

### Eagle Pro
- 1-10 units: 9,999 SEK
- 11-50 units: 9,400 SEK
- 51-100 units: 8,800 SEK
- 100+ units: 8,200 SEK

### Shipping
- Base fee: 1,200 SEK
- Scales with quantity (approx. +200 SEK per 10 units)
- DDP delivery from China (10-day delivery time)

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: Full navigation and features
- **Tablet**: Optimized grid layouts
- **Mobile**: Hamburger menu, single-column layout

## 🔐 Admin Panel

### Access
- Look for hidden link in footer (invisible text that requires hover)
- Password required: `Yb07tw44!`

### Functionality (To Be Implemented)
- View all orders
- Customer information (name, address, phone, email)
- Model and quantity per order
- Order status management
- Export capabilities

## 🗄️ Database

SQLite database schema (`schema.sql`) includes:
- **orders**: Main order table
- **order_items**: Line items for each order
- **pricing**: Product pricing table

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone and enter directory
cd lagenio-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Next Steps (Priority Order)

1. **Phone Layout** ✅ (Complete)
   - Phone cards with SVG outlines
   - Responsive design
   - Hover effects

2. **Retail Page** ✅ (Complete)
   - Price calculator
   - Volume pricing tiers
   - Shipping calculation

3. **Shopping Page** (In Progress)
   - Shopping cart functionality
   - Product selection
   - Quantity management

4. **Admin Panel** (Upcoming)
   - Order management
   - Customer view
   - Status tracking
   - Password protection

5. **Payment Integration** (Upcoming)
   - Card payment processing (without Stripe)
   - Simple card exchange system
   - Order confirmation

6. **Email Notifications** (Upcoming)
   - Order confirmation emails
   - Shipping notifications
   - Customer support

## 📧 Contact & Support

**Swedish Importer & Responsible Person**
- Name: Ernst-William Hertz
- Website: lagenio.vercel.app

**Manufacturer**
- Shenzhen Lagenio Technology Co., Limited
- Location: Guangdong, China
- Rating: 4.9/5 Gold Supplier (Alibaba)

## 📄 License

Proprietary - Lagenio Store © 2026

## 🎉 Version

v1.0.0 - Initial Release (2026)

---

**Note**: This website is designed to increase the necessity for European customers to buy and test new technology. All products are shipped from China with approximately 10 days delivery time until larger quantities are moved to the Swedish warehouse.
