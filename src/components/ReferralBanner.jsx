import React from 'react';

export default function ReferralBanner({ onInviteClick }) {
  return (
    <section className="referral-banner-section" aria-label="Refer and Earn Reward">
      <div className="referral-card-container">
        <div
          className="referral-card-wrapper"
          role="button"
          tabIndex={0}
          onClick={onInviteClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onInviteClick && onInviteClick();
            }
          }}
          aria-label="Refer & Earn Get $10 - Invite Now"
        >
          <img
            src="/assets/refral.png"
            alt="Refer & Earn - Get $10. Invite a friend and both get $10 to shop, dine or enjoy more!"
            className="referral-banner-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
