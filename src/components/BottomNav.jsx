import React from 'react';

export default function BottomNav({ activeTab = 'navigate', onSelectTab, onOpenLogin }) {
  const navItems = [
    {
      id: 'home',
      label: 'HOME',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.3 : 1.9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5V20a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-5a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" />
        </svg>
      )
    },
    {
      id: 'navigate',
      label: 'NAVIGATE',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.4 : 2} strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 11 19-9-9 19-2-8-8-2z" />
        </svg>
      )
    },
    {
      id: 'stores',
      label: 'STORES',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.3 : 1.9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9 4.5 4h15L21 9v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
          <path d="M3 9h18" />
          <path d="M9 22V13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9" />
        </svg>
      )
    },
    {
      id: 'services',
      label: 'SERVICES',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.3 : 1.9} strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 2 10 5.5-10 5.5L2 7.5 12 2z" />
          <path d="m2 12 10 5.5 10-5.5" />
          <path d="m2 16.5 10 5.5 10-5.5" />
        </svg>
      )
    },
    {
      id: 'more',
      label: 'MORE',
      renderIcon: (isActive) => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={isActive ? 2.4 : 2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      )
    },
  ];

  return (
    <div className="bottom-nav-floating-wrapper">
      <nav className="bottom-nav-capsule">
        {navItems.map((item) => {
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
              aria-label={item.label}
            >
              <div className="nav-icon-wrapper">
                {item.renderIcon(isActive)}
              </div>
              <span className="bottom-nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
