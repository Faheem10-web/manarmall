import React, { useState } from 'react';
import { ArrowLeft, Search, ArrowRight } from 'lucide-react';
import {
  ElectronicsArtwork,
  FashionWomenArtwork,
  HandbagArtwork,
  HomewareArtwork,
  BeautyArtwork,
  WatchArtwork,
  PromoBannerArtwork
} from './CategoryVisuals';

const CATEGORIES = [
  {
    id: 'electronics',
    title: 'Electronics',
    subtitle: 'Gadgets & More',
    component: <ElectronicsArtwork />,
    bgColor: '#FCEAE6',
    theme: 'light',
    storeQuery: 'apple'
  },
  {
    id: 'fashion_women',
    title: 'Fashion - Women',
    subtitle: 'Trendy Styles',
    component: <FashionWomenArtwork />,
    bgColor: '#F4ECE1',
    theme: 'light',
    storeQuery: 'zara'
  },
  {
    id: 'accessories',
    title: 'Footwear, Bags, & Accessories',
    subtitle: 'Step in Style',
    component: <HandbagArtwork />,
    bgColor: '#F8E9DA',
    theme: 'light',
    storeQuery: 'mango'
  },
  {
    id: 'homeware',
    title: 'Homeware & Furniture',
    subtitle: 'For a Better Home',
    component: <HomewareArtwork />,
    bgColor: '#F1EBE3',
    theme: 'light',
    storeQuery: 'lifestyle'
  },
  {
    id: 'beauty',
    title: 'Perfume, Cosmetics & Skincare',
    subtitle: 'Beauty Inside Out',
    component: <BeautyArtwork />,
    bgColor: '#FCE7E8',
    theme: 'light',
    storeQuery: 'sephora'
  },
  {
    id: 'watches',
    title: 'Watches & Jewellery',
    subtitle: 'Timeless Elegance',
    component: <WatchArtwork />,
    bgColor: '#211F20',
    theme: 'dark',
    storeQuery: 'rolex'
  }
];

const RECENT_SEARCHES = ['Zara', 'H&M', 'Nike', 'Mango'];
const SEGMENTS = ['SHOP', 'DINE', 'ENTERTAINMENT', 'STAY'];

export default function ShopsScreen({ onBackHome, onNavigateToStore, onOpenNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSegment, setActiveSegment] = useState('SHOP');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onNavigateToStore) {
      onNavigateToStore(searchQuery.toLowerCase());
    }
  };

  const handleChipClick = (brand) => {
    setSearchQuery(brand);
    if (onNavigateToStore) {
      onNavigateToStore(brand.toLowerCase());
    }
  };

  return (
    <div className="shops-screen-container">
      {/* 1. Header */}
      <header className="shops-header">
        <button
          type="button"
          className="shops-back-btn"
          onClick={onBackHome}
          aria-label="Go back"
        >
          <ArrowLeft size={22} strokeWidth={2.2} />
        </button>
        <h1 className="shops-header-title">Shops</h1>
        <button
          type="button"
          className="shops-chat-btn"
          aria-label="Shopping Concierge & Assistance"
        >
          <div className="chat-bubble-icon">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </button>
      </header>

      {/* Main Scrollable Content */}
      <div className="shops-scroll-area">
        {/* 2. Search Bar */}
        <form className="shops-search-form" onSubmit={handleSearchSubmit}>
          <div className="shops-search-box">
            <Search size={19} className="search-icon-wine" strokeWidth={2.2} />
            <input
              type="text"
              className="shops-search-input"
              placeholder="Search store, category or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* 3. Recent Search Chips */}
        <div className="recent-searches-row">
          <div className="recent-search-label-wrap">
            <span className="recent-label">RECENT SEARCH</span>
            <span className="recent-divider">|</span>
          </div>
          <div className="recent-chips-scroll">
            {RECENT_SEARCHES.map((brand) => (
              <button
                key={brand}
                type="button"
                className="recent-search-chip"
                onClick={() => handleChipClick(brand)}
              >
                <span>{brand}</span>
                <span className="chip-arrow">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4. Section Title */}
        <div className="shops-section-header">
          <h2 className="shops-section-title">SHOPS CATEGORIES</h2>
          <button
            type="button"
            className="shops-view-all-btn"
            onClick={onOpenNavigate}
          >
            <span>View All</span>
            <span className="arrow-sym">›</span>
          </button>
        </div>

        {/* 5. Category Grid (2-Column, 6 Custom Artwork Cards) */}
        <div className="shops-category-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`category-luxury-card ${cat.theme === 'dark' ? 'card-dark' : 'card-light'}`}
              style={{ backgroundColor: cat.bgColor }}
              onClick={() => onNavigateToStore && onNavigateToStore(cat.storeQuery)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onNavigateToStore) {
                  onNavigateToStore(cat.storeQuery);
                }
              }}
            >
              {/* Right-aligned Artwork / Photo */}
              <div className="card-artwork-wrapper">
                {cat.component}
              </div>

              {/* Left-aligned Text Content */}
              <div className="card-text-container">
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-subtitle">{cat.subtitle}</p>
              </div>

              {/* Bottom Right Elevated White Circular Arrow Button */}
              <button
                type="button"
                className="card-arrow-fab"
                aria-label={`Open ${cat.title}`}
              >
                <ArrowRight size={14} strokeWidth={2.4} className="fab-red-arrow" />
              </button>
            </div>
          ))}
        </div>

        {/* 6. Promotional Banner (Exact Match) */}
        <PromoBannerArtwork onExplore={onOpenNavigate} />

        {/* 7. Bottom Category Switcher (SHOP | DINE | ENTERTAINMENT | STAY) */}
        <div className="bottom-segment-switcher">
          {SEGMENTS.map((seg) => (
            <button
              key={seg}
              type="button"
              className={`segment-btn ${activeSegment === seg ? 'active-pill' : ''}`}
              onClick={() => setActiveSegment(seg)}
            >
              {seg}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
