import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { farmConfig } from '../data/farmData';
import { 
  User, 
  ShoppingBag, 
  RotateCcw, 
  MapPin, 
  Repeat, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Plus,
  Truck,
  Sparkles 
} from 'lucide-react';

export default function AccountPage({ setCurrentView }) {
  const { orderHistory, reorderPastOrder, setIsCartOpen } = useCart();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'subscriptions' | 'addresses'

  const savedAddresses = [
    {
      id: 1,
      title: 'Home Address (Default)',
      recipient: 'Faith W. Mutua',
      phone: '0722 XXX XXX',
      address: 'House 4B, Acacia Court, Dennis Pritt Rd',
      zone: 'Nairobi Westlands & Kilimani',
      isDefault: true,
    },
    {
      id: 2,
      title: 'Parents Home (Machakos)',
      recipient: 'Elder Mutua',
      phone: '0733 XXX XXX',
      address: 'Near ABC Church, Kangundo Rd, Tala Town',
      zone: 'Machakos County & Kangundo Corridor',
      isDefault: false,
    },
  ];

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Greeting Banner */}
        <div className="bg-theme-surface rounded-farm-lg p-6 sm:p-8 border border-theme-border shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-theme-section border border-theme-accent text-theme-accent flex items-center justify-center font-display font-extrabold text-xl shadow-card">
              F
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display font-extrabold text-xl sm:text-2xl text-theme-textPrimary">
                  Faith Mutua
                </h1>
                <span className="badge-instock text-[10px]">
                  VIP Farm Club Member
                </span>
              </div>
              <p className="text-xs text-theme-textSecondary mt-0.5">
                Saved Phone: 0722 XXX XXX • Nairobi Kilimani
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-theme-page" />
            <span>Order New Produce</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-theme-border pb-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2.5 text-xs font-bold rounded-farm-sm transition-all flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-theme-surface-alt text-theme-textPrimary border border-theme-accent/50 shadow-card'
                : 'text-theme-textSecondary hover:text-theme-textPrimary bg-theme-surface border border-theme-border'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-theme-accent" />
            <span>Past Orders & 1-Click Reorder ({orderHistory.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('subscriptions')}
            className={`px-4 py-2.5 text-xs font-bold rounded-farm-sm transition-all flex items-center gap-2 ${
              activeTab === 'subscriptions'
                ? 'bg-theme-surface-alt text-theme-textPrimary border border-theme-accent/50 shadow-card'
                : 'text-theme-textSecondary hover:text-theme-textPrimary bg-theme-surface border border-theme-border'
            }`}
          >
            <Repeat className="w-4 h-4 text-theme-primary" />
            <span>Standing Weekly Orders</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-4 py-2.5 text-xs font-bold rounded-farm-sm transition-all flex items-center gap-2 ${
              activeTab === 'addresses'
                ? 'bg-theme-surface-alt text-theme-textPrimary border border-theme-accent/50 shadow-card'
                : 'text-theme-textSecondary hover:text-theme-textPrimary bg-theme-surface border border-theme-border'
            }`}
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Saved Delivery Addresses</span>
          </button>
        </div>

        {/* TAB 1: Order History */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="farm-card p-6 bg-theme-surface border border-theme-border flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display font-extrabold text-base text-theme-textPrimary font-mono">
                      Order #{order.id}
                    </span>
                    <span className="text-xs text-theme-textMuted">
                      Placed on {order.date}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary" />
                      {order.status}
                    </span>
                  </div>

                  {/* Items in order */}
                  <div className="text-xs text-theme-textSecondary space-y-1">
                    {order.items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                        <span className="font-semibold text-theme-textPrimary">{it.quantity}x</span>
                        <span>{it.name}</span>
                        <span className="text-theme-accent font-mono">
                          (KES {(it.priceKES * it.quantity).toLocaleString()})
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-theme-textSecondary pt-2 border-t border-theme-border">
                    <span>Delivered to: <strong className="text-theme-textPrimary">{order.deliveryZone}</strong></span>
                    <span>•</span>
                    <span>Payment: <strong className="text-theme-textPrimary">{order.paymentMethod}</strong></span>
                  </div>
                </div>

                {/* Right Total & Reorder Button */}
                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-theme-border">
                  <div className="text-left md:text-right">
                    <span className="text-[11px] text-theme-textMuted block uppercase font-bold">Total Paid:</span>
                    <span className="font-display font-extrabold text-xl text-theme-primary font-mono">
                      KES {order.totalKES.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => reorderPastOrder(order)}
                    className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2 shadow-card"
                    title="Add all items from this order into your cart instantly"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>1-Click Reorder</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Standing Orders (Weekly Subscriptions) */}
        {activeTab === 'subscriptions' && (
          <div className="space-y-6">
            <div className="farm-card p-6 bg-theme-surface border border-theme-border space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-theme-primary animate-pulse" />
                    <h3 className="font-display font-bold text-base text-theme-textPrimary">
                      Active Weekly Standing Order: Friday Morning Fresh Box
                    </h3>
                  </div>
                  <p className="text-xs text-theme-textSecondary mt-1">
                    Scheduled every Friday at 8:00 AM • Kilimani Home Delivery
                  </p>
                </div>
                <span className="badge-instock text-xs">Active Subscription</span>
              </div>

              <div className="p-4 rounded-farm-md bg-theme-section border border-theme-border text-xs space-y-1.5">
                <p className="font-bold text-theme-textPrimary">Weekly Reserved Produce:</p>
                <p className="text-theme-textSecondary">• 2x Trays Pasture-Raised Kienyeji Eggs (60 Eggs)</p>
                <p className="text-theme-textSecondary">• 3x Bunches Fresh Farm Sukuma Wiki (3 kg)</p>
                <p className="text-theme-textSecondary">• 1x Crate Vine Tomatoes (4 kg Grade 1)</p>
                <p className="text-theme-primary font-bold pt-2 border-t border-theme-border font-mono">
                  Estimated Weekly Total: KES 1,460 (Free Delivery Applied)
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-xs">
                <button 
                  onClick={() => alert('Subscription paused for next week. You can resume at any time!')}
                  className="btn-secondary py-2 px-4"
                >
                  Pause Next Delivery
                </button>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                  }}
                  className="btn-primary py-2 px-4"
                >
                  Add More Items to Subscription
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Saved Addresses */}
        {activeTab === 'addresses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedAddresses.map((addr) => (
              <div key={addr.id} className="farm-card p-6 bg-theme-surface border border-theme-border space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-theme-textPrimary">
                    {addr.title}
                  </h3>
                  {addr.isDefault && (
                    <span className="badge-instock text-[10px]">Default</span>
                  )}
                </div>
                <div className="text-xs text-theme-textSecondary space-y-1">
                  <p className="font-semibold text-theme-textPrimary">{addr.recipient} ({addr.phone})</p>
                  <p>{addr.address}</p>
                  <p className="text-theme-accent font-semibold">{addr.zone}</p>
                </div>
                <div className="pt-2 flex gap-3 text-xs">
                  <button className="text-theme-accent font-semibold hover:underline">
                    Edit Address
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
