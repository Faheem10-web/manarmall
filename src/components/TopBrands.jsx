import React from 'react';
import { ArrowRight } from 'lucide-react';

// Precision Brand Logos with 100% Authentic Colors and Proportions
const ZaraLogo = () => (
  <svg viewBox="0 0 160 48" width="60" height="22" fill="#000000" aria-label="ZARA">
    <path d="M40.2 6.5h-35v4.2l23 27H4.5v4.8h37.5v-4.2l-23-27h21.2V6.5zM67.8 6.5H48.4L33 42.5h6.2l3.8-9h16.2l3.8 9h6.4L67.8 6.5zm-14.8 22l6.2-15 6.2 15H53zM108 26.5c3.2-1.8 5.4-5 5.4-9.2 0-6.8-5.5-10.8-14.2-10.8H78.5v36h6.2v-14h13.2l9.8 14h7.5L104 27.2c1.6-.2 3-.5 4-.7zm-23.3-8.8v-6.5h8.8c4.8 0 7.8 2 7.8 5.8 0 3.8-3 5.8-7.8 5.8h-8.8v-5.1zM146.8 6.5h-19.4L112 42.5h6.2l3.8-9h16.2l3.8 9h6.4l-11.6-36zm-14.8 22l6.2-15 6.2 15H132z" />
  </svg>
);

const HMLogo = () => (
  <svg viewBox="0 0 95 60" width="54" height="34" fill="#E50010" aria-label="H&M">
    <path d="M12.5 8c2.2 0 4 1.8 4 4v16.5h16V12c0-2.2 1.8-4 4-4s4 1.8 4 4v36c0 2.2-1.8 4-4 4s-4-1.8-4-4V36.5h-16V48c0 2.2-1.8 4-4 4s-4-1.8-4-4V12c0-2.2 1.8-4 4-4zm42.8 19.8c2.2-2.8 5.6-4.5 9.4-4.5 6.8 0 12.3 5.5 12.3 12.3 0 3.8-1.7 7.2-4.5 9.4l7.2 9.5c1.4 1.8.9 4.3-.9 5.7-1.8 1.4-4.3.9-5.7-.9l-6.8-9c-.5.1-1.1.1-1.6.1-6.8 0-12.3-5.5-12.3-12.3 0-4 1.9-7.5 4.9-9.8l-2-2.6-4.6 6.1c-1.4 1.8-3.9 2.2-5.7.9-1.8-1.4-2.2-3.9-.9-5.7l11.2-14.8c1.4-1.8 3.9-2.2 5.7-.9 1.8 1.4 2.2 3.9.9 5.7l-4.9 6.5 4.3 4.4zm3.8 7.8c0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3z" />
  </svg>
);

const CentrepointLogo = () => (
  <div className="store-logo-centrepoint">
    <svg viewBox="0 0 100 100" width="28" height="28" aria-label="Centrepoint rings">
      <circle cx="50" cy="50" r="42" fill="none" stroke="#E42329" strokeWidth="8.5" />
      <circle cx="50" cy="50" r="33" fill="none" stroke="#F59C1A" strokeWidth="7.5" />
      <circle cx="50" cy="50" r="24" fill="none" stroke="#00A9E0" strokeWidth="7.5" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#7B2E8D" strokeWidth="6.5" />
      <circle cx="50" cy="50" r="6.5" fill="#00A9E0" />
    </svg>
    <span className="centrepoint-text">centrepoint</span>
  </div>
);

const MaxLogo = () => (
  <div className="store-logo-max">
    <span className="max-blue">ma</span>
    <span className="max-red">x</span>
  </div>
);

const NikeLogo = () => (
  <svg viewBox="0 0 120 50" width="50" height="22" fill="#000000" aria-label="Nike">
    <path d="M117.8 8.4C98.2 21.6 71.3 35.8 45.4 39.7c-17.6 2.6-28.5-3.3-30.8-12.7-1.8-7.3 3.6-15.6 13.9-20.8 1.9-1 3.9-.3 4.4 1.6.4 1.8-.7 3.6-2.5 4.5-7.4 3.7-11.2 9.4-9.9 14.6 1.6 6.6 10.3 10.7 23.4 8.7 22.8-3.4 47.3-16.7 67.5-29.4 1.8-1.1 4.1-.6 5.1 1.2 1 1.9.4 4.2-1.4 5.3" />
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 170 170" width="28" height="28" fill="#000000" aria-label="Apple">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.83-11.71-14.34-6.36-10.15-11.2-21.75-14.52-34.8-3.32-13.06-4.98-25.2-4.98-36.42 0-14.75 3.7-26.96 11.1-36.63 7.4-9.67 16.73-14.62 27.99-14.85 4.8 0 10.37 1.34 16.7 4.02 6.33 2.68 10.25 4.14 11.77 4.38 2.23-.36 6.36-1.89 12.38-4.6 6.02-2.7 11.4-3.9 16.14-3.6 12.05.73 21.6 5.34 28.66 13.82-10.73 6.5-16.03 15.5-15.9 27 .12 8.94 3.52 16.34 10.2 22.2 6.67 5.86 14.64 9.17 23.9 9.94-2.12 6.2-4.69 12.36-7.7 18.48zM119.22 33.02c0-7.3 2.64-14.15 7.92-20.55 5.28-6.4 11.83-10.56 19.64-12.47.78 7.37-1.74 14.4-7.55 21.1-5.81 6.7-12.71 10.9-20.01 11.92z" />
  </svg>
);

const SephoraLogo = () => (
  <span className="store-text-sephora">SEPHORA</span>
);

const MangoLogo = () => (
  <span className="store-text-mango">MANGO</span>
);

const POPULAR_STORES = [
  { id: 1, name: 'ZARA', component: ZaraLogo },
  { id: 2, name: 'H&M', component: HMLogo },
  { id: 3, name: 'Centrepoint', component: CentrepointLogo },
  { id: 4, name: 'Max', component: MaxLogo },
  { id: 5, name: 'Nike', component: NikeLogo },
  { id: 6, name: 'Apple', component: AppleLogo },
  { id: 7, name: 'Sephora', component: SephoraLogo },
  { id: 8, name: 'Mango', component: MangoLogo },
];

export default function TopBrands() {
  return (
    <section className="popular-stores-section" aria-labelledby="popular-stores-heading">
      <div className="popular-stores-header">
        <h2 id="popular-stores-heading">Popular Stores</h2>
        <button type="button" className="popular-see-all-btn">
          <span>See All</span>
          <ArrowRight size={16} strokeWidth={2} className="see-all-arrow" />
        </button>
      </div>
      
      <div className="popular-stores-scroll">
        {POPULAR_STORES.map((store) => {
          const Logo = store.component;
          return (
            <div
              key={store.id}
              className="popular-store-card"
              role="button"
              tabIndex={0}
              aria-label={store.name}
            >
              <Logo />
            </div>
          );
        })}
      </div>
    </section>
  );
}
