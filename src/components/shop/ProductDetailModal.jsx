import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { farmConfig } from '../../data/farmData';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Truck, 
  Plus, 
  Minus,
} from 'lucide-react';

export default function ProductDetailModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  const handleWhatsApp = () => {
    const message = `Hello Mbuvi Farm, I want to order ${qty}x "${product.name}" (${product.unit}) for KES ${(product.priceKES * qty).toLocaleString()}. Please confirm current stock and next morning delivery to my location.`;
    const url = `https://wa.me/${farmConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleAddAndClose = () => {
    addToCart(product, qty);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-theme-page/85 backdrop-blur-sm transition-opacity" 
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
        <div className="relative bg-theme-surface rounded-farm-lg max-w-3xl w-full text-left overflow-hidden shadow-2xl my-8 border border-theme-border animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 bg-theme-section hover:bg-theme-surfaceAlt text-theme-textMuted hover:text-theme-textPrimary rounded-full shadow-md border border-theme-border transition-colors"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column */}
            <div className="relative bg-theme-section p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-theme-border">
              <div className="aspect-square rounded-farm-md overflow-hidden border border-theme-border shadow-subtle relative bg-theme-page">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="badge-placeholder text-[10px] w-full block text-center truncate bg-theme-page/90 backdrop-blur-sm">
                    {product.imageTag}
                  </span>
                </div>
              </div>

              {/* Delivery Guarantee Pill */}
              <div className="mt-4 p-3 rounded-farm-md bg-theme-surface border border-theme-border text-xs text-theme-textSecondary space-y-1">
                <div className="flex items-center gap-2 font-semibold text-theme-textPrimary">
                  <Truck className="w-4 h-4 text-theme-accent" />
                  <span>{product.leadTime}</span>
                </div>
                <p className="text-[11px] text-theme-textMuted">
                  Harvested fresh on order day. Free delivery in Nairobi & Machakos on orders above KES 2,500.
                </p>
              </div>
            </div>

            {/* Details Column */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-theme-accent uppercase tracking-wider">
                    {product.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-theme-textMuted font-normal">({product.reviewCount} orders)</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-display font-extrabold text-2xl text-theme-textPrimary leading-tight">
                  {product.name}
                </h2>

                {/* Pack Size & Status */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-theme-section border border-theme-border text-theme-textSecondary">
                    Pack: {product.unit}
                  </span>
                  <span className="text-xs font-semibold text-theme-primary">
                    {product.statusLabel}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-4 p-3.5 rounded-farm-md bg-theme-section border border-theme-border flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold text-theme-textMuted mr-1.5 uppercase">Price:</span>
                    <span className="font-display font-black text-2xl text-theme-textPrimary font-mono">
                      KES {product.priceKES.toLocaleString()}
                    </span>
                  </div>
                  {product.wholesalePriceKES && (
                    <div className="text-right">
                      <span className="text-[11px] text-theme-textMuted block">Bulk / Wholesale:</span>
                      <span className="text-xs font-bold text-theme-accent font-mono">
                        KES {product.wholesalePriceKES.toLocaleString()} / unit
                      </span>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                <p className="text-xs text-theme-textSecondary leading-relaxed mt-4">
                  {product.description}
                </p>

                {/* Specifications List */}
                {product.specs && (
                  <div className="mt-4 space-y-1.5 border-t border-theme-border pt-3">
                    <h4 className="text-xs font-bold text-theme-accent uppercase tracking-wider">
                      Farm Specifications:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="bg-theme-section p-2 rounded border border-theme-border">
                          <span className="font-semibold text-theme-textPrimary block">{spec.label}</span>
                          <span className="text-theme-textMuted">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Selector & CTAs */}
              <div className="mt-6 pt-4 border-t border-theme-border space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-theme-textMuted uppercase">Quantity:</span>
                  <div className="flex items-center border border-theme-border rounded-farm-sm bg-theme-section">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="p-2 hover:bg-theme-surfaceAlt text-theme-textPrimary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold text-theme-textPrimary font-mono">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="p-2 hover:bg-theme-surfaceAlt text-theme-textPrimary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-xs font-bold text-theme-primary ml-auto font-mono">
                    Subtotal: KES {(product.priceKES * qty).toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={handleAddAndClose}
                    className="btn-primary py-3 text-xs flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#07130E]" />
                    <span>Add {qty} to Basket</span>
                  </button>

                  <button
                    onClick={handleWhatsApp}
                    className="btn-secondary py-3 text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-theme-accent" />
                    <span>Order {qty} on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
