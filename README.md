<div align="center">

# 🛒 Limited Cart — E-Commerce Platform

### Multi-Category Shopping Platform | React · Next.js · TypeScript

[![Live Demo](https://img.shields.io/badge/🌐_Live_Site-Visit_Now-FF6B35?style=for-the-badge)](https://limited-cart.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Live_In_Production-brightgreen?style=for-the-badge)]()
[![Deployed on](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 📌 Project Overview

**Limited Cart** is a fully responsive, multi-category **E-Commerce web application** built for a US-based client. The platform supports browsing and shopping across multiple product categories including Furniture, Footwear, Bags, Jackets, and Accessories — with gender-based sub-filtering, a shopping cart system, and a deals/countdown section.

This is a **real production project** maintained and developed by Adnibog Systems, delivered as part of freelance frontend work.

---

## 🏢 About The Client

| Detail | Info |
|--------|------|
| **Client** | Limited Cart LLC |
| **Location** | 16833 Grand Circle, Omaha, NE 68116, USA |
| **Contact** | customer.success@limitedcart.com |
| **Phone** | +1-408-800-6217 |

---

## ✨ Features

### 🛍️ Shopping Experience
- **Multi-category browsing** — Furniture, Bags, Jacket, Footwear, Accessories, Trade Assurance
- **Gender-based sub-filtering** — Men / Women filters under Bags, Jacket, and Footwear
- **Product cards** with ratings, review counts, pricing, and stock status ("Almost Sold Out")
- **Shopping Cart** — with item counter badge on navbar icon
- **New Arrivals section** — filterable by ALL / FOOTWEAR / FURNITURE / BAG / JACKET tabs
- **Deals of the Month** — with countdown timer and "Hurry Before It's Too Late" urgency section

### 🎨 UI/UX
- **Hero section** with dynamic product imagery and "Shop Now" CTA
- **Brand logos carousel** — trust signals from known brands
- **Customer testimonials** slider with product images
- **Trust badges** — High Quality, Warranty Protection, Free Shipping (orders $150+), 24/7 Support
- **Fully responsive** — optimised for mobile, tablet, and desktop
- **Dropdown navigation** — category menus with sub-category links

### 📄 Pages
- Privacy Policy page
- Trade Assurance page
- Individual category pages for each product type

---

## 🛠️ Tech Stack

| Category | Tech |
|----------|------|
| Framework | Next.js (App Router) |
| Language | TypeScript / JavaScript |
| Styling | CSS / Tailwind CSS |
| State | React Hooks (Cart state management) |
| Routing | Next.js File-based Routing |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

## 📁 Project Structure
```
limited-cart/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout with navbar/footer
│   └── website/
│       ├── furniture/              # Furniture category page
│       ├── bag/
│       │   ├── men/                # Men's bags sub-category
│       │   └── women/              # Women's bags sub-category
│       ├── jacket/
│       │   ├── men/
│       │   └── women/
│       ├── footwear/
│       │   ├── men/
│       │   └── women/
│       ├── accessories/            # Accessories category
│       ├── trade-assurance/        # Trade assurance page
│       └── privacy/                # Privacy policy page
├── components/
│   ├── Navbar.tsx                  # Responsive navbar with cart counter
│   ├── Hero.tsx                    # Hero section with CTA
│   ├── DealsOfMonth.tsx            # Countdown deals section
│   ├── NewArrivals.tsx             # Filterable product grid
│   ├── Testimonials.tsx            # Customer reviews slider
│   └── Footer.tsx                  # Footer with links & newsletter
├── public/
│   ├── furniture/                  # Furniture product images
│   ├── footwear/                   # Footwear product images
│   ├── bag/                        # Bag product images
│   └── jacket/                     # Jacket product images
└── README.md
```

---

## 🚀 Getting Started Locally
```bash
# Clone the repository
git clone https://github.com/Coader-Sasmi/limited-cart.git

# Navigate into the project
cd limited-cart

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Category Routes

| Category | Route | Sub-routes |
|----------|-------|------------|
| Home | `/` | — |
| Furniture | `/website/furniture` | — |
| Bags | `/website/bag` | `/men` · `/women` |
| Jacket | `/website/jacket` | `/men` · `/women` |
| Footwear | `/website/footwear` | `/men` · `/women` |
| Accessories | `/website/accessories` | — |
| Trade Assurance | `/website/trade-assurance` | — |
| Privacy | `/website/privacy` | — |

---

## 🔧 Key Technical Decisions

**Next.js App Router** — used for file-based routing across multiple category and sub-category pages, making it easy to scale new product categories without additional configuration.

**Cart State Management** — shopping cart count is managed via React state/context, persisting the item count badge across navigation without a full backend.

**Responsive Navigation** — dropdown menus with sub-category links built using CSS and React state for mobile-friendly toggling.

**Image Optimisation** — all product images served through Next.js Image component for automatic format conversion and lazy loading.

---

## 💼 About This Project (For Recruiters)

This is a **real production e-commerce project** delivered for a US-based client (Limited Cart LLC). Key responsibilities included:

- Building a scalable multi-category product browsing experience
- Implementing gender-based sub-category filtering with clean URL structure
- Cart state management across multiple pages
- Delivering a production-ready, fully responsive UI
- Ongoing maintenance and development under **Adnibog Systems**

This project demonstrates real-world **e-commerce frontend architecture** — routing, state management, component reusability, and client delivery.

---

## 🌐 Live Demo

👉 **[https://limited-cart.vercel.app/](https://limited-cart.vercel.app/)**

---

<div align="center">

Built with ❤️ by **Sasmita Mahanta**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-6366F1?style=for-the-badge)](https://my-portfolio-website-blond-two.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sasmita-mahanta-7b24801a7/)

</div>
