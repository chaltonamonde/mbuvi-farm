import React from 'react';
import { Leaf, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function FarmStoryPreview({ setCurrentView }) {
  return (
    <section className="py-16 sm:py-20 bg-theme-page border-b border-theme-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Images Grid (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-farm-lg overflow-hidden border border-theme-border shadow-card bg-theme-section">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                alt="Mbuvi Farm fields and drip lines"
                className="w-full h-80 sm:h-96 object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="badge-placeholder bg-theme-page/90 text-[11px] block truncate">
                  [Photo Placeholder: Real photo of Mbuvi Farm fields & drip lines]
                </span>
              </div>
            </div>

            {/* Overlapping Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-theme-surface p-4 rounded-farm-md shadow-cardHover border border-theme-border max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="w-4 h-4 text-theme-primary" />
                <span className="text-xs font-bold text-theme-textPrimary">Regenerative Care</span>
              </div>
              <p className="text-[11px] text-theme-textSecondary leading-relaxed">
                100% natural composting, rotational poultry grazing, and precision borehole drip lines.
              </p>
            </div>
          </div>

          {/* Right Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
              <Award className="w-3.5 h-3.5 text-theme-primary" />
              <span>Rooted in Kenyan Soil & Integrity</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary tracking-tight leading-tight">
              A Farm Built on Honest Agriculture, Not Shortcuts
            </h2>

            <p className="text-sm text-theme-textSecondary leading-relaxed">
              Mbuvi Farm started with a clear observation: Nairobi families and commercial chefs were paying premium prices for market produce that wilted within two days or eggs with pale, nutrient-depleted yolks.
            </p>

            <p className="text-sm text-theme-textSecondary leading-relaxed">
              We chose a different standard along the Machakos agricultural corridor. Our kienyeji flocks roam open pasture under the African sun, our vegetables are fed by natural compost and borehole drip irrigation, and every harvest is picked the very morning it travels to your kitchen.
            </p>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                <span className="text-xs text-theme-textPrimary font-semibold">
                  Zero synthetic antibiotics or yolk food colorants
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                <span className="text-xs text-theme-textPrimary font-semibold">
                  Field-to-door logistics in under 5 hours
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <span className="text-xs text-theme-textPrimary font-semibold">
                  Fair farm-gate pricing with no middleman spikes
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <span className="text-xs text-theme-textPrimary font-semibold">
                  Scheduled farm tours & biosecurity masterclasses
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setCurrentView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary text-xs sm:text-sm py-3 px-6 flex items-center gap-2"
              >
                <span>Read Full Farm Story & Meet Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('visits');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary text-xs sm:text-sm py-3 px-5"
              >
                Book Farm Visit / Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
