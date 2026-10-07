import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';
import { deliveryZones, getDeliveryFee } from '../data/deliveryZones';
import { farmConfig } from '../data/farmData';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load initial cart from localStorage if present
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mbuvi_cart');
      return saved ? JSON.parse(saved) : [
        // Realistic initial cart item to wow user immediately
        {
          id: 'prod-eggs-30',
          quantity: 2,
          product: products.find(p => p.id === 'prod-eggs-30')
        },
        {
          id: 'prod-sukuma-1kg',
          quantity: 3,
          product: products.find(p => p.id === 'prod-sukuma-1kg')
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedZoneId, setSelectedZoneId] = useState('nairobi-east-cbd');
  const [isStandingOrder, setIsStandingOrder] = useState(false);
  const [standingOrderFrequency, setStandingOrderFrequency] = useState('weekly');
  const [toasts, setToasts] = useState([]);

  // Mock order history
  const [orderHistory, setOrderHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('mbuvi_orders');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 'MBV-2026-904',
        date: '2026-10-02',
        status: 'Delivered',
        items: [
          { name: 'Free-Range Kienyeji Eggs (Tray of 30)', quantity: 2, priceKES: 450 },
          { name: 'Sun-Ripened Vine Tomatoes (4kg)', quantity: 1, priceKES: 380 },
        ],
        totalKES: 1280,
        deliveryZone: 'Nairobi Westlands & Kilimani',
        paymentMethod: 'M-Pesa STK Push',
      },
      {
        id: 'MBV-2026-881',
        date: '2026-09-24',
        status: 'Delivered',
        items: [
          { name: 'Free-Range Kienyeji Chicken (Dressed)', quantity: 2, priceKES: 950 },
          { name: '100% Pure Raw Acacia Honey (500g)', quantity: 1, priceKES: 650 },
        ],
        totalKES: 2550,
        deliveryZone: 'Nairobi CBD & Eastlands',
        paymentMethod: 'M-Pesa Till',
      },
    ];
  });

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mbuvi_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Sync order history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mbuvi_orders', JSON.stringify(orderHistory));
    } catch (e) {
      console.error(e);
    }
  }, [orderHistory]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: product.id, quantity, product }];
    });
    showToast(`Added ${quantity}x ${product.name} to cart!`, 'success');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find(i => i.id === productId);
    setCartItems(prev => prev.filter(i => i.id !== productId));
    if (item?.product) {
      showToast(`Removed ${item.product.name} from cart`, 'info');
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Reorder from past orders
  const reorderPastOrder = (order) => {
    const newItems = [];
    order.items.forEach(pastItem => {
      const fullProd = products.find(p => p.name.includes(pastItem.name.slice(0, 15))) || products[0];
      newItems.push({
        id: fullProd.id,
        quantity: pastItem.quantity,
        product: fullProd,
      });
    });
    setCartItems(newItems);
    setIsCartOpen(true);
    showToast(`Reorder populated! ${order.items.length} items added to your cart.`, 'success');
  };

  // Record a completed order
  const recordOrder = (orderData) => {
    const newOrder = {
      id: `MBV-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing (Harvest Queue)',
      items: cartItems.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        priceKES: item.product.priceKES,
      })),
      totalKES: orderData.totalKES,
      deliveryZone: orderData.deliveryZoneName,
      paymentMethod: orderData.paymentMethod,
      customerName: orderData.customerName,
      phone: orderData.phone,
      isStandingOrder,
    };
    setOrderHistory(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Calculations
  const subtotalKES = cartItems.reduce((acc, item) => {
    return acc + (item.product.priceKES * item.quantity);
  }, 0);

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const deliveryFeeKES = getDeliveryFee(selectedZoneId, subtotalKES, farmConfig.freeDeliveryThresholdKES);
  const totalKES = subtotalKES + deliveryFeeKES;

  // Free delivery calculation
  const freeThreshold = farmConfig.freeDeliveryThresholdKES;
  const isFreeDeliveryEligible = subtotalKES >= freeThreshold;
  const freeDeliveryShortfall = Math.max(0, freeThreshold - subtotalKES);
  const freeDeliveryProgress = Math.min(100, Math.round((subtotalKES / freeThreshold) * 100));

  // Current selected zone object
  const selectedZone = deliveryZones.find(z => z.id === selectedZoneId) || deliveryZones[0];

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        selectedZoneId,
        setSelectedZoneId,
        selectedZone,
        deliveryFeeKES,
        subtotalKES,
        totalKES,
        totalItemCount,
        isFreeDeliveryEligible,
        freeDeliveryShortfall,
        freeDeliveryProgress,
        isStandingOrder,
        setIsStandingOrder,
        standingOrderFrequency,
        setStandingOrderFrequency,
        orderHistory,
        reorderPastOrder,
        recordOrder,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
