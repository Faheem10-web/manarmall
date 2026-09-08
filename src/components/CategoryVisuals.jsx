import React from 'react';

// 1. Electronics Card Artwork (Phone with colorful screen + White wireless headphones)
export function ElectronicsArtwork() {
  return (
    <svg viewBox="0 0 170 160" className="card-custom-artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phoneScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E0854" />
          <stop offset="25%" stopColor="#931B50" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="75%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="phoneBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1C1917" />
          <stop offset="50%" stopColor="#44403C" />
          <stop offset="100%" stopColor="#1C1917" />
        </linearGradient>
        <linearGradient id="headphoneWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F5F4F2" />
          <stop offset="100%" stopColor="#D6D3D1" />
        </linearGradient>
        <filter id="cardShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#885A52" floodOpacity="0.25" />
        </filter>
        <filter id="phoneShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="-2" dy="6" stdDeviation="5" floodColor="#70443D" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Modern Smartphone on Left */}
      <g filter="url(#phoneShadow)" transform="translate(6, 12)">
        <rect x="14" y="4" width="58" height="122" rx="14" fill="url(#phoneBody)" stroke="#A8A29E" strokeWidth="1" />
        <rect x="16.5" y="6.5" width="53" height="117" rx="12" fill="url(#phoneScreen)" />
        <rect x="33" y="10" width="20" height="4.5" rx="2.2" fill="#000000" />
        <rect x="36" y="118" width="14" height="2" rx="1" fill="#FFFFFF" opacity="0.8" />
        {/* Screen Shine overlay */}
        <path d="M17 7 L69 7 C69 7, 68 38, 17 75 Z" fill="#FFFFFF" opacity="0.12" />
      </g>

      {/* White Wireless Headphones on Right */}
      <g filter="url(#cardShadow)" transform="translate(24, 8)">
        <path
          d="M44 94 C42 38, 122 38, 120 94"
          fill="none"
          stroke="url(#headphoneWhite)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        {/* Silver Hinges */}
        <rect x="38" y="70" width="11" height="6" rx="1.5" fill="#A8A29E" />
        <rect x="115" y="70" width="11" height="6" rx="1.5" fill="#A8A29E" />

        {/* Left Earcup */}
        <g transform="translate(24, 76)">
          <ellipse cx="20" cy="34" rx="16" ry="24" fill="url(#headphoneWhite)" stroke="#E7E5E4" strokeWidth="1.2" />
          <ellipse cx="20" cy="34" rx="10" ry="17" fill="#E7E5E4" />
        </g>

        {/* Right Earcup (Hero Angle) */}
        <g transform="translate(98, 76)">
          <ellipse cx="22" cy="34" rx="17" ry="25" fill="url(#headphoneWhite)" stroke="#E7E5E4" strokeWidth="1.2" />
          <ellipse cx="21" cy="34" rx="11" ry="18" fill="#E7E5E4" />
          <ellipse cx="23" cy="34" rx="6" ry="10" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="0.8" />
        </g>
      </g>
    </svg>
  );
}

// 2. Fashion - Women Card Artwork (Seamless Cutout)
export function FashionWomenArtwork() {
  return (
    <div className="card-photo-hero-wrap">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=700"
        alt="Fashion Women"
        className="card-seamless-img"
      />
      <div className="card-feather-left-overlay" style={{ background: 'linear-gradient(90deg, #F4ECE1 0%, rgba(244, 236, 225, 0.85) 30%, rgba(244, 236, 225, 0) 100%)' }} />
    </div>
  );
}

