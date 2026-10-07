import React from 'react';
import { farmConfig } from '../../data/farmData';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function FinalCta({ setCurrentView }) {
  const handleWhatsApp = () => {
    const msg = `Hello Mbuvi Farm, I would like to place an order for tomorrow's morning harvest.`;
    window.open(`https://wa.me/${farmConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section 
      className="py-12 sm:py-20 text-theme-textPrimary relative overflow-hidden border-t border-theme-border"
      style={{
        background: 'linear-gradient(135deg, #07130E 0%, #0B1F17 50%, #14532D 100%)'
      }}
    >
      {/* Decorative light pools */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4 sm:space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-theme-surface/80 border border-theme-border backdrop-blur-md text-[11px] sm:text-xs font-semibold text-theme-accent">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-primary" />
          <span>Next Harvest Dispatch: Tomorrow 6:30 AM</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-theme-textPrimary tracking-tight leading-tight max-w-3xl mx-auto">
          Taste Genuine Farm Freshness on Your Table Tomorrow Morning
        </h2>

        <p className="text-xs sm:text-base text-theme-textSecondary max-w-2xl mx-auto leading-relaxed">
          Skip the stale supermarket shelves and bruised open-market vegetables. Experience pasture-grazed kienyeji eggs with rich golden yolks and greens harvested at dawn.
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto btn-primary text-xs sm:text-sm py-3 px-6 sm:py-4 sm:px-8 shadow-glow flex items-center justify-center gap-2 group"
          >
            <span>Explore Farm Shop & Order</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto btn-secondary text-xs sm:text-sm py-3 px-6 sm:py-4 sm:px-8 flex items-center justify-center gap-2 shadow-card"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-theme-accent" />
            <span>Chat on WhatsApp Directly</span>
          </button>
        </div>

        <div className="pt-5 sm:pt-8 border-t border-theme-border/60 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-theme-textSecondary">
          <span>✓ Free delivery over KES 2,500</span>
          <span>•</span>
          <span>✓ Direct M-Pesa STK push</span>
          <span>•</span>
          <span>✓ Pay on delivery option</span>
        </div>
      </div>
    </section>
  );
}
