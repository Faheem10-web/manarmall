import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
    image: 'https://manarmall.com/media/n5qdpmpr/02.jpg?width=2500&format=webp',
    alt: 'Manar Mall interior and shopping experience',
  },
  {
    id: 2,
    eyebrow: 'LIMITED EDITION',
    headingLine1: 'AUTUMN',
    headingLine2: 'ESSENTIALS',
    description: 'Curated pieces for your\nwardrobe upgrade.',
    ctaText: 'SHOP THE EDIT',
    image: 'https://manarmall.com/media/i5xnt5wv/03.jpg?width=2500&format=webp',
    alt: 'Manar Mall dining and entertainment',
  },
  {
    id: 3,
    eyebrow: 'FAMILY EXPERIENCES',
    headingLine1: 'UNFORGETTABLE',
    headingLine2: 'MOMENTS',
    description: 'Create memories with your\nloved ones every day.',
    ctaText: 'DISCOVER MORE',
    image: 'https://manarmall.com/media/dyshzgqk/4.jpg?width=2500&format=webp',
    alt: 'Manar Mall family experience',
  },
];

export default function HeroBanner() {
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

  const slide = SLIDES[currentSlide];

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

      {/* Centered Pagination Dots */}
      <div
        className="carousel-pagination"
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
    </section>
  );
}
