import React from 'react';
import {
  Bell,
  User,
  Monitor,
  Lock,
  CreditCard,
  Globe,
  HelpCircle,
  LogOut,
  Info,
  FileText,
  ChevronRight
} from 'lucide-react';

export default function MoreScreen({ onOpenLogin, onSelectTab }) {
  const generalSettings = [
    {
      id: 'account',
      title: 'Account',
      subtitle: 'Manage your profile',
      icon: <User size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'notifications',
      title: 'Notifications',
      subtitle: 'Your alerts & updates',
      icon: <Bell size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'display',
      title: 'Display',
      subtitle: 'Appearance & theme',
      icon: <Monitor size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'privacy',
      title: 'Privacy',
      subtitle: 'Your data, your control',
      icon: <Lock size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'payment',
      title: 'Payment',
      subtitle: 'Manage your payment methods',
      icon: <CreditCard size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'language',
      title: 'Language',
      subtitle: 'Choose your language',
      icon: <Globe size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'help',
      title: 'Help & Support',
      subtitle: 'Get help anytime',
      icon: <HelpCircle size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'logout',
      title: 'Logout',
      subtitle: 'Sign out from your account',
      icon: <LogOut size={18} strokeWidth={1.8} className="settings-row-icon" />,
      onClick: onOpenLogin
    }
  ];

  const aboutSettings = [
    {
      id: 'about',
      title: 'About',
      subtitle: 'App information',
      icon: <Info size={18} strokeWidth={1.8} className="settings-row-icon" />
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      subtitle: 'Read our policy',
      icon: <FileText size={18} strokeWidth={1.8} className="settings-row-icon" />
    }
  ];

  return (
    <div className="more-screen-container">
      {/* 1. Top Bar */}
      <header className="more-header">
        <button
          type="button"
          className="more-bell-btn"
          aria-label="Notifications"
        >
          <Bell size={20} strokeWidth={1.8} className="bell-icon" />
          <span className="bell-red-badge" />
        </button>
      </header>

      {/* Main Scroll Area */}
      <div className="more-scroll-area">
        {/* 2. Profile Card */}
        <div className="more-profile-card" onClick={onOpenLogin} role="button" tabIndex={0}>
          <div className="profile-card-left">
            <div className="profile-avatar-wrap">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                alt="Muhammed Afsal"
                className="profile-avatar-img"
              />
            </div>
            <div className="profile-info-stack">
              <h2 className="profile-user-name">Muhammed Afsal</h2>
              <p className="profile-member-since">Member since 2024</p>
            </div>
          </div>
          <button
            type="button"
            className="profile-arrow-fab"
            aria-label="View Profile"
          >
            <ChevronRight size={18} strokeWidth={2.4} className="profile-red-chevron" />
          </button>
        </div>

        {/* 3. General Section */}
        <section className="settings-section" aria-labelledby="general-heading">
          <h3 id="general-heading" className="settings-section-heading">GENERAL</h3>
          <div className="settings-card-group">
            {generalSettings.map((item, idx) => (
              <div
                key={item.id}
                className={`settings-row ${idx === generalSettings.length - 1 ? 'last-row' : ''}`}
                onClick={item.onClick || onOpenLogin}
                role="button"
                tabIndex={0}
              >
                <div className="settings-row-left">
                  <div className="settings-icon-circle">
                    {item.icon}
                  </div>
                  <div className="settings-text-stack">
                    <span className="settings-row-title">{item.title}</span>
                    <span className="settings-row-subtitle">{item.subtitle}</span>
                  </div>
                </div>
                <ChevronRight size={16} strokeWidth={2} className="settings-row-chevron" />
              </div>
            ))}
          </div>
        </section>

        {/* 4. About Section */}
        <section className="settings-section" aria-labelledby="about-heading">
          <h3 id="about-heading" className="settings-section-heading">ABOUT</h3>
          <div className="settings-card-group">
            {aboutSettings.map((item, idx) => (
              <div
                key={item.id}
                className={`settings-row ${idx === aboutSettings.length - 1 ? 'last-row' : ''}`}
                onClick={onOpenLogin}
                role="button"
                tabIndex={0}
              >
                <div className="settings-row-left">
                  <div className="settings-icon-circle">
                    {item.icon}
                  </div>
                  <div className="settings-text-stack">
                    <span className="settings-row-title">{item.title}</span>
                    <span className="settings-row-subtitle">{item.subtitle}</span>
                  </div>
                </div>
                <ChevronRight size={16} strokeWidth={2} className="settings-row-chevron" />
              </div>
            ))}
          </div>
        </section>

        {/* 5. Version info */}
        <div className="app-version-tag">
          <span>App Version 1.0.6</span>
        </div>
      </div>
    </div>
  );
}
