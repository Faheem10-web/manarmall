import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
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
  ChevronLeft,
  MoreHorizontal,
  ListFilter,
  X, 
  Clock, 
  Phone, 
  Star, 
  Tag, 
  Footprints,
  Users,
  Car,
  Info
} from 'lucide-react';
import IndoorMap2D from './IndoorMap2D';
import { FLOORS, CATEGORIES, AMENITY_TAGS, MALL_DATA, searchAllStores } from '../data/mallMapData';

export default function IndoorNavigation({ initialStoreId = null, onBackHome }) {
  const [currentFloor, setCurrentFloor] = useState('GF');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isWalkingSimulated, setIsWalkingSimulated] = useState(false);
  const [walkingStepIndex, setWalkingStepIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showFullStoreDrawer, setShowFullStoreDrawer] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [userLocation, setUserLocation] = useState({
    x: 260,
    y: 670,
    name: 'South Grand Entrance',
    floor: 'GF'
  });

  const searchInputRef = useRef(null);

  // Initialize selected store (ZARA default)
  useEffect(() => {
    const defaultStore = MALL_DATA.GF.stores.find((s) => s.id === (initialStoreId || 'zara')) || MALL_DATA.GF.stores[0];
    setSelectedStore(defaultStore);
    if (defaultStore.floor) {
      setCurrentFloor(defaultStore.floor);
    }
  }, [initialStoreId]);

  // Search filter
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchAllStores(searchQuery, activeCategory);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, activeCategory]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const handleSelectStore = (store) => {
    setSelectedStore(store);
    if (store.floor && store.floor !== currentFloor) {
      setCurrentFloor(store.floor);
    }
    setIsSearchFocused(false);
    setIsNavigating(false);
    setIsWalkingSimulated(false);
  };

  const handleFloorChange = (floorId) => {
    setCurrentFloor(floorId);
    if (selectedStore && selectedStore.floor !== floorId) {
      const firstStoreOnFloor = MALL_DATA[floorId]?.stores[0] || null;
      setSelectedStore(firstStoreOnFloor);
    }
    showToast(`Viewing ${FLOORS.find(f => f.id === floorId)?.name}`);
  };

  const handleGetDirections = () => {
    if (!selectedStore) return;
    if (selectedStore.floor !== currentFloor) {
      setCurrentFloor(selectedStore.floor);
    }
    setIsNavigating(true);
    setIsWalkingSimulated(false);
    setShowFullStoreDrawer(false);
    showToast(`Route to ${selectedStore.name} (${selectedStore.walkTimeMin} min walk)`);
  };

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
          name: step === coords.length - 1 ? selectedStore.name : 'Promenade Corridor',
          floor: currentFloor
        });
      } else {
        clearInterval(interval);
        setIsWalkingSimulated(false);
        showToast(`You have arrived at ${selectedStore.name}! 🎉`);
      }
    }, 1200);
  };

  const handleLocateMe = () => {
    setUserLocation({
      x: 260,
      y: 670,
      name: 'South Grand Entrance',
      floor: 'GF'
    });
    setCurrentFloor('GF');
    setZoomLevel(1);
    showToast('Centered at South Grand Entrance');
  };

  const handleAmenityClick = (amenity) => {
    if (amenity.floor !== currentFloor) {
      setCurrentFloor(amenity.floor);
    }
    setUserLocation({
      x: amenity.x,
      y: amenity.y,
      name: amenity.label,
      floor: amenity.floor
    });
    showToast(`Focused: ${amenity.label}`);
  };

  const activeFloorData = MALL_DATA[currentFloor] || MALL_DATA.GF;

  return (
    <div className="indoor-nav-wrapper">
      {/* 1. TOP APP BAR (MALL MAP) */}
      <div className="mall-top-nav-bar">
        <button 
          className="top-bar-icon-btn" 
          onClick={onBackHome}
          aria-label="Back"
        >
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <div className="top-bar-title-wrap">
          <h1 className="mall-map-title">MALL MAP</h1>
          <span className="mall-map-subtitle">Manar Waterfront Lagoon</span>
        </div>
        <button 
          className="top-bar-icon-btn"
          onClick={() => showToast('Manar Mall Ras Al Khaimah — Open until Midnight')}
          aria-label="Options"
        >
          <MoreHorizontal size={22} strokeWidth={2.2} />
        </button>
      </div>

      {/* 2. SEARCH & LIST FILTER ROW */}
      <div className="mall-search-section">
        <div className="search-bar-row">
          <div className="search-pill-container">
            <Search className="search-pill-icon" size={19} strokeWidth={2.4} />
            <input
              ref={searchInputRef}
              type="text"
              className="search-pill-input"
              placeholder="Search for location and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {searchQuery && (
              <button 
                className="search-clear-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button 
            className="search-filter-btn"
            onClick={() => showToast('Filter categories and amenities')}
            aria-label="Filter"
          >
            <ListFilter size={19} strokeWidth={2.2} />
          </button>
        </div>

        {/* 3. CATEGORY PILLS (Shop, Dine, Entertainment, Stay) */}
        <div className="mall-category-pills-row">
          {CATEGORIES.map((cat) => {
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`mall-cat-pill ${isCatActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(isCatActive ? 'all' : cat.id)}
              >
                <span className="cat-pill-text">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SEARCH RESULTS DROPDOWN OVERLAY */}
      {isSearchFocused && searchQuery.trim().length > 0 && (
        <div className="search-results-overlay">
          <div className="search-results-header">
            <span>Found Locations ({searchResults.length})</span>
            <button className="close-search-btn" onClick={() => setIsSearchFocused(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="search-results-list">
            {searchResults.length === 0 ? (
              <div className="no-search-results">
                <p>No matches for "{searchQuery}"</p>
                <span>Try searching "Zara", "Louis Vuitton", or "Coffee"</span>
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
                      <span className="floor-tag">{store.floorName}</span>
                    </div>
                    <p className="search-item-sub">{store.subCategory} &bull; {store.locationDesc}</p>
                  </div>
                  <ChevronRight size={18} className="search-item-arrow" />
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* 4. TURN-BY-TURN NAVIGATION ACTIVE BANNER */}
      {isNavigating && selectedStore && (
        <div className="navigation-active-banner">
          <div className="nav-banner-header">
            <div className="nav-banner-icon-box">
              <Footprints size={20} className="footprints-icon" />
            </div>
            <div className="nav-banner-info">
              <div className="nav-banner-eta">
                <strong>{selectedStore.walkTimeMin} min walk</strong>
                <span className="eta-distance">&bull; {selectedStore.distanceM} m</span>
              </div>
              <p className="nav-banner-guide">
                Follow the burgundy route past the Waterfront Lagoon to <strong>{selectedStore.name}</strong>
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

      {/* 5. 2D ARCHITECTURAL VECTOR MAP CANVAS */}
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

        {/* 6. LEFT FLOATING CONTROLS (Compass, Floor Selector, Locate) */}
        <div className="floating-left-sidebar">
          {/* Compass Orientation */}
          <button
            className="floating-circle-btn"
            onClick={() => {
              setZoomLevel(1);
              showToast('Oriented to True North');
            }}
            title="Compass"
            aria-label="Compass"
          >
            <Compass size={22} className="compass-arrow-icon" strokeWidth={2.4} />
          </button>

          {/* Vertical Floor Selector */}
          <div className="floating-vertical-floors">
            {FLOORS.map((floor) => {
              const isFloorActive = currentFloor === floor.id;
              return (
                <button
                  key={floor.id}
                  className={`vertical-floor-btn ${isFloorActive ? 'active' : ''}`}
                  onClick={() => handleFloorChange(floor.id)}
                  aria-label={floor.name}
                >
                  <span className="floor-code-txt">{floor.label}</span>
                </button>
              );
            })}
          </div>

          {/* Locate Me Crosshair */}
          <button
            className="floating-circle-btn"
            onClick={handleLocateMe}
            title="Locate Me"
            aria-label="Locate me"
          >
            <LocateFixed size={20} strokeWidth={2.4} />
          </button>
        </div>

        {/* 7. RIGHT FLOATING ZOOM */}
        <div className="floating-right-zoom">
          <button className="zoom-btn" onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.2))} aria-label="Zoom in">
            <Plus size={18} strokeWidth={2.5} />
          </button>
          <div className="zoom-divider" />
          <button className="zoom-btn" onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.8))} aria-label="Zoom out">
            <Minus size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* 8. AMENITY QUICK BAR (Male Prayer Room, Female Prayer Room, Restrooms) */}
        <div className="map-bottom-amenities-row">
          {AMENITY_TAGS.map((tag) => (
            <button
              key={tag.id}
              className="amenity-quick-chip"
              onClick={() => handleAmenityClick(tag)}
            >
              {tag.id === 'male_prayer' && (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  <path d="M6 8h12v3l-4 4v7h-4v-6l-4-3V8Z"/>
                </svg>
              )}
              {tag.id === 'female_prayer' && (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  <path d="M9 8h6l3 10h-3l-1.5-5h-3L9 18H6L9 8Z"/>
                </svg>
              )}
              {tag.id === 'restrooms' && <Users size={15} strokeWidth={2.2} />}
              {tag.id === 'valet' && <Car size={15} strokeWidth={2.2} />}
              {tag.id === 'info' && <Info size={15} strokeWidth={2.2} />}
              <span>{tag.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 10. EXPANDED FULL STORE DRAWER */}
      {showFullStoreDrawer && selectedStore && (
        <div className="store-drawer-modal-backdrop" onClick={() => setShowFullStoreDrawer(false)}>
          <div className="store-drawer-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header-drag" />
            <button className="drawer-close-btn" onClick={() => setShowFullStoreDrawer(false)}>
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
                  <span>{selectedStore.hours}</span>
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

      {/* TOAST */}
      {toastMessage && (
        <div className="indoor-nav-toast">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
