import React, { useState } from 'react';
import { farmConfig } from '../data/farmData';
import { ShieldCheck, FileText, RefreshCw, AlertCircle } from 'lucide-react';

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState('refund'); // 'refund' | 'terms' | 'privacy'

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Template Review Warning Alert */}
        <div className="p-4 rounded-farm-md bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-300">Standard Agribusiness Legal Policy Template</p>
            <p className="text-amber-200/80 mt-0.5">
              [Note for Mbuvi Farm: These legal terms and policies are standard compliant templates for Kenyan agribusiness e-commerce. Please have your legal advisor review and customize before Phase 2.]
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 border-b border-theme-border pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('refund')}
            className={`px-4 py-2.5 rounded-farm-sm text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'refund'
                ? 'bg-theme-surface-alt text-theme-textPrimary border border-theme-accent/50 shadow-card'
                : 'bg-theme-surface text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5 text-theme-accent" />
            <span>Freshness & Refund Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2.5 rounded-farm-sm text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-theme-surface-alt text-theme-textPrimary border border-theme-accent/50 shadow-card'
                : 'bg-theme-surface text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-theme-primary" />
            <span>Terms of Supply & Delivery</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 rounded-farm-sm text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-theme-surface-alt text-theme-textPrimary border border-theme-accent/50 shadow-card'
                : 'bg-theme-surface text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Customer Privacy & Data Policy</span>
          </button>
        </div>

        {/* TAB 1: Refund Policy */}
        {activeTab === 'refund' && (
          <div className="farm-card p-6 sm:p-8 bg-theme-surface border border-theme-border space-y-4 text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
            <h2 className="font-display font-extrabold text-xl text-theme-textPrimary">
              100% Farm-Fresh Quality Guarantee & Refund Policy
            </h2>
            <p className="text-theme-textSecondary">
              Because agricultural produce is harvested live, we maintain an uncompromising freshness standard.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">1. Inspection at Gate</h3>
            <p className="text-theme-textSecondary">
              Customers and chefs are strongly encouraged to inspect produce upon arrival. If any egg tray exhibits cracked shells or any vegetable bundle shows wilt, notify our delivery rider immediately.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">2. Replacement & M-Pesa Refund Timeline</h3>
            <p className="text-theme-textSecondary">
              If an issue is noticed within 2 hours of delivery, take a quick photo and send it to our WhatsApp order desk at <strong className="text-theme-primary">{farmConfig.whatsappDisplay}</strong>. We will either dispatch a replacement on the next morning run or initiate an instant M-Pesa refund for the affected item.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">3. Pre-Order Deposits</h3>
            <p className="text-theme-textSecondary">
              Deposits for heritage turkeys and custom slaughtered poultry are refundable if cancellation is requested at least 24 hours prior to the scheduled slaughter date.
            </p>
          </div>
        )}

        {/* TAB 2: Terms of Supply */}
        {activeTab === 'terms' && (
          <div className="farm-card p-6 sm:p-8 bg-theme-surface border border-theme-border space-y-4 text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
            <h2 className="font-display font-extrabold text-xl text-theme-textPrimary">
              Terms and Conditions of Supply
            </h2>
            <p className="text-theme-textSecondary">
              These terms govern all consumer, institutional, and wholesale deliveries arranged through {farmConfig.name}.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">1. Daily Harvest Cutoff</h3>
            <p className="text-theme-textSecondary">
              Next-morning delivery requires orders to be placed before 8:30 PM East Africa Time. Orders submitted after the cutoff will be harvested on the subsequent cycle.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">2. Pricing & Currency</h3>
            <p className="text-theme-textSecondary">
              All prices are quoted in Kenyan Shillings (KES). While prices for vegetables can fluctuate depending on dry or rainy seasons, prices confirmed at online checkout are honored in full.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">3. Commercial Credit Terms</h3>
            <p className="text-theme-textSecondary">
              Hotels and corporate institutions may request 14-day or 30-day payment terms following credit approval and signing of an official agricultural supply agreement.
            </p>
          </div>
        )}

        {/* TAB 3: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="farm-card p-6 sm:p-8 bg-theme-surface border border-theme-border space-y-4 text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
            <h2 className="font-display font-extrabold text-xl text-theme-textPrimary">
              Data Privacy & Protection Policy
            </h2>
            <p className="text-theme-textSecondary">
              In compliance with Kenya's Data Protection Act (2019), {farmConfig.name} protects your personal information.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">1. Collection of Details</h3>
            <p className="text-theme-textSecondary">
              We collect names, telephone numbers, and delivery estate addresses strictly for order fulfillment, dispatch driver coordination, and weekly harvest WhatsApp bulletins where opted in.
            </p>

            <h3 className="font-bold text-theme-accent pt-2">2. Financial Data</h3>
            <p className="text-theme-textSecondary">
              We never store M-Pesa PIN numbers or financial credentials. M-Pesa STK push transactions are handled directly through Safaricom PLC Daraja API protocols.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
