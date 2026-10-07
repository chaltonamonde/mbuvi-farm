import React, { useState } from 'react';
import { articles } from '../data/articles';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';

export default function LearnPage({ setCurrentView }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Banner */}
        <div className="bg-theme-surface rounded-farm-lg p-8 sm:p-10 border border-theme-border shadow-subtle max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
            <BookOpen className="w-3.5 h-3.5 text-theme-primary" />
            <span>Farm Journal & Food Guides</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-theme-textPrimary">
            Kenyan Agribusiness & Kitchen Guides
          </h1>
          <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
            Practical advice from Mbuvi Farm's daily field practice on vegetable storage, poultry nutrition, and commercial kitchen cost reduction.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="farm-card p-4 sm:p-5 cursor-pointer bg-theme-surface border border-theme-border flex flex-col justify-between group hover:border-theme-accent/60 transition-all"
            >
              <div>
                <div className="relative aspect-video rounded-farm-md overflow-hidden bg-theme-section mb-4 border border-theme-border">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-theme-page/90 border border-theme-border text-theme-accent text-[10px] font-semibold">
                      {art.category}
                    </span>
                  </div>
                  <div className="absolute bottom-1.5 left-2 right-2 text-center">
                    <span className="badge-placeholder bg-theme-page/90 text-[10px] block truncate">
                      {art.imageTag}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-theme-textMuted mb-2">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-theme-accent" />
                    {art.readTime}
                  </span>
                </div>

                <h2 className="font-display font-bold text-base text-theme-textPrimary leading-snug group-hover:text-theme-accent transition-colors mb-2">
                  {art.title}
                </h2>

                <p className="text-xs text-theme-textSecondary line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-theme-border flex items-center justify-between text-xs font-semibold text-theme-accent">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-theme-primary" />
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div 
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-theme-page/85 backdrop-blur-sm transition-opacity" 
            />

            <div className="min-h-full flex items-center justify-center p-4 text-center">
              <div className="relative bg-theme-surface rounded-farm-lg max-w-2xl w-full text-left overflow-hidden shadow-2xl p-6 sm:p-10 border border-theme-border animate-in fade-in zoom-in-95 duration-200 space-y-6 text-theme-textPrimary">
                
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 text-theme-textMuted hover:text-theme-textPrimary rounded-full hover:bg-theme-section transition-colors"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-theme-accent font-semibold">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-theme-textPrimary leading-tight">
                    {selectedArticle.title}
                  </h2>
                </div>

                <div className="aspect-video rounded-farm-md overflow-hidden border border-theme-border bg-theme-section">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                </div>

                {/* Content Sections */}
                <div className="space-y-4 text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
                  {selectedArticle.content.map((sec, i) => (
                    <div key={i} className="space-y-1">
                      <h3 className="font-display font-bold text-base text-theme-textPrimary">
                        {sec.heading}
                      </h3>
                      <p className="text-theme-textSecondary">{sec.body}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      setCurrentView('shop');
                    }}
                    className="btn-primary text-xs py-2 px-5"
                  >
                    Order Fresh Produce from This Article
                  </button>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs font-semibold text-theme-textMuted hover:text-theme-textPrimary transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
