import React from 'react';

// Custom 8K crisp vector icons matching the design exactly
const ShoppingIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.5 8h13l-1.3 11.4A2 2 0 0 1 15.2 21H8.8a2 2 0 0 1-1.99-1.6L5.5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

const DiningIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3v5a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
    <path d="M7 3v6" />
    <path d="M7 10v11" />
    <path d="M16 3v8a2 2 0 0 0 2 2h0V3a4 4 0 0 0-2 0z" />
    <path d="M16 13v8" />
  </svg>
);

const EntertainmentIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a3 3 0 0 1 0-6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3z" />
    <line x1="6" y1="8" x2="18" y2="8" />
    <line x1="6" y1="16" x2="18" y2="16" />
  </svg>
);

const OffersIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const NavigationIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21.5c4.5-4.8 7.5-9 7.5-12.5a7.5 7.5 0 1 0-15 0c0 3.5 3 7.7 7.5 12.5z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const ParkingIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12l1.6-5a2 2 0 0 1 1.9-1.4h9a2 2 0 0 1 1.9 1.4L20 12v6a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1H8v1A1.5 1.5 0 0 1 6.5 19.5h-1A1.5 1.5 0 0 1 4 18v-6z" />
    <path d="M5.2 11h13.6" />
    <rect x="6.5" y="13.5" width="2.5" height="1.5" rx="0.75" />
    <rect x="15" y="13.5" width="2.5" height="1.5" rx="0.75" />
    <line x1="10.5" y1="14.5" x2="13.5" y2="14.5" />
  </svg>
);

const EventsIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="17" rx="2.5" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="9.5" x2="21" y2="9.5" />
    <path d="M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01M7.5 17h.01M12 17h.01M16.5 17h.01" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

const AllServicesIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
  </svg>
);

const QUICK_ACCESS_ITEMS = [
  { id: 1, title: 'Shopping', icon: ShoppingIcon },
  { id: 2, title: 'Dining', icon: DiningIcon },
  { id: 3, title: 'Entertainment', icon: EntertainmentIcon },
  { id: 4, title: 'Offers', icon: OffersIcon },
  { id: 5, title: 'Navigation', icon: NavigationIcon },
  { id: 6, title: 'Parking', icon: ParkingIcon },
  { id: 7, title: 'Events', icon: EventsIcon },
  { id: 8, title: 'All Services', icon: AllServicesIcon }
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
            <button
              key={item.id}
              type="button"
              className="qa-item-btn"
              aria-label={item.title}
            >
              <div className="qa-card-box">
                <Icon />
              </div>
              <span className="qa-title">{item.title}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
