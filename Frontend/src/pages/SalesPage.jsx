const saleListings = [
  {
    id: 1,
    title: 'Luxury Family House in Kandy',
    location: 'Heerassagala, Kandy',
    price: 'Rs. 18,500,000',
    beds: '4 Beds',
    baths: '3 Baths',
    area: '2,300 sqft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Modern Apartment for Sale',
    location: 'Peradeniya, Kandy',
    price: 'Rs. 25,000,000',
    beds: '3 Beds',
    baths: '2 Baths',
    area: '1,450 sqft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
    badge: 'Hot Deal',
  },
  {
    id: 3,
    title: 'Commercial Land for Sale',
    location: 'Peradeniya, Kandy',
    price: 'Rs. 7,800,000',
    beds: 'N/A',
    baths: 'N/A',
    area: '12 Perches',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
    badge: 'Land',
  },
  {
    id: 4,
    title: 'Luxury Villa with Pool',
    location: 'Kandy Town',
    price: 'Rs. 32,500,000',
    beds: '5 Beds',
    baths: '4 Baths',
    area: '3,800 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
    badge: 'Premium',
  },
  {
    id: 5,
    title: 'Affordable Starter Home',
    location: 'Katugastota, Kandy',
    price: 'Rs. 12,250,000',
    beds: '3 Beds',
    baths: '2 Baths',
    area: '1,600 sqft',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 6,
    title: 'Apartment Near the City',
    location: 'Heerassagala, Kandy',
    price: 'Rs. 21,750,000',
    beds: '2 Beds',
    baths: '2 Baths',
    area: '1,200 sqft',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    id: 7,
    title: 'Modern Family Home',
    location: 'Peradeniya, Kandy',
    price: 'Rs. 16,900,000',
    beds: '4 Beds',
    baths: '3 Baths',
    area: '2,050 sqft',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 8,
    title: 'Hill Country Land Plot',
    location: 'Katugastota, Kandy',
    price: 'Rs. 8,400,000',
    beds: 'N/A',
    baths: 'N/A',
    area: '18 Perches',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
    badge: 'Land',
  },
  {
    id: 9,
    title: 'Luxury Hillside Villa',
    location: 'Heerassagala, Kandy',
    price: 'Rs. 29,500,000',
    beds: '5 Beds',
    baths: '4 Baths',
    area: '3,400 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
    badge: 'Premium',
  },
  {
    id: 10,
    title: 'Compact Kandy City Apartment',
    location: 'Kandy Town, Kandy',
    price: 'Rs. 14,250,000',
    beds: '2 Beds',
    baths: '2 Baths',
    area: '980 sqft',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop',
    badge: 'Hot Deal',
  },
  {
    id: 11,
    title: 'Budget Family House Near Town',
    location: 'Katugastota, Kandy',
    price: 'Rs. 49,500,000',
    beds: '4 Beds',
    baths: '2 Baths',
    area: '1,850 sqft',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80&auto=format&fit=crop',
    badge: 'Budget',
  },
  {
    id: 12,
    title: 'Mid-Range Apartment with City Access',
    location: 'Peradeniya, Kandy',
    price: 'Rs. 52,000,000',
    beds: '3 Beds',
    baths: '2 Baths',
    area: '1,320 sqft',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80&auto=format&fit=crop',
    badge: 'Value',
  },
  {
    id: 13,
    title: 'Residential Land in Peaceful Area',
    location: 'Heerassagala, Kandy',
    price: 'Rs. 47,800,000',
    beds: 'N/A',
    baths: 'N/A',
    area: '20 Perches',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
    badge: 'Land',
  },
  {
    id: 14,
    title: 'Small Commercial Building',
    location: 'Kandy Town, Kandy',
    price: 'Rs. 58,750,000',
    beds: 'N/A',
    baths: 'N/A',
    area: '2,100 sqft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop',
    badge: 'Commercial',
  },
]

