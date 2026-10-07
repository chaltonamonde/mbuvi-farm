# Mbuvi Farm — Complete Agribusiness Front-End & E-Commerce Web Application

A modern, high-converting, accessible front-end website built for **Mbuvi Farm**, an established family-owned Kenyan agribusiness specializing in pasture-raised kienyeji eggs, free-range poultry, crisp drip-irrigated vegetables, and pure raw honey along the Kangundo / Machakos agricultural corridor serving households, hotels, and schools in Nairobi, Machakos, and Kiambu counties.

Phase 1 delivers the full frontend with design tokens, mock data, responsive layouts, cart state management, and M-Pesa STK push simulation. Clean architectural separation ensures zero friction when connecting a Node/Express + PostgreSQL backend with live Safaricom Daraja API in Phase 2.

---

## 🌾 Business Solutions Implemented

| Problem Identified | Front-End Fix Implemented | Location in Codebase |
| :--- | :--- | :--- |
| **1. Cannot be found on Google** | Local SEO: LocalBusiness & Agricultural JSON-LD schema, town/county keywords in headings, sitemap.xml, robots.txt, Google Business Profile link, and a Learn section with 3 farmer-useful articles. | [`index.html`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/index.html), [`src/pages/LearnPage.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/pages/LearnPage.jsx) |
| **2. Orders depend on missed calls & DMs** | Persistent Cart Drawer, sticky WhatsApp FAB with pre-filled message selector, quick WhatsApp buttons on all products, and an Enquiry Form with auto-generated ticket # and 45-min expected reply notice. | [`src/components/cart/CartDrawer.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/components/cart/CartDrawer.jsx), [`src/components/common/WhatsAppButton.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/components/common/WhatsAppButton.jsx), [`src/pages/ContactPage.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/pages/ContactPage.jsx) |
| **3. No price list outside business hours** | 24/7 live catalogue with transparent KES prices, standard pack sizes, and real-time status badges (`In Stock`, `Limited Stock`, `Pre-Order`). | [`src/data/products.js`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/data/products.js), [`src/pages/ShopPage.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/pages/ShopPage.jsx) |
| **4. No safe way to pay or reserve** | 3-Step Checkout with Safaricom M-Pesa STK push simulation (15s prompt timer), 30% Pre-Order deposit option for heritage birds, and Pay-on-Delivery option. | [`src/components/checkout/CheckoutModal.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/components/checkout/CheckoutModal.jsx) |
| **5. Cannot win bulk buyers (B2B)** | Dedicated Wholesale page with commercial rate schedule, B2B Quote Request Form, and downloadable / printable wholesale price sheet. | [`src/pages/WholesalePage.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/pages/WholesalePage.jsx) |
| **6. No trust or proof** | Authentic farm story, 6-photo operational gallery, team section, KEPHIS/HACCP certification badges (placeholders), verified buyer review cards, and trust badges near prices. | [`src/components/home/TrustStrip.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/components/home/TrustStrip.jsx), [`src/pages/AboutPage.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/pages/AboutPage.jsx), [`src/data/reviews.js`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/data/reviews.js) |
| **7. No customer list for repeat sales** | VIP Farm Club banner with promo code `MBUVI200` (KES 200 off first order), weekly recurring standing order toggle in checkout, and 1-Click "Reorder Everything" in Account view. | [`src/components/common/FirstOrderIncentive.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/components/common/FirstOrderIncentive.jsx), [`src/pages/AccountPage.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/pages/AccountPage.jsx) |
| **8. Revenue leaks at checkout** | Free delivery dynamic progress bar (towards KES 2,500 threshold), "Frequently Bought Together" upsell suggestions in Cart Drawer, and low-stock urgency badges. | [`src/components/cart/CartDrawer.jsx`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/components/cart/CartDrawer.jsx) |

---

## 🎨 Design System & Tokens

The site implements a **sleek dark emerald base** (`#07130E` / `#0B1F17`) with **fresh agricultural green primary accents** (`#22C55E`) and **crisp sky-blue highlights** (`#38BDF8`):

```css
/* Color Tokens */
--color-theme-page: #07130E;            /* Page canvas: deep organic near-black green */
--color-theme-section: #0B1F17;         /* Secondary section container background */
--color-theme-surface: #0F2A1F;         /* Elevated card & drawer background */
--color-theme-surface-alt: #14382A;     /* Interactive elevated surfaces & active tabs */
--color-theme-border: #1E4D38;          /* 1px structural borders */
--color-theme-primary: #22C55E;         /* Vibrant harvest green CTAs & success states */
--color-theme-primary-hover: #16A34A;   /* Primary green hover */
--color-theme-deep: #14532D;            /* Deep forest green base */
--color-theme-accent: #38BDF8;          /* Sky-blue interactive accents, links, glows */
--color-theme-accent-hover: #7DD3FC;    /* Sky-blue hover */
--color-theme-text-primary: #F0FDF4;    /* High-contrast crisp mint-white headings & titles */
--color-theme-text-secondary: #A7C4B5;  /* Sage reading body copy */
--color-theme-text-muted: #6B8F7E;      /* Muted captions & secondary metadata */

/* Spacing Scale (8px system) */
8px (space-1), 16px (space-2), 24px (space-3), 32px (space-4), 48px (space-6), 64px (space-8)

/* Typography */
Display Headings: 'Plus Jakarta Sans'
Body Text:        'Inter'
```

---

## 📁 Project File Structure

```
c:\Users\user\OneDrive\Mbuvi farm/
├── index.html                     # HTML5 entry with JSON-LD schema & SEO tags
├── package.json                   # Dependencies (React 18, Vite 6, Tailwind 3, Lucide)
├── tailwind.config.js             # Extended Tailwind tokens & custom shadows
├── postcss.config.js              # PostCSS config
├── vite.config.js                 # Vite dev server on port 5174
├── public/
│   ├── favicon.svg                # Custom SVG brand favicon
│   ├── robots.txt                 # Search engine bot directives
│   └── sitemap.xml                # SEO sitemap
└── src/
    ├── main.jsx                   # React root mount
    ├── App.jsx                    # Root app with routing and providers
    ├── index.css                  # Design tokens, CSS variables, utility classes
    ├── context/
    │   └── CartContext.jsx        # Shopping cart, delivery fees, order history, toasts
    ├── data/
    │   ├── farmData.js            # Core farm details, phone, hours, team, certs
    │   ├── products.js            # 9 farm products with KES prices, pack sizes, badges
    │   ├── deliveryZones.js       # Nairobi, Machakos & Kiambu zones & fee rates
    │   ├── reviews.js             # Customer feedback placeholders with verified tags
    │   ├── articles.js            # Learn section educational farming articles
    │   └── faq.js                 # 7 comprehensive ordering and delivery FAQs
    ├── components/
    │   ├── common/
    │   │   ├── Navbar.jsx         # Sticky header with hotline and cart pill
    │   │   ├── Footer.jsx         # 5-column footer with corridors and legal links
    │   │   ├── WhatsAppButton.jsx # Sticky WhatsApp FAB with pre-filled order messages
    │   │   ├── AmbientBackground.jsx # Organic drifting light pools
    │   │   ├── FirstOrderIncentive.jsx # KES 200 off promo banner
    │   │   └── ToastContainer.jsx # Accessible status alerts
    │   ├── shop/
    │   │   ├── ProductCard.jsx    # Card with status badges and dual actions
    │   │   └── ProductDetailModal.jsx # Full specs, gallery, and quantity selector
    │   ├── cart/
    │   │   └── CartDrawer.jsx     # Slide-over cart with free delivery bar and upsells
    │   ├── checkout/
    │   │   └── CheckoutModal.jsx  # 3-step checkout with M-Pesa STK simulation
    │   └── home/
    │       ├── Hero.jsx           # Looping video hero with dual CTAs
    │       ├── TrustStrip.jsx     # 4 credibility pillars
    │       ├── FeaturedProducts.jsx # Top products with category pills
    │       ├── HowItWorks.jsx     # 4-step farm-to-table sequence
    │       ├── FarmStoryPreview.jsx # Regenerative practices preview
    │       ├── Gallery.jsx        # 6-photo operational gallery
    │       ├── ReviewsSection.jsx # Verified customer feedback cards
    │       ├── FaqSection.jsx     # Expandable accordion FAQ
    │       └── FinalCta.jsx       # Morning harvest call-to-action
    └── pages/
        ├── HomePage.jsx           # Home landing page
        ├── ShopPage.jsx           # Filterable & searchable farm catalogue
        ├── WholesalePage.jsx      # B2B restaurant quote form & price sheet
        ├── VisitsPage.jsx         # Poultry masterclasses & 50% deposit UI
        ├── LearnPage.jsx          # SEO educational articles
        ├── AboutPage.jsx          # Farm story, 4 pillars, team & certs
        ├── ContactPage.jsx        # Direct phone, WhatsApp, map & inquiry form
        ├── AccountPage.jsx        # Order history with 1-Click Reorder
        └── PolicyPage.jsx         # Freshness guarantee, terms, privacy
```

---

## 🚀 Running the Project Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5174/` in your browser.

3. **Build Production Bundle:**
   ```bash
   npm run build
   ```
   Generates optimized assets in `dist/`.

---

## ✏️ Placeholders to Replace (When Real Farm Details Are Available)

All placeholder fields are strictly documented without inventing fake data:

1. **Farm Contact Details:**
   - File: [`src/data/farmData.js`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/data/farmData.js)
   - Replace:
     - `phoneDisplay`: `[+254 7XX XXX XXX - Add farm phone]`
     - `whatsappNumber`: `254700000000` (Enter real Safaricom number)
     - `email`: `[orders@mbuvifarm.co.ke - Add farm email]`
     - `physicalAddress`: Real farm land title / road marker in Machakos County.
     - `mpesaTillNumber`: Real Safaricom Buy Goods Till / Paybill number.

2. **Team Photography & Bios:**
   - File: [`src/data/farmData.js`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/data/farmData.js)
   - Replace team bios and portrait photos of Mr. Mbuvi, Farm Manager, and Agronomist.

3. **Certifications & Registrations:**
   - File: [`src/data/farmData.js`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/data/farmData.js)
   - Update KEPHIS Good Agricultural Practice certificate number and food safety audits once approved.

4. **Customer Reviews:**
   - File: [`src/data/reviews.js`](file:///c:/Users/user/OneDrive/Mbuvi%20farm/src/data/reviews.js)
   - Replace placeholders marked `[Add real customer review]` with quotes from verified buyers.

---

## 🔌 Phase 2 Integration Guide (Backend & M-Pesa Daraja)

The front-end architecture is completely prepared for a Node/Express + PostgreSQL backend:

### 1. Safaricom M-Pesa Daraja Integration
- **Endpoint:** `POST /api/v1/payments/stk-push`
- **Request Body:**
  ```json
  {
    "phoneNumber": "254712345678",
    "amount": 1450,
    "accountReference": "MBV-2026-904",
    "transactionDesc": "Mbuvi Farm Produce Order"
  }
  ```
- **Webhook Callback:** `POST /api/v1/payments/daraja-callback` to update the order status in PostgreSQL from `pending_payment` to `paid_verified`.

### 2. Suggested PostgreSQL Database Schema

```sql
-- Customers Table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(120),
    delivery_address TEXT NOT NULL,
    delivery_zone_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category_id VARCHAR(50) NOT NULL,
    price_kes NUMERIC(10, 2) NOT NULL,
    wholesale_price_kes NUMERIC(10, 2),
    pack_unit VARCHAR(80) NOT NULL,
    status VARCHAR(20) DEFAULT 'in-stock',
    stock_count INT DEFAULT 50,
    image_url TEXT
);

-- Orders Table
CREATE TABLE orders (
    id VARCHAR(30) PRIMARY KEY, -- e.g. MBV-2026-904
    customer_id INT REFERENCES customers(id),
    total_kes NUMERIC(10, 2) NOT NULL,
    delivery_fee_kes NUMERIC(10, 2) NOT NULL,
    delivery_zone VARCHAR(100) NOT NULL,
    delivery_date DATE NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    payment_status VARCHAR(30) DEFAULT 'pending',
    mpesa_receipt_number VARCHAR(50),
    is_standing_order BOOLEAN DEFAULT FALSE,
    order_status VARCHAR(30) DEFAULT 'harvest_queue',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items Table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(30) REFERENCES orders(id),
    product_id VARCHAR(50) REFERENCES products(id),
    quantity INT NOT NULL,
    unit_price_kes NUMERIC(10, 2) NOT NULL
);
```

### 3. API Routes to Hook in Phase 2

- `GET /api/v1/products` — Fetch live inventory and seasonal availability.
- `POST /api/v1/orders` — Record newly placed customer order.
- `POST /api/v1/wholesale/quotes` — Capture commercial restaurant quote requests.
- `POST /api/v1/visits/book` — Reserve poultry & drip masterclass slots.
- `POST /api/v1/enquiries` — Forward customer inquiries to farm WhatsApp/SMS desk.
