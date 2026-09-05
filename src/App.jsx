import React, { useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroBanner from './components/HeroBanner';
import BrandSearchBanner from './components/BrandSearchBanner';
import BottomNav from './components/BottomNav';
import WhatsNew from './components/WhatsNew';
import TopBrands from './components/TopBrands';
import QuickAccess from './components/QuickAccess';
import ReferralBanner from './components/ReferralBanner';
import ExploreShops from './components/ExploreShops';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import { Wifi, Battery, Signal } from 'lucide-react';
import './index.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('shopping');
  const [showSplash, setShowSplash] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="laptop-preview-container">
      {/* Mobile Device Mockup Frame (Active on Laptop / Desktop screens) */}
      <div className="mobile-frame">
        {/* Full Screen Overlays */}
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        {showLogin && <LoginScreen onBack={() => setShowLogin(false)} />}
        {/* Dynamic Island / Notch */}
        <div className="mobile-island">
          <div className="camera-lens" />
        </div>

        {/* Mobile Status Bar */}
        <div className="mobile-status-bar" aria-hidden="true">
          <span className="status-time">9:41</span>
          <div className="status-icons">
            <Signal className="status-icon" size={13} strokeWidth={2.5} />
            <Wifi className="status-icon" size={13} strokeWidth={2.5} />
            <Battery className="status-icon battery-icon" size={15} strokeWidth={2.5} />
          </div>
        </div>

        {/* Screen Content Wrapper */}
        <div className="mobile-screen-content">
          {/* 1. Top Header */}
          <Header />

          {/* 2. Category Navigation */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* 3. Main Content Area */}
          <main className="main-content">
            <HeroBanner />
            <BrandSearchBanner onClick={() => {}} />
            <WhatsNew />
            <TopBrands />
            <QuickAccess />
            <ReferralBanner onInviteClick={() => setShowLogin(true)} />
            <ExploreShops />
          </main>
        </div>

        {/* 4. Bottom Navigation (Fixed at bottom) */}
        <BottomNav onOpenLogin={() => setShowLogin(true)} />
      </div>
    </div>
  );
}
