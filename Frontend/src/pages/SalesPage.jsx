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
    location: 'Colombo 05',
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
    location: 'Negombo',
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
    location: 'Kottawa',
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
    location: 'Nugegoda',
    price: 'Rs. 21,750,000',
    beds: '2 Beds',
    baths: '2 Baths',
    area: '1,200 sqft',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80&auto=format&fit=crop',
    badge: 'Popular',
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

import React, { useState } from "react";

export default function SalesPage() {
  const [selectedListing, setSelectedListing] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const closeModal = () => setSelectedListing(null);

  // Filtering logic
  const filteredListings = saleListings.filter((listing) => {
    if (activeCategory === 'all') return true;
    const title = listing.title.toLowerCase();
    if (activeCategory === 'house') return title.includes('house') || title.includes('villa') || title.includes('home');
    if (activeCategory === 'apartment') return title.includes('apartment');
    if (activeCategory === 'land') return title.includes('land');
    if (activeCategory === 'commercial') return title.includes('commercial');
    if (activeCategory === 'luxury') return title.includes('luxury') || listing.badge?.toLowerCase().includes('premium');
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop"
          alt="Sales banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur">
                Lanka Property Sales
              </span>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Buy properties with a clean, premium sales page.
              </h1>
              <p className="max-w-2xl text-base text-white/85 sm:text-lg">
                Search houses, apartments, land, and commercial spaces across Sri Lanka with a layout inspired by leading property portals.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Verified Listings</span>
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Fast Search</span>
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Direct Seller Contact</span>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2171B5]">Quick Search</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="City or area" />
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Property type" />
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Max price" />
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Bedrooms" />
              </div>
              <button className="mt-4 w-full rounded-xl bg-[#2171B5] px-4 py-3 font-bold text-white transition hover:bg-[#08306B]">
                Search Sales Listings
              </button>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-[#08306B]">1.2k+</p>
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
              <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Kandy, Colombo, Galle..." />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Property Type</label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]">
                <option>Any</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Land</option>
                <option>Commercial</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Price Range</label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]">
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
                {['Garden', 'Parking', 'Pool', 'Sea View'].map((item) => (
                  <span key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-center text-slate-600 ring-1 ring-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 font-bold text-white transition hover:scale-[1.02]">
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
            <p className="text-sm text-slate-500">Showing {filteredListings.length} properties</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
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

          <div className="mt-8 rounded-[1.75rem] bg-gradient-to-r from-[#08306B] to-[#2171B5] p-6 text-white shadow-xl">
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
