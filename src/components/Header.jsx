import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="manar-header" role="banner">
      <div className="header-container">
        {/* Left: Brand Logo & Typography */}
        <a href="#home" className="brand-link" aria-label="Manar Mall Home">
          <img src="/assets/logo.png" alt="Manar Mall" className="brand-logo-image" />
        </a>

        {/* Right: Actions (Search, Notification with badge, Menu) */}
        <div className="header-actions">
          <button
            type="button"
            className="action-btn"
            aria-label="Search stores, dining, and events"
            title="Search"
          >
            <Search className="header-icon" strokeWidth={1.65} />
          </button>

          <button
            type="button"
            className="action-btn notif-btn"
            aria-label="Notifications (3 unread)"
            title="Notifications"
          >
            <Bell className="header-icon" strokeWidth={1.65} />
            <span className="notif-badge" aria-label="3 new notifications">
              3
            </span>
          </button>

          <button
            type="button"
            className="action-btn menu-btn"
            aria-label="Open Navigation Menu"
            title="Menu"
          >
            <Menu className="header-icon menu-icon" strokeWidth={1.65} />
          </button>
        </div>
      </div>
    </header>
  );
}
