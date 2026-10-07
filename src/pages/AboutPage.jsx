import React from 'react';
import { farmConfig } from '../data/farmData';
import { 
  Leaf, 
  Award, 
  Users, 
  ShieldCheck, 
  Sun, 
  Droplets, 
  HeartHandshake, 
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar
} from 'lucide-react';

export default function AboutPage({ setCurrentView }) {
  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Farm Story Hero */}
        <div className="bg-theme-surface rounded-farm-lg p-8 sm:p-12 border border-theme-border shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
              <Leaf className="w-3.5 h-3.5 text-theme-primary" />
              <span>Regenerative Agriculture in Kenya</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-theme-textPrimary tracking-tight">
              The Story of Mbuvi Farm
            </h1>

            <p className="text-sm text-theme-textSecondary leading-relaxed">
              Founded on the belief that healthy food begins with living soil and respect for animal welfare, Mbuvi Farm is a family-operated agricultural enterprise situated along the Machakos / Kangundo agricultural corridor.
            </p>

            <p className="text-sm text-theme-textSecondary leading-relaxed">
              We reject industrial shortcuts. We don't pump our poultry with prophylactic antibiotics to accelerate growth, nor do we paint our egg yolks with synthetic dye additives. Every product we harvest represents genuine patience, clean borehole water, rich compost, and the warm African sun.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="badge-placeholder">{farmConfig.yearsOperating}</span>
              <span className="badge-placeholder">[Registered Agribusiness No: PVT-XXXXXX]</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-farm-md overflow-hidden border border-theme-border shadow-card bg-theme-section">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                alt="Mbuvi Farm Land"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
            <div className="mt-2 text-center">
              <span className="badge-placeholder text-[10px]">
                [Replace with real landscape photo of Mbuvi Farm Machakos]
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Agro-Ecological Practices */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-theme-textPrimary">
              Our 4 Farming Pillars
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary">
              How we protect the soil, safeguard water, and guarantee nutritional density for your table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="farm-card p-6 bg-theme-surface border border-theme-border">
              <div className="w-10 h-10 rounded-farm-md bg-amber-500/15 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Pasture-Grazed Poultry</h3>
              <p className="text-xs text-theme-textSecondary leading-relaxed">
                Hens enjoy outdoor foraging on green grass runs, alfalfa, and sunshine, creating naturally rich golden yolks without dyes.
              </p>
            </div>

            <div className="farm-card p-6 bg-theme-surface border border-theme-border">
              <div className="w-10 h-10 rounded-farm-md bg-theme-accent/15 text-theme-accent border border-theme-accent/20 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Solar Borehole Drip Lines</h3>
              <p className="text-xs text-theme-textSecondary leading-relaxed">
                Clean well water delivered straight to plant root zones, cutting water evaporation by 65% and preventing fungal foliage rot.
              </p>
            </div>

            <div className="farm-card p-6 bg-theme-surface border border-theme-border">
              <div className="w-10 h-10 rounded-farm-md bg-theme-primary/15 text-theme-primary border border-theme-primary/20 flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Compost Soil Nutrition</h3>
              <p className="text-xs text-theme-textSecondary leading-relaxed">
                Poultry manure is aged and hot-composted into organic humus that recharges micronutrients in the red loam earth.
              </p>
            </div>

            <div className="farm-card p-6 bg-theme-surface border border-theme-border">
              <div className="w-10 h-10 rounded-farm-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Zero Chemical Residue</h3>
              <p className="text-xs text-theme-textSecondary leading-relaxed">
                Integrated pest scouting using neem extracts, companion marigolds, and sticky traps instead of synthetic sprays.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-theme-textPrimary">
              Meet the Farm Team
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary">
              The people dedicated to tending the crops, caring for the flocks, and managing morning delivery logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {farmConfig.team.map((member, idx) => (
              <div key={idx} className="farm-card p-5 bg-theme-surface border border-theme-border flex flex-col justify-between">
                <div>
                  <div className="relative aspect-square rounded-farm-md overflow-hidden bg-theme-section mb-4 border border-theme-border">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="badge-placeholder bg-theme-page/90 text-[10px] block truncate">
                        {member.imagePlaceholderTag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-theme-textPrimary">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-theme-accent mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-theme-textSecondary mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Compliance Section */}
        <div className="bg-theme-surface rounded-farm-lg border border-theme-border p-6 sm:p-10 shadow-subtle space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold border border-amber-500/30 mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Compliance, Audits & Standards</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-theme-textPrimary">
              Certifications & Standards Status
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-1">
              Transparent verification details. Placeholders are clearly marked until final documents are uploaded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {farmConfig.certifications.map((cert, i) => (
              <div key={i} className="p-5 rounded-farm-md border border-theme-border bg-theme-section space-y-2">
                <span className="badge-placeholder text-[11px] block text-center mb-2">
                  {cert.status}
                </span>
                <h4 className="font-display font-bold text-sm text-theme-textPrimary">
                  {cert.title}
                </h4>
                <p className="text-[11px] font-mono text-theme-accent">
                  {cert.code}
                </p>
                <p className="text-xs text-theme-textSecondary leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-theme-surface via-theme-section to-theme-surface rounded-farm-lg border border-theme-border p-8 sm:p-12 text-center space-y-6 shadow-card">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-theme-textPrimary">
              Taste the True Difference of Sustainable Farming
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
              Order fresh kienyeji eggs, vegetables, and farm staples harvested in the morning, or reserve your slot in our next commercial poultry masterclass.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setCurrentView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary text-xs sm:text-sm py-3 px-6 flex items-center gap-2"
            >
              <span>Explore Farm Shop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentView('visits');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary text-xs sm:text-sm py-3 px-6 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-theme-accent" />
              <span>Book Farm Tour & Masterclass</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
