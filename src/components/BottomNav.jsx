import React, { useState } from 'react';
import { Home, Navigation, Store, Car, User } from 'lucide-react';

export default function BottomNav({ onOpenLogin }) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'navigate', label: 'NAVIGATE', icon: Navigation },
    { id: 'explore', label: 'EXPLORE', icon: Store },
    { id: 'commute', label: 'COMMUTE', icon: Car },
    { id: 'profile', label: 'PROFILE', icon: User },
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
                setActiveTab(item.id);
                if (item.id === 'profile' && onOpenLogin) {
                  onOpenLogin();
                }
              }}
            >
              <Icon className="bottom-nav-icon" strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="bottom-nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
