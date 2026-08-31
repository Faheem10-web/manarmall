import React from 'react';

const WHATS_NEW_ITEMS = [
  { id: 1, image: 'https://i.pinimg.com/736x/b2/9b/a2/b29ba25c2ffdb97a62a19f9c7272c6a3.jpg', alt: 'Demo card 1', objectPosition: 'center' },
  { id: 2, image: 'https://i.pinimg.com/736x/0f/35/d9/0f35d902fa436477d212a586816e9642.jpg', alt: 'Demo card 2', objectPosition: '85% center' },
  { id: 3, image: 'https://i.pinimg.com/1200x/e9/0f/4d/e90f4dfc6edf3d62f731a78ea482c56b.jpg', alt: 'Demo card 3', objectPosition: 'center' }
];

export default function WhatsNew() {
  return (
    <section className="whats-new-section">
      <div className="whats-new-header">
        <h2>What's New</h2>
        <button type="button" className="view-all-link">View All</button>
      </div>
      <div className="whats-new-scroll">
        {WHATS_NEW_ITEMS.map((item) => (
          <div key={item.id} className="whats-new-card">
            <img 
              src={item.image} 
              alt={item.alt} 
              className="whats-new-image" 
              loading="lazy" 
              style={{ objectPosition: item.objectPosition }} 
            />
            <div className="whats-new-overlay">
              <span className="shop-now-text">Shop Now <span className="shop-arrow">▶</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
