import React, { useRef, useState, useEffect } from 'react';
import { 
  Users, 
  Info, 
  ChevronsUpDown, 
  ArrowUpRight, 
  DoorClosed, 
  DoorOpen, 
  Accessibility,
  MapPin,
  Utensils
} from 'lucide-react';

export default function IndoorMap2D({
  currentFloor = 'G',
  floorData,
  selectedStore,
  onSelectStore,
  activeCategory = 'all',
  isNavigating = false,
  zoomLevel = 1,
  userLocation = { x: 260, y: 560, name: 'South Entrance' },
  onResetView
}) {
  const containerRef = useRef(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredStoreId, setHoveredStoreId] = useState(null);

  // Auto-center or adjust view when selectedStore changes
  useEffect(() => {
    if (selectedStore && selectedStore.doorPos) {
      // smooth subtle pan towards store
      const targetX = (260 - selectedStore.doorPos.x) * 0.4;
      const targetY = (390 - selectedStore.doorPos.y) * 0.4;
      setPan({ x: targetX, y: targetY });
    } else {
      setPan({ x: 0, y: 0 });
    }
  }, [selectedStore, currentFloor]);

  // Pan / Drag handlers
  const handleMouseDown = (e) => {
    if (e.target.closest('.map-interactive-pin') || e.target.closest('.store-polygon-group')) {
      // allow click to pass
    }
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support for mobile devices
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPan({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate SVG navigation path
  const renderNavPath = () => {
    if (!isNavigating || !selectedStore || !selectedStore.pathCoords) return null;

    const coords = selectedStore.pathCoords;
    if (!coords || coords.length < 2) return null;

    // Build smooth curve path
    let pathD = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 1; i < coords.length; i++) {
      pathD += ` L ${coords[i].x} ${coords[i].y}`;
    }

    return (
      <g className="navigation-route-group">
        {/* Route Outer Soft Glow */}
        <path
          d={pathD}
          fill="none"
          stroke="rgba(139, 37, 37, 0.22)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Route Base Solid Background */}
        <path
          d={pathD}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Route Main Burgundy Line */}
        <path
          d={pathD}
          fill="none"
          stroke="#8B2525"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Animated Dashed Pulse Line */}
        <path
          d={pathD}
          className="animated-route-dash"
          fill="none"
          stroke="#F8E5D8"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Start Point Marker (User Location) */}
        <g transform={`translate(${coords[0].x}, ${coords[0].y})`}>
          <circle r="14" fill="rgba(139, 37, 37, 0.18)" className="pulse-circle" />
          <circle r="8" fill="#8B2525" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle r="3.5" fill="#FFFFFF" />
        </g>

        {/* Destination Pin Marker */}
        <g transform={`translate(${coords[coords.length - 1].x}, ${coords[coords.length - 1].y - 20})`}>
          <circle cx="0" cy="20" r="6" fill="rgba(0,0,0,0.15)" filter="blur(2px)" />
          <g className="bounce-pin">
            <path
              d="M 0,-18 C -10,-18 -18,-10 -18,0 C -18,12 0,22 0,22 C 0,22 18,12 18,0 C 18,-10 10,-18 0,-18 Z"
              fill="#8B2525"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <circle cx="0" cy="-2" r="5.5" fill="#FFFFFF" />
            <circle cx="0" cy="-2" r="2.5" fill="#8B2525" />
          </g>
        </g>
      </g>
    );
  };

  const stores = floorData?.stores || [];
  const amenities = floorData?.amenities || [];

  return (
    <div 
      className="indoor-map-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <svg
        className="indoor-map-svg"
        viewBox="0 0 520 780"
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <defs>
          {/* Subtle floor drop shadow */}
          <filter id="mallDropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#705C4E" floodOpacity="0.08" />
          </filter>
          <filter id="storeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#8B2525" floodOpacity="0.06" />
          </filter>
          <filter id="activeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#8B2525" floodOpacity="0.4" />
          </filter>

          {/* Gradients */}
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#F5EFE6" />
          </linearGradient>

          <linearGradient id="atriumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EFE5D9" />
            <stop offset="100%" stopColor="#E9DEC0" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="zaraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDEFE9" />
            <stop offset="100%" stopColor="#F6DDD4" />
          </linearGradient>

          <linearGradient id="hmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDECEC" />
            <stop offset="100%" stopColor="#FAD8D8" />
          </linearGradient>

          <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4EDE6" />
            <stop offset="100%" stopColor="#E9DFD4" />
          </linearGradient>

          <linearGradient id="lifestyleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7EEE9" />
            <stop offset="100%" stopColor="#EBDDD6" />
          </linearGradient>

          <linearGradient id="foodcourtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8EFE9" />
            <stop offset="100%" stopColor="#EFE1D5" />
          </linearGradient>
        </defs>

        {/* 1. Surrounding Landscape & Outer Mall Area */}
        <rect x="0" y="0" width="520" height="780" fill="url(#bgGrad)" />

        {/* Decorative soft outdoor vegetation / trees */}
        <g className="mall-landscaping" opacity="0.65">
          <circle cx="55" cy="530" r="14" fill="#E2EAD8" />
          <circle cx="50" cy="545" r="10" fill="#D6E2CB" />
          <circle cx="70" cy="565" r="16" fill="#DEE8D4" />

          <circle cx="465" cy="530" r="14" fill="#E2EAD8" />
          <circle cx="475" cy="548" r="12" fill="#D6E2CB" />
          <circle cx="450" cy="565" r="16" fill="#DEE8D4" />

          <circle cx="75" cy="230" r="12" fill="#E2EAD8" />
          <circle cx="445" cy="230" r="12" fill="#E2EAD8" />
        </g>

        {/* 2. Main Mall Perimeter Shell (Curved Luxury Floor Boundary) */}
        <g filter="url(#mallDropShadow)">
          {/* Outer Floor Base */}
          <path
            d="
              M 200 170 
              C 230 155, 290 155, 320 170 
              C 390 195, 455 270, 465 370 
              C 475 480, 440 600, 350 660 
              C 310 685, 210 685, 170 660 
              C 80 600, 45 480, 55 370 
              C 65 270, 130 195, 200 170 Z
            "
            fill="#FDFCFA"
            stroke="#EDE5DB"
            strokeWidth="3.5"
          />

          {/* Internal Primary Walkway Corridor Ring */}
          <path
            d="
              M 220 205 
              C 245 195, 275 195, 300 205 
              C 360 230, 420 295, 430 380 
              C 440 470, 405 570, 330 625 
              C 295 645, 225 645, 190 625 
              C 115 570, 80 470, 90 380 
              C 100 295, 160 230, 220 205 Z
            "
            fill="#F6F1EA"
            stroke="#EAE1D5"
            strokeWidth="1.5"
          />
        </g>

        {/* 3. Central Oval Atrium with Architectural Garden Feature */}
        <g className="central-atrium-plaza">
          <ellipse
            cx="260"
            cy="410"
            rx="58"
            ry="92"
            fill="url(#atriumGrad)"
            stroke="#DFD4C5"
            strokeWidth="2"
          />
          {/* Inner Atrium Balcony Ring */}
          <ellipse
            cx="260"
            cy="410"
            rx="46"
            ry="76"
            fill="#F5EFE7"
            stroke="#E4DACD"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          
          {/* Decorative floral lotus/tulip emblem at center of atrium */}
          <g transform="translate(260, 410) scale(0.9)" opacity="0.45">
            <path
              d="M 0 -24 C 6 -12 14 -4 14 8 C 14 16 7 22 0 24 C -7 22 -14 16 -14 8 C -14 -4 -6 -12 0 -24 Z"
              fill="#C29B7F"
            />
            <path
              d="M 0 -18 C -10 -8 -16 6 -8 18 C -2 12 -2 2 0 -18 Z"
              fill="#B48262"
            />
            <path
              d="M 0 -18 C 10 -8 16 6 8 18 C 2 12 2 2 0 -18 Z"
              fill="#B48262"
            />
            <circle cx="0" cy="6" r="3" fill="#8B2525" />
          </g>

          {/* Atrium Skylight / Void Accent */}
          <ellipse cx="260" cy="410" rx="20" ry="34" fill="none" stroke="#D3C3B1" strokeWidth="1" opacity="0.6" />
        </g>

        {/* 4. Floor Store Blocks */}
        {currentFloor === 'G' && (
          <g className="floor-stores-layer">
            {/* Top Store: SEPHORA / North Gallery */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'sephora') || stores[0])}
              onMouseEnter={() => setHoveredStoreId('sephora')}
              onMouseLeave={() => setHoveredStoreId(null)}
              cursor="pointer"
            >
              <path
                d="M 215 190 L 305 190 L 295 240 L 225 240 Z"
                fill="#FAF2ED"
                stroke={selectedStore?.id === 'sephora' ? '#8B2525' : '#E8DFD5'}
                strokeWidth={selectedStore?.id === 'sephora' ? '2.5' : '1.5'}
                filter={selectedStore?.id === 'sephora' ? 'url(#activeGlow)' : 'none'}
              />
              <text x="260" y="218" textAnchor="middle" fill="#252A30" fontSize="10.5" fontWeight="700" letterSpacing="1.2">
                SEPHORA
              </text>
            </g>

            {/* Top-Right Store: ZARA (Large Flagship block) */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'zara'))}
              onMouseEnter={() => setHoveredStoreId('zara')}
              onMouseLeave={() => setHoveredStoreId(null)}
              cursor="pointer"
            >
              <path
                d="
                  M 312 250 
                  L 415 255 
                  C 425 295, 428 340, 420 375 
                  L 315 370 
                  C 310 320, 310 280, 312 250 Z
                "
                fill={selectedStore?.id === 'zara' ? '#FEE4DC' : 'url(#zaraGrad)'}
                stroke={selectedStore?.id === 'zara' ? '#8B2525' : '#EBD5CB'}
                strokeWidth={selectedStore?.id === 'zara' ? '3' : '1.5'}
                filter={selectedStore?.id === 'zara' ? 'url(#activeGlow)' : 'url(#storeShadow)'}
              />
              {/* Zara Brand Text */}
              <text
                x="365"
                y="318"
                textAnchor="middle"
                fill="#59201B"
                fontFamily="'Playfair Display', serif"
                fontSize="18"
                fontWeight="700"
                letterSpacing="2.5"
              >
                ZARA
              </text>
            </g>

            {/* Top-Left Store: H&M (Large Flagship block) */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'hm'))}
              onMouseEnter={() => setHoveredStoreId('hm')}
              onMouseLeave={() => setHoveredStoreId(null)}
              cursor="pointer"
            >
              <path
                d="
                  M 110 255 
                  L 208 250 
                  C 210 280, 210 320, 205 370 
                  L 100 375 
                  C 92 340, 95 295, 110 255 Z
                "
                fill={selectedStore?.id === 'hm' ? '#FEE5E5' : 'url(#hmGrad)'}
                stroke={selectedStore?.id === 'hm' ? '#8B2525' : '#EBD6D6'}
                strokeWidth={selectedStore?.id === 'hm' ? '3' : '1.5'}
                filter={selectedStore?.id === 'hm' ? 'url(#activeGlow)' : 'url(#storeShadow)'}
              />
              {/* H&M Brand Text */}
              <text
                x="152"
                y="318"
                textAnchor="middle"
                fill="#C90013"
                fontFamily="sans-serif"
                fontSize="22"
                fontWeight="900"
                letterSpacing="1"
                fontStyle="italic"
              >
                H&amp;M
              </text>
            </g>

            {/* Mid-Left Store: MANGO */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'mango'))}
              onMouseEnter={() => setHoveredStoreId('mango')}
              onMouseLeave={() => setHoveredStoreId(null)}
              cursor="pointer"
            >
              <path
                d="
                  M 75 390 
                  L 190 385 
                  L 182 435 
                  L 70 435 
                  C 70 415, 72 400, 75 390 Z
                "
                fill={selectedStore?.id === 'mango' ? '#F7E7DD' : 'url(#mangoGrad)'}
                stroke={selectedStore?.id === 'mango' ? '#8B2525' : '#E2D5C8'}
                strokeWidth={selectedStore?.id === 'mango' ? '2.5' : '1.5'}
                filter={selectedStore?.id === 'mango' ? 'url(#activeGlow)' : 'none'}
              />
              <text
                x="130"
                y="415"
                textAnchor="middle"
                fill="#3A332E"
                fontSize="11"
                fontWeight="700"
                letterSpacing="1.8"
              >
                MANGO
              </text>
            </g>

            {/* Bottom-Left: Food Court */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'food_court_g'))}
              onMouseEnter={() => setHoveredStoreId('food_court_g')}
              onMouseLeave={() => setHoveredStoreId(null)}
              cursor="pointer"
            >
              <path
                d="
                  M 92 520 
                  L 195 515 
                  L 185 640 
                  C 145 625, 110 585, 92 520 Z
                "
                fill={selectedStore?.id === 'food_court_g' ? '#FFE8DB' : 'url(#foodcourtGrad)'}
                stroke={selectedStore?.id === 'food_court_g' ? '#8B2525' : '#E4D5C9'}
                strokeWidth={selectedStore?.id === 'food_court_g' ? '2.5' : '1.5'}
                filter={selectedStore?.id === 'food_court_g' ? 'url(#activeGlow)' : 'none'}
              />
              <g transform="translate(142, 555) scale(0.8)">
                <path d="M -8 -10 L -8 0 M -5 -10 L -5 0 M -11 -10 L -11 0 M -8 0 L -8 10" stroke="#5A4E46" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 8 -10 C 4 -10 4 0 8 0 L 8 10" stroke="#5A4E46" strokeWidth="1.8" strokeLinecap="round" />
              </g>
              <text
                x="142"
                y="585"
                textAnchor="middle"
                fill="#423933"
                fontSize="11.5"
                fontWeight="600"
              >
                Food Court
              </text>
            </g>

            {/* Bottom-Right: Lifestyle */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'lifestyle'))}
              onMouseEnter={() => setHoveredStoreId('lifestyle')}
              onMouseLeave={() => setHoveredStoreId(null)}
              cursor="pointer"
            >
              <path
                d="
                  M 325 515 
                  L 428 520 
                  C 410 585, 375 625, 335 640 
                  L 325 515 Z
                "
                fill={selectedStore?.id === 'lifestyle' ? '#FBE6DD' : 'url(#lifestyleGrad)'}
                stroke={selectedStore?.id === 'lifestyle' ? '#8B2525' : '#E6D7CE'}
                strokeWidth={selectedStore?.id === 'lifestyle' ? '2.5' : '1.5'}
                filter={selectedStore?.id === 'lifestyle' ? 'url(#activeGlow)' : 'none'}
              />
              <text
                x="380"
                y="585"
                textAnchor="middle"
                fill="#4D3B33"
                fontSize="12"
                fontWeight="600"
              >
                Lifestyle
              </text>
            </g>
          </g>
        )}

        {/* Level 1 (FF) / Level 2 (SF) / Basement (B) custom layouts */}
        {currentFloor === '1' && (
          <g className="floor-stores-layer">
            {/* Centrepoint (Anchor West) */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'centrepoint'))}
              cursor="pointer"
            >
              <path
                d="M 105 255 L 208 250 L 200 380 L 95 380 Z"
                fill={selectedStore?.id === 'centrepoint' ? '#FEECEB' : '#FAF0EC'}
                stroke={selectedStore?.id === 'centrepoint' ? '#8B2525' : '#E8DCD5'}
                strokeWidth="2"
              />
              <text x="152" y="318" textAnchor="middle" fill="#E42329" fontSize="13" fontWeight="800">
                CENTREPOINT
              </text>
            </g>

            {/* MAX Fashion (Anchor East) */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'max'))}
              cursor="pointer"
            >
              <path
                d="M 312 250 L 415 255 L 425 380 L 320 380 Z"
                fill={selectedStore?.id === 'max' ? '#EBF2FE' : '#F0F4FA'}
                stroke={selectedStore?.id === 'max' ? '#8B2525' : '#D6DFED'}
                strokeWidth="2"
              />
              <text x="365" y="318" textAnchor="middle" fill="#1A73E8" fontSize="16" fontWeight="900" letterSpacing="1">
                MAX
              </text>
            </g>

            {/* Nike Store */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'nike'))}
              cursor="pointer"
            >
              <path
                d="M 75 390 L 190 385 L 182 445 L 70 445 Z"
                fill={selectedStore?.id === 'nike' ? '#F5EBE6' : '#F7F3EE'}
                stroke={selectedStore?.id === 'nike' ? '#8B2525' : '#E2D8CF'}
                strokeWidth="2"
              />
              <text x="130" y="420" textAnchor="middle" fill="#111111" fontSize="12" fontWeight="800" letterSpacing="1">
                NIKE
              </text>
            </g>

            {/* Starbucks */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'starbucks_ff'))}
              cursor="pointer"
            >
              <path
                d="M 325 515 L 428 520 L 335 640 Z"
                fill={selectedStore?.id === 'starbucks_ff' ? '#EBF7EE' : '#F2F8F4'}
                stroke={selectedStore?.id === 'starbucks_ff' ? '#8B2525' : '#D5E6DA'}
                strokeWidth="2"
              />
              <text x="375" y="580" textAnchor="middle" fill="#00704A" fontSize="12" fontWeight="700">
                STARBUCKS
              </text>
            </g>
          </g>
        )}

        {currentFloor === '2' && (
          <g className="floor-stores-layer">
            {/* VOX Cinemas */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'vox_cinemas'))}
              cursor="pointer"
            >
              <path
                d="M 105 255 L 210 250 L 200 400 L 90 400 Z"
                fill={selectedStore?.id === 'vox_cinemas' ? '#FEE4DC' : '#FAF0EC'}
                stroke={selectedStore?.id === 'vox_cinemas' ? '#8B2525' : '#E5D6CC'}
                strokeWidth="2"
              />
              <text x="150" y="320" textAnchor="middle" fill="#8B2525" fontSize="14" fontWeight="800" letterSpacing="1">
                VOX CINEMAS
              </text>
            </g>

            {/* Magic Planet */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'magic_planet'))}
              cursor="pointer"
            >
              <path
                d="M 310 250 L 415 255 L 425 400 L 320 400 Z"
                fill={selectedStore?.id === 'magic_planet' ? '#EBF3FE' : '#F2F7FD'}
                stroke={selectedStore?.id === 'magic_planet' ? '#8B2525' : '#D6E2F2'}
                strokeWidth="2"
              />
              <text x="365" y="320" textAnchor="middle" fill="#2563EB" fontSize="13" fontWeight="800">
                MAGIC PLANET
              </text>
            </g>

            {/* Grand Food Court */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'grand_food_court'))}
              cursor="pointer"
            >
              <path
                d="M 180 500 L 340 500 L 330 630 L 190 630 Z"
                fill={selectedStore?.id === 'grand_food_court' ? '#FFF0E5' : '#FAF3EC'}
                stroke={selectedStore?.id === 'grand_food_court' ? '#8B2525' : '#E6DACF'}
                strokeWidth="2"
              />
              <text x="260" y="565" textAnchor="middle" fill="#EA580C" fontSize="13" fontWeight="700">
                GRAND DINING
              </text>
            </g>
          </g>
        )}

        {currentFloor === 'B' && (
          <g className="floor-stores-layer">
            {/* Carrefour */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'carrefour'))}
              cursor="pointer"
            >
              <path
                d="M 90 260 L 220 255 L 205 450 L 75 430 Z"
                fill={selectedStore?.id === 'carrefour' ? '#E8F2FD' : '#F2F7FC'}
                stroke={selectedStore?.id === 'carrefour' ? '#8B2525' : '#D6E3F2'}
                strokeWidth="2"
              />
              <text x="145" y="340" textAnchor="middle" fill="#004E9A" fontSize="14" fontWeight="800">
                CARREFOUR
              </text>
            </g>

            {/* VIP Valet */}
            <g
              className="store-polygon-group"
              onClick={() => onSelectStore(stores.find(s => s.id === 'valet_services'))}
              cursor="pointer"
            >
              <path
                d="M 300 420 L 420 430 L 370 580 L 290 530 Z"
                fill={selectedStore?.id === 'valet_services' ? '#FDEAE5' : '#F8ECE8'}
                stroke={selectedStore?.id === 'valet_services' ? '#8B2525' : '#EAD4CC'}
                strokeWidth="2"
              />
              <text x="350" y="490" textAnchor="middle" fill="#8B2525" fontSize="12" fontWeight="700">
                VIP VALET
              </text>
            </g>
          </g>
        )}

        {/* 5. Entrance Markers with Red Directional Arrows */}
        {/* Main Entrance (North) */}
        <g className="mall-entrance-badge" transform="translate(260, 160)">
          <text x="0" y="-8" textAnchor="middle" fill="#4B5563" fontSize="9.5" fontWeight="600">
            Main Entrance
          </text>
          <path d="M 0 0 L -5 8 L 5 8 Z" fill="#8B2525" />
        </g>

        {/* South Entrance */}
        <g className="mall-entrance-badge" transform="translate(260, 675)">
          <path d="M 0 0 L -5 -8 L 5 -8 Z" fill="#8B2525" />
          <text x="0" y="14" textAnchor="middle" fill="#4B5563" fontSize="9.5" fontWeight="600">
            South Entrance
          </text>
        </g>

        {/* 6. Realistic Amenity Pods & Service Badges */}
        {/* Restroom Pod NW */}
        <g className="amenity-pod" transform="translate(200, 260)">
          <rect x="-14" y="-18" width="28" height="36" rx="6" fill="#E7E3DC" stroke="#DDD7CE" strokeWidth="1" />
          {/* Restroom Icon (Male & Female Silhouette) */}
          <circle cx="-5" cy="-8" r="2.2" fill="#4A5568" />
          <path d="M -8 -4 L -2 -4 L -3 5 L -7 5 Z" fill="#4A5568" />
          <circle cx="5" cy="-8" r="2.2" fill="#4A5568" />
          <path d="M 2 -4 L 8 -4 L 9 2 L 7 5 L 3 5 L 1 2 Z" fill="#4A5568" />
        </g>

        {/* Restroom Pod NE */}
        <g className="amenity-pod" transform="translate(320, 260)">
          <rect x="-14" y="-18" width="28" height="36" rx="6" fill="#E7E3DC" stroke="#DDD7CE" strokeWidth="1" />
          <circle cx="-5" cy="-8" r="2.2" fill="#4A5568" />
          <path d="M -8 -4 L -2 -4 L -3 5 L -7 5 Z" fill="#4A5568" />
          <circle cx="5" cy="-8" r="2.2" fill="#4A5568" />
          <path d="M 2 -4 L 8 -4 L 9 2 L 7 5 L 3 5 L 1 2 Z" fill="#4A5568" />
        </g>

        {/* Restroom Pod South West (Accessible) */}
        <g className="amenity-pod" transform="translate(150, 485)">
          <rect x="-14" y="-16" width="28" height="32" rx="6" fill="#E7E3DC" stroke="#DDD7CE" strokeWidth="1" />
          <circle cx="-5" cy="-6" r="2" fill="#4A5568" />
          <path d="M -7 -3 L -3 -3 L -4 4 L -6 4 Z" fill="#4A5568" />
          <circle cx="5" cy="-6" r="2" fill="#4A5568" />
          <path d="M 2 -3 L 8 -3 L 9 1 L 7 4 L 3 4 Z" fill="#4A5568" />
        </g>

        {/* Restroom Pod South East (Accessible & Parents) */}
        <g className="amenity-pod" transform="translate(370, 485)">
          <rect x="-14" y="-16" width="28" height="32" rx="6" fill="#E7E3DC" stroke="#DDD7CE" strokeWidth="1" />
          {/* Wheelchair Symbol */}
          <circle cx="2" cy="-6" r="2.2" fill="#4A5568" />
          <path d="M -4 -2 L 1 -2 L 2 4 L -2 4" stroke="#4A5568" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx="-1" cy="2" r="3.5" stroke="#4A5568" strokeWidth="1.4" fill="none" />
        </g>

        {/* Escalator in Atrium */}
        <g className="amenity-pod" transform="translate(345, 435)">
          <rect x="-12" y="-12" width="24" height="24" rx="6" fill="#E8E4DD" stroke="#DDD8CE" strokeWidth="1" />
          <path d="M -7 6 L -2 6 L 3 -4 L 7 -4" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="-5" cy="2" r="1.5" fill="#8B2525" />
          <circle cx="5" cy="-7" r="1.5" fill="#8B2525" />
        </g>

        {/* Scenic Glass Elevator */}
        <g className="amenity-pod" transform="translate(260, 325)">
          <rect x="-13" y="-13" width="26" height="26" rx="13" fill="#FFFFFF" stroke="#D1C7BA" strokeWidth="1.5" />
          <rect x="-8" y="-8" width="16" height="16" rx="4" fill="#E5DFD5" />
          <circle cx="-2" cy="-2" r="1.8" fill="#4A5568" />
          <path d="M -4 1 L 0 1 L 0 5 L -4 5 Z" fill="#4A5568" />
          <path d="M 4 -3 L 4 3 M 2 -1 L 4 -3 L 6 -1" stroke="#8B2525" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>

        {/* East Elevator */}
        <g className="amenity-pod" transform="translate(400, 455)">
          <rect x="-12" y="-12" width="24" height="24" rx="6" fill="#E8E4DD" stroke="#DDD8CE" strokeWidth="1" />
          <circle cx="-2" cy="-3" r="1.8" fill="#4A5568" />
          <path d="M -4 0 L 0 0 L 0 4 L -4 4 Z" fill="#4A5568" />
          <path d="M 4 -4 L 4 4" stroke="#4A5568" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Customer Information Desk (i) */}
        <g className="amenity-pod" transform="translate(195, 435)">
          <circle cx="0" cy="0" r="12" fill="#E5DFD5" stroke="#D5CCC0" strokeWidth="1.2" />
          <circle cx="0" cy="-4" r="1.8" fill="#374151" />
          <rect x="-1.2" y="-1" width="2.4" height="6.5" rx="1.2" fill="#374151" />
        </g>

        {/* 7. Navigation Route (when navigating) */}
        {renderNavPath()}

        {/* 8. User Current Position Pulse Dot */}
        <g transform={`translate(${userLocation.x}, ${userLocation.y})`}>
          <circle cx="0" cy="0" r="18" fill="rgba(139, 37, 37, 0.12)" className="pulse-circle-fast" />
          <circle cx="0" cy="0" r="10" fill="#8B2525" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
          <polygon points="0,-12 4,-5 -4,-5" fill="#8B2525" />
        </g>
      </svg>
    </div>
  );
}
