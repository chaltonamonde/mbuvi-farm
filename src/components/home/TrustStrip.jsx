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
      description: 'Picked at sunrise, packed in chilled boxes, and delivered before lunch for crispness.',
      color: 'text-theme-primary',
    },
    {
      icon: ShieldCheck,
      title: 'M-Pesa STK & Pay-on-Delivery',
      description: 'Zero financial risk. Approve instant M-Pesa prompts or inspect produce at your gate before payment.',
      color: 'text-theme-accent',
    },
    {
      icon: Leaf,
      title: 'Zero Chemical Sprays',
      description: 'Regenerative farming using drip irrigation, compost manure, and biological pest management.',
      color: 'text-theme-primary',
    },
    {
      icon: Award,
      title: 'Transparent Certification',
      description: `${farmConfig.certifications[0].status}: KEPHIS GAP standards and food safety hygiene audits.`,
      color: 'text-amber-400',
    },
  ];

  return (
    <section className="py-12 bg-theme-section border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification Strip Top Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-theme-border text-xs text-theme-textSecondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-theme-primary" />
            <span className="font-semibold text-theme-textPrimary">Mbuvi Farm Credibility & Standards:</span>
            <span>Operating across Machakos & Nairobi Metropolitan Area</span>
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span className="badge-placeholder">{farmConfig.yearsOperating}</span>
            <span className="badge-placeholder">[Verified Supplier for 20+ Schools & Eateries]</span>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-farm-lg border border-theme-border hover:border-theme-accent/60 bg-theme-surface hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-farm-md bg-theme-section border border-theme-border flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-theme-textSecondary leading-relaxed">
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
