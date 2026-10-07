import React from 'react';
import { useCart } from '../../context/CartContext';
import { deliveryZones } from '../../data/deliveryZones';
import { products } from '../../data/products';
import { farmConfig } from '../../data/farmData';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Repeat, 
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    subtotalKES,
    totalKES,
    deliveryFeeKES,
    selectedZoneId,
    setSelectedZoneId,
    selectedZone,
    isFreeDeliveryEligible,
    freeDeliveryShortfall,
    freeDeliveryProgress,
    isStandingOrder,
    setIsStandingOrder,
    standingOrderFrequency,
    setStandingOrderFrequency,
  } = useCart();

  if (!isCartOpen) return null;

  // Frequently bought together suggestions
  const suggestedProducts = products.filter(
    (p) => !cartItems.some((item) => item.id === p.id)
  ).slice(0, 2);

  // Generate pre-filled WhatsApp order message
  const handleWhatsAppOrder = () => {
    let orderSummary = `Hello Mbuvi Farm, I want to order the following from your website:\n\n`;
    cartItems.forEach((item, idx) => {
      orderSummary += `${idx + 1}. ${item.product.name} (x${item.quantity}) - KES ${(item.product.priceKES * item.quantity).toLocaleString()}\n`;
    });
    orderSummary += `\nDelivery Zone: ${selectedZone.name} (${selectedZone.county})`;
    orderSummary += `\nDelivery Fee: ${isFreeDeliveryEligible ? 'FREE' : `KES ${deliveryFeeKES}`}`;
    orderSummary += `\nEstimated Total: KES ${totalKES.toLocaleString()}`;
    if (isStandingOrder) {
      orderSummary += `\nStanding Order: Yes (${standingOrderFrequency})`;
    }
    orderSummary += `\n\nPlease confirm availability and dispatch time. Thank you!`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/${farmConfig.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-theme-page/85 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-theme-surface border-l border-theme-border shadow-2xl flex flex-col text-theme-textPrimary">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-theme-border flex items-center justify-between bg-theme-section">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-theme-surface text-theme-primary border border-theme-border rounded-farm-sm">
                <ShoppingBag className="w-5 h-5 text-theme-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-theme-textPrimary">
                  Your Farm Basket
                </h3>
                <p className="text-xs text-theme-textMuted">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready for morning harvest
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-theme-textMuted hover:text-theme-textPrimary rounded-full hover:bg-theme-surfaceAlt transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Dynamic Progress Bar */}
          <div className="p-4 bg-theme-section/80 border-b border-theme-border">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="flex items-center gap-1.5 text-theme-textPrimary">
                <Truck className="w-4 h-4 text-theme-accent" />
                {isFreeDeliveryEligible ? (
                  <span className="text-theme-primary font-bold">
                    🎉 Free Delivery Unlocked for your order!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-theme-accent">KES {freeDeliveryShortfall.toLocaleString()}</strong> more for Free Delivery
                  </span>
                )}
              </span>
              <span className="text-theme-accent font-mono text-[11px]">
                {freeDeliveryProgress}%
              </span>
            </div>
            <div className="w-full bg-theme-page h-2 rounded-full overflow-hidden border border-theme-border">
              <div
                className="bg-theme-primary h-full rounded-full transition-all duration-500 ease-out shadow-glow"
                style={{ width: `${freeDeliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 bg-theme-section text-theme-textMuted rounded-full flex items-center justify-center mx-auto mb-4 border border-theme-border">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-base text-theme-textPrimary">
                  Your farm basket is empty
                </h4>
                <p className="text-xs text-theme-textMuted mt-1 max-w-xs mx-auto">
                  Pick fresh kienyeji eggs, vegetables, or pure honey straight from our fields.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 btn-primary text-xs py-2.5 px-5"
                >
                  Explore Farm Catalogue
                </button>
              </div>
            ) : (
              <div className="space-y-3.5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 p-3 rounded-farm-md border border-theme-border hover:border-theme-accent/60 bg-theme-section transition-all shadow-subtle"
                  >
                    {/* Item Thumbnail */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-farm-sm border border-theme-border shrink-0 filter brightness-95"
                      loading="lazy"
                    />

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-display font-bold text-xs text-theme-textPrimary leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-theme-textMuted hover:text-red-400 p-1 transition-colors"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-theme-textSecondary mt-0.5">
                        {item.product.unit}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-theme-border rounded-farm-sm bg-theme-surface">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-theme-surfaceAlt text-theme-textPrimary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-theme-textPrimary font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-theme-surfaceAlt text-theme-textPrimary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-xs font-bold text-theme-primary font-mono">
                            KES {(item.product.priceKES * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Frequently Bought Together Upsells */}
            {suggestedProducts.length > 0 && cartItems.length > 0 && (
              <div className="mt-6 pt-5 border-t border-theme-border">
                <div className="flex items-center gap-1.5 mb-3">
                  <Sparkles className="w-4 h-4 text-theme-accent" />
                  <h4 className="text-xs font-display font-bold text-theme-accent uppercase tracking-wider">
                    Frequently Bought Together
                  </h4>
                </div>
                <div className="space-y-2">
                  {suggestedProducts.map((suggested) => (
                    <div
                      key={suggested.id}
                      className="flex items-center justify-between p-2.5 rounded-farm-sm bg-theme-section border border-theme-border hover:border-theme-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={suggested.image}
                          alt={suggested.name}
                          className="w-10 h-10 object-cover rounded-farm-sm border border-theme-border filter brightness-95"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-xs font-bold text-theme-textPrimary line-clamp-1">
                            {suggested.name}
                          </p>
                          <p className="text-[11px] text-theme-textSecondary font-mono">
                            KES {suggested.priceKES.toLocaleString()} / {suggested.unit.split('(')[0]}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(suggested, 1)}
                        className="px-2.5 py-1 bg-theme-surface hover:bg-theme-primary hover:text-[#07130E] text-theme-accent border border-theme-border hover:border-transparent text-xs font-semibold rounded-farm-sm transition-all"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standing Order / Weekly Subscription Option */}
            {cartItems.length > 0 && (
              <div className="mt-4 p-3.5 rounded-farm-md bg-theme-section border border-theme-accent/40">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isStandingOrder}
                    onChange={(e) => setIsStandingOrder(e.target.checked)}
                    className="mt-1 w-4 h-4 text-theme-accent bg-theme-surface rounded border-theme-border focus:ring-theme-accent"
                  />
                  <div>
                    <span className="text-xs font-bold text-theme-accent flex items-center gap-1.5">
                      <Repeat className="w-3.5 h-3.5" />
                      Set as Standing Order (Weekly Delivery)
                    </span>
                    <p className="text-[11px] text-theme-textSecondary mt-0.5">
                      Never run out of eggs or fresh greens. Dispatched automatically every Tuesday & Friday.
                    </p>
                  </div>
                </label>
              </div>
            )}
          </div>

          {/* Drawer Footer / Cost Breakdown & Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-theme-border bg-theme-section space-y-4">
              
              {/* Delivery Zone Selector */}
              <div>
                <label className="block text-[11px] font-bold text-theme-textSecondary uppercase tracking-wider mb-1">
                  Delivery Zone:
                </label>
                <select
                  value={selectedZoneId}
                  onChange={(e) => setSelectedZoneId(e.target.value)}
                  className="w-full text-xs font-medium px-3 py-2 bg-theme-surface border border-theme-border rounded-farm-sm focus:outline-none focus:ring-1 focus:ring-theme-accent text-theme-textPrimary"
                >
                  {deliveryZones.map((zone) => (
                    <option key={zone.id} value={zone.id} className="bg-theme-surface text-theme-textPrimary">
                      {zone.name} ({zone.county}) — {isFreeDeliveryEligible ? 'FREE' : `KES ${zone.feeKES}`}
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-theme-textMuted mt-1 flex items-center gap-1">
                  <Truck className="w-3 h-3 text-theme-accent" />
                  {selectedZone.schedule}
                </p>
              </div>

              {/* Totals Summary */}
              <div className="space-y-1.5 text-xs text-theme-textSecondary pt-2 border-t border-theme-border">
                <div className="flex justify-between">
                  <span>Produce Subtotal:</span>
                  <span className="font-semibold text-theme-textPrimary font-mono">
                    KES {subtotalKES.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery ({selectedZone.county}):</span>
                  <span className="font-semibold font-mono">
                    {isFreeDeliveryEligible ? (
                      <span className="text-theme-primary font-bold">FREE (Unlocked)</span>
                    ) : (
                      `KES ${deliveryFeeKES.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-theme-textPrimary pt-1 border-t border-theme-border">
                  <span>Total Amount:</span>
                  <span className="font-mono text-theme-primary">
                    KES {totalKES.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-2.5">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-sm"
                >
                  <span>Proceed to 3-Step Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full btn-secondary py-3 flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly via WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-theme-textMuted">
                🔒 Safe Safaricom M-Pesa STK Push • Pay-on-Delivery Option Available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
