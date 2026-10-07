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
    <section className="py-16 sm:py-20 bg-theme-page border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-theme-primary" />
              <span>Direct From Field & Poultry Runs</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary">
              Today's Featured Farm Produce
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-2 max-w-xl leading-relaxed">
              Transparent KES pricing, exact pack sizes, and live stock statuses. Add to cart or order instantly via WhatsApp.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary text-xs sm:text-sm py-3 px-5 flex items-center gap-2 self-start md:self-auto"
          >
            <span>Explore Full 9-Product Shop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-theme-primary text-[#07130E] font-bold shadow-glow'
                  : 'bg-theme-surface text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border hover:border-theme-accent/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-farm-lg bg-gradient-to-r from-theme-deep via-theme-section to-theme-surface border border-theme-border text-theme-textPrimary flex flex-col sm:flex-row items-center justify-between gap-4 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-lg text-theme-textPrimary">
              Need larger quantities for an event or commercial kitchen?
            </h3>
            <p className="text-xs text-theme-textSecondary">
              We offer wholesale rates on 10+ egg crates, 50kg+ vegetables, and bulk slaughtered kienyeji chicken.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('wholesale');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary py-3 px-6 text-xs whitespace-nowrap shrink-0"
          >
            Request Wholesale Quote
          </button>
        </div>
      </div>
    </section>
  );
}
