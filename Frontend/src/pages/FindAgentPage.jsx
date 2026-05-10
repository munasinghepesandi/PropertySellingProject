import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone, Search, Star } from 'lucide-react'

const sampleAgents = [
  {
    name: 'AKARA Apartments',
    area: 'Colombo',
    category: 'Residential sales',
    phone: '+94 77 111 2222',
    email: 'info@akaraapartments.lk',
    summary: 'Real estate agency specializing in apartment sales and letting in Colombo.',
  },
  {
    name: 'Blue Harbour Properties',
    area: 'Galle',
    category: 'Commercial property agents',
    phone: '+94 77 333 4444',
    email: 'hello@blueharbour.lk',
    summary: 'Commercial and coastal property specialists with verified listings across the south.',
  },
  {
    name: 'Lanka Land Brokers',
    area: 'Kandy',
    category: 'Land Sales',
    phone: '+94 77 555 6666',
    email: 'sales@lankalandbrokers.lk',
    summary: 'Land sales and development plots across hill country and growing suburbs.',
  },
  {
    name: 'City Lettings',
    area: 'Colombo 03',
    category: 'Letting Agents',
    phone: '+94 76 222 3333',
    email: 'rentals@citylettings.lk',
    summary: 'Rental specialists for apartments, office space and short-term leases.',
  },
  {
    name: 'Ceylon Estates',
    area: 'Negombo',
    category: 'Residential sales',
    phone: '+94 76 444 5555',
    email: 'contact@ceylonestates.lk',
    summary: 'Residential sales, new-build homes and investment properties.',
  },
  {
    name: 'Southern Commercial Hub',
    area: 'Matara',
    category: 'Commercial property agents',
    phone: '+94 74 555 6666',
    email: 'info@southernhub.lk',
    summary: 'Commercial property agents for shops, offices and mixed-use developments.',
  },
]

const directoryLinks = [
  { label: 'Find Agents / Agents Directory', to: '/find-agent' },
  { label: 'View All Agents / Agents Directory', to: '#agent-results' },
  { label: 'Become an Agent', to: '/register' },
  { label: 'Residential sales', to: '/sales' },
  { label: 'Letting Agents', to: '/rentals' },
  { label: 'Commercial property agents', to: '/commercial' },
  { label: 'Land Sales', to: '/land' },
]

const categories = ['All Categories', 'Residential sales', 'Letting Agents', 'Commercial property agents', 'Land Sales']

