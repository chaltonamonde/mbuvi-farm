import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Gift, X, Check } from 'lucide-react';

export default function FirstOrderIncentive() {
  const [isOpen, setIsOpen] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [contactInput, setContactInput] = useState('');
  const { showToast } = useCart();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactInput) return;
    setSubmitted(true);
    showToast('Promo code MBUVI200 unlocked! KES 200 applied to your first order.', 'success');
  };

  return (
    <div className="bg-gradient-to-r from-theme-deep via-theme-section to-theme-surface text-theme-textPrimary py-2.5 px-4 relative z-30 shadow-subtle border-b border-theme-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Banner Text */}
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <div className="p-1.5 rounded-full bg-theme-primary/20 text-theme-primary shrink-0 border border-theme-primary/30">
            <Gift className="w-4 h-4 text-theme-primary" />
          </div>
          <div>
            <span className="font-bold text-theme-accent uppercase tracking-wider text-[10px] mr-1.5">
              First-Time Buyer Incentive:
            </span>
            <span className="font-medium text-theme-textPrimary">
              Get <strong className="text-theme-primary">KES 200 OFF</strong> your first order + complimentary fresh herb bouquet!
            </span>
          </div>
        </div>

        {/* Input / Promo Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter WhatsApp or Email"
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              className="px-3 py-1.5 rounded-farm-sm text-xs text-theme-textPrimary bg-theme-section border border-theme-border placeholder:text-theme-textMuted focus:outline-none focus:ring-2 focus:ring-theme-accent w-full sm:w-48"
            />
            <button
              type="submit"
              className="bg-theme-primary hover:bg-theme-primaryHover text-[#07130E] font-bold px-3.5 py-1.5 rounded-farm-sm transition-colors text-xs shrink-0 shadow-glow"
            >
              Claim KES 200
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-2 bg-theme-surface px-3 py-1.5 rounded-farm-sm border border-theme-accent/40">
            <Check className="w-4 h-4 text-theme-accent" />
            <span className="font-mono font-bold text-theme-accent text-xs">CODE: MBUVI200</span>
            <span className="text-[11px] text-theme-textSecondary">(Applied at checkout)</span>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-theme-textMuted hover:text-theme-textPrimary p-1 rounded-full transition-colors hidden md:block"
          aria-label="Dismiss first order banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
