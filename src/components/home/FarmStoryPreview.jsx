import React from 'react';
import { Leaf, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function FarmStoryPreview({ setCurrentView }) {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-theme-page border-b border-theme-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
          
          {/* Left Visual Images Grid (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-farm-md sm:rounded-farm-lg overflow-hidden border border-theme-border shadow-card bg-theme-section">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                alt="Mbuvi Farm fields and drip lines"
                className="w-full h-52 sm:h-80 lg:h-96 object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="badge-placeholder bg-theme-page/90 text-[10px] sm:text-[11px] block truncate">
                  [Photo Placeholder: Real photo of Mbuvi Farm fields & drip lines]
                </span>
              </div>
            </div>

            {/* Overlapping Trust Card (tucked inline on mobile, absolute on desktop) */}
            <div className="mt-2.5 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 lg:-bottom-8 lg:right-6 bg-theme-surface p-3 sm:p-4 rounded-farm-md shadow-cardHover border border-theme-border sm:max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-primary" />
                <span className="text-xs font-bold text-theme-textPrimary">Regenerative Care</span>
              </div>
              <p className="text-[11px] text-theme-textSecondary leading-relaxed">
                100% natural compost, rotational poultry grazing, and precision borehole drip lines.
              </p>
            </div>
          </div>

          {/* Right Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-theme-primary/15 text-theme-primary text-[11px] sm:text-xs font-bold border border-theme-primary/30">
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-theme-primary" />
              <span>Rooted in Kenyan Soil & Integrity</span>
            </div>

            <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-theme-textPrimary tracking-tight leading-tight">
              A Farm Built on Honest Agriculture, Not Shortcuts
            </h2>

            <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
              Mbuvi Farm started with a clear observation: Nairobi families and commercial chefs were paying premium prices for market produce that wilted within two days or eggs with pale, nutrient-depleted yolks.
            </p>

            <p className="hidden sm:block text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
              We chose a different standard along the Machakos agricultural corridor. Our kienyeji flocks roam open pasture under the African sun, our vegetables are fed by natural compost and borehole drip irrigation, and every harvest is picked the very morning it travels to your kitchen.
            </p>

            {/* 4 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5 pt-1 sm:pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-primary shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs text-theme-textPrimary font-semibold">
                  Zero synthetic antibiotics or yolk food colorants
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-primary shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs text-theme-textPrimary font-semibold">
                  Field-to-door logistics in under 5 hours
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-accent shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs text-theme-textPrimary font-semibold">
                  Fair farm-gate pricing with no middleman spikes
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-theme-accent shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs text-theme-textPrimary font-semibold">
                  Scheduled farm tours & masterclasses
                </span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setCurrentView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-6 flex items-center gap-2"
              >
                <span>Read Full Farm Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('visits');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary text-xs sm:text-sm py-2.5 px-4 sm:py-3 sm:px-5"
              >
                Book Farm Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
