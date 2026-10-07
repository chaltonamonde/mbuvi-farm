import React from 'react';
import { 
  Leaf, 
  Clock, 
  ShieldCheck, 
  Award, 
} from 'lucide-react';
import { farmConfig } from '../../data/farmData';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Clock,
      title: 'Harvested at 5:30 AM',
      description: 'Picked at sunrise, packed chilled, and delivered before lunch for crispness.',
      color: 'text-theme-primary',
    },
    {
      icon: ShieldCheck,
      title: 'M-Pesa & Pay on Delivery',
      description: 'Zero risk. Approve instant M-Pesa prompts or inspect produce at your door.',
      color: 'text-theme-accent',
    },
    {
      icon: Leaf,
      title: 'Zero Chemical Sprays',
      description: 'Regenerative drip lines, compost manure, and organic pest management.',
      color: 'text-theme-primary',
    },
    {
      icon: Award,
      title: 'Audited Standards',
      description: `${farmConfig.certifications[0].status}: KEPHIS GAP & food safety hygiene.`,
      color: 'text-amber-400',
    },
  ];

  return (
    <section className="py-6 sm:py-12 bg-theme-section border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification Strip Top Line */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 sm:pb-6 sm:mb-8 border-b border-theme-border text-xs text-theme-textSecondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-theme-primary shrink-0" />
            <span className="font-semibold text-theme-textPrimary">Mbuvi Farm Standards:</span>
            <span className="text-[11px] sm:text-xs">Machakos & Nairobi Corridor</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span className="badge-placeholder text-[10px]">{farmConfig.yearsOperating}</span>
            <span className="badge-placeholder text-[10px] hidden xs:inline-flex">[Verified Supplier]</span>
          </div>
        </div>

        {/* 4 Feature Columns (2-Column Dense Grid on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3 sm:p-5 rounded-farm-md sm:rounded-farm-lg border border-theme-border hover:border-theme-accent/60 bg-theme-surface hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-farm-sm sm:rounded-farm-md bg-theme-section border border-theme-border flex items-center justify-center mb-2.5 sm:mb-4">
                    <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-base text-theme-textPrimary mb-1 sm:mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-theme-textSecondary leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
