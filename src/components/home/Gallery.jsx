import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'poultry',
      title: 'Free-Range Kienyeji Flock',
      caption: 'Hens foraging on natural pasture and green alfalfa in open morning sunlight.',
      tag: '[Photo Placeholder: Real photo of Mbuvi Farm poultry runs]',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'horticulture',
      title: 'Drip-Fed Sukuma Wiki Beds',
      caption: 'Tender broad collard leaves receiving measured moisture from borehole lines.',
      tag: '[Photo Placeholder: Real photo of Mbuvi vegetable field rows]',
      image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'operations',
      title: 'Morning Egg Candling & Sorting',
      caption: 'Each egg is illuminated for shell integrity before crating in clean pulp trays.',
      tag: '[Photo Placeholder: Real photo of egg sorting table at Mbuvi packing shed]',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'horticulture',
      title: 'Vine-Ripened Greenhouse Tomatoes',
      caption: 'Grade 1 red salad tomatoes ripening naturally on the vine without artificial ethylene.',
      tag: '[Photo Placeholder: Real photo of tomato vines at Mbuvi Farm]',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'irrigation',
      title: 'Solar-Powered Drip Distribution',
      caption: 'Deep borehole water reservoir feeding gravity-assisted drip laterals across 4 plots.',
      tag: '[Photo Placeholder: Real photo of farm borehole and drip header valves]',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'operations',
      title: 'Cold-Chain Delivery Packing',
      caption: 'Chilled insulated cartons prepared for the 6:30 AM dispatch route to Nairobi.',
      tag: '[Photo Placeholder: Real photo of delivery dispatch vehicle loading at farm gate]',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-16 sm:py-20 bg-theme-section border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30 mb-3">
              <Camera className="w-3.5 h-3.5 text-theme-primary" />
              <span>Real Farm Operations</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary">
              Behind the Scenes at Mbuvi Farm
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-2 max-w-xl">
              Take a visual tour through our daily husbandry, soil preparation, and early-morning packing routines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'poultry', label: 'Poultry & Flocks' },
              { id: 'horticulture', label: 'Vegetables' },
              { id: 'irrigation', label: 'Water & Drip' },
              { id: 'operations', label: 'Packing & Transit' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === tab.id
                    ? 'bg-theme-primary text-[#07130E] font-bold shadow-glow'
                    : 'bg-theme-surface text-theme-textSecondary hover:text-theme-textPrimary border border-theme-border hover:border-theme-accent/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="farm-card p-3 overflow-hidden group hover:border-theme-accent/60 flex flex-col justify-between bg-theme-surface border border-theme-border"
            >
              <div className="relative aspect-[4/3] rounded-farm-md overflow-hidden bg-theme-page mb-3 border border-theme-border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="badge-placeholder bg-theme-page/90 text-[10px] block truncate">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm text-theme-textPrimary group-hover:text-theme-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-theme-textSecondary mt-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