// 3. Footwear, Bags & Accessories Artwork (Caramel Tan Leather Handbag)
export function HandbagArtwork() {
  return (
    <svg viewBox="0 0 170 160" className="card-custom-artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bagLeather" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C97F36" />
          <stop offset="35%" stopColor="#B86C26" />
          <stop offset="70%" stopColor="#9E5416" />
          <stop offset="100%" stopColor="#783D0D" />
        </linearGradient>
        <linearGradient id="bagFlap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D98D42" />
          <stop offset="100%" stopColor="#A85F1B" />
        </linearGradient>
        <linearGradient id="goldMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#B28704" />
        </linearGradient>
        <filter id="bagShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#8B5738" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Shadow base */}
      <ellipse cx="98" cy="142" rx="55" ry="8" fill="#D5B6A0" opacity="0.6" />

      <g filter="url(#bagShadow)" transform="translate(26, 16)">
        {/* Top Handle */}
        <path
          d="M44 42 C42 6, 90 6, 88 42"
          fill="none"
          stroke="url(#bagLeather)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <rect x="40" y="38" width="8" height="9" rx="2" fill="url(#goldMetal)" />
        <rect x="84" y="38" width="8" height="9" rx="2" fill="url(#goldMetal)" />

        {/* Handbag Main Body */}
        <path
          d="M28 44 L104 44 L116 116 C116 120, 112 124, 108 124 L24 124 C20 124, 16 120, 16 116 Z"
          fill="url(#bagLeather)"
        />

        {/* Handbag Flap */}
        <path
          d="M28 44 L104 44 L98 82 L66 102 L34 82 Z"
          fill="url(#bagFlap)"
          stroke="#8A4A10"
          strokeWidth="0.8"
        />

        {/* Gold Clasp */}
        <polygon points="66,96 76,84 56,84" fill="url(#goldMetal)" stroke="#8A6500" strokeWidth="0.8" />
        <circle cx="66" cy="90" r="2" fill="#543E02" />

        {/* Gold Hanging Charm */}
        <g transform="translate(40, 70)">
          <line x1="0" y1="0" x2="-6" y2="24" stroke="url(#goldMetal)" strokeWidth="1.5" />
          <rect x="-10" y="24" width="8" height="11" rx="2" fill="url(#goldMetal)" />
          <path d="M-8 24 C-8 20, -4 20, -4 24" fill="none" stroke="url(#goldMetal)" strokeWidth="1.2" />
        </g>
      </g>
    </svg>
  );
}

// 4. Homeware & Furniture Artwork (Vase + Plant + Armchair)
export function HomewareArtwork() {
  return (
    <div className="card-photo-hero-wrap">
      <img
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=700"
        alt="Homeware & Furniture"
        className="card-seamless-img"
      />
      <div className="card-feather-left-overlay" style={{ background: 'linear-gradient(90deg, #F1EBE3 0%, rgba(241, 235, 227, 0.85) 30%, rgba(241, 235, 227, 0) 100%)' }} />
    </div>
  );
}

