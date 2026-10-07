import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import AmbientBackground from './components/common/AmbientBackground';
import FirstOrderIncentive from './components/common/FirstOrderIncentive';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CartDrawer from './components/cart/CartDrawer';
import CheckoutModal from './components/checkout/CheckoutModal';
import ProductDetailModal from './components/shop/ProductDetailModal';
import WhatsAppButton from './components/common/WhatsAppButton';
import BackToTop from './components/common/BackToTop';
import ToastContainer from './components/common/ToastContainer';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WholesalePage from './pages/WholesalePage';
import VisitsPage from './pages/VisitsPage';
import LearnPage from './pages/LearnPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import PolicyPage from './pages/PolicyPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // Listen to browser hash or back button if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'shop', 'wholesale', 'visits', 'learn', 'about', 'contact', 'account', 'policies'].includes(hash)) {
        setCurrentView(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSetView = (view) => {
    setCurrentView(view);
    window.location.hash = view;
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col relative selection:bg-theme-primary selection:text-theme-page">
        {/* Subtle Ambient Background Light Pools */}
        <AmbientBackground />

        {/* First-Order Incentive Promo Banner */}
        <FirstOrderIncentive />

        {/* Global Navigation Header */}
        <Navbar currentView={currentView} setCurrentView={handleSetView} />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          {currentView === 'home' && <HomePage setCurrentView={handleSetView} />}
          {currentView === 'shop' && <ShopPage setCurrentView={handleSetView} />}
          {currentView === 'wholesale' && <WholesalePage />}
          {currentView === 'visits' && <VisitsPage />}
          {currentView === 'learn' && <LearnPage setCurrentView={handleSetView} />}
          {currentView === 'about' && <AboutPage setCurrentView={handleSetView} />}
          {currentView === 'contact' && <ContactPage />}
          {currentView === 'account' && <AccountPage setCurrentView={handleSetView} />}
          {currentView === 'policies' && <PolicyPage />}
        </main>

        {/* Global Footer */}
        <Footer setCurrentView={handleSetView} />

        {/* Modals & Drawers */}
        <CartDrawer />
        <CheckoutModal />
        <ProductDetailModal />

        {/* Sticky Floating Action Buttons & Toasts */}
        <WhatsAppButton />
        <BackToTop />
        <ToastContainer />
      </div>
    </CartProvider>
  );
}
