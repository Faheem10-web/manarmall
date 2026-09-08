import React from 'react';

export default function BottomNav({ activeTab = 'shops', onSelectTab, onOpenLogin }) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.2 : 1.85} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.2L12 3l9 7.2V20a1.8 1.8 0 0 1-1.8 1.8h-4.2a1 1 0 0 1-1-1v-4.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4.5a1 1 0 0 1-1 1H4.8A1.8 1.8 0 0 1 3 20z" />
        </svg>
      )
    },
    {
      id: 'navigate',
      label: 'Navigate',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.2 : 1.85} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      )
    },
    {
      id: 'shops',
      label: 'Shops',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isActive ? '0.5' : '1.85'} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" stroke={isActive ? '#FFFFFF' : 'currentColor'} strokeWidth={isActive ? '1.5' : '1.85'} />
          <path d="M16 10a4 4 0 0 1-8 0" stroke={isActive ? '#FFFFFF' : 'currentColor'} strokeWidth={isActive ? '1.8' : '1.85'} fill="none" />
        </svg>
      )
    },
    {
      id: 'services',
      label: 'Services',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.2 : 1.85} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="3.5" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a3.5 3.5 0 0 1 0 6.74" />
        </svg>
      )
    },
    {
      id: 'more',
      label: 'More',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2.5" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isActive ? '0' : '1.85'} />
          <rect x="13" y="3.5" width="7.5" height="7.5" rx="2.5" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isActive ? '0' : '1.85'} />
          <rect x="3.5" y="13" width="7.5" height="7.5" rx="2.5" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isActive ? '0' : '1.85'} />
          <rect x="13" y="13" width="7.5" height="7.5" rx="2.5" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isActive ? '0' : '1.85'} />
        </svg>
      )
    },
  ];

  return (
    <nav className="bottom-nav-bar" aria-label="Main Navigation">
      {navItems.map((item) => {
        const isActive = activeTab === item.id || (item.id === 'shops' && (activeTab === 'explore' || activeTab === 'stores'));
        return (
          <button
            key={item.id}
            className={`bottom-nav-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => {
              if (onSelectTab) {
                onSelectTab(item.id);
              }
            }}
            aria-label={item.label}
          >
            <div className="bottom-nav-icon-box">
              {item.renderIcon(isActive)}
            </div>
            <span className="bottom-nav-tab-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
