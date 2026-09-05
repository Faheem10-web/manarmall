import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 0,
    eyebrow: 'MANAR MALL LUXURY',
    headingLine1: 'NEW SEASON',
    headingLine2: 'COLLECTION',
    description: 'Timeless elegance & contemporary style.',
    ctaText: 'DISCOVER MORE',
    image: 'https://res.cloudinary.com/ddluoarzr/image/upload/v1788594120/ChatGPT_Image_Sep_5_2026_01_10_51_PM_yxwxns.png',
    alt: 'Manar Mall luxury retail campaign banner',
  },
  {
    id: 1,
    eyebrow: 'EXCLUSIVE EDIT',
    headingLine1: 'MODERN',
    headingLine2: 'ELEGANCE',
    description: 'Curated luxury fashion & lifestyle.',
    ctaText: 'EXPLORE BRANDS',
    image: 'https://i.pinimg.com/736x/23/90/26/239026ddf6a7d3bf59e8257eaa6ed727.jpg',
    alt: 'Manar Mall shopping experience',
  },
  {
    id: 2,
    eyebrow: 'SPRING / SUMMER',
    headingLine1: 'TIMELESS',
    headingLine2: 'MOMENTS',
    description: 'Elevate your everyday shopping journey.',
    ctaText: 'VIEW COLLECTION',
    image: 'https://i.pinimg.com/1200x/65/b4/9e/65b49eb3b7a229e6a78c9df830c401ee.jpg',
    alt: 'Manar Mall premium fashion campaign',
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



      {/* Brand Search Pill Card (Frosted White Glass Capsule Mode) */}
      <div className="hero-pill-overlay-container">
        <div
          className="brand-search-pill glass-pill-mode"
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
          {/* Content Row */}
          <div className="pill-content">
            <div className="pill-icon-circle">
              <MapPin className="pill-icon" size={24} strokeWidth={1.75} />
            </div>

            <div className="pill-text-group">
              <span className="pill-heading">LOOKING FOR A SPECIFIC BRAND?</span>
              <span className="pill-subtext">Search by name for quick results</span>
            </div>

            <div className="pill-arrow-wrapper">
              <ChevronRight className="pill-arrow" size={26} strokeWidth={1.4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

