import React, { useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroBanner from './components/HeroBanner';
import BottomNav from './components/BottomNav';
import WhatsNew from './components/WhatsNew';
import TopBrands from './components/TopBrands';
import QuickAccess from './components/QuickAccess';
import ReferralBanner from './components/ReferralBanner';
import ExploreShops from './components/ExploreShops';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import IndoorNavigation from './components/IndoorNavigation';
import ShopsScreen from './components/ShopsScreen';
import MoreScreen from './components/MoreScreen';
import { Wifi, Battery, Signal } from 'lucide-react';
import './index.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('shopping');
  const [showSplash, setShowSplash] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState('more'); // Default directly to the new Luxury More / Profile screen
  const [selectedNavStoreId, setSelectedNavStoreId] = useState('zara');

  const handleNavigateToStore = (storeId) => {
    setSelectedNavStoreId(storeId);
    setActiveTab('navigate');
  };

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

        {/* Screen Content */}
        {activeTab === 'more' ? (
          <div className="mobile-screen-content nav-screen-mode">
            <MoreScreen
              onOpenLogin={() => setShowLogin(true)}
              onSelectTab={(tabId) => setActiveTab(tabId)}
            />
          </div>
        ) : activeTab === 'shops' ? (
          <div className="mobile-screen-content nav-screen-mode">
            <ShopsScreen
              onBackHome={() => setActiveTab('home')}
              onNavigateToStore={handleNavigateToStore}
              onOpenNavigate={() => setActiveTab('navigate')}
            />
          </div>
        ) : activeTab === 'navigate' ? (
          <div className="mobile-screen-content nav-screen-mode">
            <IndoorNavigation
              initialStoreId={selectedNavStoreId}
              onBackHome={() => setActiveTab('home')}
            />
          </div>
        ) : (
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
              <HeroBanner onExploreMap={() => setActiveTab('navigate')} />
              <QuickAccess onOpenMap={() => setActiveTab('navigate')} />
              <WhatsNew onSelectStore={(id) => handleNavigateToStore(id)} />
              <TopBrands onSelectBrand={(id) => handleNavigateToStore(id)} />
              <ReferralBanner onInviteClick={() => setShowLogin(true)} />
              <ExploreShops onSelectShop={(id) => handleNavigateToStore(id)} />
            </main>
          </div>
        )}

        {/* 4. Bottom Navigation (Fixed at bottom) */}
        <BottomNav
          activeTab={activeTab}
          onSelectTab={(tabId) => setActiveTab(tabId)}
          onOpenLogin={() => setShowLogin(true)}
        />
      </div>
    </div>
  );
}


