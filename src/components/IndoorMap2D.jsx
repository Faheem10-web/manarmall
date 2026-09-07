import React, { useRef, useState, useEffect } from 'react';

export default function IndoorMap2D({
  currentFloor = 'G',
  floorData,
  selectedStore,
  onSelectStore,
  activeCategory = 'all',
  isNavigating = false,
  zoomLevel = 1,
  userLocation = { x: 260, y: 650, name: 'South Entrance' },
  onResetView
}) {
  const containerRef = useRef(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredStoreId, setHoveredStoreId] = useState(null);

  useEffect(() => {
    if (selectedStore && selectedStore.doorPos) {
      const targetX = (260 - selectedStore.doorPos.x) * 0.25;
      const targetY = (380 - selectedStore.doorPos.y) * 0.25;
      setPan({ x: targetX, y: targetY });
    } else {
      setPan({ x: 0, y: 0 });
    }
  }, [selectedStore, currentFloor]);

  // Pan handlers
  const handleMouseDown = (e) => {
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

  const handleMouseUp = () => setIsDragging(false);

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

  const handleTouchEnd = () => setIsDragging(false);

  // Render navigation route line
  const renderNavPath = () => {
    if (!isNavigating || !selectedStore || !selectedStore.pathCoords) return null;
    const coords = selectedStore.pathCoords;
    if (!coords || coords.length < 2) return null;

    let pathD = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 1; i < coords.length; i++) {
      pathD += ` L ${coords[i].x} ${coords[i].y}`;
    }

    return (
      <g className="navigation-route-group">
        {/* Soft Route Glow */}
        <path
          d={pathD}
          fill="none"
          stroke="rgba(139, 29, 36, 0.2)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* White Border */}
        <path
          d={pathD}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Deep Burgundy Route */}
        <path
          d={pathD}
          fill="none"
          stroke="#8B1D24"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Animated Dashed Pulse */}
        <path
          d={pathD}
          className="animated-route-dash"
          fill="none"
          stroke="#FBECE8"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Start Point Marker (South Entrance) */}
        <g transform={`translate(${coords[0].x}, ${coords[0].y})`}>
          <circle r="14" fill="rgba(139, 29, 36, 0.18)" className="pulse-circle" />
          <circle r="8" fill="#8B1D24" stroke="#FFFFFF" strokeWidth="2" />
          <circle r="3" fill="#FFFFFF" />
        </g>
      </g>
    );
  };

  const stores = floorData?.stores || [];

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
        viewBox="0 0 520 740"
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <defs>
          <filter id="mallSoftShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#664D3E" floodOpacity="0.06" />
          </filter>
          <filter id="zaraHighlightGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E57373" floodOpacity="0.35" />
          </filter>
          <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5A1518" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="520" height="740" fill="#FAF7F2" />

        {/* Surrounding Landscape / Tree accents */}
        <g opacity="0.65">
          <circle cx="65" cy="115" r="13" fill="#DCE7D3" />
          <circle cx="85" cy="95" r="10" fill="#CFDDC3" />
          <circle cx="45" cy="135" r="12" fill="#D6E2CB" />

          <circle cx="450" cy="115" r="13" fill="#DCE7D3" />
          <circle cx="435" cy="95" r="10" fill="#CFDDC3" />
          <circle cx="475" cy="135" r="12" fill="#D6E2CB" />

          <circle cx="45" cy="400" r="14" fill="#DCE7D3" />
          <circle cx="475" cy="400" r="14" fill="#DCE7D3" />

          <circle cx="450" cy="620" r="12" fill="#DCE7D3" />
          <circle cx="70" cy="620" r="12" fill="#DCE7D3" />
        </g>

        {/* Main Circular Mall Outer Footprint */}
        <g filter="url(#mallSoftShadow)">
          <circle cx="260" cy="370" r="230" fill="#FFFFFF" stroke="#EDE6DE" strokeWidth="2.5" />
          <circle cx="260" cy="370" r="208" fill="#F8F4EE" stroke="#EAE2D8" strokeWidth="1" />
        </g>

        {/* ------------------------------------------------------------------
            CENTRAL OVAL ATRIUM WITH BOTANICAL LEAF ACCENT
            ------------------------------------------------------------------ */}
        <g className="atrium-group">
          {/* Outer Atrium Ring */}
          <ellipse cx="260" cy="365" rx="55" ry="96" fill="#F1ECE4" stroke="#E2D8CC" strokeWidth="1.8" />
          {/* Inner Atrium Balcony */}
          <ellipse cx="260" cy="365" rx="42" ry="80" fill="#ECE5DB" stroke="#DFD4C6" strokeWidth="1.2" />

          {/* Botanical Leaf Motif at center */}
          <g transform="translate(260, 365) scale(0.95)" opacity="0.6">
            <path
              d="M0,-24 C5,-14 12,-6 12,6 C12,14 6,20 0,22 C-6,20 -12,14 -12,6 C-12,-6 -5,-14 0,-24 Z"
              fill="#C7A384"
            />
            <path d="M0,-18 C-7,-10 -12,0 -6,12 C-2,8 -2,2 0,-18 Z" fill="#B78F6D" />
            <path d="M0,-18 C7,-10 12,0 6,12 C2,8 2,2 0,-18 Z" fill="#B78F6D" />
            <circle cx="0" cy="4" r="2.5" fill="#8B1D24" />
          </g>

          {/* Landscaping green dots around atrium */}
          <circle cx="260" cy="285" r="5" fill="#B2CCA2" />
          <circle cx="260" cy="445" r="5" fill="#B2CCA2" />
          <circle cx="215" cy="365" r="4.5" fill="#B2CCA2" />
          <circle cx="305" cy="365" r="4.5" fill="#B2CCA2" />
        </g>

        {/* ------------------------------------------------------------------
            NORTH & SOUTH ENTRANCES
            ------------------------------------------------------------------ */}
        {/* North Entrance */}
        <g transform="translate(260, 60)">
          <text x="0" y="-8" textAnchor="middle" fill="#4B5563" fontSize="10.5" fontWeight="600">
            North Entrance
          </text>
          <path d="M 0 0 L -5 8 L 5 8 Z" fill="#8B1D24" />
        </g>

        {/* South Entrance */}
        <g transform="translate(260, 680)">
          <path d="M 0 0 L -5 -8 L 5 -8 Z" fill="#8B1D24" />
          <text x="0" y="15" textAnchor="middle" fill="#4B5563" fontSize="10.5" fontWeight="600">
            South Entrance
          </text>
        </g>

        {/* ------------------------------------------------------------------
            AMENITY PODS (Restrooms, Information, Escalators)
            ------------------------------------------------------------------ */}
        {/* Top-Center Information Kiosk */}
        <g transform="translate(260, 140)">
          <rect x="-35" y="-30" width="70" height="42" rx="8" fill="#F1EDE6" stroke="#E2DAD0" strokeWidth="1" />
          <circle cx="0" cy="-14" r="9" fill="#FFFFFF" stroke="#374151" strokeWidth="1.5" />
          <text x="0" y="-10.5" textAnchor="middle" fill="#374151" fontSize="10.5" fontWeight="800">i</text>
          <text x="0" y="4" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Information</text>
        </g>

        {/* Restroom Pod NW */}
        <g transform="translate(195, 175)">
          <rect x="-12" y="-16" width="24" height="32" rx="6" fill="#E2DDD5" />
          <circle cx="-4" cy="-7" r="1.8" fill="#4B5563" />
          <path d="M-6 -4 L-2 -4 L-3 3 L-5 3 Z" fill="#4B5563" />
          <circle cx="4" cy="-7" r="1.8" fill="#4B5563" />
          <path d="M2 -4 L6 -4 L7 1 L5 3 L3 3 Z" fill="#4B5563" />
        </g>

        {/* Restroom Pod NE */}
        <g transform="translate(325, 175)">
          <rect x="-12" y="-16" width="24" height="32" rx="6" fill="#E2DDD5" />
          <circle cx="-4" cy="-7" r="1.8" fill="#4B5563" />
          <path d="M-6 -4 L-2 -4 L-3 3 L-5 3 Z" fill="#4B5563" />
          <circle cx="4" cy="-7" r="1.8" fill="#4B5563" />
          <path d="M2 -4 L6 -4 L7 1 L5 3 L3 3 Z" fill="#4B5563" />
        </g>

        {/* Restroom Pod Mid-West */}
        <g transform="translate(190, 250)">
          <rect x="-11" y="-15" width="22" height="30" rx="6" fill="#E2DDD5" />
          <circle cx="-3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M-5.5 -3 L-1.5 -3 L-2.5 3 L-4.5 3 Z" fill="#4B5563" />
          <circle cx="3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M1.5 -3 L5.5 -3 L6.5 1 L4.5 3 L2.5 3 Z" fill="#4B5563" />
        </g>

        {/* Restroom Pod Mid-East */}
        <g transform="translate(330, 250)">
          <rect x="-11" y="-15" width="22" height="30" rx="6" fill="#E2DDD5" />
          <circle cx="-3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M-5.5 -3 L-1.5 -3 L-2.5 3 L-4.5 3 Z" fill="#4B5563" />
          <circle cx="3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M1.5 -3 L5.5 -3 L6.5 1 L4.5 3 L2.5 3 Z" fill="#4B5563" />
        </g>

        {/* Restroom Pod SW */}
        <g transform="translate(180, 480)">
          <rect x="-11" y="-15" width="22" height="30" rx="6" fill="#E2DDD5" />
          <circle cx="-3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M-5.5 -3 L-1.5 -3 L-2.5 3 L-4.5 3 Z" fill="#4B5563" />
          <circle cx="3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M1.5 -3 L5.5 -3 L6.5 1 L4.5 3 L2.5 3 Z" fill="#4B5563" />
        </g>

        {/* Restroom Pod SE */}
        <g transform="translate(340, 480)">
          <rect x="-11" y="-15" width="22" height="30" rx="6" fill="#E2DDD5" />
          <circle cx="-3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M-5.5 -3 L-1.5 -3 L-2.5 3 L-4.5 3 Z" fill="#4B5563" />
          <circle cx="3.5" cy="-6" r="1.8" fill="#4B5563" />
          <path d="M1.5 -3 L5.5 -3 L6.5 1 L4.5 3 L2.5 3 Z" fill="#4B5563" />
        </g>

        {/* Escalators */}
        <g transform="translate(185, 350)">
          <rect x="-10" y="-10" width="20" height="20" rx="5" fill="#E8E3DB" stroke="#DAD1C5" strokeWidth="1" />
          <path d="M -6 5 L -2 5 L 2 -3 L 6 -3" stroke="#4B5563" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>
        <g transform="translate(335, 350)">
          <rect x="-10" y="-10" width="20" height="20" rx="5" fill="#E8E3DB" stroke="#DAD1C5" strokeWidth="1" />
          <path d="M -6 5 L -2 5 L 2 -3 L 6 -3" stroke="#4B5563" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>

        {/* ------------------------------------------------------------------
            GROUND FLOOR STORE BLOCKS (Exact Reference Layout)
            ------------------------------------------------------------------ */}
        {/* 1. TOP-LEFT: CENTREPOINT */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'centrepoint') || stores[0])}
          cursor="pointer"
        >
          <path
            d="M 60 175 L 140 120 L 175 120 L 175 220 L 80 220 Z"
            fill={selectedStore?.id === 'centrepoint' ? '#FDE5E5' : '#FCEBEA'}
            stroke={selectedStore?.id === 'centrepoint' ? '#8B1D24' : '#F4D4D2'}
            strokeWidth={selectedStore?.id === 'centrepoint' ? '2.5' : '1.5'}
          />
          <text x="125" y="165" textAnchor="middle" fill="#7A1D20" fontSize="10.5" fontWeight="800" letterSpacing="0.6">
            CENTREPOINT
          </text>
        </g>

        {/* 2. TOP-RIGHT: MAX */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'max'))}
          cursor="pointer"
        >
          <path
            d="M 345 120 L 380 120 L 460 175 L 440 220 L 345 220 Z"
            fill={selectedStore?.id === 'max' ? '#E1EDFE' : '#E8F0FE'}
            stroke={selectedStore?.id === 'max' ? '#1A73E8' : '#D2E3FC'}
            strokeWidth={selectedStore?.id === 'max' ? '2.5' : '1.5'}
          />
          <text x="395" y="165" textAnchor="middle" fill="#154B87" fontSize="14" fontWeight="800" letterSpacing="0.8">
            MAX
          </text>
        </g>

        {/* 3. MID-LEFT 1: H&M */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'hm'))}
          cursor="pointer"
        >
          <rect
            x="70"
            y="230"
            width="85"
            height="46"
            rx="6"
            fill={selectedStore?.id === 'hm' ? '#FEE4E4' : '#FBECEB'}
            stroke={selectedStore?.id === 'hm' ? '#E50010' : '#F4D2D2'}
            strokeWidth={selectedStore?.id === 'hm' ? '2.5' : '1.5'}
          />
          <text
            x="112"
            y="262"
            textAnchor="middle"
            fill="#E50010"
            fontFamily="sans-serif"
            fontSize="18"
            fontWeight="900"
            fontStyle="italic"
          >
            H&amp;M
          </text>
        </g>

        {/* 4. MID-LEFT 2: ZARA (Target Highlight Store) */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'zara'))}
          cursor="pointer"
        >
          <rect
            x="68"
            y="300"
            width="90"
            height="55"
            rx="6"
            fill={selectedStore?.id === 'zara' ? '#FEE5DE' : '#FDF0EC'}
            stroke={selectedStore?.id === 'zara' ? '#FF6B6B' : '#F7D6CC'}
            strokeWidth={selectedStore?.id === 'zara' ? '2.5' : '1.5'}
            filter={selectedStore?.id === 'zara' ? 'url(#zaraHighlightGlow)' : 'none'}
          />
          <text
            x="112"
            y="336"
            textAnchor="middle"
            fill="#5A2420"
            fontFamily="'Playfair Display', serif"
            fontSize="14.5"
            fontWeight="700"
            letterSpacing="1.8"
          >
            ZARA
          </text>

          {/* Active Red Location Pin on top-right of ZARA */}
          <g transform="translate(142, 305)" filter="url(#pinShadow)">
            <path
              d="M 0,-14 C -6,-14 -10,-9 -10,-3 C -10,4 0,13 0,13 C 0,13 10,4 10,-3 C 10,-9 6,-14 0,-14 Z"
              fill="#8B1D24"
              stroke="#FFFFFF"
              strokeWidth="1.8"
            />
            <circle cx="0" cy="-4" r="3.2" fill="#FFFFFF" />
          </g>
        </g>

        {/* 5. MID-LEFT 3: MANGO */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'mango'))}
          cursor="pointer"
        >
          <rect
            x="70"
            y="405"
            width="88"
            height="46"
            rx="6"
            fill={selectedStore?.id === 'mango' ? '#F7EBE2' : '#F5ECE5'}
            stroke={selectedStore?.id === 'mango' ? '#8B1D24' : '#E8DDD4'}
            strokeWidth={selectedStore?.id === 'mango' ? '2.5' : '1.5'}
          />
          <text
            x="114"
            y="434"
            textAnchor="middle"
            fill="#2D2522"
            fontSize="11.5"
            fontWeight="700"
            letterSpacing="1.6"
          >
            MANGO
          </text>
        </g>

        {/* 6. MID-RIGHT 1: NIKE */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'nike'))}
          cursor="pointer"
        >
          <rect
            x="365"
            y="230"
            width="85"
            height="46"
            rx="6"
            fill={selectedStore?.id === 'nike' ? '#FDF6ED' : '#FAF4EB'}
            stroke={selectedStore?.id === 'nike' ? '#8B1D24' : '#EFE4D4'}
            strokeWidth={selectedStore?.id === 'nike' ? '2.5' : '1.5'}
          />
          {/* Nike Swoosh */}
          <path
            d="M 400 248 C 408 244 416 242 423 241 C 418 244 410 249 405 254 C 402 257 398 257 396 255 C 395 253 397 250 400 248 Z"
            fill="#111111"
          />
          <text x="407" y="267" textAnchor="middle" fill="#111111" fontSize="9" fontWeight="800" letterSpacing="0.8">
            NIKE
          </text>
        </g>

        {/* 7. MID-RIGHT 2: ADIDAS */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'adidas'))}
          cursor="pointer"
        >
          <rect
            x="365"
            y="300"
            width="85"
            height="55"
            rx="6"
            fill={selectedStore?.id === 'adidas' ? '#FDF6ED' : '#FAF4EB'}
            stroke={selectedStore?.id === 'adidas' ? '#8B1D24' : '#EFE4D4'}
            strokeWidth={selectedStore?.id === 'adidas' ? '2.5' : '1.5'}
          />
          {/* Adidas 3 bars */}
          <g transform="translate(407, 320) scale(0.65)">
            <path d="M-12 10 L-6 0 L-2 0 L-8 10 Z" fill="#111111" />
            <path d="M-3 10 L4 -6 L8 -6 L1 10 Z" fill="#111111" />
            <path d="M7 10 L15 -12 L19 -12 L11 10 Z" fill="#111111" />
          </g>
          <text x="407" y="342" textAnchor="middle" fill="#111111" fontSize="9" fontWeight="800" letterSpacing="0.8">
            ADIDAS
          </text>
        </g>

        {/* 8. MID-RIGHT 3: STARBUCKS */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'starbucks'))}
          cursor="pointer"
        >
          <rect
            x="360"
            y="400"
            width="90"
            height="50"
            rx="6"
            fill={selectedStore?.id === 'starbucks' ? '#EBF8EF' : '#EDF7F0'}
            stroke={selectedStore?.id === 'starbucks' ? '#00704A' : '#D6EDE0'}
            strokeWidth={selectedStore?.id === 'starbucks' ? '2.5' : '1.5'}
          />
          {/* Starbucks Round Logo Icon */}
          <circle cx="405" cy="418" r="9" fill="#00704A" />
          <path d="M405 412 L406.5 415 L410 415.5 L407.5 418 L408 421.5 L405 420 L402 421.5 L402.5 418 L400 415.5 L403.5 415 Z" fill="#FFFFFF" />
          <text x="405" y="440" textAnchor="middle" fill="#00704A" fontSize="8.5" fontWeight="800" letterSpacing="0.5">
            STARBUCKS
          </text>
        </g>

        {/* 9. BOTTOM-LEFT: Lifestyle */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'lifestyle'))}
          cursor="pointer"
        >
          <path
            d="M 90 580 L 195 500 L 195 580 L 140 640 Z"
            fill={selectedStore?.id === 'lifestyle' ? '#FEECE6' : '#FCEEE8'}
            stroke={selectedStore?.id === 'lifestyle' ? '#8B1D24' : '#F4D8CF'}
            strokeWidth={selectedStore?.id === 'lifestyle' ? '2.5' : '1.5'}
          />
          <text x="150" y="565" textAnchor="middle" fill="#5A2E26" fontSize="11" fontWeight="700">
            Lifestyle
          </text>
        </g>

        {/* 10. BOTTOM-CENTER: Food Court */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'food_court'))}
          cursor="pointer"
        >
          <path
            d="M 205 490 L 315 490 L 315 575 L 205 575 Z"
            fill={selectedStore?.id === 'food_court' ? '#FDF0E6' : '#F8EFE7'}
            stroke={selectedStore?.id === 'food_court' ? '#D97706' : '#EFE2D5'}
            strokeWidth={selectedStore?.id === 'food_court' ? '2.5' : '1.5'}
          />
          {/* Cutlery icon */}
          <g transform="translate(260, 520) scale(0.9)">
            <path d="M-6 -8 L-6 0 M-3 -8 L-3 0 M-9 -8 L-9 0 M-6 0 L-6 8" stroke="#4A3F35" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 -8 C3 -8 3 0 6 0 L6 8" stroke="#4A3F35" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          <text x="260" y="552" textAnchor="middle" fill="#4A3F35" fontSize="11" fontWeight="700">
            Food Court
          </text>
        </g>

        {/* 11. BOTTOM-RIGHT: Cinema */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'cinema'))}
          cursor="pointer"
        >
          <path
            d="M 325 500 L 430 580 L 380 640 L 325 580 Z"
            fill={selectedStore?.id === 'cinema' ? '#FEECE6' : '#FCEEE8'}
            stroke={selectedStore?.id === 'cinema' ? '#8B1D24' : '#F4D8CF'}
            strokeWidth={selectedStore?.id === 'cinema' ? '2.5' : '1.5'}
          />
          {/* Cinema Clapperboard icon */}
          <g transform="translate(370, 535) scale(0.85)">
            <rect x="-10" y="-7" width="20" height="14" rx="2" fill="#2E2620" />
            <path d="M-10 -7 L-7 -12 L11 -12 L8 -7 Z" fill="#2E2620" stroke="#FFFFFF" strokeWidth="0.8" />
            <path d="M-7 -12 L-5 -7 M-2 -12 L0 -7 M3 -12 L5 -7" stroke="#FFFFFF" strokeWidth="1.2" />
          </g>
          <text x="370" y="565" textAnchor="middle" fill="#5A2E26" fontSize="10.5" fontWeight="700">
            Cinema
          </text>
        </g>

        {/* Navigation Route */}
        {renderNavPath()}

        {/* User Current Position Dot */}
        <g transform={`translate(${userLocation.x}, ${userLocation.y})`}>
          <circle cx="0" cy="0" r="16" fill="rgba(139, 29, 36, 0.12)" className="pulse-circle-fast" />
          <circle cx="0" cy="0" r="8.5" fill="#8B1D24" stroke="#FFFFFF" strokeWidth="2.2" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
