import React from 'react';
import { Home, Navigation, Store, Layers, Menu, User } from 'lucide-react';

export default function BottomNav({ activeTab = 'navigate', onSelectTab, onOpenLogin }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'navigate', label: 'Navigate', icon: Navigation },
    { id: 'stores', label: 'Stores', icon: Store },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'more', label: 'More', icon: Menu },
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
