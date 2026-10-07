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
      tag: '[Photo: Mbuvi poultry runs]',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'horticulture',
      title: 'Drip Sukuma Wiki Beds',
      caption: 'Tender collard leaves receiving measured moisture from borehole lines.',
      tag: '[Photo: Vegetable rows]',
      image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'operations',
      title: 'Egg Candling & Sorting',
      caption: 'Each egg is illuminated for shell integrity before crating in clean pulp trays.',
      tag: '[Photo: Egg sorting table]',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'horticulture',
      title: 'Vine-Ripened Tomatoes',
      caption: 'Grade 1 salad tomatoes ripening naturally on the vine without artificial ethylene.',
      tag: '[Photo: Tomato greenhouse]',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'irrigation',
      title: 'Solar Drip Distribution',
      caption: 'Deep borehole water reservoir feeding gravity-assisted drip laterals across plots.',
      tag: '[Photo: Drip header valves]',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'operations',
      title: 'Cold-Chain Packing',
      caption: 'Chilled cartons prepared for the 6:30 AM dispatch route to Nairobi.',
      tag: '[Photo: Dispatch loading]',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-theme-section border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-theme-primary/15 text-theme-primary text-[11px] sm:text-xs font-bold border border-theme-primary/30 mb-2 sm:mb-3">
              <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-theme-primary" />
              <span>Real Farm Operations</span>
            </div>
            <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-theme-textPrimary">
              Behind the Scenes at Mbuvi Farm
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-1 sm:mt-2 max-w-xl leading-relaxed">
              Take a visual tour through our daily husbandry, soil preparation, and early-morning packing routines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'poultry', label: 'Poultry' },
              { id: 'horticulture', label: 'Vegetables' },
              { id: 'irrigation', label: 'Water & Drip' },
              { id: 'operations', label: 'Packing' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
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

        {/* Gallery Grid (2 Columns on Mobile, 3 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="farm-card p-2 sm:p-3 overflow-hidden group hover:border-theme-accent/60 flex flex-col justify-between bg-theme-surface border border-theme-border rounded-farm-md sm:rounded-farm-lg"
            >
              <div className="relative aspect-square sm:aspect-[4/3] rounded-farm-sm sm:rounded-farm-md overflow-hidden bg-theme-page mb-2 sm:mb-3 border border-theme-border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute bottom-1 left-1.5 right-1.5 text-center hidden sm:block">
                  <span className="badge-placeholder bg-theme-page/90 text-[10px] block truncate">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-xs sm:text-sm text-theme-textPrimary group-hover:text-theme-accent transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-theme-textSecondary mt-0.5 sm:mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
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
