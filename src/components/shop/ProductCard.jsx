import React from 'react';
import { useCart } from '../../context/CartContext';
import { farmConfig } from '../../data/farmData';
import { 
  ShoppingBag, 
  MessageCircle, 
  AlertTriangle, 
  Clock, 
  Star, 
  Eye, 
} from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const message = `Hello Mbuvi Farm, I want to order "${product.name}" (${product.unit}) priced at KES ${product.priceKES}. Please let me know current availability and morning delivery time.`;
    const url = `https://wa.me/${farmConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getStatusBadge = () => {
    if (product.status === 'in-stock') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-theme-primary/15 text-theme-primary border border-theme-primary/30">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse" />
          <span>In Stock</span>
        </span>
      );
    }
    if (product.status === 'limited') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
          <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
          <span>Only {product.stockCount} Left</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-theme-accent/15 text-theme-accent border border-theme-accent/30">
        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-theme-accent" />
        <span>Pre-Order</span>
      </span>
    );
  };

  return (
    <div 
      onClick={() => setQuickViewProduct(product)}
      className="group farm-card flex flex-col justify-between cursor-pointer relative overflow-hidden bg-theme-surface border border-theme-border p-3 sm:p-5 transition-all duration-300 hover:border-theme-accent/60 hover:shadow-cardHover rounded-farm-md sm:rounded-farm-lg"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-farm-sm sm:rounded-farm-md overflow-hidden bg-theme-section mb-2.5 sm:mb-4 border border-theme-border">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
          loading="lazy"
        />

        {/* Status Badge in Top Left */}
        <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-10">
          {getStatusBadge()}
        </div>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-[#07130E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface/95 text-theme-accent text-xs font-semibold shadow-md border border-theme-accent/40">
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </span>
        </div>

        {/* Photo Placeholder identifier tag */}
        <div className="absolute bottom-1 left-1.5 right-1.5 text-center hidden sm:block">
          <span className="badge-placeholder opacity-90 backdrop-blur-sm truncate max-w-full block bg-theme-page/90 text-[10px]">
            {product.imageTag}
          </span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs mb-1">
            <span className="font-semibold text-theme-accent truncate">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400 font-semibold shrink-0">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-display font-bold text-xs sm:text-base text-theme-textPrimary leading-snug group-hover:text-theme-accent transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Pack Size / Unit specification */}
          <p className="text-[11px] sm:text-xs text-theme-textSecondary mt-0.5 sm:mt-1 font-medium truncate">
            Pack: <span className="text-theme-textPrimary">{product.unit}</span>
          </p>

          <p className="hidden sm:block text-xs text-theme-textMuted mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Actions Area */}
        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-theme-border">
          <div className="flex items-baseline justify-between mb-2 sm:mb-3">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-theme-textMuted uppercase tracking-wider mr-1">KES</span>
              <span className="font-display font-extrabold text-sm sm:text-xl text-theme-textPrimary font-mono">
                {product.priceKES.toLocaleString()}
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] text-theme-primary bg-theme-primary/10 border border-theme-primary/30 px-2 py-0.5 rounded font-medium">
              Harvested 5:30 AM
            </span>
          </div>

          {/* Action Buttons: Add to Cart & WhatsApp */}
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
              className="col-span-3 btn-primary text-[11px] sm:text-xs py-2 sm:py-2.5 px-1.5 sm:px-3 flex items-center justify-center gap-1 w-full"
              aria-label={`Add ${product.name} to Cart`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#07130E] shrink-0" />
              <span className="truncate">Add to Cart</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="col-span-2 btn-secondary text-[11px] sm:text-xs py-2 sm:py-2.5 px-1 sm:px-2 flex items-center justify-center gap-1 w-full"
              title="Order this product via WhatsApp"
              aria-label={`Order ${product.name} on WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-theme-accent shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
