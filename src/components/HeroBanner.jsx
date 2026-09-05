import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 0,
    eyebrow: 'NEW SEASON',
    headingLine1: 'TEXTURE',
    headingLine2: 'PAIRINGS',
    description: 'Elevate your style\nwith timeless combinations.',
    ctaText: 'SHOP THE EDIT',
    image: 'https://i.pinimg.com/1200x/30/28/ed/3028ed429c02b2c0e0120dc4c63663be.jpg',
    alt: 'Manar Mall luxury featured banner',
  },
  {
    id: 1,
    eyebrow: 'EXCLUSIVE COLLECTION',
    headingLine1: 'MODERN',
    headingLine2: 'ELEGANCE',
    description: 'Discover the latest trends\nin luxury fashion.',
    ctaText: 'SHOP THE EDIT',
    image: 'https://i.pinimg.com/736x/18/8b/4c/188b4c1822ff54af4a8bef8921943cdc.jpg',
    alt: 'Manar Mall interior and shopping experience',
  },
  {
    id: 2,
    eyebrow: 'LIMITED EDITION',
    headingLine1: 'AUTUMN',
    headingLine2: 'ESSENTIALS',
    description: 'Curated pieces for your\nwardrobe upgrade.',
    ctaText: 'SHOP THE EDIT',
    image: 'https://i.pinimg.com/736x/4e/80/9e/4e809ecc8d039487a01034f5c1e02ab7.jpg',
    alt: 'Manar Mall dining and entertainment',
  },
  {
    id: 3,
    eyebrow: 'FAMILY EXPERIENCES',
    headingLine1: 'UNFORGETTABLE',
    headingLine2: 'MOMENTS',
    description: 'Create memories with your\nloved ones every day.',
    ctaText: 'DISCOVER MORE',
    image: 'https://i.pinimg.com/736x/2c/9a/26/2c9a26f0e488068a0f509bd2a9f65a3e.jpg',
    alt: 'Manar Mall family experience',
  },
];

export default function HeroBanner({ onBrandSearchClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Subtle auto-advance every 6 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Swipe left (next)
    if (diff > 50) {
      nextSlide();
    } 
    // Swipe right (prev)
    else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="hero-section"
      aria-label="Manar Mall Featured Experience"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Container with Crossfade Transitions */}
      <div className="hero-background-container">
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`hero-slide-bg ${idx === currentSlide ? 'active' : ''}`}
            aria-hidden={idx !== currentSlide}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="hero-image"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Centered Pagination Dots (Positioned right above the card) */}
      <div
        className="carousel-pagination hero-dots-above-card"
        role="tablist"
        aria-label="Carousel slide selector"
      >
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              className={`pagination-dot ${isActive ? 'active' : ''}`}
            />
          );
        })}
      </div>

      {/* Brand Search Pill Card (Embedded inside the banner) */}
      <div className="hero-pill-overlay-container">
        <div
          className="brand-search-pill hero-embedded-pill"
          role="button"
          tabIndex={0}
          onClick={onBrandSearchClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onBrandSearchClick && onBrandSearchClick();
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
              <MapPin className="pill-icon" size={20} strokeWidth={1.8} />
            </div>

            <div className="pill-text-group">
              <span className="pill-heading">LOOKING FOR A SPECIFIC BRAND?</span>
              <span className="pill-subtext">Search by name for quick results</span>
            </div>

            <div className="pill-arrow-wrapper">
              <ChevronRight className="pill-arrow" size={22} strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

