import React from 'react';
import { Map, Car, MapPin, Gift, Wifi, Users } from 'lucide-react';

const QUICK_ACCESS_ITEMS = [
  { id: 1, title: 'Mall Map', icon: Map, colorClass: 'qa-pink' },
  { id: 2, title: 'Find My Car', icon: Car, colorClass: 'qa-yellow' },
  { id: 3, title: 'Directions', icon: MapPin, colorClass: 'qa-blue' },
  { id: 4, title: 'Gift Cards', icon: Gift, colorClass: 'qa-purple' },
  { id: 5, title: 'Free Wi-Fi', icon: Wifi, colorClass: 'qa-cyan' },
  { id: 6, title: 'Facilities', icon: Users, colorClass: 'qa-green' }
];

export default function QuickAccess() {
  return (
    <section className="quick-access-section" aria-labelledby="quick-access-heading">
      <div className="section-header">
        <h2 id="quick-access-heading">QUICK ACCESS</h2>
        <button type="button" className="view-all-link">View All <span className="arrow-icon">›</span></button>
      </div>
      
      <div className="quick-access-grid">
        {QUICK_ACCESS_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className={`qa-card ${item.colorClass}`}>
              <div className="qa-icon-circle">
                <Icon size={28} strokeWidth={1.5} className="qa-icon" />
              </div>
              <span className="qa-title">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
