import React, { useRef } from 'react';
import { farmConfig } from '../../data/farmData';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
} from 'lucide-react';

export default function Hero({ setCurrentView }) {
  const videoRef = useRef(null);

  const handleWhatsApp = () => {
    const msg = `Hello Mbuvi Farm, I visited your website and would like to order fresh farm produce for delivery.`;
    window.open(`https://wa.me/${farmConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-theme-border">
      {/* Background Media Container with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Background poster & video */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />

        {/* Real video layer with poster fallback, respecting prefers-reduced-motion */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-75"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-vegetable-garden-on-a-sunny-day-40915-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Target Dark Green to Sky-Blue Gradient Overlay */}
        <div 
          className="absolute inset-0 backdrop-blur-[1px]" 
          style={{
            background: 'linear-gradient(135deg, rgba(7, 19, 14, 0.95) 0%, rgba(20, 83, 45, 0.88) 50%, rgba(14, 60, 85, 0.85) 100%)'
          }}
        />
        
        {/* Subtle decorative grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column (7 Cols) */}
          <div className="lg:col-span-7 text-theme-textPrimary space-y-6">
            
            {/* Trust Pill / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface/80 border border-theme-border backdrop-blur-md text-xs font-semibold text-theme-accent">
              <span className="w-2 h-2 rounded-full bg-theme-primary animate-ping" />
              <span>Direct Farm-Gate Dispatch • Kangundo Corridor to Nairobi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-theme-textPrimary tracking-tight leading-[1.15]">
              Naturally Farmed. <br className="hidden sm:inline" />
              Harvested Same-Day. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary via-emerald-300 to-theme-accent">
                Delivered Direct to Your Door.
              </span>
            </h1>

            {/* Value Promise Copy */}
            <p className="text-sm sm:text-base text-theme-textSecondary leading-relaxed max-w-xl font-normal">
              Fresh pasture-raised kienyeji eggs, wholesome dressed chicken, crisp sukuma wiki, vine tomatoes, and raw acacia honey. Harvested at 5:30 AM and delivered cold to homes, hotels, and schools across Nairobi, Machakos, and Kiambu.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => {
                  setCurrentView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary py-4 px-8 shadow-glow flex items-center justify-center gap-2 group text-sm"
              >
                <span>Order Farm Produce Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="btn-secondary py-4 px-6 flex items-center justify-center gap-2.5 shadow-card text-sm"
              >
                <MessageCircle className="w-5 h-5 text-theme-accent" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* 4 Micro Trust Pillars */}
            <div className="pt-6 border-t border-theme-border grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-theme-textSecondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />
                <span>Harvested 5:30 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />
                <span>M-Pesa STK Push</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                <span>Zero Pesticide Spray</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                <span>Free &gt; KES 2,500</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-theme-surface/95 backdrop-blur-md rounded-farm-lg p-6 shadow-2xl border border-theme-border space-y-5 text-theme-textPrimary">
              
              <div className="flex items-center justify-between pb-3 border-b border-theme-border">
                <div>
                  <span className="text-[10px] font-bold text-theme-accent uppercase tracking-wider block">
                    Today's Fresh Harvest Batch
                  </span>
                  <h3 className="font-display font-extrabold text-base text-theme-textPrimary">
                    Farm-Gate Daily Dispatch
                  </h3>
                </div>
                <span className="badge-instock text-[11px]">
                  ● Active Dispatch
                </span>
              </div>

              {/* Sample Basket Snapshot */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2.5 rounded-farm-md bg-theme-section border border-theme-border">
                  <img
                    src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=200&q=80"
                    alt="Kienyeji Eggs"
                    className="w-12 h-12 rounded object-cover border border-theme-border filter brightness-95"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-theme-textPrimary">Pasture Kienyeji Eggs</p>
                    <p className="text-[11px] text-theme-textSecondary">Tray of 30 • Golden Yolks</p>
                  </div>
                  <span className="text-xs font-bold font-mono text-theme-primary">KES 450</span>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-farm-md bg-theme-section border border-theme-border">
                  <img
                    src="https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=200&q=80"
                    alt="Sukuma Wiki"
                    className="w-12 h-12 rounded object-cover border border-theme-border filter brightness-95"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-theme-textPrimary">Fresh Sukuma Wiki</p>
                    <p className="text-[11px] text-theme-textSecondary">1 kg Crisp Farm Bundle</p>
                  </div>
                  <span className="text-xs font-bold font-mono text-theme-primary">KES 60</span>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-farm-md bg-theme-section border border-theme-border">
                  <img
                    src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=200&q=80"
                    alt="Acacia Honey"
                    className="w-12 h-12 rounded object-cover border border-theme-border filter brightness-95"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-theme-textPrimary">Pure Raw Honey</p>
                    <p className="text-[11px] text-theme-textSecondary">500g Jar • Cold-Spun</p>
                  </div>
                  <span className="text-xs font-bold font-mono text-theme-primary">KES 650</span>
                </div>
              </div>

              {/* Delivery ETA pill */}
              <div className="p-3 bg-theme-section rounded-farm-md border border-theme-border text-xs flex items-center justify-between text-theme-textSecondary">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-theme-accent" />
                  <span>Order cutoff for tomorrow: <strong className="text-theme-textPrimary">8:30 PM</strong></span>
                </div>
                <span className="font-bold text-theme-primary text-[11px]">Daily 7:30 AM</span>
              </div>

              <button
                onClick={() => {
                  setCurrentView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2"
              >
                <span>Browse All 9 Farm Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
