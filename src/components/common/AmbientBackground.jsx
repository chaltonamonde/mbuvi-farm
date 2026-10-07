import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-theme-page" aria-hidden="true">
      {/* Soft emerald light pool at low opacity */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-theme-primary/6 blur-3xl animate-drift"
        style={{ animationDuration: '24s' }}
      />
      {/* Soft sky-blue light pool at low opacity */}
      <div 
        className="absolute top-1/3 -right-28 w-[32rem] h-[32rem] rounded-full bg-theme-accent/7 blur-3xl animate-drift"
        style={{ animationDuration: '32s', animationDelay: '-6s' }}
      />
      {/* Soft deep-green highlight pool near bottom */}
      <div 
        className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-theme-deep/15 blur-3xl animate-drift"
        style={{ animationDuration: '28s', animationDelay: '-12s' }}
      />
      {/* Subtle organic grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E4D38 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
