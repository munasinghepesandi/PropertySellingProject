import React, { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ArrowRight, Bell, ChevronLeft, ChevronRight, Heart, Lock, Search, ShieldCheck } from 'lucide-react'

const houseWantedListings = [
  {
    id: 5899421,
    title: 'Wanted house for rent',
    area: 'Colombo 3, Colombo 4, Colombo 5, Colombo 6, Colombo 7, Colombo 8',
    summary: 'Wanted house for rent Colombo 3 4 5 6 7 8 required 3 bedrooms minimum.',
    locationHint: 'Colombo 3 / 4 / 5 / 6 / 7 / 8',
    badge: 'Private',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5899674,
    title: 'Wanted Luxury House For Rent direct Owners Only',
    area: 'Colombo 3, Colombo 5, Colombo 7, Colombo 8, Ethul Kotte, Nawala, Pita Kotte, Rajagiriya',
    summary: 'Looking for a fully furnished luxury house for a British family near leading British international schools in Colombo.',
    locationHint: 'Prime Colombo suburbs',
    badge: 'Direct owners only',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5899670,
    title: 'Wanted House For Rent In Pelawatta direct Owners Only',
    area: 'Battaramulla, Ethul Kotte, Nawala, Pelawatte, Pita Kotte, Rajagiriya',
    summary: 'Looking for a semi furnished or fully furnished house for a foreign national family in and around Overseas School.',
    locationHint: 'Pelawatta / Battaramulla',
    badge: 'Direct owners only',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5897327,
    title: 'House wanted 2 3 Bedrooms',
    area: 'Attidiya, Boralesgamuwa, Dehiwala, Mount Lavinia',
    summary: 'House for wanted in Attidiya Boralesgamuwa Dehiwala Mount Lavinia 3 4 Bedrooms 2 3 Washrooms 1 parking.',
    locationHint: 'South Colombo',
    badge: 'Family wanted',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5896989,
    title: 'Houses wanted in Battaramulla Talawathugoda Malabe',
    area: 'All Colombo, Battaramulla',
    summary: 'Hi, we are based in Thalawathugoda and have clients looking to rent properties around Battaramulla Talawathugoda side.',
    locationHint: 'Battaramulla / Talawathugoda',
    badge: 'Client request',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5896336,
    title: 'House wanted in Colombo 5',
    area: 'Colombo 5',
    summary: 'Looking for a Furnished Luxury House for Rent Colombo 5 seeking a well maintained fully furnished property.',
    locationHint: 'Colombo 5',
    badge: 'Urgent wanted',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5887790,
    title: 'Wanted House for Rent',
    area: 'Kadawatha, Kelaniya, Kiribathgoda',
    summary: 'We are looking for a comfortable house for rent in a peaceful and convenient residential area ideal for a family.',
    locationHint: 'Kadawatha / Kelaniya / Kiribathgoda',
    badge: 'Rental wanted',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5887769,
    title: 'Wanted Architecturally Designed Modern House',
    area: 'Battaramulla, Nawala, Pelawatte, Rajagiriya, Thalawathugoda',
    summary: 'We are actively seeking an architecturally designed modern luxury house in a prime residential area.',
    locationHint: 'Luxury residential belt',
    badge: 'Premium wanted',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5882917,
    title: 'House Wanted from Millennium City Athurugiriya',
    area: 'Athurugiriya',
    summary: 'House wanted from Millennium City Athurugiriya preferred Paradise level 1 and 2.',
    locationHint: 'Athurugiriya',
    badge: 'Local wanted',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5882916,
    title: 'Seeking Gated Community House',
    area: 'Athurugiriya, Hokandara, Malabe, Nawala, Rajagiriya',
    summary: 'Location preference Nawala Rajagiriya Ethul Kotte Pita Kotte Thalawathugoda Pelawatta Madiwela Malabe.',
    locationHint: 'Gated communities',
    badge: 'Gated community',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9bff7c1?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5882914,
    title: 'Wanted House for Rent from Pelawatte',
    area: 'Pelawatte, Thalawathugoda',
    summary: 'Wanted house for rent from Pelawatta should be close to the Overseas School of Colombo.',
    locationHint: 'Pelawatte / Thalawathugoda',
    badge: 'School zone',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5881987,
    title: 'Urgently Seeking House for Rent in Gated Community Millennium City Athurugiriya',
    area: 'Athurugiriya',
    summary: 'Looking for a 2 bedroom house in a gated community for rent with refrigerator and other essentials.',
    locationHint: 'Athurugiriya',
    badge: 'Urgent requirement',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
  {
    id: 5875978,
    title: 'Wanted Luxury House for rent',
    area: 'Colombo 2, Colombo 3, Colombo 4, Colombo 5, Colombo 6',
    summary: 'Wanted Luxury House for rent Bedrooms 8 Bathrooms 5 furnished or unfurnished AC.',
    locationHint: 'Inner Colombo',
    badge: 'Luxury wanted',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80&auto=format&fit=crop',
    private: false,
  },
]

const featuredProjects = [
  'The Elizabeth Colombo 07',
  'Mon Vie',
  'Marina Square',
  'The Residence @ VERDANT SQUARE',
  'ASTORIA',
  'Lotus Villa',
]

const topCities = [
  'Colombo',
  'Kandy',
  'Battaramulla',
  'Athurugiriya',
  'Pelawatte',
  'Thalawathugoda',
  'Nawala',
  'Rajagiriya',
  'Dehiwala',
]

function HousesWantedPage() {
  const [query, setQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [page, setPage] = useState(1)
  const [savedIds, setSavedIds] = useState([])
  const [selectedListing, setSelectedListing] = useState(houseWantedListings[0])

  const pageSize = 4

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase()
    const location = locationQuery.trim().toLowerCase()

    return houseWantedListings.filter((listing) => {
      const matchesQuery =
        !q ||
        listing.title.toLowerCase().includes(q) ||
        listing.summary.toLowerCase().includes(q) ||
        listing.area.toLowerCase().includes(q)

      const matchesLocation = !location || listing.area.toLowerCase().includes(location) || listing.locationHint.toLowerCase().includes(location)

      return matchesQuery && matchesLocation
    })
  }, [query, locationQuery])

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageListings = filteredListings.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const goToPage = (nextPage) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages))
  }

  const handleView = (listing) => {
    setSelectedListing(listing)
    document.getElementById('house-detail-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSave = (listing) => {
    setSavedIds((current) =>
      current.includes(listing.id) ? current.filter((id) => id !== listing.id) : [...current, listing.id]
    )
    setSelectedListing(listing)
  }

  const handleContact = (listing) => {
    const subject = encodeURIComponent(`House wanted inquiry: ${listing.title}`)
    const body = encodeURIComponent(`Hello,\n\nI am interested in this wanted house request:\n\nTitle: ${listing.title}\nArea: ${listing.area}\nType: House wanted in Sri Lanka\n\nPlease contact me with more details.`)
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=80&auto=format&fit=crop"
          alt="Wanted houses in Sri Lanka"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-100">🏠 Houses wanted in Sri Lanka</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">List of Houses wanted</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Browse wanted house requests across Sri Lanka and connect with buyers, tenants, and families looking for the right home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Family homes</span>
            <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Luxury requests</span>
            <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ School zone areas</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">🔍 Search</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">Search and filter house wanted ads</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If you want to buy or rent a house and cannot find a suitable property on our listings, you can submit a wanted ad for sellers and landlords.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Enter City or Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  value={locationQuery}
                  onChange={(event) => {
                    setLocationQuery(event.target.value)
                    setPage(1)
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                  placeholder="Search by area"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 sm:text-sm">
            {['House wanted in Sri Lanka', 'Room wanted in Sri Lanka', 'Apartment wanted in Sri Lanka', 'Land wanted in Sri Lanka', 'Annex wanted in Sri Lanka', 'Commercial Property wanted in Sri Lanka'].map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-4 py-2">{item}</span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
            <span>Type</span>
            <span className="text-slate-500">Filter by:</span>
            <span className="rounded-full bg-white px-3 py-1 text-[#08306B] ring-1 ring-slate-200">House</span>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Filters</p>
            <h3 className="mt-2 text-xl font-black text-slate-900">Newest to Oldest</h3>
            <div className="mt-5 space-y-3">
              {topCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setLocationQuery(city)
                    setPage(1)
                  }}
                  className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <span>{city}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#08306B]"><Bell size={16} /> Be the first to know</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Get an instant alert when a buyer or tenant is looking to buy or rent a House in Sri Lanka.
              </p>
              <button type="button" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 text-sm font-bold text-white transition hover:shadow-lg">
                Notify me
              </button>
            </div>
          </aside>

          <div>
            <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">List of Houses wanted</p>
                  <h3 className="mt-1 text-xl font-black text-slate-900">Showing page {currentPage} of {totalPages}</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#eff6fd] px-4 py-2 text-sm font-semibold text-[#08306B]">
                  <ShieldCheck size={16} /> Ultimate Membership listings included
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                If you want to buy a house, apartment or land in Sri Lanka or need to rent a house or room and cannot find a suitable property on our listings, then you can submit a wanted ad for sellers and landlords with suitable property, to contact you.
              </p>
            </div>

            <div className="space-y-4">
              {pageListings.map((listing) => (
                <article key={listing.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
                  <div className="relative h-52 lg:h-full">
                    <img src={listing.image} alt={listing.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#08306B]">House</span>
                      {listing.private && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                          <Lock size={12} /> Private
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/45 p-3 text-white backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">{listing.badge}</p>
                      <p className="mt-1 text-sm font-semibold">Area(s): {listing.locationHint}</p>
                    </div>
                  </div>

                  <div className="p-5 lg:p-6">
                    <h4 className="text-2xl font-black text-slate-900">{listing.title}</h4>
                    <p className="mt-2 text-sm font-semibold text-slate-500">Area(s) : {listing.area}</p>
                    <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">{listing.summary}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button type="button" onClick={() => handleView(listing)} className="rounded-full bg-[#08306B] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0d4a9f]">
                        View ad
                      </button>
                      <button type="button" onClick={() => handleSave(listing)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">
                        {savedIds.includes(listing.id) ? 'Saved' : 'Save'}
                      </button>
                      <button type="button" onClick={() => handleContact(listing)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">
                        Contact
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40">
                <ChevronLeft size={16} /> Back
              </button>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <span className="rounded-full bg-[#08306B] px-3 py-1 text-white">{currentPage}</span>
                <span>{totalPages}</span>
              </div>

              <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40">
                Next <ChevronRight size={16} />
              </button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div id="house-detail-section" className="rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Selected house wanted</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">{selectedListing.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{selectedListing.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">{selectedListing.area}</span>
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">{savedIds.includes(selectedListing.id) ? 'Saved' : 'Not saved'}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9e8f6] bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Featured Projects</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {featuredProjects.map((project) => (
                    <div key={project} className="rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                      <div className="flex items-center justify-between gap-3">
                        <span>{project}</span>
                        <ArrowRight size={16} className="text-[#2171B5]" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#08306B] p-4 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold"><Heart size={16} /> Be the first to know</div>
                  <p className="mt-2 text-sm leading-6 text-white/80">Get an instant alert when a buyer or tenant is looking to buy or rent a House in Sri Lanka.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Membership Notice</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">View the latest ads by upgrading to a Ultimate Membership!</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">These ads will be visible to other users after 5 days. Private wanted ads are only available to Ultimate members.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HousesWantedPage