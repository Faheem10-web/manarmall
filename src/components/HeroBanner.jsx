import React from 'react';

export default function HeroBanner({ onBannerClick }) {
  return (
    <section className="hero-banner-section" aria-label="Manar Mall - Brighter Day Awaits">
      <div 
        className="hero-banner-wrapper"
        role="button"
        tabIndex={0}
        onClick={onBannerClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onBannerClick && onBannerClick();
          }
        }}
        aria-label="Brighter Day Awaits - Shop, Dine, Explore, Belong"
      >
        <img
          src="https://res.cloudinary.com/ddluoarzr/image/upload/v1788755098/rename_esco8r.png"
          alt="Manar Mall - Brighter Day Awaits. Shop, Dine, Explore, Belong."
          className="hero-banner-single-img"
          loading="eager"
        />
      </div>
    </section>
  );
}
