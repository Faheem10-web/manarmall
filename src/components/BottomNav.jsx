import React from 'react';
import { Home, MapPin, ShoppingBag, Users, SlidersHorizontal } from 'lucide-react';

export default function BottomNav({ activeTab = 'navigate', onSelectTab, onOpenLogin }) {
  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'navigate', label: 'MALL MAP', icon: MapPin },
    { id: 'stores', label: 'STORES', icon: ShoppingBag },
    { id: 'services', label: 'SERVICES', icon: Users },
    { id: 'more', label: 'MORE', icon: SlidersHorizontal },
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (onSelectTab) {
                  onSelectTab(item.id);
                }
                if (item.id === 'more' && onOpenLogin) {
                  onOpenLogin();
                }
              }}
            >
              {isActive && <span className="active-nav-indicator-dot" />}
              <div className="nav-icon-wrapper">
                <Icon className="bottom-nav-icon" strokeWidth={isActive ? 2.4 : 1.8} />
              </div>
              <span className="bottom-nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
