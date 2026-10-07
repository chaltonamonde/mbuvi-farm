import React from 'react';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HowItWorks from '../components/home/HowItWorks';
import FarmStoryPreview from '../components/home/FarmStoryPreview';
import Gallery from '../components/home/Gallery';
import ReviewsSection from '../components/home/ReviewsSection';
import FaqSection from '../components/home/FaqSection';
import FinalCta from '../components/home/FinalCta';

export default function HomePage({ setCurrentView }) {
  return (
    <div className="space-y-0">
      <Hero setCurrentView={setCurrentView} />
      <TrustStrip />
      <FeaturedProducts setCurrentView={setCurrentView} />
      <HowItWorks setCurrentView={setCurrentView} />
      <FarmStoryPreview setCurrentView={setCurrentView} />
      <Gallery />
      <ReviewsSection />
      <FaqSection setCurrentView={setCurrentView} />
      <FinalCta setCurrentView={setCurrentView} />
    </div>
  );
}
