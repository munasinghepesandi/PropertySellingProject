import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone, Search, Star, ArrowRight } from 'lucide-react'

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
  { label: 'Letting Agents', to: '/letting-agents' },
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
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-100">👥 Find Agents</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Real Estate Agents Directory</h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg leading-relaxed">
              Connect with verified real estate agents, brokers, and realtors across Sri Lanka. Find the perfect agent for your property needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Verified Agents</span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Expert Support</span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Easy Connect</span>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-md ring-1 ring-slate-200 p-6 lg:p-8">
          <div className="mb-6 pb-6 border-b border-slate-200">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2171B5]">🔍 Search Agents</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">Find the Right Agent for You</h2>
            <p className="mt-2 text-xs text-slate-600">Browse verified agents and connect with real estate professionals in your area.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section>
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-5 ring-1 ring-slate-200">
                <form className="grid gap-3 lg:grid-cols-[200px_minmax(0,1fr)_140px_auto] lg:items-center" onSubmit={handleSearch}>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
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
                      className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                      placeholder="Keywords"
                    />
                  </div>

                  <div className="hidden lg:block" />

                  <button type="submit" className="rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-2.5 font-bold text-white text-sm uppercase tracking-wide transition hover:shadow-lg hover:scale-105">
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Helpful Resources</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Before you work with an agent</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <Link
              to="/market-insights"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">📊</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Market Insights</h3>
              <p className="mt-1 text-xs text-slate-600">Real-time data & trends</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Explore <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/price-meter"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">💰</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Price Meter</h3>
              <p className="mt-1 text-xs text-slate-600">Get instant valuation</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Calculate <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/property-buying-guide"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">📖</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Buying Guide</h3>
              <p className="mt-1 text-xs text-slate-600">Step-by-step process</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Learn <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/price-indices"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">📈</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Price Index</h3>
              <p className="mt-1 text-xs text-slate-600">Market trends & data</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Track <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/market-outlook"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">🔮</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Market Outlook</h3>
              <p className="mt-1 text-xs text-slate-600">Market analysis</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Analyze <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
