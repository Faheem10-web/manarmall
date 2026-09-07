import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft,
  Search, 
  Mic, 
  ShoppingBag, 
  Utensils, 
  Sparkles, 
  ShieldCheck, 
  Navigation, 
  Compass, 
  LocateFixed, 
  Plus, 
  Minus, 
  ChevronRight, 
  X, 
  Clock, 
  Phone, 
  Star, 
  Tag, 
  Footprints,
  RotateCcw,
  CheckCircle2,
  Volume2
} from 'lucide-react';
import IndoorMap2D from './IndoorMap2D';
import { FLOORS, CATEGORIES, MALL_DATA, searchAllStores } from '../data/mallMapData';

export default function IndoorNavigation({ initialStoreId = null, onBackHome }) {
  const [currentFloor, setCurrentFloor] = useState('G');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isWalkingSimulated, setIsWalkingSimulated] = useState(false);
  const [walkingStepIndex, setWalkingStepIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showFullStoreDrawer, setShowFullStoreDrawer] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // User simulated position
  const [userLocation, setUserLocation] = useState({
    x: 260,
    y: 645,
    name: 'South Entrance',
    floor: 'G'
  });

  const searchInputRef = useRef(null);

  // Initialize with initial store if passed (e.g. ZARA by default)
  useEffect(() => {
    const defaultStore = MALL_DATA.G.stores.find((s) => s.id === (initialStoreId || 'zara')) || MALL_DATA.G.stores[0];
    setSelectedStore(defaultStore);
    if (defaultStore.floor) {
      setCurrentFloor(defaultStore.floor);
    }
  }, [initialStoreId]);

  // Handle Search Input Changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchAllStores(searchQuery, activeCategory);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, activeCategory]);

  // Toast notification helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // Voice Search Simulation
  const handleVoiceSearch = () => {
    setIsVoiceListening(true);
    showToast('Listening... Try saying "Zara" or "Food Court"');

    setTimeout(() => {
      const sampleQueries = ['Zara', 'Mango', 'Food Court', 'H&M', 'Carrefour'];
      const randomQuery = sampleQueries[Math.floor(Math.random() * sampleQueries.length)];
      setSearchQuery(randomQuery);
      setIsVoiceListening(false);
      setIsSearchFocused(false);

      const match = searchAllStores(randomQuery)[0];
      if (match) {
        handleSelectStore(match);
        showToast(`Found: ${match.name}`);
      }
    }, 1800);
  };

  // Select Store Action
  const handleSelectStore = (store) => {
    setSelectedStore(store);
    if (store.floor && store.floor !== currentFloor) {
      setCurrentFloor(store.floor);
    }
    setIsSearchFocused(false);
    setIsNavigating(false);
    setIsWalkingSimulated(false);
  };

  // Switch Floor
  const handleFloorChange = (floorId) => {
    setCurrentFloor(floorId);
    // If the currently selected store isn't on this floor, deselect or select first store
    if (selectedStore && selectedStore.floor !== floorId) {
      const firstStoreOnFloor = MALL_DATA[floorId]?.stores[0] || null;
      setSelectedStore(firstStoreOnFloor);
    }
    showToast(`Switched to ${FLOORS.find(f => f.id === floorId)?.name}`);
  };

  // Start Navigation Action
  const handleGetDirections = () => {
    if (!selectedStore) return;
    // Check if user is on different floor
    if (selectedStore.floor !== currentFloor) {
      setCurrentFloor(selectedStore.floor);
    }
    setIsNavigating(true);
    setIsWalkingSimulated(false);
    setShowFullStoreDrawer(false);
    showToast(`Navigating to ${selectedStore.name} (${selectedStore.walkTimeMin} min walk)`);
  };

  // Start Real-time Step Walk Simulation
  const handleStartWalkSimulation = () => {
    if (!selectedStore?.pathCoords) return;
    setIsWalkingSimulated(true);
    setWalkingStepIndex(0);

    const coords = selectedStore.pathCoords;
    let step = 0;

    const interval = setInterval(() => {
      step += 1;
      if (step < coords.length) {
        setWalkingStepIndex(step);
        setUserLocation({
          x: coords[step].x,
          y: coords[step].y,
          name: step === coords.length - 1 ? selectedStore.name : 'Corridor',
          floor: currentFloor
        });
      } else {
        clearInterval(interval);
        setIsWalkingSimulated(false);
        showToast(`You have arrived at ${selectedStore.name}! 🎉`);
      }
    }, 1200);
  };

  // Reset User Location
  const handleLocateMe = () => {
    setUserLocation({
      x: 260,
      y: 645,
      name: 'South Entrance',
      floor: 'G'
    });
    setCurrentFloor('G');
    setZoomLevel(1);
    showToast('Centered at Your Location (South Entrance)');
  };

  // Zoom Controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  };

  const activeFloorData = MALL_DATA[currentFloor] || MALL_DATA.G;

  return (
    <div className="indoor-nav-wrapper">
      {/* 1. TOP HEADER & SEARCH BAR */}
      <div className="indoor-top-header">
        {/* Top Header Bar with Back Arrow and Centered NAVIGATE Title */}
        <div className="indoor-screen-title-bar">
          <button 
            className="nav-back-arrow-btn"
            onClick={onBackHome}
            aria-label="Back to home"
          >
            <ArrowLeft size={21} strokeWidth={2} />
          </button>
          <h2 className="nav-screen-title">NAVIGATE</h2>
          <div className="nav-title-spacer" />
        </div>

        <div className="search-bar-container">
          <div className="search-bar-pill">
            <Search className="search-icon-burgundy" size={20} strokeWidth={2.4} />
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search for stores, dining, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {searchQuery ? (
              <button 
                className="search-clear-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            ) : null}
            <button
              className={`mic-btn ${isVoiceListening ? 'listening' : ''}`}
              onClick={handleVoiceSearch}
              aria-label="Voice search"
            >
              <Mic size={18} className="mic-icon-burgundy" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* 2. CATEGORY FILTER CHIPS */}
        <div className="category-chips-scroll">
          {CATEGORIES.map((cat) => {
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-chip ${isCatActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(isCatActive ? 'all' : cat.id);
                }}
              >
                <div className="chip-icon-wrap">
                  {cat.id === 'shops' && (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  )}
                  {cat.id === 'dining' && (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2v20M18 2a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4M2 2v6a4 4 0 0 0 4 4v10M6 2v6M10 2v6" />
                    </svg>
                  )}
                  {cat.id === 'entertainment' && (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="9" cy="11" r="2.5" />
                      <circle cx="15" cy="11" r="2.5" />
                      <circle cx="9" cy="11" r="1" fill="currentColor" />
                      <circle cx="15" cy="11" r="1" fill="currentColor" />
                      <path d="M12 13.5 L10.5 16 L13.5 16 Z" fill="currentColor" />
                    </svg>
                  )}
                  {cat.id === 'services' && (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.45 1-1 1H7.5a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3H15c-.55 0-1-.45-1-1v-2.34" />
                      <path d="M18 4H6v7a6 6 0 0 0 12 0V4Z" />
                    </svg>
                  )}
                </div>
                <span className="chip-label">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SEARCH RESULTS DROPDOWN OVERLAY */}
      {isSearchFocused && searchQuery.trim().length > 0 && (
        <div className="search-results-overlay">
          <div className="search-results-header">
            <span>Matching Locations ({searchResults.length})</span>
            <button 
              className="close-search-btn"
              onClick={() => setIsSearchFocused(false)}
            >
              <X size={16} />
            </button>
          </div>
          <div className="search-results-list">
            {searchResults.length === 0 ? (
              <div className="no-search-results">
                <p>No stores found matching "{searchQuery}"</p>
                <span>Try searching "Zara", "Dining", or "Cinema"</span>
              </div>
            ) : (
              searchResults.map((store) => (
                <div
                  key={`${store.floorId}-${store.id}`}
                  className="search-result-item"
                  onClick={() => handleSelectStore(store)}
                >
                  <img src={store.image} alt={store.name} className="search-item-img" />
                  <div className="search-item-info">
                    <div className="search-item-title-row">
                      <h4>{store.name}</h4>
                      <span className="floor-tag">Floor {store.floor}</span>
                    </div>
                    <p className="search-item-sub">{store.subCategory} • {store.locationDesc}</p>
                  </div>
                  <ChevronRight size={18} className="search-item-arrow" />
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* 3. NAVIGATION ROUTE BANNER (Active when directions enabled) */}
      {isNavigating && selectedStore && (
        <div className="navigation-active-banner">
          <div className="nav-banner-header">
            <div className="nav-banner-icon-box">
              <Footprints size={20} className="footprints-icon" />
            </div>
            <div className="nav-banner-info">
              <div className="nav-banner-eta">
                <strong>{selectedStore.walkTimeMin} min walk</strong>
                <span className="eta-distance">• {selectedStore.distanceM} m</span>
              </div>
              <p className="nav-banner-guide">
                Head towards Central Atrium and follow the burgundy route to <strong>{selectedStore.name}</strong>
              </p>
            </div>
            <button 
              className="exit-nav-btn"
              onClick={() => {
                setIsNavigating(false);
                setIsWalkingSimulated(false);
              }}
              title="Cancel Navigation"
            >
              <X size={18} />
            </button>
          </div>

          <div className="nav-action-buttons">
            <button
              className={`start-simulation-btn ${isWalkingSimulated ? 'active-sim' : ''}`}
              onClick={handleStartWalkSimulation}
            >
              {isWalkingSimulated ? (
                <>
                  <span className="sim-dot-pulse" />
                  Simulating Walk...
                </>
              ) : (
                <>
                  <Navigation size={15} />
                  Start Walk Simulation
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 4. MAIN 2D MAP CANVAS AREA */}
      <div className="indoor-map-viewport">
        <IndoorMap2D
          currentFloor={currentFloor}
          floorData={activeFloorData}
          selectedStore={selectedStore}
          onSelectStore={handleSelectStore}
          activeCategory={activeCategory}
          isNavigating={isNavigating}
          zoomLevel={zoomLevel}
          userLocation={userLocation}
          onResetView={() => setZoomLevel(1)}
        />

        {/* 5. FLOATING CONTROLS (LEFT SIDE) */}
        <div className="floating-left-controls">
          {/* Zoom Controls (+ / -) */}
          <div className="floating-zoom-controls">
            <button 
              className="zoom-btn" 
              onClick={handleZoomIn} 
              title="Zoom In"
              aria-label="Zoom in"
            >
              <Plus size={18} strokeWidth={2.5} />
            </button>
            <div className="zoom-divider" />
            <button 
              className="zoom-btn" 
              onClick={handleZoomOut} 
              title="Zoom Out"
              aria-label="Zoom out"
            >
              <Minus size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Quick Action Map Buttons */}
          <button
            className="floating-map-btn"
            onClick={handleLocateMe}
            title="Locate Me"
            aria-label="Locate me"
          >
            <LocateFixed size={20} className="floating-btn-icon" strokeWidth={2.2} />
          </button>
          <button
            className="floating-map-btn"
            onClick={() => {
              setZoomLevel(1);
              showToast('Oriented to True North');
            }}
            title="Navigation Orientation"
            aria-label="Compass"
          >
            <Navigation size={19} className="floating-btn-icon" strokeWidth={2.2} />
          </button>
        </div>

        {/* 6. FLOATING CONTROLS (RIGHT SIDE) */}
        <div className="floating-right-controls">
          {/* Vertical Floor Selector */}
          <div className="floating-floor-selector">
            {FLOORS.map((floor) => {
              const isFloorActive = currentFloor === floor.id;
              return (
                <button
                  key={floor.id}
                  className={`floor-pill-btn ${isFloorActive ? 'active' : ''}`}
                  onClick={() => handleFloorChange(floor.id)}
                  aria-label={`Select ${floor.name}`}
                >
                  <span className="floor-badge-number">{floor.label}</span>
                  <span className="floor-badge-name">{floor.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 7. BOTTOM STORE CARD (SLIDE-UP CARD) */}
      {selectedStore && !isNavigating && (
        <div className="bottom-store-card-container">
          <div className="bottom-store-card">
            <div className="bottom-card-top-bar">
              <div className="bottom-card-pull-bar" onClick={() => setShowFullStoreDrawer(!showFullStoreDrawer)} />
              <button 
                className="card-dismiss-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStore(null);
                }}
                title="Close"
                aria-label="Close store card"
              >
                <X size={15} />
              </button>
            </div>
            
            <div className="bottom-card-content-row">
              {/* Store Thumbnail */}
              <div className="store-thumbnail-wrap" onClick={() => setShowFullStoreDrawer(true)}>
                <img 
                  src={selectedStore.image} 
                  alt={selectedStore.name} 
                  className="store-thumbnail-img" 
                />
              </div>

              {/* Store Info */}
              <div className="store-meta-wrap">
                <div className="store-name-row">
                  <h3 className="store-card-title">{selectedStore.name}</h3>
                  <div className="card-header-actions">
                    <button 
                      className="store-wishlist-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        showToast(`Added ${selectedStore.name} to Favourites ❤️`);
                      }}
                      aria-label="Wishlist"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8B1D24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="store-card-subtitle">
                  {selectedStore.floorName} &bull; {selectedStore.subCategory}
                </p>
                <div className="store-quick-timing">
                  <Clock size={13} className="clock-icon" strokeWidth={2.2} />
                  <span>{selectedStore.walkTimeMin} min walk &bull; {selectedStore.distanceM} m</span>
                </div>
              </div>
            </div>

            {/* Big Action CTA Button */}
            <div className="bottom-card-actions">
              <button 
                className="get-directions-btn"
                onClick={handleGetDirections}
              >
                <span>Get Directions</span>
                <span className="cta-arrow-symbol">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. EXPANDED STORE FULL DETAILS MODAL / DRAWER */}
      {showFullStoreDrawer && selectedStore && (
        <div className="store-drawer-modal-backdrop" onClick={() => setShowFullStoreDrawer(false)}>
          <div 
            className="store-drawer-modal-sheet" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header-drag" />
            <button 
              className="drawer-close-btn"
              onClick={() => setShowFullStoreDrawer(false)}
            >
              <X size={20} />
            </button>

            <div className="drawer-hero-image-wrap">
              <img src={selectedStore.image} alt={selectedStore.name} className="drawer-hero-img" />
              <div className="drawer-hero-overlay">
                <span className="drawer-brand-tag">{selectedStore.subCategory}</span>
                <h2>{selectedStore.name}</h2>
              </div>
            </div>

            <div className="drawer-body-scroll">
              <div className="drawer-stats-grid">
                <div className="stat-box">
                  <Star size={18} fill="#EAB308" color="#EAB308" />
                  <strong>{selectedStore.rating}</strong>
                  <span>({selectedStore.reviewsCount} reviews)</span>
                </div>
                <div className="stat-box">
                  <Footprints size={18} className="burgundy-text" />
                  <strong>{selectedStore.walkTimeMin} min</strong>
                  <span>{selectedStore.distanceM}m away</span>
                </div>
                <div className="stat-box">
                  <Clock size={18} className="burgundy-text" />
                  <strong>Open</strong>
                  <span>until 11:00 PM</span>
                </div>
              </div>

              <div className="drawer-section">
                <h4>About</h4>
                <p>{selectedStore.description}</p>
              </div>

              {selectedStore.offers && selectedStore.offers.length > 0 && (
                <div className="drawer-section">
                  <h4>Special Offers & Deals</h4>
                  <div className="offers-list">
                    {selectedStore.offers.map((offer, idx) => (
                      <div key={idx} className="offer-badge-item">
                        <Tag size={16} className="offer-tag-icon" />
                        <span>{offer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="drawer-section contact-section">
                <h4>Location & Details</h4>
                <div className="contact-row">
                  <Navigation size={15} className="contact-icon" />
                  <span>{selectedStore.floorName} ({selectedStore.locationDesc})</span>
                </div>
                <div className="contact-row">
                  <Phone size={15} className="contact-icon" />
                  <span>{selectedStore.phone}</span>
                </div>
              </div>

              <button 
                className="drawer-directions-cta"
                onClick={() => {
                  setShowFullStoreDrawer(false);
                  handleGetDirections();
                }}
              >
                <Navigation size={18} />
                <span>Start Turn-by-Turn Navigation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="indoor-nav-toast">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
