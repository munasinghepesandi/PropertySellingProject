import React, { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ArrowRight, Bell, ChevronLeft, ChevronRight, Search, ShieldCheck } from 'lucide-react'

const commercialListings = [
  { id: 790101, title: 'Commercial building wanted in Kandy 3', area: 'Kandy 3, Kandy 4', summary: 'Looking for a commercial building with shopfronts or office space in Kandy 3.', hint: 'Kandy 3/4', badge: 'Prime', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80&auto=format&fit=crop' },
  { id: 790102, title: 'Warehouse / industrial land wanted near Wattala', area: 'Wattala, Kelaniya', summary: 'Seeking warehouse or industrial plot suitable for light manufacturing.', hint: 'Wattala / Kelaniya', badge: 'Industrial', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80&auto=format&fit=crop' },
  { id: 790103, title: 'Retail shop units wanted in Kandy city', area: 'Kandy, Peradeniya', summary: 'Retail units desired in Kandy city center and busy market areas.', hint: 'Kandy city', badge: 'Kandy wanted', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80&auto=format&fit=crop' },
  { id: 790104, title: 'Office building wanted along Galle Road', area: 'Kandy 3, Galle Road', summary: 'Modern office building with parking and lifts preferred along Galle Road.', hint: 'Galle Road', badge: 'Office', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80&auto=format&fit=crop' },
  { id: 790105, title: 'Land for commercial development near Kaduwela', area: 'Kaduwela, Battaramulla', summary: 'Large land parcel wanted for commercial development and warehouses.', hint: 'Kaduwela', badge: 'Development', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80&auto=format&fit=crop' },
]

function CommercialWantedPage() {
  const [query, setQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selectedListing, setSelectedListing] = useState(commercialListings[0])
  const [savedIds, setSavedIds] = useState([])

  const pageSize = 4

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase()
    const location = locationQuery.trim().toLowerCase()
    return commercialListings.filter((l) => {
      const matchesQuery =
        !q ||
        l.title.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.area.toLowerCase().includes(q)

      const matchesLocation =
        !location ||
        l.area.toLowerCase().includes(location) ||
        l.hint.toLowerCase().includes(location)

      return matchesQuery && matchesLocation
    })
  }, [query, locationQuery])

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageListings = filteredListings.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const goToPage = (n) => setPage(Math.min(Math.max(n, 1), totalPages))

  const handleView = (l) => {
    setSelectedListing(l)
    document.getElementById('commercial-detail')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSave = (l) =>
    setSavedIds((cur) =>
      cur.includes(l.id) ? cur.filter((id) => id !== l.id) : [...cur, l.id]
    )

  const handleContact = (l) => {
    window.location.href =
      `mailto:info@lankapropertyweb.com?subject=${encodeURIComponent(
        'Commercial wanted: ' + l.title
      )}`
  }

  return (
    <div className="min-h-screen bg-[#EAEAEA] text-[#4A4A4A]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#203F52] via-[#2A6FA3] to-[#2D4F63] text-[#FFFFFF]">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-wider text-[#F3D319]">
            🏢 Commercial buildings wanted
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            List of Commercial properties wanted
          </h1>

          <p className="mt-4 max-w-2xl text-[#EAEAEA]">
            Search commercial building, office, retail and industrial space requests across Sri Lanka.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/10 px-4 py-2">✓ Retail & office</span>
            <span className="rounded-full bg-white/10 px-4 py-2">✓ Warehouse & industrial</span>
            <span className="rounded-full bg-white/10 px-4 py-2">✓ Kandy included</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8">

        {/* SEARCH */}
        <section className="rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A6FA3]">
                Search listings
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#203F52]">
                Search commercial wanted ads
              </h2>
            </div>

            <div className="rounded-2xl bg-[#EAEAEA] p-4">
              <input
                value={locationQuery}
                onChange={(e) => { setLocationQuery(e.target.value); setPage(1) }}
                className="w-full rounded-xl border border-[#B8B8B8] bg-white px-4 py-3 text-sm"
                placeholder="Search by area"
              />
            </div>
          </div>
        </section>

        {/* LIST */}
        <section className="mt-8 space-y-4">
          {pageListings.map((l) => (
            <article key={l.id} className="rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] shadow-sm">
              <div className="p-5">
                <h4 className="text-xl font-black text-[#203F52]">{l.title}</h4>
                <p className="mt-2 text-sm text-[#4A4A4A]">{l.summary}</p>

                <div className="mt-4 flex gap-3">
                  <button className="rounded-full bg-[#203F52] px-4 py-2 text-white">
                    View
                  </button>
                  <button className="rounded-full border border-[#B8B8B8] px-4 py-2">
                    Save
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* PAGINATION */}
        <div className="mt-8 flex items-center justify-between">
          <button onClick={() => goToPage(currentPage - 1)}>
            <ChevronLeft /> Prev
          </button>

          <span className="text-[#2A6FA3] font-bold">
            {currentPage} / {totalPages}
          </span>

          <button onClick={() => goToPage(currentPage + 1)}>
            Next <ChevronRight />
          </button>
        </div>

        {/* DETAIL */}
        <section id="commercial-detail" className="mt-10 rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] p-6">
          <h3 className="text-2xl font-black text-[#203F52]">
            {selectedListing.title}
          </h3>
          <p className="mt-2 text-[#4A4A4A]">{selectedListing.summary}</p>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default CommercialWantedPage