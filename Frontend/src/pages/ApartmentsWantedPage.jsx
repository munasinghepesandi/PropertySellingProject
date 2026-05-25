import React, { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ChevronLeft, ChevronRight, Search, Bell, Lock, ShieldCheck } from 'lucide-react'

const apartmentListings = [
  { id: 690001, title: 'Apartment wanted near British School', area: 'Kandy 7, Nawala', summary: 'Looking for 2-3 bedroom apartment near international schools.', hint: 'Kandy 7 / Nawala', badge: 'Family wanted', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80&auto=format&fit=crop' },
  { id: 690002, title: 'Furnished apartment wanted close to Kandy City', area: 'Kandy, Peradeniya', summary: 'Seeking fully furnished apartment in Kandy city or Peradeniya.', hint: 'Kandy / Peradeniya', badge: 'Kandy wanted', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80&auto=format&fit=crop' },
  { id: 690003, title: 'Apartment wanted in Kandy 3 4', area: 'Kandy 3, Kandy 4', summary: 'Need a 2 bedroom apartment with parking and lift.', hint: 'Kandy inner suburbs', badge: 'Immediate', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80&auto=format&fit=crop' },
  { id: 690004, title: 'Studio apartment wanted near Wattala', area: 'Wattala, Ja-Ela', summary: 'Studio or 1 bedroom apartment with good public transport links.', hint: 'Wattala', badge: 'Budget', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80&auto=format&fit=crop' },
]

const featuredProjects = ['The Elizabeth Kandy 07', 'Mon Vie', 'Marina Square', 'Lotus Villa']
const topCities = ['Kandy', 'Kandy', 'Nawala', 'Battaramulla', 'Negombo']

function ApartmentsWantedPage() {
  const [query, setQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selectedListing, setSelectedListing] = useState(apartmentListings[0])
  const [savedIds, setSavedIds] = useState([])

  const pageSize = 4

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase()
    const location = locationQuery.trim().toLowerCase()
    return apartmentListings.filter((l) => {
      const matchesQuery = !q || l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q) || l.area.toLowerCase().includes(q)
      const matchesLocation = !location || l.area.toLowerCase().includes(location) || l.hint.toLowerCase().includes(location)
      return matchesQuery && matchesLocation
    })
  }, [query, locationQuery])

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageListings = filteredListings.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const goToPage = (n) => setPage(Math.min(Math.max(n, 1), totalPages))
  const handleView = (l) => { setSelectedListing(l); document.getElementById('apartment-detail')?.scrollIntoView({ behavior: 'smooth' }) }
  const handleSave = (l) => setSavedIds((cur) => (cur.includes(l.id) ? cur.filter((id) => id !== l.id) : [...cur, l.id]))
  const handleContact = (l) => { window.location.href = `mailto:info@lankapropertyweb.com?subject=${encodeURIComponent('Apartment wanted: ' + l.title)}` }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-100">🏢 Apartments wanted</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">List of Apartments wanted</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">Browse apartment wanted requests across Sri Lanka including Kandy.</p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">🔍 Search apartments wanted</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">Search and filter apartment wanted ads</h2>
            </div>
            <div className="rounded-2xl bg-[#f7fbff] p-4 ring-1 ring-[#d9e8f6]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Enter City or Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input value={locationQuery} onChange={(e) => { setLocationQuery(e.target.value); setPage(1) }} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none" placeholder="Search by area" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 sm:text-sm">
            {['Apartment wanted in Sri Lanka', 'Furnished', 'Unfurnished', 'Short term'].map((c) => <span key={c} className="rounded-full bg-slate-100 px-4 py-2">{c}</span>)}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Top Cities</p>
            <h3 className="mt-2 text-xl font-black text-slate-900">Popular apartment areas</h3>
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
              <p className="mt-2 text-sm leading-6 text-slate-600">Get an instant alert when tenants or buyers post apartment requirements.</p>
            </div>
          </aside>

          <div>
            <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Apartments wanted</p>
                  <h3 className="mt-1 text-xl font-black text-slate-900">Showing page {currentPage} of {totalPages}</h3>
                </div>
                <div className="rounded-full bg-[#eff6fd] px-4 py-2 text-sm font-semibold text-[#08306B]"><ShieldCheck size={16} /> Ultimate listings</div>
              </div>
            </div>

            <div className="space-y-4">
              {pageListings.map((l) => (
                <article key={l.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[220px_minmax(0,1fr)]">
                  <div className="relative h-44 lg:h-full">
                    <img src={l.image} alt={l.title} className="h-full w-full object-cover" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#08306B]">Apartment</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/45 p-3 text-white">
                      <p className="text-xs font-bold">{l.badge}</p>
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <h4 className="text-2xl font-black text-slate-900">{l.title}</h4>
                    <p className="mt-2 text-sm font-semibold text-slate-500">Area: {l.area}</p>
                    <p className="mt-4 text-sm text-slate-600">{l.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button onClick={() => handleView(l)} className="rounded-full bg-[#08306B] px-4 py-2 text-white font-bold">View ad</button>
                      <button onClick={() => handleSave(l)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold">{savedIds.includes(l.id) ? 'Saved' : 'Save'}</button>
                      <button onClick={() => handleContact(l)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold">Contact</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2"> <ChevronLeft size={16} /> Back</button>
              <div className="flex items-center gap-2"><span className="rounded-full bg-[#08306B] px-3 py-1 text-white">{currentPage}</span><span>{totalPages}</span></div>
              <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2">Next <ChevronRight size={16} /></button>
            </div>

            <div id="apartment-detail" className="mt-8 rounded-2xl border border-[#d9e8f6] bg-[#f7fbff] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">Selected apartment wanted</p>
              <h3 className="mt-2 text-2xl font-black">{selectedListing.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{selectedListing.summary}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ApartmentsWantedPage
