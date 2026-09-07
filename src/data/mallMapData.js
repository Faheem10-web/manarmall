// ==========================================================================
// MANAR MALL — Indoor Navigation 2D Floor Plan Data & Waypoints
// ==========================================================================

export const FLOORS = [
  { id: '2', code: 'SF', label: '2', name: 'Second Floor', shortName: 'Second', level: 2 },
  { id: '1', code: 'FF', label: '1', name: 'First Floor', shortName: 'First', level: 1 },
  { id: 'G', code: 'GF', label: 'G', name: 'Ground Floor', shortName: 'Ground', level: 0 },
  { id: 'B', code: 'B', label: 'B', name: 'Basement', shortName: 'Basement', level: -1 }
];

export const CATEGORIES = [
  { id: 'shops', name: 'Shops', icon: 'ShoppingBag' },
  { id: 'dining', name: 'Dining', icon: 'Utensils' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Sparkles' },
  { id: 'services', name: 'Services', icon: 'ShieldCheck' }
];

// Ground Floor (GF) Stores & Points of Interest
export const MALL_DATA = {
  G: {
    name: 'Ground Floor',
    description: 'Main Promenade & Luxury Fashion Hub',
    stores: [
      {
        id: 'centrepoint',
        name: 'CENTREPOINT',
        brand: 'Centrepoint',
        category: 'shops',
        subCategory: 'Department Store',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'North-West Promenade Anchor',
        hours: '10:00 AM - 11:30 PM',
        phone: '+971 7 227 9900',
        rating: 4.7,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600',
        logoText: 'CENTREPOINT',
        color: '#FBE8E8',
        accentColor: '#8B2525',
        walkTimeMin: 3,
        distanceM: 180,
        doorPos: { x: 160, y: 220 },
        badgePos: { x: 160, y: 190 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 480 },
          { x: 190, y: 350 },
          { x: 160, y: 220 }
        ],
        description: 'Babyshop, Splash, Shoe Mart, and Lifestyle under one grand flagship roof.',
        offers: ['Special Weekend Cardholder Rewards: Flat 20% Cashback']
      },
      {
        id: 'max',
        name: 'MAX',
        brand: 'MAX',
        category: 'shops',
        subCategory: 'Value Fashion & Family',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'North-East Promenade Anchor',
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
        doorPos: { x: 360, y: 220 },
        badgePos: { x: 360, y: 190 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 480 },
          { x: 330, y: 350 },
          { x: 360, y: 220 }
        ],
        description: 'Trendy fashion for women, men, and children, plus footwear and everyday accessories.',
        offers: ['Buy 2 Get 1 Free on all kids wear']
      },
      {
        id: 'hm',
        name: 'H&M',
        brand: 'H&M',
        category: 'shops',
        subCategory: 'Contemporary Fashion',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'West Wing, Above ZARA',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 5599',
        rating: 4.6,
        reviewsCount: 289,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
        logoText: 'H&M',
        color: '#FBECEB',
        accentColor: '#E50010',
        walkTimeMin: 3,
        distanceM: 150,
        doorPos: { x: 190, y: 280 },
        badgePos: { x: 160, y: 270 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 480 },
          { x: 190, y: 380 },
          { x: 190, y: 280 }
        ],
        description: 'Sustainable fashion and quality essentials for the whole family at the best price.',
        offers: ['Garment Collecting: Donate & Get 15% Off Next Purchase']
      },
      {
        id: 'zara',
        name: 'ZARA',
        brand: 'ZARA',
        category: 'shops',
        subCategory: 'Fashion',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'West Wing, Near Central Atrium',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 4488',
        rating: 4.8,
        reviewsCount: 342,
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=600',
        logoText: 'ZARA',
        color: '#FDEEE9',
        accentColor: '#8B2525',
        walkTimeMin: 2,
        distanceM: 120,
        doorPos: { x: 190, y: 355 },
        badgePos: { x: 160, y: 355 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 480 },
          { x: 190, y: 430 },
          { x: 190, y: 355 }
        ],
        description: 'Discover the latest trends in women’s, men’s, and kids’ clothing, shoes, and accessories.',
        offers: ['Summer Sale: Up to 50% Off Selected Lines', 'Exclusive In-store Collection Available']
      },
      {
        id: 'mango',
        name: 'MANGO',
        brand: 'MANGO',
        category: 'shops',
        subCategory: 'Mediterranean Fashion',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'West Wing, Lower Promenade',
        hours: '10:00 AM - 10:30 PM',
        phone: '+971 7 227 3311',
        rating: 4.7,
        reviewsCount: 195,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
        logoText: 'MANGO',
        color: '#F4ECE6',
        accentColor: '#333333',
        walkTimeMin: 2,
        distanceM: 95,
        doorPos: { x: 190, y: 435 },
        badgePos: { x: 160, y: 435 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 500 },
          { x: 190, y: 435 }
        ],
        description: 'Mediterranean heritage with contemporary silhouettes and premium fabrics.',
        offers: ['New Season Collection: Instant 10% Club Member Discount']
      },
      {
        id: 'nike',
        name: 'NIKE',
        brand: 'Nike',
        category: 'shops',
        subCategory: 'Athletics & Sportswear',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'East Wing Promenade',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 1234',
        rating: 4.8,
        reviewsCount: 375,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
        logoText: 'NIKE',
        color: '#F8F4EE',
        accentColor: '#000000',
        walkTimeMin: 3,
        distanceM: 140,
        doorPos: { x: 330, y: 280 },
        badgePos: { x: 360, y: 270 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 480 },
          { x: 330, y: 380 },
          { x: 330, y: 280 }
        ],
        description: 'Innovative athletic shoes, running gear, training kits, and lifestyle apparel.',
        offers: ['Nike Members: Free customization on selected running shoes']
      },
      {
        id: 'adidas',
        name: 'ADIDAS',
        brand: 'Adidas',
        category: 'shops',
        subCategory: 'Sportswear & Originals',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'East Wing, Opposite ZARA',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 4567',
        rating: 4.7,
        reviewsCount: 290,
        image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=600',
        logoText: 'ADIDAS',
        color: '#F8F4EE',
        accentColor: '#000000',
        walkTimeMin: 2,
        distanceM: 125,
        doorPos: { x: 330, y: 355 },
        badgePos: { x: 360, y: 355 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 480 },
          { x: 330, y: 430 },
          { x: 330, y: 355 }
        ],
        description: 'Originals streetwear, Boost running shoes, and premier performance kits.',
        offers: ['Adiclub Rewards: 2X points on all footwear purchases']
      },
      {
        id: 'starbucks',
        name: 'STARBUCKS',
        brand: 'Starbucks',
        category: 'dining',
        subCategory: 'Artisan Coffee & Bakery',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'East Wing, Atrium Garden View',
        hours: '08:00 AM - Midnight',
        phone: '+971 7 227 3456',
        rating: 4.8,
        reviewsCount: 510,
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
        logoText: 'STARBUCKS',
        color: '#EBF6EE',
        accentColor: '#00704A',
        walkTimeMin: 2,
        distanceM: 100,
        doorPos: { x: 330, y: 435 },
        badgePos: { x: 360, y: 435 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 500 },
          { x: 330, y: 435 }
        ],
        description: 'Handcrafted espresso, Frappuccinos, cold brew, and artisan bakery delights.',
        offers: ['Morning Duo: Fresh Croissant + Handcrafted Beverage AED 24']
      },
      {
        id: 'lifestyle',
        name: 'Lifestyle',
        brand: 'Lifestyle',
        category: 'shops',
        subCategory: 'Home & Beauty',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'South-West Lower Terrace',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 6622',
        rating: 4.5,
        reviewsCount: 160,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
        logoText: 'Lifestyle',
        color: '#FBECE8',
        accentColor: '#A06B52',
        walkTimeMin: 2,
        distanceM: 80,
        doorPos: { x: 190, y: 530 },
        badgePos: { x: 160, y: 560 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 220, y: 580 },
          { x: 190, y: 530 }
        ],
        description: 'Cosmetics, home fragrance, fashionable décor, and stylish lifestyle accessories.',
        offers: ['Buy 2 Get 1 Free on Home Fragrance Collection']
      },
      {
        id: 'food_court',
        name: 'Food Court',
        brand: 'Food Court',
        category: 'dining',
        subCategory: 'Dining & Quick Bites',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'South Promenade Central Hub',
        hours: '09:00 AM - Midnight',
        phone: '+971 7 227 0044',
        rating: 4.7,
        reviewsCount: 520,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
        logoText: 'Food Court',
        color: '#F5ECE6',
        accentColor: '#D97706',
        walkTimeMin: 1,
        distanceM: 50,
        doorPos: { x: 260, y: 520 },
        badgePos: { x: 260, y: 540 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 260, y: 520 }
        ],
        description: 'Delicious quick bites, artisan coffee, international dining concepts, and dessert kiosks.',
        offers: ['Combo Saver: Full Lunch Meal Deal starting at AED 29']
      },
      {
        id: 'cinema',
        name: 'Cinema',
        brand: 'Cinema',
        category: 'entertainment',
        subCategory: 'Movies & IMAX',
        floor: 'G',
        floorName: 'Ground Floor',
        locationDesc: 'South-East Lower Terrace',
        hours: '10:00 AM - 02:00 AM',
        phone: '+971 600 599905',
        rating: 4.9,
        reviewsCount: 880,
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600',
        logoText: 'Cinema',
        color: '#FBECE8',
        accentColor: '#8B2525',
        walkTimeMin: 2,
        distanceM: 85,
        doorPos: { x: 330, y: 530 },
        badgePos: { x: 360, y: 560 },
        pathCoords: [
          { x: 260, y: 645 },
          { x: 300, y: 580 },
          { x: 330, y: 530 }
        ],
        description: 'Blockbuster movies in IMAX laser, luxury VIP experience, and fresh gourmet popcorn.',
        offers: ['Cinema Rewards: Free Popcorn Upgrade with every ticket purchase']
      }
    ],
    amenities: [
      { id: 'info_desk', type: 'info', name: 'Information Concierge', x: 260, y: 135, icon: 'Info' },
      { id: 'restroom_nw', type: 'restroom', name: 'Restrooms (North-West)', x: 205, y: 175, icon: 'Users' },
      { id: 'restroom_ne', type: 'restroom', name: 'Restrooms (North-East)', x: 315, y: 175, icon: 'Users' },
      { id: 'restroom_mid_w', type: 'restroom', name: 'Restrooms (Mid-West)', x: 200, y: 250, icon: 'Users' },
      { id: 'restroom_mid_e', type: 'restroom', name: 'Restrooms (Mid-East)', x: 320, y: 250, icon: 'Users' },
      { id: 'restroom_sw', type: 'restroom', name: 'Restrooms (South-West)', x: 190, y: 485, icon: 'Users' },
      { id: 'restroom_se', type: 'restroom', name: 'Restrooms (South-East)', x: 330, y: 485, icon: 'Users' },
      { id: 'escalator_w', type: 'escalator', name: 'West Escalator', x: 190, y: 350, icon: 'ArrowUpRight' },
      { id: 'escalator_e', type: 'escalator', name: 'East Escalator', x: 330, y: 350, icon: 'ArrowUpRight' },
      { id: 'north_entrance', type: 'entrance', name: 'North Entrance', x: 260, y: 40, icon: 'DoorClosed' },
      { id: 'south_entrance', type: 'entrance', name: 'South Entrance', x: 260, y: 680, icon: 'DoorOpen' }
    ]
  },
  1: {
    name: 'First Floor (Level 1)',
    description: 'Fashion Flagships, Sports & Home Décor',
    stores: [
      {
        id: 'max',
        name: 'MAX Fashion',
        brand: 'MAX',
        category: 'shops',
        subCategory: 'Value Fashion & Family',
        floor: '1',
        floorName: 'First Floor',
        locationDesc: 'Level 1 - East Wing',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 7711',
        rating: 4.6,
        reviewsCount: 220,
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600',
        logoText: 'MAX',
        color: '#E8F0FE',
        accentColor: '#1A73E8',
        walkTimeMin: 3,
        distanceM: 140,
        doorPos: { x: 300, y: 310 },
        badgePos: { x: 335, y: 285 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 315, y: 460 },
          { x: 300, y: 310 }
        ],
        description: 'Trendy fashion for women, men, and children, plus footwear and everyday accessories.',
        offers: ['Buy 2 Get 1 Free on all kids wear']
      },
      {
        id: 'centrepoint',
        name: 'Centrepoint',
        brand: 'Centrepoint',
        category: 'shops',
        subCategory: 'Department Store',
        floor: '1',
        floorName: 'First Floor',
        locationDesc: 'Level 1 - West Wing Anchor',
        hours: '10:00 AM - 11:30 PM',
        phone: '+971 7 227 9900',
        rating: 4.7,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600',
        logoText: 'Centrepoint',
        color: '#FBE8E8',
        accentColor: '#E42329',
        walkTimeMin: 4,
        distanceM: 180,
        doorPos: { x: 200, y: 310 },
        badgePos: { x: 170, y: 285 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 260, y: 430 },
          { x: 200, y: 310 }
        ],
        description: 'Featuring Splash, Babyshop, Lifestyle, and Shoe Mart under one grand roof.',
        offers: ['Special Weekend Cardholder Rewards: Flat 20% Cashback']
      },
      {
        id: 'nike',
        name: 'Nike Store',
        brand: 'Nike',
        category: 'shops',
        subCategory: 'Athletics & Sportswear',
        floor: '1',
        floorName: 'First Floor',
        locationDesc: 'Level 1 - South-West Corridor',
        hours: '10:00 AM - 11:00 PM',
        phone: '+971 7 227 1234',
        rating: 4.8,
        reviewsCount: 375,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
        logoText: 'NIKE',
        color: '#F4ECE6',
        accentColor: '#000000',
        walkTimeMin: 3,
        distanceM: 130,
        doorPos: { x: 200, y: 400 },
        badgePos: { x: 160, y: 395 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 200, y: 400 }
        ],
        description: 'Innovative athletic shoes, running gear, training kits, and lifestyle apparel.',
        offers: ['Nike Members: Free customization on selected running shoes']
      },
      {
        id: 'starbucks_ff',
        name: 'Starbucks Reserve',
        brand: 'Starbucks',
        category: 'dining',
        subCategory: 'Artisan Coffee',
        floor: '1',
        floorName: 'First Floor',
        locationDesc: 'Level 1 - Atrium Balcony',
        hours: '08:00 AM - Midnight',
        phone: '+971 7 227 3456',
        rating: 4.7,
        reviewsCount: 460,
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
        logoText: 'Starbucks',
        color: '#E8F4EC',
        accentColor: '#00704A',
        walkTimeMin: 2,
        distanceM: 90,
        doorPos: { x: 300, y: 490 },
        badgePos: { x: 330, y: 520 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 300, y: 490 }
        ],
        description: 'Premium single-origin beans, craft nitro cold brew, and fresh baked artisanal bites.',
        offers: ['Double Stars on all handcrafted beverages after 6 PM']
      }
    ],
    amenities: [
      { id: 'restroom_ff_nw', type: 'restroom', name: 'Restrooms (Level 1 West)', x: 200, y: 260, icon: 'Users' },
      { id: 'restroom_ff_ne', type: 'restroom', name: 'Restrooms (Level 1 East)', x: 310, y: 260, icon: 'Users' },
      { id: 'escalator_ff_center', type: 'escalator', name: 'Escalators to Level 2', x: 315, y: 460, icon: 'ArrowUpRight' },
      { id: 'elevator_ff_atrium', type: 'elevator', name: 'Scenic Elevator', x: 250, y: 335, icon: 'ChevronsUpDown' },
      { id: 'info_desk_ff', type: 'info', name: 'Level 1 Help Kiosk', x: 215, y: 435, icon: 'Info' }
    ]
  },
  2: {
    name: 'Second Floor (Level 2)',
    description: 'Cinema, Family Entertainment & Grand Food Court',
    stores: [
      {
        id: 'vox_cinemas',
        name: 'VOX Cinemas',
        brand: 'VOX',
        category: 'entertainment',
        subCategory: 'Cinema & IMAX',
        floor: '2',
        floorName: 'Second Floor',
        locationDesc: 'Level 2 - West Entertainment Hub',
        hours: '10:00 AM - 02:00 AM',
        phone: '+971 600 599905',
        rating: 4.9,
        reviewsCount: 880,
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600',
        logoText: 'VOX CINEMAS',
        color: '#F4ECE6',
        accentColor: '#8B2525',
        walkTimeMin: 4,
        distanceM: 190,
        doorPos: { x: 200, y: 310 },
        badgePos: { x: 170, y: 285 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 260, y: 420 },
          { x: 200, y: 310 }
        ],
        description: 'IMAX laser projection, luxury VIP lounges, and mouthwatering gourmet cinema dining.',
        offers: ['Tuesday Movie Madness: Flat AED 35 on standard 2D tickets']
      },
      {
        id: 'magic_planet',
        name: 'Magic Planet',
        brand: 'Magic Planet',
        category: 'entertainment',
        subCategory: 'Family Gaming & Arcades',
        floor: '2',
        floorName: 'Second Floor',
        locationDesc: 'Level 2 - East Fun Arena',
        hours: '10:00 AM - Midnight',
        phone: '+971 7 227 8989',
        rating: 4.7,
        reviewsCount: 520,
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
        logoText: 'Magic Planet',
        color: '#EFF6FF',
        accentColor: '#2563EB',
        walkTimeMin: 4,
        distanceM: 180,
        doorPos: { x: 300, y: 310 },
        badgePos: { x: 335, y: 285 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 300, y: 310 }
        ],
        description: 'Exciting roller-coaster simulators, VR rides, arcade redemption games, and bowling.',
        offers: ['Load AED 200 & Get AED 100 Bonus Play Credits']
      },
      {
        id: 'grand_food_court',
        name: 'Grand Food Court',
        brand: 'Food Court',
        category: 'dining',
        subCategory: 'International Dining Hall',
        floor: '2',
        floorName: 'Second Floor',
        locationDesc: 'Level 2 - South Dining Terrace',
        hours: '10:00 AM - 01:00 AM',
        phone: '+971 7 227 1122',
        rating: 4.6,
        reviewsCount: 710,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
        logoText: 'Grand Dining',
        color: '#FFF7ED',
        accentColor: '#EA580C',
        walkTimeMin: 3,
        distanceM: 140,
        doorPos: { x: 260, y: 480 },
        badgePos: { x: 260, y: 510 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 260, y: 480 }
        ],
        description: 'Over 20 dining brands including Shake Shack, KFC, Pizza Hut, Subway, and Asian Wok.',
        offers: ['Family Combo Meals with Free Dessert Every Weekend']
      }
    ],
    amenities: [
      { id: 'restroom_sf_w', type: 'restroom', name: 'Restrooms (Cinema Wing)', x: 200, y: 260, icon: 'Users' },
      { id: 'restroom_sf_e', type: 'restroom', name: 'Restrooms (Arcade Wing)', x: 310, y: 260, icon: 'Users' },
      { id: 'elevator_sf', type: 'elevator', name: 'Level 2 Elevators', x: 250, y: 335, icon: 'ChevronsUpDown' }
    ]
  },
  B: {
    name: 'Basement Level (B)',
    description: 'Hypermarket, Valet, Car Wash & Convenience Services',
    stores: [
      {
        id: 'carrefour',
        name: 'Carrefour Hypermarket',
        brand: 'Carrefour',
        category: 'shops',
        subCategory: 'Groceries & Household',
        floor: 'B',
        floorName: 'Basement',
        locationDesc: 'Basement Anchor Wing',
        hours: '08:30 AM - Midnight',
        phone: '+971 800 73232',
        rating: 4.8,
        reviewsCount: 1240,
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600',
        logoText: 'Carrefour',
        color: '#EFF6FF',
        accentColor: '#004E9A',
        walkTimeMin: 2,
        distanceM: 90,
        doorPos: { x: 200, y: 350 },
        badgePos: { x: 170, y: 330 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 200, y: 350 }
        ],
        description: 'Fresh groceries, organic produce, imported gourmet deli, electronics, and home essentials.',
        offers: ['Share Card Bonus: 5X points on all fresh food produce']
      },
      {
        id: 'valet_services',
        name: 'VIP Valet & Car Care',
        brand: 'Valet Parking',
        category: 'services',
        subCategory: 'Automotive & Valet',
        floor: 'B',
        floorName: 'Basement',
        locationDesc: 'Basement Gate 1 Valet Lounge',
        hours: '24 Hours',
        phone: '+971 7 227 9999',
        rating: 4.9,
        reviewsCount: 380,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
        logoText: 'VIP Valet',
        color: '#F4ECE6',
        accentColor: '#8B2525',
        walkTimeMin: 1,
        distanceM: 40,
        doorPos: { x: 300, y: 450 },
        badgePos: { x: 330, y: 470 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 300, y: 450 }
        ],
        description: 'Premium valet drop-off, interior steam disinfection, and eco-friendly waterless car wash.',
        offers: ['Complimentary first 2 hours for Manar Mall app members']
      },
      {
        id: 'currency_exchange',
        name: 'Al Ansari Exchange',
        brand: 'Exchange',
        category: 'services',
        subCategory: 'Financial Services',
        floor: 'B',
        floorName: 'Basement',
        locationDesc: 'Near Hypermarket Entrance',
        hours: '09:00 AM - 11:30 PM',
        phone: '+971 7 227 4555',
        rating: 4.7,
        reviewsCount: 290,
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600',
        logoText: 'Al Ansari',
        color: '#FEF3C7',
        accentColor: '#D97706',
        walkTimeMin: 2,
        distanceM: 70,
        doorPos: { x: 300, y: 310 },
        badgePos: { x: 330, y: 285 },
        pathCoords: [
          { x: 260, y: 550 },
          { x: 300, y: 310 }
        ],
        description: 'Foreign currency exchange, worldwide remittances, and prepaid multi-currency cards.',
        offers: ['Best live exchange rate guarantee with zero transaction fee voucher']
      }
    ],
    amenities: [
      { id: 'restroom_b', type: 'restroom', name: 'Restrooms & Ablution (Basement)', x: 260, y: 260, icon: 'Users' },
      { id: 'elevator_b', type: 'elevator', name: 'Basement Parking Elevators', x: 250, y: 335, icon: 'ChevronsUpDown' },
      { id: 'travelator_b', type: 'escalator', name: 'Cart Travelator to Ground Floor', x: 315, y: 460, icon: 'ArrowUpRight' }
    ]
  }
};

// Quick helper to search all stores across all floors
export function searchAllStores(query = '', categoryFilter = 'all') {
  const normalizedQuery = query.toLowerCase().trim();
  const results = [];

  Object.entries(MALL_DATA).forEach(([floorId, floorData]) => {
    floorData.stores.forEach((store) => {
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
