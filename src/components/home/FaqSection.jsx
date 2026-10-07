import React, { useState } from 'react';
import { faqs } from '../../data/faq';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function FaqSection({ setCurrentView }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-theme-section border-b border-theme-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-accent/15 text-theme-accent text-xs font-bold border border-theme-accent/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-theme-accent" />
            <span>Clear Answers, Zero Guesswork</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-theme-textSecondary mt-2">
            Everything you need to know about our daily harvest cycle, M-Pesa payments, and door-to-door delivery.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-farm-md border border-theme-border overflow-hidden transition-all bg-theme-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-theme-textPrimary hover:bg-theme-surfaceAlt transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-theme-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-theme-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-theme-textSecondary leading-relaxed border-t border-theme-border pt-3 bg-theme-section/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-farm-md bg-theme-surface border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-theme-section border border-theme-border text-theme-accent shrink-0">
              <PhoneCall className="w-5 h-5 text-theme-accent" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-theme-textPrimary">
                Have a specific question not listed here?
              </h4>
              <p className="text-xs text-theme-textSecondary">
                Our farm manager is available by call or WhatsApp from 6:30 AM to 6:30 PM.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary text-xs py-2.5 px-5 whitespace-nowrap"
          >
            Contact Farm Support
          </button>
        </div>
      </div>
    </section>
  );
}
