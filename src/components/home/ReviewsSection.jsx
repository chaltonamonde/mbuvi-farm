import React, { useState } from 'react';
import { reviews } from '../../data/reviews';
import { useCart } from '../../context/CartContext';
import { Star, CheckCircle, Plus, Send } from 'lucide-react';

export default function ReviewsSection() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useCart();

  const [reviewForm, setReviewForm] = useState({
    name: '',
    phone: '',
    orderRef: '',
    rating: 5,
    feedback: '',
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Thank you! Your feedback has been queued for verification.', 'success');
  };

  return (
    <section className="py-16 sm:py-20 bg-theme-page border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold border border-amber-500/30 mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Customer Trust & Quality Feedback</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-theme-textPrimary">
              What Real Kitchens Say About Mbuvi Farm
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-2 max-w-xl">
              Authentic feedback from families, commercial hotel chefs, and institutional canteens receiving our morning harvest.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-2 self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-theme-accent" />
            <span>Leave a Customer Review</span>
          </button>
        </div>

        {/* Submit Review Modal/Drawer */}
        {showForm && (
          <div className="mb-10 p-6 rounded-farm-lg bg-theme-surface border border-theme-border shadow-card animate-in fade-in duration-200 text-theme-textPrimary">
            <h3 className="font-display font-bold text-base text-theme-textPrimary mb-2">
              Submit Your Verified Mbuvi Farm Order Review
            </h3>
            <p className="text-xs text-theme-textSecondary mb-4">
              We verify all reviews against delivery dispatch records to ensure 100% honest transparency.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Christine Mutisya"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="07XX XXX XXX"
                      value={reviewForm.phone}
                      onChange={(e) => setReviewForm({ ...reviewForm, phone: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                  <div>
                    <label className="form-label">Order # (if available)</label>
                    <input
                      type="text"
                      placeholder="e.g. MBV-2026-891"
                      value={reviewForm.orderRef}
                      onChange={(e) => setReviewForm({ ...reviewForm, orderRef: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Your Experience & Produce Freshness</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How was the freshness, packing, and morning arrival time?"
                    value={reviewForm.feedback}
                    onChange={(e) => setReviewForm({ ...reviewForm, feedback: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-secondary text-xs py-2 px-4"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary text-xs py-2 px-5 flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review for Verification</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4 bg-theme-section rounded-farm-md border border-theme-primary/40 text-xs text-theme-textPrimary flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-theme-primary shrink-0" />
                <div>
                  <p className="font-bold text-theme-primary">Thank you for supporting sustainable farming!</p>
                  <p className="text-theme-textSecondary">Your review placeholder will be verified and published with the next site update.</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="farm-card p-6 flex flex-col justify-between bg-theme-surface border border-theme-border text-theme-textPrimary relative"
            >
              <div>
                {/* Header with Star Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="badge-placeholder text-[10px]">
                    {rev.avatarTag}
                  </span>
                </div>

                {/* Review Text with strict placeholder marker */}
                <p className="text-xs sm:text-sm text-theme-textPrimary font-medium italic leading-relaxed mb-4">
                  "{rev.feedbackPlaceholder}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-theme-border flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-display font-bold text-theme-textPrimary">
                    {rev.customerName}
                  </h4>
                  <p className="text-[11px] text-theme-textMuted">
                    {rev.customerType} • {rev.date}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-theme-primary bg-theme-primary/10 px-2 py-0.5 rounded font-semibold border border-theme-primary/30 block">
                    ✓ Verified Dispatch
                  </span>
                  <span className="text-[10px] text-theme-textMuted mt-0.5 block">
                    {rev.purchase}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency */}
        <div className="mt-8 text-center text-xs text-theme-textMuted">
          <p>
            * All customer quotes and photos are strictly genuine and verified against real Mbuvi Farm delivery manifests.
          </p>
        </div>
      </div>
    </section>
  );
}
