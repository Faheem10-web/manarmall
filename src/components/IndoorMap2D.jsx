import React, { useRef, useState, useEffect } from 'react';

export default function IndoorMap2D({
  currentFloor = 'GF',
  floorData,
  selectedStore,
  onSelectStore,
  activeCategory = 'all',
  isNavigating = false,
  zoomLevel = 1,
  userLocation = { x: 260, y: 670, name: 'South Grand Entrance' },
  onResetView
}) {
  const containerRef = useRef(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedStore && selectedStore.doorPos) {
      const targetX = (260 - selectedStore.doorPos.x) * 0.25;
      const targetY = (390 - selectedStore.doorPos.y) * 0.25;
      setPan({ x: targetX, y: targetY });
    } else {
      setPan({ x: 0, y: 0 });
    }
  }, [selectedStore, currentFloor]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
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

  // Render navigation route
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
        <path
          d={pathD}
          fill="none"
          stroke="rgba(139, 29, 36, 0.2)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathD}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathD}
          fill="none"
          stroke="#8B1D24"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

        {/* Start Point Marker */}
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
        viewBox="0 0 520 760"
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <defs>
          <filter id="waterGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#4EA8DE" floodOpacity="0.15" />
          </filter>
          <filter id="zaraCenterShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#8B1D24" floodOpacity="0.18" />
          </filter>
          <linearGradient id="lagoonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78C6E2" />
            <stop offset="50%" stopColor="#8FD4EB" />
            <stop offset="100%" stopColor="#A8E2F4" />
          </linearGradient>
          <linearGradient id="promenadeFloor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FAF7F2" />
          </linearGradient>
        </defs>

        {/* 1. Canvas Light Background */}
        <rect x="0" y="0" width="520" height="760" fill="#FAF7F2" />

        {/* 2. Outer Building Perimeter Contour (Grand Curved Promenade) */}
        <g filter="url(#waterGlow)">
          <path
            d="
              M 70 200 
              C 80 140, 140 100, 260 100 
              C 380 100, 440 140, 450 200 
              C 460 270, 480 430, 430 590 
              C 390 670, 310 710, 260 710 
              C 210 710, 130 670, 90 590 
              C 40 430, 60 270, 70 200 Z
            "
            fill="#FFFFFF"
            stroke="#ECE5DC"
            strokeWidth="3"
          />

          {/* Inner Walkway Promenade Ring */}
          <path
            d="
              M 90 220 
              C 100 165, 160 125, 260 125 
              C 360 125, 420 165, 430 220 
              C 440 280, 455 420, 410 560 
              C 370 635, 300 670, 260 670 
              C 220 670, 150 635, 110 560 
              C 65 420, 80 280, 90 220 Z
            "
            fill="#F6F1EA"
            stroke="#E8DFD3"
            strokeWidth="1.5"
          />
        </g>

        {/* 3. GRAND WATERFRONT LAGOON & MARINA BASIN (Signature Manar Feature) */}
        <g className="waterfront-lagoon" transform="translate(0, 40)">
          {/* Water Basin */}
          <path
            d="
              M 115 175 
              C 145 155, 205 145, 260 145 
              C 315 145, 375 155, 405 175 
              C 390 215, 335 235, 260 235 
              C 185 235, 130 215, 115 175 Z
            "
            fill="url(#lagoonGrad)"
            stroke="#68B8D6"
            strokeWidth="2"
          />

          {/* Water Ripples */}
          <path d="M 180 175 C 220 168, 280 168, 340 175" stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.75" />
          <path d="M 210 195 C 240 190, 280 190, 310 195" stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.65" />

          {/* Lagoon Boardwalk Terraces */}
          <ellipse cx="260" cy="245" rx="90" ry="12" fill="none" stroke="#D3C3B1" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* Waterfront Palm Trees */}
          <g className="palm-trees" fill="#78A765" opacity="0.85">
            <circle cx="160" cy="155" r="4.5" />
            <circle cx="185" cy="150" r="5" />
            <circle cx="210" cy="148" r="4.5" />
            <circle cx="310" cy="148" r="4.5" />
            <circle cx="335" cy="150" r="5" />
            <circle cx="360" cy="155" r="4.5" />

            <circle cx="140" cy="235" r="4.5" />
            <circle cx="380" cy="235" r="4.5" />
          </g>
        </g>

        {/* 4. NORTH LUXURY ARCADE (Cartier, Prada, Louis Vuitton, Gucci) */}
        <g className="north-luxury-row">
          {/* Center VIP Pavilion (Louis Vuitton) */}
          <g
            className="store-polygon-group"
            onClick={() => onSelectStore(stores.find(s => s.id === 'louis_vuitton') || stores[0])}
            cursor="pointer"
          >
            <rect
              x="215"
              y="120"
              width="90"
              height="36"
              rx="6"
              fill={selectedStore?.id === 'louis_vuitton' ? '#FEECE6' : '#FAF3EB'}
              stroke={selectedStore?.id === 'louis_vuitton' ? '#8B1D24' : '#E8DDD0'}
              strokeWidth={selectedStore?.id === 'louis_vuitton' ? '2.5' : '1.2'}
            />
            <text x="260" y="142" textAnchor="middle" fill="#5A3A1E" fontSize="9" fontWeight="800" letterSpacing="0.8">
              LOUIS VUITTON
            </text>
          </g>

          {/* Cartier (Left of VIP) */}
          <g transform="translate(145, 122)">
            <rect x="0" y="0" width="60" height="32" rx="5" fill="#FAF4EE" stroke="#E6DDD2" strokeWidth="1" />
            <text x="30" y="20" textAnchor="middle" fill="#8B1D24" fontSize="8.5" fontWeight="700" fontFamily="serif">
              Cartier
            </text>
          </g>

          {/* Prada (Right of VIP) */}
          <g transform="translate(315, 122)">
            <rect x="0" y="0" width="60" height="32" rx="5" fill="#FAF4EE" stroke="#E6DDD2" strokeWidth="1" />
            <text x="30" y="20" textAnchor="middle" fill="#1A1A1A" fontSize="8.5" fontWeight="800" letterSpacing="0.5">
              PRADA
            </text>
          </g>

          {/* Gucci & Fendi Wings */}
          <g transform="translate(85, 138)">
            <rect x="0" y="0" width="50" height="28" rx="4" fill="#FBF7F2" stroke="#E8E1D6" strokeWidth="1" />
            <text x="25" y="18" textAnchor="middle" fill="#2E2822" fontSize="7.5" fontWeight="700">
              GUCCI
            </text>
          </g>
          <g transform="translate(385, 138)">
            <rect x="0" y="0" width="50" height="28" rx="4" fill="#FBF7F2" stroke="#E8E1D6" strokeWidth="1" />
            <text x="25" y="18" textAnchor="middle" fill="#2E2822" fontSize="7.5" fontWeight="700">
              FENDI
            </text>
          </g>
        </g>

        {/* 5. CENTERPIECE: ZARA FLAGSHIP ROTUNDA */}
        <g
          className="store-polygon-group"
          onClick={() => onSelectStore(stores.find(s => s.id === 'zara') || stores[0])}
          cursor="pointer"
          filter="url(#zaraCenterShadow)"
        >
          {/* Octagonal Rotunda Base */}
          <polygon
            points="
              225,355 
              295,355 
              325,385 
              325,420 
              295,450 
              225,450 
              195,420 
              195,385
            "
            fill={selectedStore?.id === 'zara' ? '#FEE4DC' : '#2D221E'}
            stroke={selectedStore?.id === 'zara' ? '#8B1D24' : '#1A1412'}
            strokeWidth="2.5"
          />

          {/* Inner Light Ring */}
          <polygon
            points="
              230,362 
              290,362 
              317,388 
              317,417 
              290,443 
              230,443 
              203,417 
              203,388
            "
            fill="none"
            stroke={selectedStore?.id === 'zara' ? '#FF8A80' : '#4D3B34'}
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />

          {/* ZARA Brand Text */}
          <text
            x="260"
            y="410"
            textAnchor="middle"
            fill={selectedStore?.id === 'zara' ? '#7E1518' : '#FFFFFF'}
            fontFamily="'Playfair Display', serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="3"
          >
            ZARA
          </text>

          {/* Active Burgundy Pin on top of Rotunda */}
          <g transform="translate(260, 345)">
            <path
              d="M 0,-16 C -7,-16 -12,-10 -12,-3 C -12,5 0,15 0,15 C 0,15 12,5 12,-3 C 12,-10 7,-16 0,-16 Z"
              fill="#8B1D24"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <circle cx="0" cy="-4" r="3.5" fill="#FFFFFF" />
          </g>
        </g>

        {/* 6. WEST PROMENADE WING (H&M, Bershka, Pull&Bear, Levi's, Lululemon) */}
        <g className="west-fashion-wing">
          {/* H&M Flagship */}
          <g
            className="store-polygon-group"
            onClick={() => onSelectStore(stores.find(s => s.id === 'hm'))}
            cursor="pointer"
          >
            <path
              d="M 170 540 L 225 540 L 225 620 L 160 620 Z"
              fill={selectedStore?.id === 'hm' ? '#FEE5E5' : '#FBF0F0'}
              stroke={selectedStore?.id === 'hm' ? '#E50010' : '#F4D6D6'}
              strokeWidth="2"
            />
            <text x="195" y="585" textAnchor="middle" fill="#E50010" fontSize="16" fontWeight="900" fontStyle="italic">
              H&amp;M
            </text>
            <text x="195" y="605" textAnchor="middle" fill="#7A6862" fontSize="7.5" fontWeight="600">
              H&amp;M Home
            </text>
          </g>

          {/* Bershka & Pull&Bear Corridor Lots */}
          <g transform="translate(195, 435)">
            <rect x="0" y="0" width="28" height="42" rx="4" fill="#FFFFFF" stroke="#E6DDD4" strokeWidth="1" />
            <text x="14" y="24" textAnchor="middle" fill="#2E2822" fontSize="6.5" fontWeight="700" transform="rotate(-90, 14, 24)">
              Bershka
            </text>
          </g>
          <g transform="translate(160, 435)">
            <rect x="0" y="0" width="30" height="42" rx="4" fill="#FFFFFF" stroke="#E6DDD4" strokeWidth="1" />
            <text x="15" y="24" textAnchor="middle" fill="#2E2822" fontSize="6" fontWeight="700" transform="rotate(-90, 15, 24)">
              Oysho
            </text>
          </g>

          {/* Levi's & Lululemon */}
          <g transform="translate(100, 450)">
            <rect x="0" y="0" width="55" height="30" rx="4" fill="#FFFFFF" stroke="#E6DDD4" strokeWidth="1" />
            <text x="27" y="19" textAnchor="middle" fill="#C41230" fontSize="8" fontWeight="800">
              LEVI'S
            </text>
          </g>
          <g transform="translate(100, 485)">
            <rect x="0" y="0" width="55" height="30" rx="4" fill="#FFFFFF" stroke="#E6DDD4" strokeWidth="1" />
            <text x="27" y="19" textAnchor="middle" fill="#2E2822" fontSize="7.5" fontWeight="700">
              lululemon
            </text>
          </g>
        </g>

        {/* 7. EAST PROMENADE WING (Marks & Spencer, Massimo Dutti, Mango, Starbucks) */}
        <g className="east-fashion-wing">
          {/* Marks & Spencer Flagship */}
          <g
            className="store-polygon-group"
            onClick={() => onSelectStore(stores.find(s => s.id === 'marks_spencer'))}
            cursor="pointer"
          >
            <path
              d="M 295 540 L 350 540 L 360 620 L 295 620 Z"
              fill={selectedStore?.id === 'marks_spencer' ? '#EDF5EE' : '#F5EFE8'}
              stroke={selectedStore?.id === 'marks_spencer' ? '#1A4D2E' : '#E5DAD0'}
              strokeWidth="2"
            />
            <text x="325" y="582" textAnchor="middle" fill="#1A4D2E" fontSize="11" fontWeight="800">
              M&amp;S
            </text>
            <text x="325" y="600" textAnchor="middle" fill="#5A4E45" fontSize="7.5" fontWeight="600">
              Marks &amp; Spencer
            </text>
          </g>

          {/* Pull&Bear on East Corridor */}
          <g transform="translate(295, 435)">
            <rect x="0" y="0" width="30" height="42" rx="4" fill="#FFFFFF" stroke="#E6DDD4" strokeWidth="1" />
            <text x="15" y="24" textAnchor="middle" fill="#2E2822" fontSize="6.5" fontWeight="700" transform="rotate(90, 15, 24)">
              Pull&amp;Bear
            </text>
          </g>
          <g transform="translate(330, 435)">
            <rect x="0" y="0" width="30" height="42" rx="4" fill="#FFFFFF" stroke="#E6DDD4" strokeWidth="1" />
            <text x="15" y="24" textAnchor="middle" fill="#2E2822" fontSize="6.5" fontWeight="700" transform="rotate(90, 15, 24)">
              Boggi
            </text>
          </g>

          {/* Massimo Dutti */}
          <g
            className="store-polygon-group"
            onClick={() => onSelectStore(stores.find(s => s.id === 'massimo_dutti'))}
            cursor="pointer"
          >
            <rect
              x="365"
              y="460"
              width="68"
              height="35"
              rx="5"
              fill={selectedStore?.id === 'massimo_dutti' ? '#FAF2EA' : '#FFFFFF'}
              stroke={selectedStore?.id === 'massimo_dutti' ? '#8B1D24' : '#E8DDD2'}
              strokeWidth="1.5"
            />
            <text x="399" y="482" textAnchor="middle" fill="#3D342C" fontSize="7.5" fontWeight="700" letterSpacing="0.4">
              Massimo Dutti
            </text>
          </g>

          {/* MANGO */}
          <g
            className="store-polygon-group"
            onClick={() => onSelectStore(stores.find(s => s.id === 'mango'))}
            cursor="pointer"
          >
            <rect
              x="365"
              y="500"
              width="68"
              height="35"
              rx="5"
              fill={selectedStore?.id === 'mango' ? '#FAF2EA' : '#FFFFFF'}
              stroke={selectedStore?.id === 'mango' ? '#8B1D24' : '#E8DDD2'}
              strokeWidth="1.5"
            />
            <text x="399" y="522" textAnchor="middle" fill="#2D2522" fontSize="9" fontWeight="800" letterSpacing="0.8">
              MANGO
            </text>
          </g>

          {/* Starbucks Waterfront Reserve */}
          <g
            className="store-polygon-group"
            onClick={() => onSelectStore(stores.find(s => s.id === 'starbucks_waterfront'))}
            cursor="pointer"
          >
            <circle cx="415" cy="275" r="18" fill="#E8F6EE" stroke="#00704A" strokeWidth="1.5" />
            <circle cx="415" cy="275" r="14" fill="#00704A" />
            <path d="M415 270 L416.5 273 L420 273.5 L417.5 276 L418 279.5 L415 278 L412 279.5 L412.5 276 L410 273.5 L413.5 273 Z" fill="#FFFFFF" />
            <text x="415" y="302" textAnchor="middle" fill="#00704A" fontSize="7" fontWeight="800">
              STARBUCKS
            </text>
          </g>
        </g>

        {/* 8. SOUTH GRAND WATERFRONT PORTICO ENTRANCE */}
        <g className="south-entrance-portico" transform="translate(260, 640)">
          {/* Curved Entrance Glass Pavilion */}
          <path
            d="M -50 -15 C -25 -25, 25 -25, 50 -15 L 40 20 L -40 20 Z"
            fill="#FFFFFF"
            stroke="#D8CCC0"
            strokeWidth="2"
          />
          {/* Glass Dome Motif */}
          <circle cx="0" cy="0" r="14" fill="#E8F4F8" stroke="#8FD4EB" strokeWidth="1" />
          <path d="M -14 0 L 14 0 M 0 -14 L 0 14" stroke="#8FD4EB" strokeWidth="0.8" />
          <text x="0" y="32" textAnchor="middle" fill="#4B5563" fontSize="9" fontWeight="700">
            South Grand Entrance
          </text>

          {/* Landscaped Driveway & Palms */}
          <path d="M -70 45 C -40 25, 40 25, 70 45" fill="none" stroke="#E2DAD0" strokeWidth="2.5" />
          <circle cx="-65" cy="35" r="4.5" fill="#78A765" />
          <circle cx="-45" cy="28" r="4.5" fill="#78A765" />
          <circle cx="45" cy="28" r="4.5" fill="#78A765" />
          <circle cx="65" cy="35" r="4.5" fill="#78A765" />
        </g>

        {/* 9. Navigation Route Line */}
        {renderNavPath()}

        {/* 10. User Real-Time Position Beacon */}
        <g transform={`translate(${userLocation.x}, ${userLocation.y})`}>
          <circle cx="0" cy="0" r="18" fill="rgba(139, 29, 36, 0.14)" className="pulse-circle-fast" />
          <circle cx="0" cy="0" r="9" fill="#8B1D24" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
