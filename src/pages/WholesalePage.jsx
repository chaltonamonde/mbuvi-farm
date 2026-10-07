import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { deliveryZones } from '../data/deliveryZones';
import { 
  Building2, 
  Download, 
  FileSpreadsheet, 
  CheckCircle2, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Send, 
  Printer, 
  FileText,
} from 'lucide-react';

export default function WholesalePage() {
  const { showToast } = useCart();
  const [showPriceListModal, setShowPriceListModal] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  const [form, setForm] = useState({
    businessName: '',
    businessType: 'Restaurant / Hotel',
    contactPerson: '',
    designation: 'Executive Chef / Kitchen Lead',
    phone: '',
    email: '',
    deliveryLocation: 'Nairobi Westlands & Kilimani',
    deliveryFrequency: '3x per week (Mon / Wed / Fri)',
    estimatedVolume: '',
    requirements: '',
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const ref = `MBUVI-B2B-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteRef(ref);
    setQuoteSubmitted(true);
    showToast(`Wholesale quote request #${ref} received! Our account lead will call within 2 hours.`, 'success');
  };

  const handlePrintPriceSheet = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Hero Banner */}
        <div className="bg-gradient-to-r from-theme-deep via-theme-section to-theme-surface text-theme-textPrimary rounded-farm-lg p-8 sm:p-12 shadow-card border border-theme-border relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
              <Building2 className="w-3.5 h-3.5 text-theme-primary" />
              <span>Commercial Foodservice & Institutional Supply</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-theme-textPrimary tracking-tight leading-tight">
              Direct Farm Produce Contracts for Kenyan Commercial Kitchens
            </h1>

            <p className="text-sm sm:text-base text-theme-textSecondary leading-relaxed">
              Supplying executive hotels, restaurants, schools, and boutique grocers across Nairobi and Machakos. Get uniform grading, guaranteed morning delivery before 8:00 AM prep, and transparent farm-gate wholesale contracts.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('quote-form-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-xs sm:text-sm py-3.5 px-6"
              >
                Request Commercial Pricing
              </button>

              <button
                onClick={() => setShowPriceListModal(true)}
                className="btn-secondary text-xs sm:text-sm py-3.5 px-6 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-theme-accent" />
                <span>Download Wholesale Price List (KES)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars for Bulk Buyers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="farm-card p-6 bg-theme-surface border border-theme-border">
            <div className="w-10 h-10 rounded-farm-md bg-theme-section text-theme-primary flex items-center justify-center mb-4 border border-theme-border">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Before 8:00 AM Kitchen Prep</h3>
            <p className="text-xs text-theme-textSecondary leading-relaxed">
              Cold crates arrive at your kitchen dock before morning culinary prep begins, preventing costly service delays.
            </p>
          </div>

          <div className="farm-card p-6 bg-theme-surface border border-theme-border">
            <div className="w-10 h-10 rounded-farm-md bg-theme-section text-theme-accent flex items-center justify-center mb-4 border border-theme-border">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Standardized Sizing & Grade 1</h3>
            <p className="text-xs text-theme-textSecondary leading-relaxed">
              Zero kitchen shrinkage. Uniform size sorting for tomatoes, butternut, and calibrated kienyeji chicken weights.
            </p>
          </div>

          <div className="farm-card p-6 bg-theme-surface border border-theme-border">
            <div className="w-10 h-10 rounded-farm-md bg-theme-section text-theme-primary flex items-center justify-center mb-4 border border-theme-border">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Flexible Standing Orders</h3>
            <p className="text-xs text-theme-textSecondary leading-relaxed">
              Automated weekly schedules. Update delivery quantities up to 7:00 PM the evening prior via WhatsApp.
            </p>
          </div>

          <div className="farm-card p-6 bg-theme-surface border border-theme-border">
            <div className="w-10 h-10 rounded-farm-md bg-theme-section text-amber-400 flex items-center justify-center mb-4 border border-theme-border">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">Formal Invoicing & ETR</h3>
            <p className="text-xs text-theme-textSecondary leading-relaxed">
              Consolidated weekly or bi-weekly invoices with verified delivery notes for transparent corporate accounting.
            </p>
          </div>
        </div>

        {/* Commercial B2B Delivery Schedule Table */}
        <div className="bg-theme-surface rounded-farm-lg border border-theme-border p-6 sm:p-8 shadow-subtle space-y-6">
          <div>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-theme-textPrimary">
              Guaranteed Commercial Delivery Logistics Schedule
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-1">
              Dedicated temperature-controlled routes serving commercial kitchens across Nairobi, Machakos, and Kiambu.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-theme-border bg-theme-section text-theme-textPrimary font-bold">
                  <th className="p-3.5">Delivery Corridor</th>
                  <th className="p-3.5">Key Service Zones</th>
                  <th className="p-3.5">Dispatch Days</th>
                  <th className="p-3.5">Kitchen Arrival Window</th>
                  <th className="p-3.5">B2B Delivery Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme-border text-theme-textSecondary">
                {deliveryZones.map((zone) => (
                  <tr key={zone.id} className="hover:bg-theme-surfaceAlt/60 transition-colors">
                    <td className="p-3.5 font-bold text-theme-textPrimary">{zone.name}</td>
                    <td className="p-3.5 text-theme-textSecondary">{zone.areas.slice(0, 4).join(', ')}</td>
                    <td className="p-3.5 font-medium">{zone.schedule.split('(')[0]}</td>
                    <td className="p-3.5 font-semibold text-theme-primary">7:30 AM – 9:30 AM</td>
                    <td className="p-3.5">
                      <span className="font-bold text-theme-accent">Free on B2B orders &gt; KES 5,000</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* B2B Quote Request Form Section */}
        <div id="quote-form-section" className="bg-theme-surface rounded-farm-lg border border-theme-border p-6 sm:p-10 shadow-card">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30 mb-2">
              <FileText className="w-3.5 h-3.5 text-theme-primary" />
              <span>Priority B2B Account Assessment</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-theme-textPrimary">
              Request a Custom Commercial Supply Quotation
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-2">
              Tell us about your kitchen's estimated weekly consumption. We will prepare a contract proposal with locked farm-gate rates within 2 hours.
            </p>
          </div>

          {!quoteSubmitted ? (
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Establishment / Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tamarind Group / St. Austin's Academy / Green Grocer"
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="form-label">Establishment Type *</label>
                  <select
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="form-input text-xs font-medium"
                  >
                    <option value="Restaurant / Hotel" className="bg-theme-surface">Restaurant / Hotel / Grill</option>
                    <option value="School / College Canteen" className="bg-theme-surface">School / University Catering</option>
                    <option value="Hospitality Caterer" className="bg-theme-surface">Event Caterer / Corporate Canteen</option>
                    <option value="Supermarket / Fresh Mart" className="bg-theme-surface">Supermarket / Green Grocer</option>
                    <option value="Residential Estate Group" className="bg-theme-surface">Estate Bulk Buying Group</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="form-label">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chef Jackson or Maryanne K."
                    value={form.contactPerson}
                    onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="form-label">Designation / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Head Chef / Procurement Mgr"
                    value={form.designation}
                    onChange={(e) => setForm({ ...form, designation: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="form-label">Phone & WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="07XX XXX XXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="form-label">Official Email</label>
                  <input
                    type="email"
                    placeholder="procurement@establishment.co.ke"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="form-label">Delivery Location / Kitchen Zone *</label>
                  <select
                    value={form.deliveryLocation}
                    onChange={(e) => setForm({ ...form, deliveryLocation: e.target.value })}
                    className="form-input text-xs font-medium"
                  >
                    {deliveryZones.map((z) => (
                      <option key={z.id} value={z.name} className="bg-theme-surface">{z.name} ({z.county})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">Desired Delivery Frequency *</label>
                  <select
                    value={form.deliveryFrequency}
                    onChange={(e) => setForm({ ...form, deliveryFrequency: e.target.value })}
                    className="form-input text-xs font-medium"
                  >
                    <option value="Daily" className="bg-theme-surface">Daily Morning (6 Days a Week)</option>
                    <option value="3x per week" className="bg-theme-surface">3x per week (Mon / Wed / Fri)</option>
                    <option value="2x per week" className="bg-theme-surface">2x per week (Tue / Sat)</option>
                    <option value="Weekly bulk" className="bg-theme-surface">Weekly Consolidated Crate Order</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">Estimated Weekly Volumes & Requirements</label>
                <textarea
                  rows={3}
                  placeholder="e.g. 15 trays of kienyeji eggs weekly, 40 dressed birds per Friday, 60kg sukuma wiki and 4 crates tomatoes on Mon & Thu."
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  className="form-input text-xs"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-primary text-xs sm:text-sm py-3.5 px-8 flex items-center gap-2 shadow-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Wholesale Quotation Request</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 rounded-farm-lg bg-theme-section border border-theme-primary/40 text-center space-y-4">
              <div className="w-16 h-16 bg-theme-primary text-[#07130E] rounded-full flex items-center justify-center mx-auto shadow-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-theme-textPrimary">
                Quotation Request #{quoteRef} Received!
              </h3>
              <p className="text-xs sm:text-sm text-theme-textSecondary max-w-lg mx-auto">
                Thank you, {form.contactPerson}. Our B2B Agri-Logistics Lead will review your estimated weekly volume for {form.businessName} and dispatch an official PDF quote and harvest availability schedule to {form.phone}.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="btn-secondary text-xs py-2 px-5"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Downloadable Price List Modal */}
        {showPriceListModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div 
              onClick={() => setShowPriceListModal(false)}
              className="fixed inset-0 bg-theme-page/85 backdrop-blur-sm transition-opacity" 
            />

            <div className="min-h-full flex items-center justify-center p-4 text-center">
              <div className="relative bg-theme-surface rounded-farm-lg max-w-3xl w-full text-left overflow-hidden shadow-2xl border border-theme-border p-6 sm:p-8 animate-in fade-in duration-200 space-y-6 text-theme-textPrimary">
                
                <div className="flex items-center justify-between pb-4 border-b border-theme-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-farm-md bg-theme-section border border-theme-border text-theme-accent flex items-center justify-center">
                      <FileSpreadsheet className="w-6 h-6 text-theme-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-theme-textPrimary">
                        Mbuvi Farm Official Wholesale Price List (KES)
                      </h3>
                      <p className="text-xs text-theme-textSecondary">
                        Valid for Commercial Orders • Updated October 2026 Season
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPriceListModal(false)}
                    className="p-1.5 text-theme-textMuted hover:text-theme-textPrimary rounded-full hover:bg-theme-section"
                  >
                    ✕
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-theme-section text-theme-textPrimary font-bold border-b border-theme-border">
                        <th className="p-3">Product Name</th>
                        <th className="p-3">Packaging / Unit</th>
                        <th className="p-3">Retail Price</th>
                        <th className="p-3 text-theme-primary">Wholesale Price (10+ Units)</th>
                        <th className="p-3">Min Order</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border text-theme-textSecondary">
                      {products.map((p) => (
                        <tr key={p.id} className="hover:bg-theme-surfaceAlt/60">
                          <td className="p-3 font-semibold text-theme-textPrimary">{p.name}</td>
                          <td className="p-3 text-theme-textSecondary">{p.unit}</td>
                          <td className="p-3 font-mono">KES {p.priceKES.toLocaleString()}</td>
                          <td className="p-3 font-mono font-bold text-theme-primary">
                            KES {(p.wholesalePriceKES || Math.round(p.priceKES * 0.85)).toLocaleString()}
                          </td>
                          <td className="p-3 text-theme-textMuted">
                            {p.category === 'eggs-poultry' ? '5 Trays / 5 Birds' : '10 kg'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-theme-section rounded-farm-md border border-theme-border text-xs text-theme-textSecondary flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p>
                    * Prices subject to seasonal rainfall and volume tiering. Invoices issued with Safaricom M-Pesa Till or Bank Transfer options.
                  </p>
                  <button
                    onClick={handlePrintPriceSheet}
                    className="btn-primary text-xs py-2 px-4 flex items-center gap-2 shrink-0"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Price Sheet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
