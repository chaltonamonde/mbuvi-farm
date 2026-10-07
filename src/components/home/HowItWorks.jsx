import React from 'react';
import { 
  ShoppingBag, 
  Sun, 
  Truck, 
  CheckCircle, 
  ArrowRight, 
} from 'lucide-react';

export default function HowItWorks({ setCurrentView }) {
  const steps = [
    {
      step: '01',
      title: 'Order 24/7 Online or WhatsApp',
      desc: 'Browse our live catalogue, choose pack sizes, and select your estate. Order before 8:30 PM for next-morning delivery.',
      icon: ShoppingBag,
      tag: 'Order Window',
    },
    {
      step: '02',
      title: '5:30 AM Morning Harvest',
      desc: 'Our farm team harvests at dawn, candles fresh kienyeji eggs, and seals poultry in clean chilled boxes with ice packs.',
      icon: Sun,
      tag: 'Peak Freshness',
    },
    {
      step: '03',
      title: 'Early Morning Transit',
      desc: 'Dispatched via dedicated routes along Kangundo corridor directly to Nairobi, Kitengela, Syokimau, and Kiambu by 11:30 AM.',
      icon: Truck,
      tag: 'Direct Transit',
    },
    {
      step: '04',
      title: 'Inspect First, Pay M-Pesa',
      desc: 'Check the golden yolk size and vegetable crunch at your door. Pay conveniently via M-Pesa STK push. 100% guarantee.',
      icon: CheckCircle,
      tag: 'Zero Risk',
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-theme-section border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
            Transparent Farm-to-Kitchen Process
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary mt-1.5 sm:mt-2">
            How Mbuvi Farm Delivers Genuine Freshness
          </h2>
          <p className="text-xs sm:text-sm text-theme-textSecondary mt-1.5 sm:mt-2 leading-relaxed">
            No middleman warehouses. No chemical holding agents. Pure field harvest straight to your kitchen.
          </p>
        </div>

        {/* MOBILE VIEW (< md): Connected Compact Mini-Stepper Timeline */}
        <div className="md:hidden relative pl-6 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-theme-primary before:via-theme-accent before:to-theme-primary/30 space-y-3">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-theme-surface border border-theme-border rounded-farm-md p-3.5 shadow-subtle flex items-start gap-3"
              >
                {/* Step Node Marker on Connector Line */}
                <div className="absolute -left-6 top-3.5 -translate-x-1/2 w-6 h-6 rounded-full bg-theme-surface border-2 border-theme-primary flex items-center justify-center text-[10px] font-black text-theme-primary shadow-glow">
                  {idx + 1}
                </div>

                <div className="w-8 h-8 rounded-farm-sm bg-theme-section border border-theme-border flex items-center justify-center text-theme-accent shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <h3 className="font-display font-bold text-xs text-theme-textPrimary truncate">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-theme-primary/15 text-theme-primary border border-theme-primary/30 shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-[11px] text-theme-textSecondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW (>= md): 4 Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="farm-card p-6 relative flex flex-col justify-between group hover:border-theme-accent/60 bg-theme-surface border border-theme-border"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-theme-border group-hover:text-theme-accent transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-farm-md bg-theme-section border border-theme-border flex items-center justify-center text-theme-accent mb-4 group-hover:bg-theme-accent group-hover:text-[#07130E] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-theme-textSecondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary text-xs sm:text-sm py-3 px-6 sm:py-3.5 sm:px-8 inline-flex items-center gap-2"
          >
            <span>Start Your Order for Tomorrow's Harvest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