const filterChips = [
  { label: 'All', value: 'all' },
  { label: 'Houses', value: 'house' },
  { label: 'Apartments', value: 'apartment' },
  { label: 'Land', value: 'land' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Luxury', value: 'luxury' },
];

const TOTAL_LISTINGS = 50;

const expandedSaleListings = Array.from({ length: TOTAL_LISTINGS }, (_, index) => {
  const template = saleListings[index % saleListings.length];
  const generatedId = index + 1;
  const priceBase = Number(String(template.price).replace(/[^\d]/g, '')) || 0;
  const priceVariance = (index % 35) * 125000;
  const priceValue = (Math.max(3500000, priceBase + priceVariance)).toLocaleString('en-US');

  return {
    ...template,
    id: generatedId,
    title: `${template.title} #${generatedId}`,
    price: `Rs. ${priceValue}`,
  };
});

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const filterTypeMap = {
  Houses: 'house',
  Apartments: 'apartment',
  Land: 'land',
  Commercial: 'commercial',
  Luxury: 'luxury',
};

const listingDetailMap = {
  1: {
    type: 'House',
    condition: 'Move-in ready',
    landSize: '16 Perches',
    parking: '2 vehicle slots',
    furnishing: 'Semi-furnished',
    ownership: 'Clear deed available',
    description:
      'Spacious family home with modern interior finishing, private lawn, and easy access to schools and supermarkets in Kandy.',
    features: ['Garden', 'Balcony', 'CCTV', 'Backup water tank'],
    contact: { name: 'Nimal Perera', phone: '+94 77 345 6789', posted: '2 days ago' },
  },
  2: {
    type: 'Apartment',
    condition: 'Excellent',
    landSize: 'Tower block C',
    parking: '1 reserved slot',
    furnishing: 'Fully furnished',
    ownership: 'Condominium title',
    description:
      'Modern apartment unit with open-plan living, elevator access, and security service close to Peradeniya road links.',
    features: ['Gym access', '24/7 security', 'Lift', 'Visitor parking'],
    contact: { name: 'Hashini Fernando', phone: '+94 71 225 1133', posted: '5 days ago' },
  },
  3: {
    type: 'Land',
    condition: 'Development ready',
    landSize: '12 Perches',
    parking: 'Road frontage access',
    furnishing: 'Not applicable',
    ownership: 'Survey plan and deed',
    description:
      'Commercial-grade land parcel in a high-traffic area, ideal for shop lots or a mixed-use development project.',
    features: ['Main road access', 'Water line nearby', 'Electricity access', 'High visibility'],
    contact: { name: 'Kavinda Holdings', phone: '+94 81 456 0021', posted: '1 week ago' },
  },
  4: {
    type: 'Villa',
    condition: 'Luxury finish',
    landSize: '24 Perches',
    parking: '3 covered slots',
    furnishing: 'Fully furnished',
    ownership: 'Clear deed available',
    description:
      'Premium villa with private pool, landscaped outdoor area, and premium fittings designed for high-end living.',
    features: ['Private pool', 'Home office', 'BBQ deck', 'Smart entry'],
    contact: { name: 'Elite Homes LK', phone: '+94 77 900 4545', posted: '3 days ago' },
  },
  5: {
    type: 'House',
    condition: 'Good condition',
    landSize: '10 Perches',
    parking: '1 covered slot',
    furnishing: 'Partly furnished',
    ownership: 'Clear deed available',
    description:
      'Affordable starter home in a quiet residential pocket with practical layout and convenient daily commuting options.',
    features: ['Boundary wall', 'Front porch', 'Storage room', 'Nearby schools'],
    contact: { name: 'Sanjeewa Realty', phone: '+94 70 771 0022', posted: '6 days ago' },
  },
  6: {
    type: 'Apartment',
    condition: 'Very good',
    landSize: 'Mid-level floor',
    parking: '1 slot',
    furnishing: 'Semi-furnished',
    ownership: 'Condominium title',
    description:
      'City-adjacent apartment with practical floor plan and reliable utilities, perfect for professionals and couples.',
    features: ['Intercom', 'Backup generator', 'Lift access', 'Visitor lobby'],
    contact: { name: 'Ayesh Property Hub', phone: '+94 75 212 4545', posted: '4 days ago' },
  },
  7: {
    type: 'House',
    condition: 'Move-in ready',
    landSize: '14 Perches',
    parking: '2 slots',
    furnishing: 'Semi-furnished',
    ownership: 'Clear deed available',
    description:
      'Modern family residence with large living spaces, good daylight, and reliable neighborhood services.',
    features: ['Solar hot water', 'Laundry area', 'Garden space', 'Wide access road'],
    contact: { name: 'Dulanjana Estates', phone: '+94 72 448 8899', posted: '2 weeks ago' },
  },
  8: {
    type: 'Land',
    condition: 'Ready for construction',
    landSize: '18 Perches',
    parking: 'Road frontage access',
    furnishing: 'Not applicable',
    ownership: 'Survey plan and deed',
    description:
      'Scenic hill-country land suitable for private residence or boutique project with excellent natural surroundings.',
    features: ['Scenic views', 'Quiet area', 'Water connection nearby', 'Good soil level'],
    contact: { name: 'Kandy Land Desk', phone: '+94 81 223 1199', posted: '3 days ago' },
  },
  9: {
    type: 'Villa',
    condition: 'Premium',
    landSize: '22 Perches',
    parking: '3 slots',
    furnishing: 'Fully furnished',
    ownership: 'Clear deed available',
    description:
      'Luxury hillside villa with panoramic views, spacious entertainment areas, and high-quality architectural detail.',
    features: ['Panoramic balcony', 'Infinity edge pool', 'Guest suite', 'Security system'],
    contact: { name: 'Prime Luxury Lanka', phone: '+94 77 880 3344', posted: '1 day ago' },
  },
  10: {
    type: 'Apartment',
    condition: 'Excellent',
    landSize: 'City center block',
    parking: '1 slot',
    furnishing: 'Unfurnished',
    ownership: 'Condominium title',
    description:
      'Compact city apartment ideal for first-time buyers seeking central access to transport, shopping, and office zones.',
    features: ['Lift access', 'Security desk', 'Low maintenance', 'Central location'],
    contact: { name: 'CityNest Realty', phone: '+94 76 667 4411', posted: '5 days ago' },
  },
  11: {
    type: 'House',
    condition: 'Good condition',
    landSize: '12 Perches',
    parking: '2 vehicle slots',
    furnishing: 'Semi-furnished',
    ownership: 'Clear deed available',
    description:
      'A practical family house in a convenient location with room to expand and easy access to the town center.',
    features: ['Boundary wall', 'Front garden', 'Water tank', 'Quiet neighbourhood'],
    contact: { name: 'Kandy Homes Desk', phone: '+94 77 610 2233', posted: '2 days ago' },
  },
  12: {
    type: 'Apartment',
    condition: 'Very good',
    landSize: 'Mid-level floor',
    parking: '1 slot',
    furnishing: 'Semi-furnished',
    ownership: 'Condominium title',
    description:
      'Well-maintained apartment unit with efficient layout and quick access to schools, hospitals, and public transport.',
    features: ['Lift access', 'Backup power', 'Security lobby', 'Visitor parking'],
    contact: { name: 'Peradeniya Urban Realty', phone: '+94 71 845 9022', posted: '1 week ago' },
  },
  13: {
    type: 'Land',
    condition: 'Ready for development',
    landSize: '20 Perches',
    parking: 'Road frontage access',
    furnishing: 'Not applicable',
    ownership: 'Survey plan and deed',
    description:
      'Residential land parcel in a calm area, suitable for a private home build or long-term land investment.',
    features: ['Road access', 'Water line nearby', 'Electricity available', 'Good frontage'],
    contact: { name: 'Hill Country Land Office', phone: '+94 81 331 7744', posted: '4 days ago' },
  },
  14: {
    type: 'Commercial',
    condition: 'Operational',
    landSize: '2,100 sqft',
    parking: 'Front parking space',
    furnishing: 'Partly furnished',
    ownership: 'Clear deed available',
    description:
      'Small commercial building in a visible area with steady foot traffic, suitable for office, retail, or service business use.',
    features: ['Road frontage', 'Large display windows', 'Staff room', 'Storage area'],
    contact: { name: 'Kandy Commercial Hub', phone: '+94 77 990 5511', posted: '3 days ago' },
  },
};

export default function SalesPage({ filterType = 'all' }) {
  const [selectedListing, setSelectedListing] = useState(null);
  const [activeCategory, setActiveCategory] = useState(filterTypeMap[filterType] || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState('all');
  const [bedroomFilter, setBedroomFilter] = useState('all');
  const [budgetFilter, setBudgetFilter] = useState('all');
  const kandyLocations = [
    'Kandy Town',
    'Peradeniya',
    'Katugastota',
    'Heerassagala',
    'Gampola',
    'Akurana',
    'Digana',
    'Pilimathalawa',
    'Kundasale',
    'Nawalapitiya',
  ];
  const closeModal = () => setSelectedListing(null);
  const getListingDetails = (listingId) => {
    const normalizedId = ((listingId - 1) % saleListings.length) + 1;
    return listingDetailMap[listingId] || listingDetailMap[normalizedId] || null;
  };

  const selectedListingDetails = selectedListing ? getListingDetails(selectedListing.id) : null;

  const parsePriceMillions = (price) => {
    const numeric = Number(String(price).replace(/[^\d]/g, ''));
    return numeric ? numeric / 1_000_000 : 0;
  };

  const handleContactSeller = (listing) => {
    const phone = getListingDetails(listing.id)?.contact?.phone;
    if (!phone) return;
    const sanitizedPhone = phone.replace(/[^\d+]/g, '');
    window.location.href = `tel:${sanitizedPhone}`;
  };

  const handleWhatsAppSeller = (listing) => {
    const phone = getListingDetails(listing.id)?.contact?.phone;
    if (!phone) return;
    const whatsappPhone = phone.replace(/[^\d]/g, '');
    const message = encodeURIComponent(`Hello, I am interested in ${listing.title} listed at ${listing.price}. Please share more details.`);
    window.open(`https://wa.me/${whatsappPhone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const salesStats = [
    { label: 'Active Listings', value: '50k+' },
    { label: 'Trusted Agents', value: '350+' },
    { label: 'Popular Areas', value: '24' },
    { label: 'Buyer Support', value: '24/7' },
  ];

  const quickPills = [
    'Verified properties',
    'Fast search',
    'Direct contact',
    'Premium locations',
  ];

  const sidebarFeatures = ['Garden', 'Parking', 'Pool', 'Sea View'];

  const locationOptions = ['all', ...kandyLocations];

  // Filtering logic
  const filteredListings = expandedSaleListings.filter((listing) => {
    if (!listing.location.toLowerCase().includes('kandy')) return false;
    if (activeCategory === 'all') return true;
    const title = listing.title.toLowerCase();
    if (activeCategory === 'house') return title.includes('house') || title.includes('villa') || title.includes('home');
    if (activeCategory === 'apartment') return title.includes('apartment');
    if (activeCategory === 'land') return title.includes('land');
    if (activeCategory === 'commercial') return title.includes('commercial');
    if (activeCategory === 'luxury') return title.includes('luxury') || listing.badge?.toLowerCase().includes('premium');
    return true;
  }).filter((listing) => {
    if (locationFilter !== 'all' && !listing.location.toLowerCase().includes(locationFilter.toLowerCase())) return false;
    if (bedroomFilter !== 'all' && !listing.beds.toLowerCase().includes(bedroomFilter)) return false;

    const priceInMillions = parsePriceMillions(listing.price);
    if (budgetFilter === 'under-20' && priceInMillions >= 20) return false;
    if (budgetFilter === '20-50' && (priceInMillions < 20 || priceInMillions > 50)) return false;
    if (budgetFilter === '50-plus' && priceInMillions <= 50) return false;

    return true;
  });

  const listingsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(filteredListings.length / listingsPerPage));
  const startIndex = (currentPage - 1) * listingsPerPage;
  const paginatedListings = filteredListings.slice(startIndex, startIndex + listingsPerPage);
  const visiblePageButtons = (() => {
    const maxButtons = 7;
    if (totalPages <= maxButtons) {
      return Array.from({ length: totalPages }, (_, idx) => idx + 1);
    }

    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  })();

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="relative min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,251,0.94)),url('https://images.unsplash.com/photo-1494526585095-c41746248156?w=1800&q=80&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-100" />
      <section className="border-b border-slate-200/80 bg-white/96 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 font-semibold text-slate-500">
              <Link to="/" className="text-[#2171B5] hover:text-[#08306B]">Home</Link>
              <span>/</span>
              <span className="font-bold text-slate-900">Sales</span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              <span className="rounded-full border border-[#d9e8f6] bg-white px-3 py-2 normal-case tracking-normal text-slate-600">Verified marketplace</span>
              <span className="rounded-full border border-[#d9e8f6] bg-white px-3 py-2 normal-case tracking-normal text-slate-600">Dedicated buyer support</span>
              <button className="rounded-full border border-[#c7ddf1] bg-white px-3.5 py-2 text-[#08306B] normal-case tracking-normal shadow-sm transition hover:border-[#2171B5] hover:bg-[#eff6fd]">
                Talk to Agent
              </button>
              <button className="rounded-full bg-[#2171B5] px-3.5 py-2 text-white normal-case tracking-normal shadow-sm transition hover:bg-[#08306B]">
                Post Your Property
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-xl font-black tracking-[-0.02em] text-slate-900 sm:text-2xl md:text-3xl">Properties for Sale in Kandy ({filteredListings.length} properties)</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Curated Kandy listings with a clean marketplace layout and seller trust.</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {salesStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#d9e8f6] bg-white px-3 py-2.5 shadow-sm">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
                    <p className="mt-1 text-sm font-black text-[#2171B5]">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                {quickPills.map((pill) => (
                  <span key={pill} className="rounded-full bg-[#eff6fd] px-3 py-1.5 ring-1 ring-[#d9e8f6]">
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <button className="rounded-full border border-[#c7ddf1] bg-white px-4 py-2 font-semibold text-[#08306B] shadow-sm transition hover:border-[#2171B5] hover:bg-[#eff6fd]">Save Search</button>
                <button className="rounded-full border border-[#c7ddf1] bg-white px-4 py-2 font-semibold text-[#08306B] shadow-sm transition hover:border-[#2171B5] hover:bg-[#eff6fd]">Create E-Mail Alerts</button>
                <button className="rounded-full border border-[#c7ddf1] bg-white px-4 py-2 font-semibold text-[#08306B] shadow-sm transition hover:border-[#2171B5] hover:bg-[#eff6fd]">Share</button>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#d9e8f6] bg-white p-1.5 shadow-sm">
              <button
                className="h-10 w-10 rounded-full bg-white text-slate-600 transition hover:bg-[#eff6fd] hover:text-[#08306B] disabled:cursor-not-allowed disabled:opacity-40"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                ‹
              </button>
              {visiblePageButtons.map((page) => (
                <button
                  key={page}
                  className={`h-10 w-10 rounded-full text-sm font-bold transition ${page === currentPage ? 'bg-[#2171B5] text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-[#eff6fd] hover:text-[#08306B]'}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="h-10 w-10 rounded-full bg-[#2171B5] text-white transition hover:bg-[#08306B] disabled:cursor-not-allowed disabled:opacity-40"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#d9e8f6] bg-white p-3 shadow-sm">
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
              <label className="rounded-xl border border-[#d9e8f6] bg-[#f7fbff] px-3 py-2">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Location</p>
                <select
                  value={locationFilter}
                  onChange={(event) => {
                    setLocationFilter(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none"
                >
                  {locationOptions.map((location) => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'Any location' : location}
                    </option>
                  ))}
                </select>
              </label>

              <label className="rounded-xl border border-[#d9e8f6] bg-[#f7fbff] px-3 py-2">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Bedrooms</p>
                <select
                  value={bedroomFilter}
                  onChange={(event) => {
                    setBedroomFilter(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none"
                >
                  <option value="all">Any</option>
                  <option value="2">2 Beds</option>
                  <option value="3">3 Beds</option>
                  <option value="4">4 Beds</option>
                  <option value="5">5 Beds</option>
                </select>
              </label>

              <label className="rounded-xl border border-[#d9e8f6] bg-[#f7fbff] px-3 py-2">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Budget</p>
                <select
                  value={budgetFilter}
                  onChange={(event) => {
                    setBudgetFilter(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none"
                >
                  <option value="all">Any to Any</option>
                  <option value="under-20">Under Rs. 20M</option>
                  <option value="20-50">Rs. 20M - 50M</option>
                  <option value="50-plus">Rs. 50M+</option>
                </select>
              </label>

              <button
                type="button"
                onClick={() => {
                  setCurrentPage(1);
                  document.getElementById('sales-listings-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="rounded-xl bg-[#2171B5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#08306B]"
              >
                Search
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="font-bold text-slate-900">Filter by:</span>
              {filterChips.map((chip) => (
                <button
                  key={chip.value}
                  className={`rounded-full border px-4 py-2 transition shadow-sm ${activeCategory === chip.value ? 'border-[#2171B5] bg-[#2171B5] text-white' : 'border-[#c7ddf1] bg-white hover:border-[#2171B5] hover:text-[#08306B]'}`}
                  onClick={() => {
                    setActiveCategory(chip.value);
                    setCurrentPage(1);
                  }}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="font-bold text-slate-900">Top Cities:</span>
              {['Kandy'].map((city) => (
                <button key={city} className="rounded-full border border-[#c7ddf1] bg-white px-4 py-2 shadow-sm transition hover:border-[#2171B5] hover:text-[#08306B] hover:bg-[#eff6fd]">
                  {city}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#d9e8f6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2171B5] shadow-sm">
              Kandy only
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 md:gap-8 px-3 pb-12 sm:px-6 md:pb-14 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <aside className={`lg:sticky lg:top-6 h-fit rounded-2xl md:rounded-[2rem] border border-[#d9e8f6] bg-white p-4 md:p-6 shadow-[0_18px_40px_rgba(8,48,107,0.05)] ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">Refine search</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.01em] text-slate-900">Filter Results</h2>
            </div>
            <div className="rounded-full bg-[#eff6fd] px-3 py-1 text-xs font-bold text-[#08306B]">
              {filteredListings.length} found
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <p className="text-sm leading-6 text-slate-600">Use simple filters to narrow your search results.</p>
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Location</label>
              <input className="w-full rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2171B5] focus:bg-white focus:ring-2 focus:ring-[#d5e9fb]" placeholder="Kandy, Colombo, Galle..." />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Property Type</label>
              <select className="w-full rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:bg-white focus:ring-2 focus:ring-[#d5e9fb]">
                <option>Any</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Land</option>
                <option>Commercial</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Price Range</label>
              <select className="w-full rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:bg-white focus:ring-2 focus:ring-[#d5e9fb]">
                <option>Any</option>
                <option>Under Rs. 10M</option>
                <option>Rs. 10M - Rs. 25M</option>
                <option>Rs. 25M - Rs. 50M</option>
                <option>Rs. 50M+</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Features</label>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {sidebarFeatures.map((item) => (
                  <span key={item} className="rounded-xl bg-[#eff6fd] px-3 py-2.5 text-center text-[#08306B] ring-1 ring-[#c7ddf1]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3.5 font-bold text-white transition hover:translate-y-[-1px] hover:shadow-lg hover:shadow-[#08306B]/15">
              Apply Filters
            </button>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#2171B5] to-[#08306B] p-5 text-white shadow-[0_18px_50px_rgba(8,48,107,0.16)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Monetization</p>
            <h3 className="mt-2 text-xl font-black">List your property today.</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">Reach thousands of buyers and sellers across Sri Lanka.</p>
            <button className="mt-4 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#08306B] transition hover:bg-[#eff6fd]">
              Post Your Ad
            </button>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 rounded-[1.5rem] border border-[#d9e8f6] bg-white px-4 py-4 shadow-[0_14px_25px_rgba(8,48,107,0.05)] md:px-5">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#2171B5]">Sales Listings</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] text-slate-900">Browse Properties</h2>
            </div>
            <p className="text-sm text-slate-500">Showing {paginatedListings.length} of {filteredListings.length} properties</p>
          </div>

          <div id="sales-listings-grid" className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
            {paginatedListings.map((listing) => (
              <article
                key={listing.id}
                className="group overflow-hidden rounded-2xl md:rounded-[2rem] bg-white shadow-[0_16px_38px_rgba(8,48,107,0.05)] ring-1 ring-[#d9e8f6] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(8,48,107,0.09)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-48 md:h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08306B]/35 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#08306B] shadow-sm">
                    {listing.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#2171B5] to-[#08306B] px-3 py-1.5 text-sm font-black text-white shadow-sm">
                    {listing.price}
                  </span>
                </div>

                <div className="p-4 md:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">{listing.location}</p>
                  <h3 className="mt-2 text-lg md:text-xl font-black tracking-[-0.01em] text-slate-900 line-clamp-2">{listing.title}</h3>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs md:text-sm">
                    {[listing.beds, listing.baths, listing.area].map((item) => (
                      <div key={item} className="rounded-xl md:rounded-2xl bg-[#eff6fd] px-2 md:px-3 py-2 md:py-3 font-semibold text-[#08306B] ring-1 ring-[#d9e8f6] text-xs md:text-sm">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3">
                    <button
                      className="w-full sm:w-auto rounded-lg md:rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white transition hover:shadow-lg hover:shadow-[#08306B]/20"
                      onClick={() => setSelectedListing(listing)}
                    >
                      View Details
                    </button>
                    <div className="hidden sm:flex items-center gap-2">
                      <button
                        className="rounded-xl border border-[#c7ddf1] px-4 py-3 text-sm font-bold text-[#08306B] transition hover:border-[#2171B5] hover:text-[#2171B5] hover:bg-[#eff6fd]"
                        onClick={() => handleContactSeller(listing)}
                      >
                        Contact Seller
                      </button>
                      <button
                        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                        onClick={() => handleWhatsAppSeller(listing)}
                      >
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Kandy Featured Section */}
          <div className="mt-14 rounded-2xl md:rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-br from-[#f7fbff] to-[#eef6ff] p-6 md:p-10 shadow-[0_18px_40px_rgba(8,48,107,0.04)]">
            <div className="mb-8">
              <span className="inline-flex rounded-full border border-[#c7ddf1] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] shadow-sm text-[#2171B5]">
                Featured Region
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-black text-slate-900">Properties in Kandy</h3>
              <p className="mt-2 text-slate-600">Browse beautiful properties in the heart of Sri Lanka's hill country</p>
            </div>

            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredListings.slice(0, 6).map((listing) => (
                <article
                  key={listing.id}
                  className="group overflow-hidden rounded-xl md:rounded-[1.5rem] bg-white shadow-lg ring-1 ring-[#d9e8f6] transition hover:shadow-xl hover:ring-[#c7ddf1]"
                >
                  <div className="relative overflow-hidden h-40 md:h-48">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-[#2171B5] to-[#08306B] px-2.5 md:px-3 py-1 text-xs font-bold text-white">
                      {listing.price.replace('Rs. ', '')}
                    </span>
                  </div>
                  <div className="p-4 md:p-5">
                    <h4 className="font-black tracking-[-0.01em] text-slate-900 text-base line-clamp-2">{listing.title}</h4>
                    <p className="mt-2 text-xs text-[#2171B5]">{listing.location}</p>
                    <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-3 py-2 text-xs md:text-sm font-bold text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                      View Property
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 mb-4">Explore all Kandy properties and opportunities</p>
              <Link
                to="/kandy"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 font-bold text-white transition hover:shadow-lg hover:shadow-[#08306B]/20"
              >
                View Kandy Listings
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {selectedListing && (
            <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-slate-950/55 p-3 md:p-4 backdrop-blur-sm">
              <div className="relative w-full max-w-3xl rounded-t-3xl md:rounded-[1.75rem] bg-white p-4 md:p-6 shadow-2xl ring-1 ring-[#d9e8f6] max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute right-4 md:right-5 top-4 md:top-5 text-2xl font-bold text-slate-400 transition hover:text-slate-700"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  ×
                </button>
                <img
                  src={selectedListing.image}
                  alt={selectedListing.title}
                  className="mb-4 h-48 md:h-56 w-full rounded-2xl object-cover"
                />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">{selectedListing.location}</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">{selectedListing.title}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">{selectedListing.badge}</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">{selectedListing.price}</span>
                  {selectedListingDetails?.type && (
                    <span className="rounded-full bg-[#eff6fd] px-3 py-1 text-xs font-bold text-[#08306B] ring-1 ring-[#d9e8f6]">{selectedListingDetails.type}</span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{selectedListingDetails?.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 text-center text-xs md:text-sm">
                  <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListing.beds}</div>
                  <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListing.baths}</div>
                  <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListing.area}</div>
                  <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListingDetails?.landSize}</div>
                  <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListingDetails?.parking}</div>
                  <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListingDetails?.condition}</div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f8fbff] p-4 ring-1 ring-[#d9e8f6]">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2171B5]">Ownership & Setup</p>
                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                      <p><span className="font-bold text-slate-800">Ownership:</span> {selectedListingDetails?.ownership}</p>
                      <p><span className="font-bold text-slate-800">Furnishing:</span> {selectedListingDetails?.furnishing}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#f8fbff] p-4 ring-1 ring-[#d9e8f6]">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2171B5]">Seller Contact</p>
                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                      <p><span className="font-bold text-slate-800">Agent:</span> {selectedListingDetails?.contact?.name}</p>
                      <p><span className="font-bold text-slate-800">Phone:</span> {selectedListingDetails?.contact?.phone}</p>
                      <p><span className="font-bold text-slate-800">Posted:</span> {selectedListingDetails?.contact?.posted}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2171B5]">Property Highlights</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedListingDetails?.features?.map((feature) => (
                      <span key={feature} className="rounded-full bg-[#eff6fd] px-3 py-1.5 text-xs font-semibold text-[#08306B] ring-1 ring-[#d9e8f6]">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="mt-6 w-full rounded-lg md:rounded-2xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 md:py-3.5 font-bold text-sm md:text-base text-white transition hover:shadow-lg hover:shadow-[#08306B]/20"
                  onClick={() => handleContactSeller(selectedListing)}
                >
                  Call Now
                </button>
                <button
                  className="mt-3 w-full rounded-lg md:rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 md:py-3.5 font-bold text-sm md:text-base text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                  onClick={() => handleWhatsAppSeller(selectedListing)}
                >
                  WhatsApp Seller
                </button>
                <button
                  className="mt-3 w-full rounded-lg md:rounded-2xl bg-slate-900 px-4 py-3 md:py-3.5 font-bold text-sm md:text-base text-white transition hover:bg-slate-800"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </section>

      <Footer />
    </div>
  )
}

