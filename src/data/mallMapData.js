// ==========================================================================
// MANAR MALL — Premium Indoor & Waterfront Promenade Navigation Data
// ==========================================================================

export const FLOORS = [
  { id: 'SF', code: 'SF', label: 'SF', name: 'Second Floor', shortName: 'Second Floor', level: 2 },
  { id: 'FF', code: 'FF', label: 'FF', name: 'First Floor', shortName: 'First Floor', level: 1 },
  { id: 'GF', code: 'GF', label: 'GF', name: 'Ground Floor', shortName: 'Ground Floor', level: 0 },
  { id: 'CF', code: 'CF', label: 'CF', name: 'Concourse / Basement', shortName: 'Concourse', level: -1 }
];

export const CATEGORIES = [
  { id: 'shop', name: 'Shop', icon: 'ShoppingBag' },
  { id: 'dine', name: 'Dine', icon: 'Utensils' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Sparkles' },
  { id: 'stay', name: 'Stay & Services', icon: 'ShieldCheck' }
];

export const AMENITY_TAGS = [
  { id: 'male_prayer', label: 'Male Prayer Room', icon: 'Pray', x: 190, y: 560, floor: 'GF' },
  { id: 'female_prayer', label: 'Female Prayer Room', icon: 'Pray', x: 330, y: 560, floor: 'GF' },
  { id: 'restrooms', label: 'Restrooms', icon: 'Users', x: 140, y: 340, floor: 'GF' },
  { id: 'valet', label: 'VIP Valet', icon: 'Car', x: 260, y: 690, floor: 'GF' },
  { id: 'info', label: 'Concierge Desk', icon: 'Info', x: 260, y: 490, floor: 'GF' }
];

// Ground Floor (GF) — Waterfront Promenade & Luxury Fashion Hub
export const MALL_DATA = {
  GF: {
    name: 'Ground Floor (GF)',
    description: 'Waterfront Lagoon Promenade & Luxury Avenues',
    stores: [
      {
        id: 'zara',
        name: 'ZARA',
        brand: 'ZARA',
        category: 'shop',
        subCategory: 'Flagship Fashion',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'Central Waterfront Rotunda',
        hours: '10:00 AM - Midnight',
        phone: '+971 7 227 4488',
        rating: 4.9,
        reviewsCount: 420,
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=600',
        logoText: 'ZARA',
        color: '#FDF2EE',
        accentColor: '#8B1D24',
        walkTimeMin: 2,
        distanceM: 110,
        doorPos: { x: 260, y: 395 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 260, y: 520 },
          { x: 260, y: 395 }
        ],
        description: 'Discover world-class women’s, men’s, and kids’ fashion collections in our two-story flagship rotunda overlooking the lagoon.',
        offers: ['Summer Collection: Up to 50% Off Selected Lines', 'Instant Tax-Free Tourist Refund Counter Available']
      },
      {
        id: 'hm',
        name: 'H&M',
        brand: 'H&M',
        category: 'shop',
        subCategory: 'Contemporary Fashion & Home',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'West Grand Promenade',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 5599',
        rating: 4.7,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
        logoText: 'H&M',
        color: '#FBECEC',
        accentColor: '#E50010',
        walkTimeMin: 2,
        distanceM: 130,
        doorPos: { x: 190, y: 460 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 220, y: 550 },
          { x: 190, y: 460 }
        ],
        description: 'Sustainable fashion and H&M Home interior collections with wide selection and best prices.',
        offers: ['Garment Collecting: Donate unwanted clothes & receive 15% discount voucher']
      },
      {
        id: 'marks_spencer',
        name: 'Marks & Spencer',
        brand: 'Marks & Spencer',
        category: 'shop',
        subCategory: 'British Fashion & Food Hall',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'East Grand Promenade',
        hours: '09:00 AM - Midnight',
        phone: '+971 7 227 8811',
        rating: 4.8,
        reviewsCount: 390,
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600',
        logoText: 'M&S',
        color: '#F5ECE6',
        accentColor: '#1A4D2E',
        walkTimeMin: 2,
        distanceM: 120,
        doorPos: { x: 330, y: 460 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 300, y: 550 },
          { x: 330, y: 460 }
        ],
        description: 'British heritage clothing, lingerie, organic food hall, and artisan café.',
        offers: ['M&S Food: Buy 2 Specialty Teas Get 1 Free']
      },
      {
        id: 'massimo_dutti',
        name: 'Massimo Dutti',
        brand: 'Massimo Dutti',
        category: 'shop',
        subCategory: 'Tailored Luxury Fashion',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'East Lagoon Wing',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 3344',
        rating: 4.9,
        reviewsCount: 260,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
        logoText: 'Massimo Dutti',
        color: '#F6F1EA',
        accentColor: '#3D342C',
        walkTimeMin: 3,
        distanceM: 150,
        doorPos: { x: 375, y: 370 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 330, y: 480 },
          { x: 375, y: 370 }
        ],
        description: 'Sophisticated elegance, premium tailoring, Italian fabrics, and timeless accessories.',
        offers: ['Limited Edition: Complimentary bespoke monogramming on linen shirts']
      },
      {
        id: 'mango',
        name: 'MANGO',
        brand: 'MANGO',
        category: 'shop',
        subCategory: 'Mediterranean Fashion',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'South-East Promenade',
        hours: '10:00 AM - 10:30 PM',
        phone: '+971 7 227 3311',
        rating: 4.7,
        reviewsCount: 195,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
        logoText: 'MANGO',
        color: '#F7EFE8',
        accentColor: '#2D2522',
        walkTimeMin: 2,
        distanceM: 100,
        doorPos: { x: 375, y: 420 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 320, y: 530 },
          { x: 375, y: 420 }
        ],
        description: 'Mediterranean style contemporary womenswear, footwear, and summer dresses.',
        offers: ['Club Mango: Instant 10% discount on first in-app purchase']
      },
      {
        id: 'louis_vuitton',
        name: 'Louis Vuitton',
        brand: 'Louis Vuitton',
        category: 'shop',
        subCategory: 'Haute Horlogerie & Leather',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'North Promenade VIP Row',
        hours: '10:00 AM - 11:30 PM',
        phone: '+971 800 88488',
        rating: 5.0,
        reviewsCount: 540,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600',
        logoText: 'Louis Vuitton',
        color: '#FAF3EB',
        accentColor: '#6B4C2A',
        walkTimeMin: 4,
        distanceM: 210,
        doorPos: { x: 260, y: 220 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 260, y: 420 },
          { x: 260, y: 220 }
        ],
        description: 'Iconic leather trunks, monogram bags, fine jewelry, and luxury ready-to-wear.',
        offers: ['Private VIP Salon appointment with personal shopping stylist']
      },
      {
        id: 'starbucks_waterfront',
        name: 'Starbucks Waterfront Reserve',
        brand: 'Starbucks',
        category: 'dine',
        subCategory: 'Waterfront Terrace Café',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'Lagoon Boardwalk East',
        hours: '07:30 AM - 01:00 AM',
        phone: '+971 7 227 7799',
        rating: 4.9,
        reviewsCount: 680,
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
        logoText: 'STARBUCKS',
        color: '#EAF6EF',
        accentColor: '#00704A',
        walkTimeMin: 3,
        distanceM: 160,
        doorPos: { x: 420, y: 290 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 350, y: 450 },
          { x: 420, y: 290 }
        ],
        description: 'Enjoy handcrafted reserve roast coffees and artisanal pastries with scenic lagoon marina views.',
        offers: ['Lagoon Sunset Special: Free pastry with any grande handcrafted beverage 5-7 PM']
      },
      {
        id: 'paul_cafe',
        name: 'PAUL Bakery & Restaurant',
        brand: 'PAUL',
        category: 'dine',
        subCategory: 'French Bistro & Bakery',
        floor: 'GF',
        floorName: 'Ground Floor',
        locationDesc: 'Lagoon Promenade Terrace',
        hours: '08:00 AM - Midnight',
        phone: '+971 7 227 3444',
        rating: 4.8,
        reviewsCount: 440,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
        logoText: 'PAUL',
        color: '#F7EFE8',
        accentColor: '#1A1A1A',
        walkTimeMin: 3,
        distanceM: 140,
        doorPos: { x: 400, y: 350 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 330, y: 480 },
          { x: 400, y: 350 }
        ],
        description: 'Authentic French breakfast, gourmet soups, fresh sourdough, and decadent tartlets.',
        offers: ['Morning Parisian Breakfast for 2: AED 95']
      }
    ]
  },
  FF: {
    name: 'First Floor (FF)',
    description: 'Kids World, Sports Flagships & Electronics',
    stores: [
      {
        id: 'centrepoint',
        name: 'Centrepoint Flagship',
        brand: 'Centrepoint',
        category: 'shop',
        subCategory: 'Family & Home',
        floor: 'FF',
        floorName: 'First Floor',
        locationDesc: 'Level 1 West Wing Anchor',
        hours: '10:00 AM - 11:30 PM',
        phone: '+971 7 227 9900',
        rating: 4.7,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600',
        logoText: 'CENTREPOINT',
        color: '#FBE8E8',
        accentColor: '#8B1D24',
        walkTimeMin: 3,
        distanceM: 180,
        doorPos: { x: 190, y: 460 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 220, y: 550 },
          { x: 190, y: 460 }
        ],
        description: 'Babyshop, Splash, Shoe Mart, and Lifestyle under one grand flagship roof.',
        offers: ['Weekend Rewards: Flat 20% Cashback on card payments']
      },
      {
        id: 'max',
        name: 'MAX Fashion',
        brand: 'MAX',
        category: 'shop',
        subCategory: 'Value Apparel',
        floor: 'FF',
        floorName: 'First Floor',
        locationDesc: 'Level 1 East Wing',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 7711',
        rating: 4.6,
        reviewsCount: 220,
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600',
        logoText: 'MAX',
        color: '#E8F0FE',
        accentColor: '#1A73E8',
        walkTimeMin: 3,
        distanceM: 170,
        doorPos: { x: 330, y: 460 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 300, y: 550 },
          { x: 330, y: 460 }
        ],
        description: 'Trendy apparel, footwear, and accessories for the entire family.',
        offers: ['Buy 2 Get 1 Free on all kids wear']
      }
    ]
  },
  SF: {
    name: 'Second Floor (SF)',
    description: 'VOX Cinemas, Magic Planet & Grand Food Court',
    stores: [
      {
        id: 'vox_cinemas',
        name: 'VOX Cinemas MAX & IMAX',
        brand: 'VOX Cinemas',
        category: 'entertainment',
        subCategory: 'Cinema & IMAX VIP',
        floor: 'SF',
        floorName: 'Second Floor',
        locationDesc: 'Level 2 West Entertainment Wing',
        hours: '10:00 AM - 02:00 AM',
        phone: '+971 600 599905',
        rating: 4.9,
        reviewsCount: 880,
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600',
        logoText: 'VOX CINEMAS',
        color: '#FBECE8',
        accentColor: '#8B1D24',
        walkTimeMin: 4,
        distanceM: 200,
        doorPos: { x: 190, y: 460 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 220, y: 550 },
          { x: 190, y: 460 }
        ],
        description: 'Experience IMAX with Laser, luxury THEATRE dining, and kid-friendly screen auditoriums.',
        offers: ['Tuesday Movie Madness: Flat AED 35 on standard 2D tickets']
      }
    ]
  },
  CF: {
    name: 'Concourse Floor (CF)',
    description: 'Carrefour Hypermarket, Valet Parking & Auto Services',
    stores: [
      {
        id: 'carrefour',
        name: 'Carrefour Hypermarket',
        brand: 'Carrefour',
        category: 'shop',
        subCategory: 'Hypermarket & Gourmet Deli',
        floor: 'CF',
        floorName: 'Concourse Floor',
        locationDesc: 'Concourse Level Gate 1',
        hours: '08:00 AM - Midnight',
        phone: '+971 800 73232',
        rating: 4.8,
        reviewsCount: 1100,
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600',
        logoText: 'Carrefour',
        color: '#EAF1FB',
        accentColor: '#004E9A',
        walkTimeMin: 2,
        distanceM: 90,
        doorPos: { x: 260, y: 395 },
        pathCoords: [
          { x: 260, y: 670 },
          { x: 260, y: 395 }
        ],
        description: 'Full range of fresh organic groceries, bakery, electronic appliances, and daily household essentials.',
        offers: ['Share Rewards: 5X bonus points on fresh fruits & vegetables']
      }
    ]
  }
};

export function searchAllStores(query = '', categoryFilter = 'all') {
  const normalizedQuery = query.toLowerCase().trim();
  const results = [];

  Object.entries(MALL_DATA).forEach(([floorId, floorData]) => {
    (floorData.stores || []).forEach((store) => {
      const matchCategory =
        categoryFilter === 'all' || store.category.toLowerCase() === categoryFilter.toLowerCase();
      const matchQuery =
        !normalizedQuery ||
        store.name.toLowerCase().includes(normalizedQuery) ||
        store.subCategory.toLowerCase().includes(normalizedQuery) ||
        store.locationDesc.toLowerCase().includes(normalizedQuery) ||
        store.floorName.toLowerCase().includes(normalizedQuery);

      if (matchCategory && matchQuery) {
        results.push({ ...store, floorId });
      }
    });
  });

  return results;
}