// 5. Perfume, Cosmetics & Skincare Artwork
export function BeautyArtwork() {
  return (
    <svg viewBox="0 0 170 160" className="card-custom-artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="perfumeGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="80%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="lipstickRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id="goldCasing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <filter id="beautyShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#9C5960" floodOpacity="0.26" />
        </filter>
      </defs>

      {/* Perfume Bottle (Center Hero) */}
      <g filter="url(#beautyShadow)" transform="translate(64, 20)">
        <rect x="23" y="0" width="14" height="12" rx="2" fill="url(#goldCasing)" stroke="#B45309" strokeWidth="0.5" />
        <rect x="26" y="12" width="8" height="6" fill="url(#goldCasing)" />
        <rect x="6" y="18" width="48" height="68" rx="6" fill="url(#perfumeGlass)" stroke="#FFFFFF" strokeWidth="1.2" />
        <rect x="3" y="15" width="54" height="74" rx="8" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
        <rect x="14" y="34" width="32" height="28" rx="2" fill="#FFFFFF" stroke="#D97706" strokeWidth="0.8" />
        <text x="30" y="48" fontSize="6.5" fontWeight="800" fill="#1C1917" textAnchor="middle" fontFamily="sans-serif">COCO</text>
        <text x="30" y="55" fontSize="4" fontWeight="600" fill="#78716C" textAnchor="middle" fontFamily="sans-serif">PARIS</text>
      </g>

      {/* Red Lipstick on Left */}
      <g filter="url(#beautyShadow)" transform="translate(28, 60)">
        <rect x="10" y="32" width="14" height="34" rx="2" fill="url(#goldCasing)" />
        <rect x="9" y="40" width="16" height="2" fill="#78350F" />
        <rect x="12" y="20" width="10" height="12" fill="url(#goldCasing)" />
        <path d="M12 20 L12 6 C12 6, 17 0, 22 10 L22 20 Z" fill="url(#lipstickRed)" />
      </g>

      {/* Skincare Pot on Right */}
      <g transform="translate(94, 98)">
        <ellipse cx="24" cy="18" rx="22" ry="9" fill="#1C1917" stroke="url(#goldCasing)" strokeWidth="1.2" />
        <rect x="2" y="10" width="44" height="10" fill="#292524" />
        <ellipse cx="24" cy="10" rx="22" ry="8" fill="url(#goldCasing)" stroke="#B45309" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

// 6. Watches & Jewellery Artwork (Luxury Gold & Black Watch)
export function WatchArtwork() {
  return (
    <svg viewBox="0 0 170 160" className="card-custom-artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldBezel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="watchDial" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E1E22" />
          <stop offset="100%" stopColor="#0B0B0D" />
        </linearGradient>
        <linearGradient id="braceletSteel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A2A2E" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="65%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#2A2A2E" />
        </linearGradient>
        <filter id="watchGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.8" />
        </filter>
      </defs>

      <g filter="url(#watchGlow)" transform="translate(52, 6)">
        {/* Bracelet Links */}
        <path d="M22 0 L46 0 L44 32 L24 32 Z" fill="url(#braceletSteel)" stroke="#44403C" strokeWidth="0.8" />
        <path d="M24 116 L44 116 L46 148 L22 148 Z" fill="url(#braceletSteel)" stroke="#44403C" strokeWidth="0.8" />

        {/* Gold Case */}
        <circle cx="34" cy="74" r="44" fill="url(#goldBezel)" />
        <rect x="76" y="68" width="6" height="12" rx="2" fill="url(#goldBezel)" />
        <circle cx="34" cy="74" r="40" fill="#78350F" stroke="url(#goldBezel)" strokeWidth="2.5" />

        {/* Black Dial */}
        <circle cx="34" cy="74" r="37" fill="url(#watchDial)" />

        {/* Hour Markers */}
        <line x1="34" y1="41" x2="34" y2="47" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="34" y1="107" x2="34" y2="101" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="67" y1="74" x2="61" y2="74" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="1" y1="74" x2="7" y2="74" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />

        <text x="34" y="60" fontSize="5.5" fontWeight="700" fill="#FDE68A" textAnchor="middle" fontFamily="serif" letterSpacing="0.8">MANAR</text>
        <text x="34" y="65" fontSize="3.5" fontWeight="500" fill="#D6D3D1" textAnchor="middle" fontFamily="sans-serif">AUTOMATIC</text>

        <rect x="52" y="70" width="8" height="8" rx="1" fill="#FFFFFF" stroke="#D97706" strokeWidth="0.6" />
        <text x="56" y="76" fontSize="5" fontWeight="700" fill="#0C0A09" textAnchor="middle" fontFamily="sans-serif">28</text>

        <line x1="34" y1="74" x2="48" y2="60" stroke="#FDE68A" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="34" y1="74" x2="34" y2="48" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="34" y1="74" x2="22" y2="92" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" />
        <circle cx="34" cy="74" r="3" fill="url(#goldBezel)" />
      </g>
    </svg>
  );
}

// 7. Promotional Campaign Banner Graphic (Exact 2nd image replica)
export function PromoBannerArtwork({ onExplore }) {
  return (
    <div className="exact-promo-banner" onClick={onExplore} role="button" tabIndex={0}>
      {/* Left Deep Red Section */}
      <div className="promo-red-section">
        <h3 className="promo-red-title">
          Premium Brands<br />Endless Possibilities
        </h3>
        <p className="promo-red-subtitle">Shop. Dine. Explore. Enjoy.</p>
        <button
          type="button"
          className="promo-white-cta-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onExplore) onExplore();
          }}
        >
          <span>Explore Now</span>
          <span className="cta-arrow">→</span>
        </button>
      </div>

      {/* Right Soft Warm Section with Red Bag & Editorial Text */}
      <div className="promo-warm-section">
        {/* Editorial Text Top Right */}
        <div className="promo-top-editorial">
          <span>MORE</span>
          <span>THAN A MALL</span>
          <span>A BETTER</span>
          <span>EXPERIENCE</span>
        </div>

        {/* Model holding Red Shopping Bag */}
        <div className="promo-bag-wrapper">
          <svg viewBox="0 0 140 130" className="promo-bag-svg" fill="none">
            {/* Bag Handles */}
            <path d="M50 48 C48 18, 92 18, 90 48" stroke="#331A15" strokeWidth="3" strokeLinecap="round" />
            
            {/* Red Bag Body */}
            <polygon points="26,44 114,44 122,126 18,126" fill="#8B1528" />
            <polygon points="18,126 122,126 122,128 18,128" fill="#5F0E1B" />
            
            {/* Side Fold */}
            <polygon points="26,44 40,44 32,126 18,126" fill="#751121" opacity="0.6" />

            {/* Manar Mall Arch Logo on Bag */}
            <g transform="translate(70, 78)">
              {/* Double Golden Arches */}
              <path d="M-14 16 L-14 2 C-14 -12, 14 -12, 14 2 L14 16" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" fill="none" />
              <path d="M-8 16 L-8 3 C-8 -5, 8 -5, 8 3 L8 16" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" fill="none" />
              
              <text x="0" y="27" fontSize="7.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.8">MANAR MALL</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
