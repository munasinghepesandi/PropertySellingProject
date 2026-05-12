import React, { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ArrowRight, Bell, ChevronLeft, ChevronRight, Search, ShieldCheck } from 'lucide-react'

const landListings = [
  {
    id: 5890714,
    title: 'Land wanted in Dehiowita Ruwanwella',
    area: 'Dehiowita, Ruwanwella',
    summary: 'Land for wanted in Dehiowita Ruwanwella.',
    hint: 'Dehiowita / Ruwanwella',
    badge: 'Land wanted',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5888468,
    title: 'Wanted 5 Acre Land In Negombo Suburbs',
    area: 'Andiambalama, Kimbulapitiya, Negombo',
    summary: 'We are actively seeking a large extent land approx 5 acres in the Negombo area preferably.',
    hint: 'Negombo suburbs',
    badge: 'Urgent requirement',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5883755,
    title: 'Land wanted in Colombo 7',
    area: 'Colombo 7',
    summary: 'Seeking plot of land 12 perches or more in Colombo 7 for new house construction.',
    hint: 'Colombo 7',
    badge: 'Prime location',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5883425,
    title: 'Land wanted in Dehiwala',
    area: 'Dehiwala',
    summary: 'Land for wanted in Dehiwala about 8 to 10 perches land with a house or without a house.',
    hint: 'Dehiwala',
    badge: 'Residential land',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5883422,
    title: 'Land wanted in Kohuwala',
    area: 'Kohuwala',
    summary: '40 Perches land for wanted in Kohuwala road land facing.',
    hint: 'Kohuwala',
    badge: 'Road facing',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5882035,
    title: 'COMMERCIAL LAND WANTED COLOMBO 38 SUBURBS',
    area: 'All Colombo',
    summary: 'We are representing a high end commercial land requirement around Colombo 3/8 suburbs.',
    hint: 'All Colombo',
    badge: 'Commercial land',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5882329,
    title: 'Wanted Waterfront Properties Digana Kandy',
    area: 'Digana, Theldeniya',
    summary: 'We are looking for waterfront property from Digana area in Kandy; land extent above 25 perches.',
    hint: 'Kandy / Digana',
    badge: 'Kandy wanted',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5882327,
    title: 'Wanted 10 Acres Bare Land from Athurugiriya Kaduwela Korathota',
    area: 'Athurugiriya, Hokandara, Korathota, Malabe',
    summary: 'Wanted around 10 acres bare land preferred locations Athurugiriya.',
    hint: 'Athurugiriya / Malabe',
    badge: 'Development land',
    image: 'https://images.unsplash.com/photo-1516156008625-3a3f95a2b2f5?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5877555,
    title: 'Land wanted in Ahangama or Midigama',
    area: 'Ahangama, Koggala, Midigama',
    summary: 'Hello we are looking for a land in preferably Ahangama or Midigama 20 60 perches.',
    hint: 'South coast',
    badge: 'Coastal land',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5874979,
    title: 'Land wanted in Wattala',
    area: 'Wattala',
    summary: 'Need 22 to 50 perches land facing main road. Area frontage should be more than 50ft.',
    hint: 'Wattala',
    badge: 'Main road',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5858565,
    title: 'Land wanted 50 to 60 Perch in All Colombo 38 Suburbs',
    area: 'All Colombo',
    summary: 'Land for wanted 50 to 60 perches in the following areas Colombo 8 10 ...',
    hint: 'All Colombo',
    badge: 'Area based',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5850924,
    title: 'We are looking to buy Land in Kadawatha Kirillawala Kiribathgoda',
    area: 'Kadawatha, Kiribathgoda, Kirillawala',
    summary: 'We are looking to buy Land in Kadawatha Kirillawala Kiribathgoda with good access.',
    hint: 'Kadawatha / Kiribathgoda',
    badge: 'Buyer request',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 5794850,
    title: 'Wanted Residential Land with Scenic View Kadawatha Kiribathgoda Area',
    area: 'Kadawatha, Kiribathgoda',
    summary: 'A serious buyer is looking to purchase residential land situated in a peaceful and serene environment.',
    hint: 'Scenic residential land',
    badge: 'Scenic view',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80&auto=format&fit=crop',
  },
]

const featuredProjects = ['The Elizabeth Colombo 07', 'Mon Vie', 'Marina Square', 'The Residence @ VERDANT SQUARE', 'ASTORIA', 'Lotus Villa']
const topCities = ['Colombo', 'Kandy', 'Athurugiriya', 'Battaramulla', 'Kadawatha', 'Negombo', 'Wattala', 'Galle']

