import React, { useState } from 'react';
import { Bell, Headset, Search } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="manar-header" role="banner">
      {/* Top Row: Brand Logo & Top Actions */}
      <div className="header-top-row">
        {/* Left: Brand Logo */}
        <a href="#home" className="brand-link" aria-label="Manar Mall Home">
          <img src="/assets/logo.png" alt="Manar Mall" className="brand-logo-image" />
        </a>

        {/* Right: Actions (Notification with badge, Headset/Support) */}
        <div className="header-actions">
          <button
            type="button"
            className="action-btn notif-btn"
            aria-label="Notifications (3 unread)"
            title="Notifications"
          >
            <Bell className="header-icon" strokeWidth={1.75} />
            <span className="notif-badge" aria-label="3 new notifications">
              3
            </span>
          </button>

          <button
            type="button"
            className="action-btn support-btn"
            aria-label="Customer Support"
            title="Customer Support"
          >
            <Headset className="header-icon support-icon" strokeWidth={1.85} />
          </button>
        </div>
      </div>

      {/* Second Row: Search Bar */}
      <div className="header-search-row">
        <div className="search-bar-wrapper">
          <Search className="search-icon-left" size={18} strokeWidth={1.8} />
          <input
            type="text"
            className="search-input-field"
            placeholder="Search now"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search stores, dining, and events"
          />
          <button
            type="button"
            className="search-mic-btn"
            aria-label="Voice Search"
            title="Voice Search"
          >
            {/* Voice Mic icon with sparkle star on top right */}
            <svg
              className="mic-sparkle-svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
              <line x1="12" x2="12" y1="18" y2="22" />
              <line x1="8" x2="16" y1="22" y2="22" />
              {/* 4-point sparkle star on upper right */}
              <path
                d="M19 2l.4 1 .9.4-.9.4-.4 1-.4-1-.9-.4.9-.4z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

