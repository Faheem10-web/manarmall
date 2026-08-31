import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out animation at 3 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3000);

    // Unmount component at 3.5 seconds
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-container ${isFading ? 'fade-out' : ''}`}>
      {/* Subtle Golden Ambient Glow */}
      <div className="splash-ambient-glow"></div>
      
      {/* Architectural Line Art (Subtle Fade-in) */}
      <div className="splash-line-art"></div>

      <div className="splash-content">
        <div className="splash-logo-wrapper">
          <img src="/assets/flashlogo.png" alt="Manar Mall" className="splash-logo" />
          <div className="splash-subtitle-line">
            <span className="splash-star">✦</span>
          </div>
          <div className="splash-subtitle">SHOP &bull; DINE &bull; EXPERIENCE</div>
        </div>

        <div className="splash-bottom">
          <div className="splash-spinner"></div>
          <p className="splash-welcome">WELCOME</p>
        </div>
      </div>
    </div>
  );
}
