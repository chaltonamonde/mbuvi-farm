import React from 'react';
import { farmConfig } from '../../data/farmData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Leaf, 
  ShieldCheck, 
  Truck, 
} from 'lucide-react';

export default function Footer({ setCurrentView }) {
  const handleNav = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-section text-theme-textPrimary border-t border-theme-border pt-16 pb-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-theme-deep/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-theme-border">
          <div className="flex items-start gap-4 p-5 rounded-farm-md bg-theme-surface border border-theme-border shadow-subtle">
            <div className="p-2.5 rounded-full bg-theme-primary/15 text-theme-primary shrink-0 border border-theme-primary/30">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-theme-textPrimary font-display font-bold text-base">Direct Morning Dispatch</h4>
              <p className="text-theme-textSecondary text-xs mt-1 leading-relaxed">
                Harvested at 5:30 AM, packed on ice, and delivered to your kitchen before lunch across Nairobi & Machakos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-farm-md bg-theme-surface border border-theme-border shadow-subtle">
            <div className="p-2.5 rounded-full bg-theme-accent/15 text-theme-accent shrink-0 border border-theme-accent/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-theme-textPrimary font-display font-bold text-base">M-Pesa & Quality Guarantee</h4>
              <p className="text-theme-textSecondary text-xs mt-1 leading-relaxed">
                Pay seamlessly via M-Pesa STK push, or choose Pay-on-Delivery to inspect freshness at your gate.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-farm-md bg-theme-surface border border-theme-border shadow-subtle">
            <div className="p-2.5 rounded-full bg-theme-primary/15 text-theme-primary shrink-0 border border-theme-primary/30">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-theme-textPrimary font-display font-bold text-base">No Middlemen Markups</h4>
              <p className="text-theme-textSecondary text-xs mt-1 leading-relaxed">
                Buy straight from producer fields. Better margins for the farm, maximum crispness and value for you.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-theme-border">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-farm-md bg-theme-surface flex items-center justify-center text-white border border-theme-border shadow-card">
                <Leaf className="w-6 h-6 text-theme-primary" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-textPrimary tracking-tight">
                  Mbuvi Farm
                </h3>
                <p className="text-xs text-theme-primary font-medium">
                  {farmConfig.legalName}
                </p>
              </div>
            </div>

            <p className="text-theme-textSecondary text-sm leading-relaxed max-w-sm">
              {farmConfig.shortDescription}
            </p>

            <div className="pt-2">
              <a
                href={farmConfig.googleBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-surface hover:bg-theme-surfaceAlt border border-theme-border text-xs font-medium text-theme-textPrimary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                <span>{farmConfig.googleBusinessStatus}</span>
                <ExternalLink className="w-3 h-3 text-theme-textMuted" />
              </a>
            </div>
          </div>

          {/* Column 2: Farm Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm text-theme-primary uppercase tracking-wider mb-4">
              Explore Farm
            </h4>
            <ul className="space-y-2.5 text-sm text-theme-textSecondary">
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-theme-accent transition-colors">
                  Fresh Produce Shop
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wholesale')} className="hover:text-theme-accent transition-colors">
                  Wholesale & B2B Supply
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('visits')} className="hover:text-theme-accent transition-colors">
                  Farm Visits & Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('learn')} className="hover:text-theme-accent transition-colors">
                  Farm Journal & Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-theme-accent transition-colors">
                  Our Farming Story & Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('account')} className="hover:text-theme-accent transition-colors">
                  My Orders & 1-Click Reorder
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Delivery Zones Covered */}
          <div>
            <h4 className="font-display font-bold text-sm text-theme-accent uppercase tracking-wider mb-4">
              Delivery Corridors
            </h4>
            <ul className="space-y-2 text-xs text-theme-textSecondary">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                <span>Nairobi CBD & Westlands</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                <span>Kilimani, Lavington & Karen</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                <span>Machakos Town & Kangundo</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                <span>Syokimau, Athi River, Kitengela</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                <span>Thika Road & Kiambu Environs</span>
              </li>
              <li className="pt-2 text-[11px] text-theme-primary font-semibold">
                Cutoff: Order before 8:30 PM for next-day dispatch.
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-theme-primary uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="text-xs space-y-2.5 text-theme-textSecondary">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-theme-accent shrink-0" />
                <span>{farmConfig.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-theme-accent shrink-0" />
                <span>{farmConfig.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                <span>{farmConfig.physicalAddress}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <span>Mon–Sat: {farmConfig.hours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-theme-textMuted">
          <div>
            <p>
              © {new Date().getFullYear()} {farmConfig.name}. All rights reserved. Registered Agribusiness Enterprise, Kenya.
            </p>
            <p className="text-[11px] text-theme-textMuted mt-0.5">
              Phase 1 Front-End Architecture ready for Node/Express + PostgreSQL & Daraja M-Pesa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-theme-textSecondary">
            <button 
              onClick={() => handleNav('policies')} 
              className="hover:text-theme-accent underline underline-offset-4 transition-colors"
            >
              Privacy Policy (Template)
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNav('policies')} 
              className="hover:text-theme-accent underline underline-offset-4 transition-colors"
            >
              Terms of Supply
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNav('policies')} 
              className="hover:text-theme-accent underline underline-offset-4 transition-colors"
            >
              Freshness & Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
