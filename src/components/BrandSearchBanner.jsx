import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

export default function BrandSearchBanner({ onClick }) {
  return (
    <section className="brand-search-banner-section" aria-label="Brand Search Finder">
      <div
        className="brand-search-pill"
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick && onClick();
          }
        }}
        aria-label="Looking for a specific brand? Search by name for quick results"
      >
        {/* Dark Background Image & Overlay */}
        <div className="pill-bg-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800"
            alt="Find your favorite brands"
            className="pill-bg-img"
            loading="lazy"
          />
          <div className="pill-dark-overlay" />
        </div>

        {/* Content Row */}
        <div className="pill-content">
          <div className="pill-icon-circle">
            <MapPin className="pill-icon" size={18} strokeWidth={1.75} />
          </div>

          <div className="pill-text-group">
            <span className="pill-heading">LOOKING FOR A SPECIFIC BRAND?</span>
            <span className="pill-subtext">Search by name for quick results</span>
          </div>

          <div className="pill-arrow-wrapper">
            <ChevronRight className="pill-arrow" size={20} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
