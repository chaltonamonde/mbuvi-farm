import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { farmConfig } from '../../data/farmData';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ChevronRight, 
  User, 
  Leaf, 
} from 'lucide-react';

export default function Navbar({ currentView, setCurrentView }) {
  const { totalItemCount, subtotalKES, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Farm Shop', badge: 'Fresh Pick' },
    { id: 'wholesale', label: 'Wholesale B2B' },
    { id: 'visits', label: 'Farm Visits & Training' },
    { id: 'learn', label: 'Learn / Journal' },
    { id: 'about', label: 'About Farm' },
    { id: 'contact', label: 'Contact & Delivery' },
  ];

  const handleNav = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-theme-page/92 backdrop-blur-md border-b border-theme-border shadow-subtle">
      {/* Top Utility Bar */}
      <div className="bg-theme-section text-theme-textSecondary text-xs py-2 px-4 border-b border-theme-border">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Dispatch Notice */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-theme-primary animate-pulse" />
            <span className="font-medium text-theme-textSecondary">
              Next harvest dispatch: <strong className="text-theme-textPrimary">Tomorrow 6:30 AM</strong>
            </span>
            <span className="hidden md:inline text-theme-border">|</span>
            <span className="hidden md:inline text-theme-textMuted">
              Free delivery in Nairobi & Machakos over KES {farmConfig.freeDeliveryThresholdKES.toLocaleString()}
            </span>
          </div>

          {/* Contact & Google Maps Links */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${farmConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-theme-textSecondary hover:text-theme-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-theme-accent" />
              <span>{farmConfig.phoneDisplay}</span>
            </a>
            <a
              href={farmConfig.googleBusinessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-theme-textSecondary hover:text-theme-accent transition-colors"
              title="Google Business Profile Location"
            >
              <MapPin className="w-3.5 h-3.5 text-theme-primary" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-11 h-11 rounded-farm-md bg-gradient-to-br from-theme-deep to-theme-surface flex items-center justify-center text-white border border-theme-border shadow-card group-hover:border-theme-accent/60 transition-all">
              <Leaf className="w-6 h-6 text-theme-primary" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl text-theme-textPrimary tracking-tight">
                  Mbuvi Farm
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
                  Kenya
                </span>
              </div>
              <p className="text-[11px] text-theme-textMuted font-medium -mt-0.5">
                Naturally Farmed • Direct Delivery
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-farm-sm transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-theme-primary bg-theme-surface font-bold border border-theme-border/60'
                      : 'text-theme-textSecondary hover:text-theme-textPrimary hover:bg-theme-surface/70'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-theme-accent/15 text-theme-accent border border-theme-accent/30">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-theme-primary rounded-full shadow-glow" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Account & Cart */}
          <div className="flex items-center gap-3">
            {/* Account Icon / My Orders */}
            <button
              onClick={() => handleNav('account')}
              className={`p-2.5 rounded-farm-md border transition-all relative ${
                currentView === 'account' 
                  ? 'bg-theme-surface text-theme-accent border-theme-accent shadow-skyGlow' 
                  : 'bg-theme-surface border-theme-border text-theme-textSecondary hover:text-theme-accent hover:border-theme-accent/50'
              }`}
              title="My Account & Reorder"
              aria-label="View Account and Orders"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-theme-primary hover:bg-theme-primaryHover text-[#07130E] px-4 py-2.5 rounded-farm-md shadow-glow active:scale-95 transition-all font-bold"
              aria-label={`Open Cart (${totalItemCount} items)`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#07130E]" />
                {totalItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-theme-accent text-[#07130E] text-[10px] font-extrabold flex items-center justify-center animate-bounce">
                    {totalItemCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none text-left">
                <span className="text-[10px] text-[#07130E]/80 uppercase font-bold">Cart</span>
                <span className="text-xs font-black">
                  KES {subtotalKES.toLocaleString()}
                </span>
              </div>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-farm-md border border-theme-border text-theme-textPrimary bg-theme-surface hover:border-theme-accent/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-theme-border bg-theme-section px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="p-2 mb-2 bg-theme-surface rounded-farm-md text-xs text-theme-textSecondary border border-theme-border flex items-center justify-between">
            <span>Free delivery on orders &gt; KES 2,500</span>
            <span className="font-bold text-theme-primary">Nairobi & Machakos</span>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full flex items-center justify-between p-3 rounded-farm-md text-sm font-semibold transition-colors ${
                currentView === link.id
                  ? 'bg-theme-surface text-theme-primary border border-theme-border'
                  : 'text-theme-textPrimary hover:bg-theme-surface'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className={`w-4 h-4 ${currentView === link.id ? 'text-theme-primary' : 'text-theme-textMuted'}`} />
            </button>
          ))}

          <div className="pt-3 border-t border-theme-border space-y-2">
            <button
              onClick={() => handleNav('account')}
              className="w-full flex items-center gap-2 p-3 rounded-farm-md text-sm font-semibold text-theme-textPrimary hover:bg-theme-surface"
            >
              <User className="w-4 h-4 text-theme-accent" />
              <span>My Account & Past Orders (1-Click Reorder)</span>
            </button>
            <button
              onClick={() => handleNav('shop')}
              className="w-full btn-primary text-center"
            >
              Order Farm Produce Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
