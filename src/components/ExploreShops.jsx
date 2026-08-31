import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SHOPS = [
  { 
    id: 1, 
    brand: 'Loewe', 
    category: 'Luxury Fashion', 
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 2, 
    brand: 'Chanel', 
    category: 'Fragrances', 
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 3, 
    brand: 'Rolex', 
    category: 'Fine Watches', 
    image: 'https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 4, 
    brand: 'Dior', 
    category: 'Designer Bags', 
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 5, 
    brand: 'Cartier', 
    category: 'Jewelry', 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600' 
  }
];

export default function ExploreShops() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].offsetWidth + 16;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 16;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="explore-shops-section" aria-labelledby="explore-shops-heading">
      <div className="explore-header">
        <div className="explore-header-left">
          <h2 id="explore-shops-heading">EXPLORE THE SHOPS</h2>
        </div>
        <button type="button" className="view-all-link">View All <span className="arrow-icon">›</span></button>
      </div>
      
      <div className="explore-scroll" ref={scrollRef} onScroll={handleScroll}>
        {SHOPS.map((shop) => (
          <div key={shop.id} className="explore-card">
            <img src={shop.image} alt={shop.brand} className="explore-image" loading="lazy" />
            <div className="explore-overlay">
              <div className="explore-content">
                <h3 className="explore-brand">{shop.brand}</h3>
                <span className="explore-category">{shop.category}</span>
              </div>
              <button type="button" className="explore-arrow-btn" aria-label={`Explore ${shop.brand}`}>
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="explore-indicators">
        {SHOPS.map((_, index) => (
          <div 
            key={index} 
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollTo(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
