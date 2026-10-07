import React, { useState } from 'react';
import { faqs } from '../../data/faq';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function FaqSection({ setCurrentView }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-theme-section border-b border-theme-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-theme-accent/15 text-theme-accent text-[11px] sm:text-xs font-bold border border-theme-accent/30 mb-2 sm:mb-3">
            <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-theme-accent" />
            <span>Clear Answers, Zero Guesswork</span>
          </div>
          <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-theme-textPrimary">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-theme-textSecondary mt-1 sm:mt-2">
            Everything you need to know about our daily harvest cycle, M-Pesa payments, and door-to-door delivery.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-farm-md border border-theme-border overflow-hidden transition-all bg-theme-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 font-display font-bold text-xs sm:text-base text-theme-textPrimary hover:bg-theme-surfaceAlt transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-theme-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-theme-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[11px] sm:text-sm text-theme-textSecondary leading-relaxed border-t border-theme-border pt-2.5 sm:pt-3 bg-theme-section/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-6 sm:mt-10 p-3.5 sm:p-5 rounded-farm-md bg-theme-surface border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-full bg-theme-section border border-theme-border text-theme-accent shrink-0">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-theme-accent" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-theme-textPrimary">
                Have a specific question not listed here?
              </h4>
              <p className="text-[11px] sm:text-xs text-theme-textSecondary">
                Our farm manager is available by call or WhatsApp from 6:30 AM to 6:30 PM.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary text-xs py-2 px-4 sm:py-2.5 sm:px-5 whitespace-nowrap"
          >
            Contact Farm Support
          </button>
        </div>
      </div>
    </section>
  );
}
