import React, { useState } from 'react';
import { products, categories } from '../../data/products';
import ProductCard from '../shop/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedProducts({ setCurrentView }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-theme-page border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-theme-primary/15 text-theme-primary text-[11px] sm:text-xs font-bold border border-theme-primary/30 mb-2 sm:mb-3">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-theme-primary" />
              <span>Direct From Field & Poultry Runs</span>
            </div>
            <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-theme-textPrimary">
              Today's Featured Farm Produce
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-1 sm:mt-2 max-w-xl leading-relaxed">
              Transparent KES pricing, exact pack sizes, and live stock statuses. Add to cart or order instantly via WhatsApp.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary text-xs sm:text-sm py-2.5 px-4 sm:py-3 sm:px-5 flex items-center gap-2 self-start md:self-auto"
          >
            <span>Explore Full 9-Product Shop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 sm:pb-4 sm:mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-theme-primary text-[#07130E] font-bold shadow-glow'
                  : 'bg-theme-surface text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border hover:border-theme-accent/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid (2 Columns on Mobile, 3 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-farm-md sm:rounded-farm-lg bg-gradient-to-r from-theme-deep via-theme-section to-theme-surface border border-theme-border text-theme-textPrimary flex flex-col sm:flex-row items-center justify-between gap-4 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-sm sm:text-lg text-theme-textPrimary">
              Need larger quantities for an event or commercial kitchen?
            </h3>
            <p className="text-[11px] sm:text-xs text-theme-textSecondary">
              We offer wholesale rates on 10+ egg crates, 50kg+ vegetables, and bulk slaughtered kienyeji chicken.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('wholesale');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary py-2.5 px-5 text-xs whitespace-nowrap shrink-0"
          >
            Request Wholesale Quote
          </button>
        </div>
      </div>
    </section>
  );
}
