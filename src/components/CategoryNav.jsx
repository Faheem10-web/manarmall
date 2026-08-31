import React from 'react';

const CATEGORIES = [
  { id: 'shopping', label: 'SHOPPING' },
  { id: 'dining', label: 'DINING' },
  { id: 'entertainment', label: 'ENTERTAINMENT' },
  { id: 'events', label: 'EVENTS' },
];

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <nav className="category-nav" aria-label="Main Categories">
      <div className="category-container">
        {CATEGORIES.map((cat, index) => {
          const isActive = activeCategory === cat.id;
          return (
            <React.Fragment key={cat.id}>
              <button
                type="button"
                className={`category-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="category-label">{cat.label}</span>
              </button>
              {index < CATEGORIES.length - 1 && (
                <span className="category-separator" aria-hidden="true" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
