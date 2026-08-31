import React from 'react';

const TOP_BRANDS = [
  { id: 1, name: 'MUSCAT WATCH CENTRE', image: 'https://i.pinimg.com/1200x/e2/1d/ee/e21deef3118a0021859cf0817f0335df.jpg' },
  { id: 2, name: 'DAMAS COLLECTIONS', image: 'https://i.pinimg.com/736x/22/21/e2/2221e2a577a588790ce9e572d8a5ac6f.jpg' },
  { id: 3, name: 'KALYAN JEWELLERS', image: 'https://i.pinimg.com/1200x/a4/5d/14/a45d1416ab9a4fdd631f4d088f91baf0.jpg' },
  { id: 4, name: 'BRAND 4', image: 'https://i.pinimg.com/736x/ae/ce/15/aece15db09d7fa41e158379b5306577f.jpg' },
  { id: 5, name: 'BRAND 5', image: 'https://i.pinimg.com/736x/9b/9a/89/9b9a89fa3ae80286ecf9255b606e533e.jpg' }
];

export default function TopBrands() {
  return (
    <section className="top-brands-section" aria-labelledby="top-brands-heading">
      <div className="top-brands-header">
        <h2 id="top-brands-heading">TOP BRANDS</h2>
        <button type="button" className="view-all-link">View All</button>
      </div>
      
      <div className="top-brands-scroll">
        {TOP_BRANDS.map((brand) => (
          <div key={brand.id} className="top-brand-card">
            <img src={brand.image} alt={brand.name} className="top-brand-image" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
