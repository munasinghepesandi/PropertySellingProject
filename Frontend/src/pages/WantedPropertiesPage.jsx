import React, { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ChevronLeft, ChevronRight, Search, Bell, Lock, ShieldCheck } from 'lucide-react'

const wantedCategories = [
  'House wanted in Sri Lanka',
  'Room wanted in Sri Lanka',
  'Apartment wanted in Sri Lanka',
  'Land wanted in Sri Lanka',
  'Annex wanted in Sri Lanka',
  'Commercial Property wanted in Sri Lanka',
]

const wantedListings = [
  {
    id: 1,
    title: 'Commercial',
    type: 'Commercial Property wanted in Sri Lanka',
    area: 'Colombo 3, Colombo 4, Colombo 5, Colombo 6, Nawala, Nugegoda, Rajagiriya',
    summary: 'This wanted ad is only available to Ultimate members.',
    tag: 'Private',
    badge: 'Ultimate membership',
    daysLeft: 6,
    private: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Wanted house for rent',
    type: 'House wanted in Sri Lanka',
    area: 'Colombo 3, Colombo 4, Colombo 5, Colombo 6, Colombo 7, Colombo 8',
    summary: 'Wanted house for rent Colombo 3 4 5 6 7 8 required 3 bedrooms minimum.',
    tag: 'House',
    badge: 'Featured wanted',
    daysLeft: 5,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Wanted Luxury House For Rent direct Owners Only',
    type: 'House wanted in Sri Lanka',
    area: 'Colombo 3, Colombo 5, Colombo 7, Colombo 8, Ethul Kotte, Nawala, Pita Kotte, Rajagiriya',
    summary: 'Looking for a fully furnished luxury house for a British family near leading British international schools in Colombo.',
    tag: 'House',
    badge: 'Direct owners only',
    daysLeft: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Wanted House For Rent In Pelawatta direct Owners Only',
    type: 'House wanted in Sri Lanka',
    area: 'Battaramulla, Ethul Kotte, Nawala, Pelawatte, Pita Kotte, Rajagiriya',
    summary: 'Looking for a semi furnished or fully furnished house for a foreign national family in and around Overseas School.',
    tag: 'House',
    badge: 'Direct owners only',
    daysLeft: 4,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Wanted house for rent',
    type: 'House wanted in Sri Lanka',
    area: 'Colombo 5, Dehiwala',
    summary: 'This wanted ad is only available to Ultimate members.',
    tag: 'Private',
    badge: 'Ultimate membership',
    daysLeft: 5,
    private: true,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Wanted 5 Acre Land In Negombo Suburbs',
    type: 'Land wanted in Sri Lanka',
    area: 'Andiambalama, Kimbulapitiya, Negombo',
    summary: 'We are actively seeking a large extent land approx 5 acres in the Negombo area preferably.',
    tag: 'Land',
    badge: 'Urgent requirement',
    daysLeft: 3,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Wanted for Rent Furnished Apartment',
    type: 'Apartment wanted in Sri Lanka',
    area: 'Colombo 2, Colombo 3, Colombo 5, Colombo 7',
    summary: 'Wanted for rent requirement furnished apartment 2 bedroom pool gym.',
    tag: 'Apartment',
    badge: 'Rental wanted',
    daysLeft: 5,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'House wanted 2 3 Bedrooms',
    type: 'House wanted in Sri Lanka',
    area: 'Attidiya, Boralesgamuwa, Dehiwala, Mount Lavinia',
    summary: 'House wanted in Attidiya Boralesgamuwa Dehiwala Mount Lavinia 3 4 bedrooms 2 3 washrooms 1 parking.',
    tag: 'House',
    badge: 'Family wanted',
    daysLeft: 4,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Commercial space wanted in Colombo 3 Colombo 5 Colombo 7',
    type: 'Commercial Property wanted in Sri Lanka',
    area: 'Colombo 3, Colombo 5, Colombo 7',
    summary: 'Commercial space wanted for rent in Colombo 3 5 7 area.',
    tag: 'Commercial',
    badge: 'Business space',
    daysLeft: 6,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Apartment wanted in Colombo 1 2 3',
    type: 'Apartment wanted in Sri Lanka',
    area: 'Colombo 1, Colombo 2, Colombo 3',
    summary: 'Looking for a spacious high-end apartment in prime Colombo locations.',
    tag: 'Apartment',
    badge: 'Premium wanted',
    daysLeft: 3,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Land wanted 50 to 60 Perch in All Colombo 38 Suburbs',
    type: 'Land wanted in Sri Lanka',
    area: 'All Colombo',
    summary: 'Land wanted 50 to 60 perches in Colombo suburbs.',
    tag: 'Land',
    badge: 'Area based',
    daysLeft: 7,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Wanted house for rent in Colombo 5',
    type: 'House wanted in Sri Lanka',
    area: 'Colombo 5',
    summary: 'Looking for a furnished luxury house for rent in Colombo 5.',
    tag: 'House',
    badge: 'Urgent wanted',
    daysLeft: 2,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop',
  },
]

function WantedPropertiesPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [selectedListing, setSelectedListing] = useState(wantedListings[0])
  const [savedIds, setSavedIds] = useState([])

  const pageSize = 6

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase()
    return wantedListings.filter((listing) => {
      const matchesQuery =
        !q ||
        listing.title.toLowerCase().includes(q) ||
        listing.type.toLowerCase().includes(q) ||
        listing.area.toLowerCase().includes(q) ||
        listing.summary.toLowerCase().includes(q)

      const matchesCategory = activeCategory === 'All' || listing.type === activeCategory
      return matchesQuery && matchesCategory
    })
  }, [query, activeCategory])

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageListings = filteredListings.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const goToPage = (nextPage) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages))
  }

  const handleViewListing = (listing) => {
    setSelectedListing(listing)
    document.getElementById('wanted-listing-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSaveListing = (listing) => {
    setSavedIds((current) =>
      current.includes(listing.id) ? current.filter((id) => id !== listing.id) : [...current, listing.id]
    )
    setSelectedListing(listing)
  }

  const handleContactListing = (listing) => {
    const subject = encodeURIComponent(`Wanted property inquiry: ${listing.title}`)
    const body = encodeURIComponent(`Hello,\n\nI am interested in the following wanted property listing:\n\nTitle: ${listing.title}\nType: ${listing.type}\nArea: ${listing.area}\n\nPlease share the next steps.`)
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${subject}&body=${body}`
  }

  const handleNotify = () => {
    document.getElementById('membership-notice')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1800&q=80&auto=format&fit=crop"
          alt="Sri Lanka property search"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-100">🏷️ Wanted Properties</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">View All Wanted Properties</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              House wanted in Sri Lanka, room wanted, apartment wanted, land wanted, annex wanted, and commercial property wanted listings in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Private wanted ads</span>
              <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Ultimate membership access</span>
              <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Sri Lanka wide coverage</span>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">🔍 Search wanted listings</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">List of Houses, Apartments, Land wanted</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If you want to buy a house, apartment or land in Sri Lanka or need to rent a house or room and cannot find a suitable property on our listings, you can submit a wanted ad.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Enter City or Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value)
                    setPage(1)
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                  placeholder="Search wanted ads"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['All', ...wantedCategories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category)
                  setPage(1)
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category ? 'bg-[#08306B] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Top Cities</p>
              <p className="text-xs font-semibold text-slate-500">Kandy included</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Kandy', 'Colombo', 'Battaramulla', 'Athurugiriya', 'Negombo'].map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setQuery(city)}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:border-[#2171B5] hover:text-[#2171B5]"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Type Filter</p>
            <h3 className="mt-2 text-xl font-black text-slate-900">Filter by:</h3>
            <div className="mt-5 space-y-3">
              {wantedCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category)
                    setPage(1)
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    activeCategory === category ? 'bg-[#eff6fd] text-[#08306B]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{category}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#08306B]"><Bell size={16} /> Be the first to know</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Get an instant alert when a buyer or tenant is looking to buy or rent a House, Apartment, Land in Sri Lanka.
              </p>
              <button
                type="button"
                onClick={handleNotify}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 text-sm font-bold text-white transition hover:shadow-lg"
              >
                Notify me
              </button>
            </div>
          </aside>

          <div>
            <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Newest to Oldest</p>
                  <h3 className="mt-1 text-xl font-black text-slate-900">Showing page {currentPage} of {totalPages}</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#eff6fd] px-4 py-2 text-sm font-semibold text-[#08306B]">
                  <ShieldCheck size={16} /> Ultimate Membership listings included
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {pageListings.map((listing) => (
                <article key={listing.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
                  <div className="relative h-52 lg:h-full">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#08306B]">{listing.tag}</span>
                      {listing.private && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                          <Lock size={12} /> Private
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/45 p-3 text-white backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">{listing.badge}</p>
                      <p className="mt-1 text-sm font-semibold">Visible after {listing.daysLeft} days</p>
                    </div>
                  </div>

                  <div className="p-5 lg:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2171B5]">Wanted listing</p>
                        <h4 className="mt-2 text-2xl font-black text-slate-900">{listing.title}</h4>
                        <p className="mt-2 text-sm font-semibold text-slate-500">Area(s) : {listing.area}</p>
                      </div>
                    </div>

                    <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">{listing.summary}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleViewListing(listing)}
                        className="rounded-full bg-[#08306B] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0d4a9f]"
                      >
                        View ad
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveListing(listing)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]"
                      >
                        {savedIds.includes(listing.id) ? 'Saved' : 'Save'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleContactListing(listing)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <span className="rounded-full bg-[#08306B] px-3 py-1 text-white">{currentPage}</span>
                <span>{totalPages}</span>
              </div>

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>

            <div id="wanted-listing-detail" className="mt-8 rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Membership Notice</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">View the latest ads by upgrading to a Ultimate Membership!</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                These ads will be visible to other users after the listed number of days. Private wanted ads remain hidden to non-members.
              </p>
              <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-[#d9e8f6]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2171B5]">Selected listing</p>
                <h4 className="mt-2 text-xl font-black text-slate-900">{selectedListing.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{selectedListing.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{selectedListing.type}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{selectedListing.area}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{savedIds.includes(selectedListing.id) ? 'Saved' : 'Not saved'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WantedPropertiesPage