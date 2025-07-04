# 🎨 shadcn/ui Components Collection

A curated collection of beautiful, accessible, and reusable components built with React, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎯 **Modern Design**: Beautiful components with attention to detail
- 🔧 **TypeScript Support**: Full type safety and IntelliSense
- 📱 **Responsive**: Mobile-first approach with responsive design
- ♿ **Accessible**: Built with accessibility in mind
- 🎨 **Customizable**: Easy to customize with Tailwind CSS
- 🚀 **Performance**: Optimized for speed and bundle size

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shadcn-devsaround.git
cd shadcn-devsaround
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Components

### Interactive Card
A beautiful card component with hover effects and flexible content layout.

```tsx
import { InteractiveCard } from "@/components/custom/interactive-card";

<InteractiveCard
  title="Sample Card"
  description="This is a sample interactive card"
  badge="New"
  actionText="Learn More"
  onAction={() => console.log("Action clicked")}
/>
```

### Pricing Card
Professional pricing cards with features list and call-to-action buttons.

```tsx
import { PricingCard } from "@/components/custom/pricing-card";

<PricingCard
  name="Pro Plan"
  price={29}
  period="month"
  features={[
    { text: "Unlimited projects", included: true },
    { text: "24/7 support", included: true },
    { text: "Advanced analytics", included: false }
  ]}
  popular={true}
  onSelect={() => console.log("Plan selected")}
/>
```

### Statistics Card
Display key metrics and statistics with beautiful trend indicators.

```tsx
import { StatisticsCard } from "@/components/custom/statistics-card";

<StatisticsCard
  title="Total Revenue"
  value={45231}
  prefix="$"
  change={20.1}
  changePeriod="from last month"
/>
```

## 🎨 Customization

All components are built with Tailwind CSS and can be easily customized:

```tsx
<InteractiveCard
  title="Custom Card"
  description="This card has custom styling"
  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
  hoverEffect={true}
/>
```

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically - Vercel will detect the Next.js framework and configure everything

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons

---

Made with ❤️ by the open-source community
