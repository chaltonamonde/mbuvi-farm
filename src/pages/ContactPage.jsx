import React, { useState } from 'react';
import { farmConfig } from '../data/farmData';
import { deliveryZones } from '../data/deliveryZones';
import { useCart } from '../context/CartContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Truck,
  Sparkles 
} from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Produce Order / Harvest Availability',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `MBV-ENQ-${Math.floor(100 + Math.random() * 900)}`;
    setTicketRef(ref);
    setSubmitted(true);
    showToast(`Inquiry ticket #${ref} generated! Farm desk notified.`, 'success');
  };

  const handleWhatsApp = () => {
    const msg = `Hello Mbuvi Farm, I am contacting you from the website contact page regarding an order or farm query.`;
    window.open(`https://wa.me/${farmConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="bg-theme-surface rounded-farm-lg p-8 sm:p-10 border border-theme-border shadow-subtle max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
            <Phone className="w-3.5 h-3.5 text-theme-primary" />
            <span>Farm Direct Communication</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-theme-textPrimary">
            Contact Mbuvi Farm & Delivery Desk
          </h1>
          <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
            Need to place a custom order, confirm morning harvest availability, or enquire about delivery to your estate? We reply promptly.
          </p>
        </div>

        {/* Contact Info & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Cards */}
            <div className="farm-card p-6 bg-theme-surface border border-theme-border space-y-5">
              <h3 className="font-display font-bold text-lg text-theme-textPrimary pb-3 border-b border-theme-border">
                Direct Channels
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-theme-primary/15 text-theme-primary border border-theme-primary/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-textPrimary block">Telephone Hotline</span>
                  <p className="text-xs text-theme-textSecondary">{farmConfig.phoneDisplay}</p>
                  <a href={`tel:${farmConfig.phoneRaw}`} className="text-xs font-semibold text-theme-accent hover:underline mt-0.5 inline-block">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-textPrimary block">WhatsApp Orders & Dispatch</span>
                  <p className="text-xs text-theme-textSecondary">{farmConfig.whatsappDisplay}</p>
                  <button onClick={handleWhatsApp} className="text-xs font-semibold text-[#25D366] hover:underline mt-0.5 inline-block">
                    Chat with Farm Manager
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-theme-accent/15 text-theme-accent border border-theme-accent/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-textPrimary block">Official Farm Email</span>
                  <p className="text-xs text-theme-textSecondary">{farmConfig.email}</p>
                  <a href={`mailto:${farmConfig.email}`} className="text-xs font-semibold text-theme-accent hover:underline mt-0.5 inline-block">
                    Send Email
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-theme-primary/15 text-theme-primary border border-theme-primary/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-textPrimary block">Working & Dispatch Hours</span>
                  <p className="text-xs text-theme-textSecondary">Mon – Sat: {farmConfig.hours.weekdays}</p>
                  <p className="text-[11px] text-theme-accent font-medium mt-0.5">
                    Order cutoff: 8:30 PM for next-morning 6:30 AM dispatch
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-theme-textPrimary block">Farm Gate Location</span>
                  <p className="text-xs text-theme-textSecondary">{farmConfig.physicalAddress}</p>
                  <a
                    href={farmConfig.googleBusinessLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-theme-accent hover:underline mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Styled Map Visual Representation */}
            <div className="farm-card p-4 bg-theme-surface border border-theme-border overflow-hidden space-y-2">
              <div className="relative aspect-[16/9] rounded-farm-md overflow-hidden bg-theme-section border border-theme-border">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Farm Location Map corridor"
                  className="w-full h-full object-cover filter contrast-105 brightness-90"
                />
                <div className="absolute inset-0 bg-theme-page/40 backdrop-blur-[1px] flex items-center justify-center">
                  <a
                    href={farmConfig.googleBusinessLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-theme-surface/90 border border-theme-border text-theme-textPrimary hover:text-theme-accent rounded-full text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-theme-section transition-all"
                  >
                    <MapPin className="w-4 h-4 text-theme-accent" />
                    <span>Open in Google Maps App</span>
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-theme-textMuted text-center">
                * Farm gate visitors require prior biosecurity registration.
              </p>
            </div>
          </div>

          {/* Right Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="farm-card p-6 sm:p-8 bg-theme-surface border border-theme-border">
              <div className="mb-6">
                <span className="text-xs font-bold text-theme-accent uppercase tracking-wider block">
                  Quick Response Form
                </span>
                <h3 className="font-display font-extrabold text-xl text-theme-textPrimary mt-1">
                  Send a Message to the Farm Desk
                </h3>
                <p className="text-xs text-theme-textSecondary mt-1">
                  Expected reply time: <strong className="text-theme-primary">Within 45 minutes</strong> during operating hours (6:30 AM – 6:30 PM EAT).
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kelvin Kilonzo"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input text-xs"
                      />
                    </div>

                    <div>
                      <label className="form-label">Inquiry Subject *</label>
                      <select
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="form-input text-xs font-medium"
                      >
                        <option value="Produce Order / Harvest Availability">Fresh Produce Order / Stock</option>
                        <option value="Wholesale & Bulk Supply">Wholesale & Restaurant Supply</option>
                        <option value="Delivery Schedule Query">Delivery Area or ETA Question</option>
                        <option value="Farm Tour or Training">Farm Visit or Poultry Training</option>
                        <option value="Feedback or Quality Report">Freshness Feedback / Replacement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Message Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please include your estate/town if inquiring about delivery fees or times."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                    <span className="text-[11px] text-theme-textMuted">
                      🔒 Your details are used strictly for order coordination.
                    </span>

                    <button
                      type="submit"
                      className="btn-primary text-xs py-3 px-6 flex items-center gap-2 w-full sm:w-auto"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Farm Inquiry</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 rounded-farm-lg bg-theme-section border border-theme-primary/40 text-center space-y-4">
                  <div className="w-14 h-14 bg-theme-primary/20 text-theme-primary border border-theme-primary/40 rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-theme-textPrimary">
                    Inquiry Received: #{ticketRef}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-textSecondary max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name}. Our farm order desk has received your ticket regarding "{form.topic}". We will respond directly to {form.phone} via WhatsApp/SMS within 45 minutes.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-xs py-2.5 px-5"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Delivery Zones Table */}
        <div className="bg-theme-surface rounded-farm-lg border border-theme-border p-6 sm:p-8 shadow-subtle space-y-4">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-theme-accent" />
            <h3 className="font-display font-bold text-lg text-theme-textPrimary">
              Complete Delivery Corridors & Fee Schedule
            </h3>
          </div>
          <p className="text-xs text-theme-textSecondary">
            All produce is packed on ice and dispatched from our Machakos farm gate between 6:30 AM and 7:00 AM.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {deliveryZones.map((zone) => (
              <div key={zone.id} className="p-4 rounded-farm-md bg-theme-section border border-theme-border space-y-1.5 text-xs hover:border-theme-accent/40 transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-theme-textPrimary">{zone.name}</h4>
                  <span className="font-mono font-bold text-theme-accent">KES {zone.feeKES}</span>
                </div>
                <p className="text-theme-textSecondary text-[11px] leading-relaxed">{zone.areas.join(', ')}</p>
                <div className="pt-1 text-[11px] text-theme-primary font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-theme-primary" />
                  <span>{zone.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
