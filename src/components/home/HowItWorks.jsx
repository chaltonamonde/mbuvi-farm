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
      desc: 'Browse our live catalogue, choose pack sizes, and select your Nairobi or Machakos estate. Order before 8:30 PM for next-morning delivery.',
      icon: ShoppingBag,
      tag: 'Order Window',
    },
    {
      step: '02',
      title: '5:30 AM Morning Harvest',
      desc: 'Our farm team harvests vegetables at dawn, candles and crates fresh kienyeji eggs, and seals poultry in clean chilled boxes with ice packs.',
      icon: Sun,
      tag: 'Peak Freshness',
    },
    {
      step: '03',
      title: 'Early Morning Transit',
      desc: 'Dispatched via dedicated delivery routes along the Kangundo corridor directly to Nairobi, Kitengela, Syokimau, and Kiambu by 11:30 AM.',
      icon: Truck,
      tag: 'Direct Transit',
    },
    {
      step: '04',
      title: 'Inspect First, Pay M-Pesa',
      desc: 'Check the golden yolk size and vegetable crunch at your door. Pay conveniently via M-Pesa STK push or cash. 100% freshness guarantee.',
      icon: CheckCircle,
      tag: 'Zero Risk',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-theme-section border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-accent">
            Transparent Farm-to-Kitchen Process
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary mt-2">
            How Mbuvi Farm Delivers Genuine Freshness
          </h2>
          <p className="text-xs sm:text-sm text-theme-textSecondary mt-2">
            No middleman warehouses. No chemical holding agents. Pure field harvest straight to your kitchen.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary text-xs sm:text-sm py-3.5 px-8 inline-flex items-center gap-2"
          >
            <span>Start Your Order for Tomorrow's Harvest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