export default function FindAgentPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [resultsMessage, setResultsMessage] = useState('')
  const [page, setPage] = useState(1)

  const pageSize = 3

  useEffect(() => {
    setPage(1)
  }, [query, category])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return sampleAgents.filter((agent) => {
      const matchesQuery =
        !q ||
        agent.name.toLowerCase().includes(q) ||
        agent.area.toLowerCase().includes(q) ||
        agent.email.toLowerCase().includes(q) ||
        agent.summary.toLowerCase().includes(q)

      const matchesCategory = category === 'All Categories' || agent.category === category

      return matchesQuery && matchesCategory
    })
  }, [query, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageAgents = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const handleSearch = (event) => {
    event.preventDefault()
    const count = filtered.length
    setResultsMessage(count ? `${count} agent${count === 1 ? '' : 's'} found` : 'No agents found')
    setPage(1)
    document.getElementById('agent-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePageChange = (nextPage) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages))
    document.getElementById('agent-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#f3f5f7]">
      <Navbar />

      <main className="mx-auto max-w-[1320px] px-4 py-6 lg:px-5 lg:py-8">
        <div className="rounded-none bg-white shadow-[0_1px_0_rgba(15,23,42,0.08)] lg:rounded-xl lg:border lg:border-slate-200">
          <div className="border-b border-slate-200 px-4 py-4 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2171B5]">Find Agents / Agents Directory</p>
                <h1 className="mt-2 text-3xl font-light leading-tight text-slate-900 lg:text-[38px]">Directory of Real Estate Agents / Brokers / Realtors in Sri Lanka</h1>
              </div>
              <div className="rounded-full bg-[#f0f6fb] px-4 py-2 text-sm font-semibold text-[#08306B]">
                View All Agents / Agents Directory
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {directoryLinks.map((item) => (
                item.to.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.to}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="grid gap-5 px-4 py-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-6">
            <section>
              <div className="rounded-lg border border-slate-200 bg-[#f3f4f6] p-4 lg:p-5">
                <form className="grid gap-3 lg:grid-cols-[220px_minmax(0,1fr)_220px_auto] lg:items-center" onSubmit={handleSearch}>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-12 rounded border border-slate-300 bg-white px-3 text-sm text-slate-700"
                  >
                    {categories.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="h-12 w-full rounded border border-slate-300 bg-white px-10 text-sm text-slate-700 outline-none focus:border-[#2171B5]"
                      placeholder="Keywords"
                    />
                  </div>

                  <div className="hidden lg:block" />

                  <button type="submit" className="h-12 rounded bg-[#ff5a00] px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#e55100]">
                    Search
                  </button>
                </form>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {categories.slice(1).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      category === item ? 'bg-[#2171B5] text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#2171B5] lg:px-5">
                <div className="grid gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
                  {directoryLinks.slice(4).map((item) => (
                    <Link key={item.label} to={item.to} className="hover:underline">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-600">
                  {filtered.length} result{filtered.length === 1 ? '' : 's'}
                </p>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-300 bg-white text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handlePageChange(item)}
                      className={`h-10 min-w-10 rounded border px-3 text-sm font-semibold ${
                        item === currentPage
                          ? 'border-[#0aa03c] bg-[#0aa03c] text-white'
                          : 'border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-300 bg-white text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {resultsMessage && <p className="mt-3 text-sm font-semibold text-[#08306B]">{resultsMessage}</p>}

              <div id="agent-results" className="mt-4 space-y-4">
                {pageAgents.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">No agents found - try different keywords or choose another category.</div>
                ) : (
                  pageAgents.map((agent) => (
                    <article key={agent.email} className="grid gap-4 rounded-lg border border-slate-300 bg-white p-4 shadow-sm lg:grid-cols-[160px_minmax(0,1fr)_190px] lg:items-center">
                      <div className="flex h-32 items-center justify-center rounded bg-gradient-to-br from-slate-700 to-slate-900 text-center text-white">
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Verified</div>
                          <div className="mt-2 text-sm font-semibold">Agent Profile</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 lg:text-[20px]">{agent.name}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                          <span className="inline-flex items-center gap-2"><MapPin size={14} /> Area(s) covered: {agent.area}</span>
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f6fb] px-3 py-1 text-xs font-semibold text-[#08306B]">{agent.category}</span>
                        </div>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{agent.summary}</p>
                        <a href="#agent-results" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#2171B5] hover:underline">
                          More »
                        </a>
                      </div>

                      <div className="flex flex-col gap-2 lg:items-end">
                        <a href={`tel:${agent.phone}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
                          <Phone size={14} /> Call
                        </a>
                        <a href={`mailto:${agent.email}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2171B5] px-4 py-2 text-sm font-semibold text-white">
                          <Mail size={14} /> Email
                        </a>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </section>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-[#0b1d47] text-white shadow-sm">
                <div className="px-4 pt-2 text-right text-[11px] font-semibold text-slate-200">
                  <span className="rounded-full bg-white px-3 py-1 text-[#0b1d47]">LankaPropertyWeb</span>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Sri Lanka</p>
                  <h4 className="mt-2 text-2xl font-bold leading-tight">Real Estate Market Outlook Report 2026</h4>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-200">Market insights, trends and reports for buyers, sellers and property investors.</p>
                  <div className="mt-5 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    Out Now!
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <Star className="text-[#0aa03c]" size={18} /> Featured Projects
                </h4>
                <div className="mt-4 space-y-3">
                  {[
                    'New Beachfront Projects',
                    'Luxury Apartments',
                    'Commercial developments in Colombo',
                  ].map((item) => (
                    <Link key={item} to="/sales" className="block rounded-md border border-slate-200 px-3 py-3 text-sm text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-slate-900">Need agent assistance?</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">Our Buyer & Seller Assistance team can connect you with vetted agents.</p>
                <Link to="/our-services" className="mt-3 inline-flex rounded-md bg-[#08306B] px-4 py-2.5 text-sm font-semibold text-white">
                  Request help
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
