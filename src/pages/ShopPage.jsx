import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import { farmConfig } from '../data/farmData';
import { Search, Truck, Sparkles } from 'lucide-react';

export default function ShopPage({ setCurrentView }) {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'in-stock' | 'limited' | 'pre-order'
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'rating'

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCat === 'all' || p.category === selectedCat;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.unit.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
        return matchesCategory && matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceKES - b.priceKES;
        if (sortBy === 'price-desc') return b.priceKES - a.priceKES;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [selectedCat, searchQuery, statusFilter, sortBy]);

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header & SEO Title */}
        <div className="bg-theme-surface rounded-farm-lg p-6 sm:p-8 border border-theme-border shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
              <Sparkles className="w-3.5 h-3.5 text-theme-primary" />
              <span>Morning Harvest Catalogue • 24/7 Ordering</span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary">
              Farm Shop & Fresh Produce
            </h1>
            <p className="text-xs sm:text-sm text-theme-textSecondary max-w-xl">
              All prices are transparently displayed in Kenyan Shillings (KES). Harvested at 5:30 AM on delivery day. Free delivery on orders over KES {farmConfig.freeDeliveryThresholdKES.toLocaleString()}.
            </p>
          </div>

          <div className="p-4 rounded-farm-md bg-theme-section border border-theme-border text-xs text-theme-textSecondary shrink-0 space-y-1">
            <div className="flex items-center gap-2 font-bold text-theme-textPrimary">
              <Truck className="w-4 h-4 text-theme-accent" />
              <span>Next Dispatch Window</span>
            </div>
            <p className="text-[11px] text-theme-textMuted">
              Orders placed before 8:30 PM arrive tomorrow morning (7:30 AM – 11:30 AM).
            </p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-theme-surface p-4 sm:p-5 rounded-farm-lg border border-theme-border shadow-subtle space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-theme-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search eggs, chicken, sukuma, tomatoes, honey..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-theme-section rounded-farm-md border border-theme-border focus:outline-none focus:ring-2 focus:ring-theme-accent text-theme-textPrimary placeholder:text-theme-textMuted"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-theme-textMuted hover:text-theme-textPrimary"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Availability Filter */}
            <div className="md:col-span-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-theme-section rounded-farm-md border border-theme-border text-theme-textPrimary font-medium focus:outline-none focus:ring-2 focus:ring-theme-accent"
              >
                <option value="all" className="bg-theme-surface">Availability: All Items</option>
                <option value="in-stock" className="bg-theme-surface">In Stock (Morning Pick)</option>
                <option value="limited" className="bg-theme-surface">Limited Stock Only</option>
                <option value="pre-order" className="bg-theme-surface">Pre-Order (Reserved)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-theme-section rounded-farm-md border border-theme-border text-theme-textPrimary font-medium focus:outline-none focus:ring-2 focus:ring-theme-accent"
              >
                <option value="featured" className="bg-theme-surface">Sort by: Featured First</option>
                <option value="price-asc" className="bg-theme-surface">Price: Low to High (KES)</option>
                <option value="price-desc" className="bg-theme-surface">Price: High to Low (KES)</option>
                <option value="rating" className="bg-theme-surface">Highest Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-theme-border no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCat === cat.id
                    ? 'bg-theme-primary text-[#07130E] font-bold shadow-glow'
                    : 'bg-theme-section text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border hover:border-theme-accent/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Active Filters Indicator */}
        <div className="flex items-center justify-between text-xs text-theme-textSecondary px-1">
          <span>
            Showing <strong className="text-theme-textPrimary">{filteredProducts.length}</strong> farm products
          </span>
          {(searchQuery || selectedCat !== 'all' || statusFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCat('all');
                setStatusFilter('all');
              }}
              className="text-theme-accent font-semibold hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-theme-surface rounded-farm-lg border border-theme-border p-6">
            <p className="text-base font-bold text-theme-textPrimary">No farm products match your filter.</p>
            <p className="text-xs text-theme-textSecondary mt-1">Try clearing search terms or selecting a different category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCat('all');
                setStatusFilter('all');
              }}
              className="mt-4 btn-primary text-xs py-2 px-4"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
