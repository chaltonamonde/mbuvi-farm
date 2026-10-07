import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { farmConfig } from '../../data/farmData';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = farmConfig.whatsappNumber;

  const quickMessages = [
    {
      title: 'Order Fresh Produce Today',
      desc: 'Ask about morning harvest & delivery times',
      text: 'Hello Mbuvi Farm, I would like to place an order for fresh produce delivered to my home.',
    },
    {
      title: 'Wholesale / B2B Kitchen Inquiry',
      desc: 'Bulk eggs & vegetables for restaurants or schools',
      text: 'Hello Mbuvi Farm, I run a restaurant/hotel/school and want to inquire about your wholesale catalogue and delivery schedule.',
    },
    {
      title: 'Farm Visits & Training',
      desc: 'Poultry & drip farming masterclass query',
      text: 'Hello Mbuvi Farm, I would like more information on booking an upcoming farm tour or agribusiness training.',
    },
  ];

  const handleOpenChat = (msg) => {
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* WhatsApp Quick Chat Card Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-theme-surface rounded-farm-lg shadow-cardHover border border-theme-border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Card Header */}
          <div className="bg-theme-section text-theme-textPrimary p-4 flex items-center justify-between border-b border-theme-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-theme-primary/20 border border-theme-primary/40 flex items-center justify-center text-theme-primary">
                <MessageCircle className="w-6 h-6 text-theme-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-theme-textPrimary">Mbuvi Farm Direct WhatsApp</h4>
                <div className="flex items-center gap-1.5 text-xs text-theme-primary">
                  <span className="w-2 h-2 rounded-full bg-theme-primary animate-ping" />
                  <span>Farm hotline online now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-theme-textMuted hover:text-theme-textPrimary p-1 rounded-full transition-colors"
              aria-label="Close WhatsApp options"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Select Message Prompt */}
          <div className="p-3.5 bg-theme-page/60 border-b border-theme-border text-xs text-theme-textSecondary">
            <p>
              Tap an option below to open WhatsApp with a pre-filled message directly to our order desk:
            </p>
          </div>

          <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenChat(item.text)}
                className="w-full text-left p-3 rounded-farm-md bg-theme-section hover:bg-theme-surfaceAlt border border-theme-border hover:border-theme-accent/60 transition-all group flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-bold text-theme-textPrimary group-hover:text-theme-accent transition-colors">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-theme-textMuted mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-theme-textMuted group-hover:text-theme-accent transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>

          <div className="p-3 bg-theme-page border-t border-theme-border flex items-center justify-between text-xs text-theme-textSecondary">
            <span className="text-[11px] text-theme-textMuted">Number: {farmConfig.whatsappDisplay}</span>
            <button
              onClick={() => handleOpenChat('Hello Mbuvi Farm, I have a quick question.')}
              className="text-theme-accent font-semibold hover:text-theme-accentHover transition-colors flex items-center gap-1"
            >
              Custom chat <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Sticky WhatsApp Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-[#1FAF38] hover:bg-[#16A34A] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-card hover:shadow-glow active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-theme-accent/40"
        aria-label="Chat with Mbuvi Farm on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-theme-accent rounded-full border-2 border-theme-page" />
        </div>
        <span className="font-display font-bold text-sm tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