function LandWantedPage() {
  const [query, setQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selectedListing, setSelectedListing] = useState(landListings[0])
  const [savedIds, setSavedIds] = useState([])

  const pageSize = 4

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase()
    const location = locationQuery.trim().toLowerCase()
    return landListings.filter((listing) => {
      const matchesQuery = !q || listing.title.toLowerCase().includes(q) || listing.summary.toLowerCase().includes(q) || listing.area.toLowerCase().includes(q)
      const matchesLocation = !location || listing.area.toLowerCase().includes(location) || listing.hint.toLowerCase().includes(location)
      return matchesQuery && matchesLocation
    })
  }, [query, locationQuery])

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageListings = filteredListings.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const goToPage = (nextPage) => setPage(Math.min(Math.max(nextPage, 1), totalPages))
  const handleView = (listing) => {
    setSelectedListing(listing)
    document.getElementById('land-detail-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const handleSave = (listing) => {
    setSavedIds((current) => (current.includes(listing.id) ? current.filter((id) => id !== listing.id) : [...current, listing.id]))
    setSelectedListing(listing)
  }
  const handleContact = (listing) => {
    const subject = encodeURIComponent(`Land wanted inquiry: ${listing.title}`)
    const body = encodeURIComponent(`Hello,\n\nI am interested in this wanted land request:\n\nTitle: ${listing.title}\nArea: ${listing.area}\n\nPlease share more details.`)
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&q=80&auto=format&fit=crop" alt="Wanted land in Sri Lanka" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-100">🌿 Land wanted in Sri Lanka</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">List of Lands wanted</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">Browse land requests across Sri Lanka, including Colombo, Kandy, Negombo, Wattala, and other high-demand locations.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Commercial land</span>
            <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Residential plots</span>
            <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">✓ Kandy locations included</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">🔍 Search land wanted listings</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">List of Lands wanted</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">If you want to buy land in Sri Lanka and cannot find a suitable property on our listings, you can submit a wanted ad for sellers and landowners to contact you.</p>
            </div>
            <div className="rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Enter City or Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input value={locationQuery} onChange={(event) => { setLocationQuery(event.target.value); setPage(1) }} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20" placeholder="Search by area" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 sm:text-sm">
            {['Land wanted in Sri Lanka', 'Commercial Property wanted in Sri Lanka', 'Residential land', 'Development land'].map((item) => <span key={item} className="rounded-full bg-slate-100 px-4 py-2">{item}</span>)}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
            <span>Type</span>
            <span className="text-slate-500">Filter by:</span>
            <span className="rounded-full bg-white px-3 py-1 text-[#08306B] ring-1 ring-slate-200">Land</span>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Top Cities</p>
            <h3 className="mt-2 text-xl font-black text-slate-900">Kandy and more</h3>
            <div className="mt-5 space-y-3">
              {topCities.map((city) => (
                <button key={city} type="button" onClick={() => { setLocationQuery(city); setPage(1) }} className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                  <span>{city}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#08306B]"><Bell size={16} /> Be the first to know</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Get an instant alert when a buyer or tenant is looking to buy or rent a Land in Sri Lanka.</p>
              <button type="button" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 text-sm font-bold text-white transition hover:shadow-lg">Notify me</button>
            </div>
          </aside>

          <div>
            <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Showing results</p>
                  <h3 className="mt-1 text-xl font-black text-slate-900">Showing page {currentPage} of {totalPages}</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#eff6fd] px-4 py-2 text-sm font-semibold text-[#08306B]"><ShieldCheck size={16} /> Ultimate Membership listings included</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">These ads will be visible to other users after 5 days. Private wanted ads are only available to Ultimate members.</p>
            </div>

            <div className="space-y-4">
              {pageListings.map((listing) => (
                <article key={listing.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
                  <div className="relative h-52 lg:h-full">
                    <img src={listing.image} alt={listing.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#08306B]">Land</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/45 p-3 text-white backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">{listing.badge}</p>
                      <p className="mt-1 text-sm font-semibold">Area(s): {listing.hint}</p>
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <h4 className="text-2xl font-black text-slate-900">{listing.title}</h4>
                    <p className="mt-2 text-sm font-semibold text-slate-500">Area(s) : {listing.area}</p>
                    <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">{listing.summary}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button type="button" onClick={() => handleView(listing)} className="rounded-full bg-[#08306B] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0d4a9f]">View ad</button>
                      <button type="button" onClick={() => handleSave(listing)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">{savedIds.includes(listing.id) ? 'Saved' : 'Save'}</button>
                      <button type="button" onClick={() => handleContact(listing)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">Contact</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={16} /> Back</button>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="rounded-full bg-[#08306B] px-3 py-1 text-white">{currentPage}</span><span>{totalPages}</span></div>
              <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40">Next <ChevronRight size={16} /></button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div id="land-detail-section" className="rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Selected land wanted</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">{selectedListing.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{selectedListing.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600"><span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">{selectedListing.area}</span></div>
              </div>
              <div className="rounded-2xl border border-[#d9e8f6] bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Featured Projects</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {featuredProjects.map((project) => <div key={project} className="rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200"><div className="flex items-center justify-between gap-3"><span>{project}</span><ArrowRight size={16} className="text-[#2171B5]" /></div></div>)}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Membership Notice</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">View the latest ads by upgrading to a Ultimate Membership!</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">These ads will be visible to other users after the listed number of days. Private wanted ads remain hidden to non-members.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandWantedPage
