const filterChips = [
  { label: 'All', value: 'all' },
  { label: 'Houses', value: 'house' },
  { label: 'Apartments', value: 'apartment' },
  { label: 'Land', value: 'land' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Luxury', value: 'luxury' },
];

import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { API_BASE_URL } from "../utils/auth";

const DEFAULT_FILTERS = {
  location: '',
  propertyType: '',
  maxPrice: '',
  bedrooms: '',
  priceRange: '',
};

function mapFilterTypeToCategory(filterType) {
  const normalized = (filterType || '').toLowerCase();

  if (normalized.includes('house')) return 'house';
  if (normalized.includes('apartment')) return 'apartment';
  if (normalized.includes('land')) return 'land';
  if (normalized.includes('commercial')) return 'commercial';
  if (normalized.includes('luxury')) return 'luxury';
  return 'all';
}

function normalizePropertyType(value) {
  const normalized = value.trim().toLowerCase();

  if (normalized === 'houses' || normalized === 'house' || normalized === 'villa' || normalized === 'villas') {
    return 'house';
  }

  if (normalized === 'apartments' || normalized === 'apartment') {
    return 'apartment';
  }

  if (normalized === 'land' || normalized === 'lands') {
    return 'land';
  }

  if (normalized === 'commercial' || normalized === 'commercials') {
    return 'commercial';
  }

  if (normalized === 'luxury' || normalized === 'luxurious' || normalized === 'premium') {
    return 'luxury';
  }

  return normalized;
}

function parseCurrency(value) {
  const numeric = Number(String(value).replace(/[^\d]/g, ''));
  return Number.isNaN(numeric) || numeric <= 0 ? '' : numeric;
}

function getPriceBounds(range) {
  switch (range) {
    case 'under-10m':
      return { maxPrice: 10000000 };
    case '10m-25m':
      return { minPrice: 10000000, maxPrice: 25000000 };
    case '25m-50m':
      return { minPrice: 25000000, maxPrice: 50000000 };
    case '50m-plus':
      return { minPrice: 50000000 };
    default:
      return {};
  }
}

function normalizeListing(listing) {
  return {
    ...listing,
    title: listing.title || 'Property Listing',
    location: listing.location || 'Sri Lanka',
    price: listing.price || 'Price on request',
    beds: listing.beds || 'N/A',
    baths: listing.baths || 'N/A',
    area: listing.area || 'N/A',
    image: listing.image || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
    badge: listing.badge || 'Featured',
  };
}

export default function SalesPage({ filterType }) {
  const [selectedListing, setSelectedListing] = useState(null);
  const [activeCategory, setActiveCategory] = useState(() => mapFilterTypeToCategory(filterType));
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const closeModal = () => setSelectedListing(null);

  useEffect(() => {
    let cancelled = false;

    const fetchListings = async () => {
      setLoading(true);
      setError('');

      try {
        const params = new URLSearchParams();

        if (activeCategory !== 'all') {
          params.set('category', activeCategory);
        }

        if (filters.location.trim()) {
          params.set('location', filters.location.trim());
        }

        if (filters.propertyType.trim()) {
          params.set('type', normalizePropertyType(filters.propertyType));
        }

        if (filters.bedrooms.trim()) {
          const bedrooms = Number(filters.bedrooms);
          if (!Number.isNaN(bedrooms) && bedrooms > 0) {
            params.set('bedrooms', String(bedrooms));
          }
        }

        if (filters.maxPrice.trim()) {
          const parsedMaxPrice = parseCurrency(filters.maxPrice);
          if (parsedMaxPrice) {
            params.set('maxPrice', String(parsedMaxPrice));
          }
        }

        if (filters.priceRange) {
          const selectedRange = getPriceBounds(filters.priceRange);

          if (selectedRange.minPrice) {
            params.set('minPrice', String(selectedRange.minPrice));
          }

          if (selectedRange.maxPrice) {
            params.set('maxPrice', String(selectedRange.maxPrice));
          }
        }

        const query = params.toString();
        const response = await fetch(`${API_BASE_URL}/sales/listings${query ? `?${query}` : ''}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Failed to load sales listings');
        }

        if (!cancelled) {
          setListings((Array.isArray(data.data) ? data.data : []).map(normalizeListing));
        }
      } catch (fetchError) {
        if (!cancelled) {
          setListings([]);
          setError(fetchError.message || 'Failed to load sales listings');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchListings();

    return () => {
      cancelled = true;
    };
  }, [activeCategory, filters]);

  // Filtering logic
  const filteredListings = listings;

  return (
    <div className="min-h-screen  text-slate-900">
      <Navbar/>
      <section className="relative min-h-[36vh] overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/40 " />
        <img
          src="https://d348s9iu5fkczb.cloudfront.net/0d02a111-09e3-4fd4-914a-c81ba65c485d.jpg"
          alt="Sales banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100"
          loading="lazy"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur">
                Lanka Property Sales
              </span>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Buy Your Dream Property Today
              </h1>
              <p className="max-w-2xl text-base text-white/85 sm:text-lg">
                Explore verified listings of houses, apartments, land, and commercial properties across Sri Lanka. Find your perfect home or investment with ease.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Verified Listings</span>
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Fast Search</span>
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Direct Seller Contact</span>
              </div>
            </div>

            <div className="rounded-4xl bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2171B5]">Quick Search</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                  placeholder="City or area"
                  value={filters.location}
                  onChange={(event) => setFilters((current) => ({ ...current, location: event.target.value }))}
                />
                <input
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                  placeholder="Property type"
                  value={filters.propertyType}
                  onChange={(event) => setFilters((current) => ({ ...current, propertyType: event.target.value }))}
                />
                <input
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                  placeholder="Max price"
                  value={filters.maxPrice}
                  onChange={(event) => setFilters((current) => ({ ...current, maxPrice: event.target.value }))}
                />
                <input
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                  placeholder="Bedrooms"
                  value={filters.bedrooms}
                  onChange={(event) => setFilters((current) => ({ ...current, bedrooms: event.target.value }))}
                />
              </div>
              <button
                className="mt-4 w-full rounded-xl bg-[#2171B5] px-4 py-3 font-bold text-white transition hover:bg-[#08306B]"
                type="button"
              >
                Search Sales Listings
              </button>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-[#08306B]">{loading ? '...' : `${filteredListings.length}`}</p>
                  <p className="text-slate-500">Listings</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-[#08306B]">350+</p>
                  <p className="text-slate-500">Agents</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-[#08306B]">24/7</p>
                  <p className="text-slate-500">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterChips.map((chip) => (
            <button
              key={chip.value}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition border-2 ${
                activeCategory === chip.value
                  ? 'bg-[#08306B] text-white border-[#08306B] shadow-md scale-105'
                  : 'bg-white text-[#08306B] border-[#08306B] hover:bg-[#2171B5] hover:text-white'
              }`}
              onClick={() => setActiveCategory(chip.value)}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <aside className="rounded-[1.75rem] bg-white p-6 shadow-lg ring-1 ring-slate-200 h-fit">
          <h2 className="text-2xl font-black text-slate-800">Filter Sales</h2>
          <p className="mt-2 text-sm text-slate-500">Refine the search like a real sales portal.</p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Location</label>
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                placeholder="Kandy, Colombo, Galle..."
                value={filters.location}
                onChange={(event) => setFilters((current) => ({ ...current, location: event.target.value }))}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Property Type</label>
              <select
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                value={filters.propertyType}
                onChange={(event) => setFilters((current) => ({ ...current, propertyType: event.target.value }))}
              >
                <option value="">Any</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Price Range</label>
              <select
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
                value={filters.priceRange}
                onChange={(event) => setFilters((current) => ({ ...current, priceRange: event.target.value }))}
              >
                <option value="">Any</option>
                <option value="under-10m">Under Rs. 10M</option>
                <option value="10m-25m">Rs. 10M - Rs. 25M</option>
                <option value="25m-50m">Rs. 25M - Rs. 50M</option>
                <option value="50m-plus">Rs. 50M+</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Features</label>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Garden', 'Parking', 'Pool', 'Sea View'].map((item) => (
                  <span key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-center text-slate-600 ring-1 ring-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="w-full rounded-xl bg-linear-to-r from-[#2171B5] to-[#08306B] px-4 py-3 font-bold text-white transition hover:scale-[1.02]"
              type="button"
            >
              Apply Filters
            </button>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2171B5]">Sales Listings</p>
              <h2 className="mt-2 text-3xl font-black text-slate-800">Recommended properties</h2>
            </div>
            <p className="text-sm text-slate-500">Showing {loading ? '...' : filteredListings.length} properties</p>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {!loading && filteredListings.length === 0 && !error && (
              <div className="col-span-full rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center text-slate-500 shadow-sm">
                No listings match the current filters.
              </div>
            )}

            {filteredListings.map((listing) => (
              <article
                key={listing.id}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative">
                  <img src={listing.image} alt={listing.title} className="h-56 w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#2171B5] shadow-sm">
                    {listing.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-[#08306B] px-3 py-1 text-sm font-bold text-white shadow-sm">
                    {listing.price}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{listing.location}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-800">{listing.title}</h3>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                    {[listing.beds, listing.baths, listing.area].map((item) => (
                      <div key={item} className="rounded-xl bg-slate-50 px-3 py-3 font-semibold text-slate-600 ring-1 ring-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      className="rounded-xl bg-[#2171B5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#08306B]"
                      onClick={() => setSelectedListing(listing)}
                    >
                      View Details
                    </button>
                    <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                      Contact Seller
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Modal for property details */}
          {selectedListing && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <button
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-700 text-2xl font-bold"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  ×
                </button>
                <img
                  src={selectedListing.image}
                  alt={selectedListing.title}
                  className="mb-4 h-56 w-full rounded-xl object-cover"
                />
                <h2 className="text-2xl font-bold mb-2 text-[#08306B]">{selectedListing.title}</h2>
                <p className="text-sm text-slate-500 mb-1">{selectedListing.location}</p>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded bg-[#2171B5] px-3 py-1 text-xs font-bold text-white">{selectedListing.badge}</span>
                  <span className="rounded bg-[#08306B] px-3 py-1 text-xs font-bold text-white">{selectedListing.price}</span>
                </div>
                {selectedListing.description && (
                  <p className="mb-3 text-sm leading-6 text-slate-600">{selectedListing.description}</p>
                )}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
                  <div className="rounded-xl bg-slate-50 px-3 py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListing.beds}</div>
                  <div className="rounded-xl bg-slate-50 px-3 py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListing.baths}</div>
                  <div className="rounded-xl bg-slate-50 px-3 py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedListing.area}</div>
                </div>
                <button
                  className="w-full rounded-xl bg-[#2171B5] px-4 py-3 font-bold text-white transition hover:bg-[#08306B]"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 rounded-[1.75rem] bg-linear-to-r from-[#08306B] to-[#2171B5] p-6 text-white shadow-xl">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Need help selling?</p>
                <h3 className="mt-2 text-2xl font-black">List your property on Lanka Property</h3>
                <p className="mt-2 max-w-2xl text-sm text-white/85">A clean sales page like leading property websites, built for Sri Lankan buyers and sellers.</p>
              </div>
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#08306B] shadow-md transition hover:bg-slate-100">
                Post Your Ad
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
