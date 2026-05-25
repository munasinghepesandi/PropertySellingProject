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
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=60',
  },
  {
    name: 'Blue Harbour Properties',
    area: 'Galle',
    category: 'Commercial property agents',
    phone: '+94 77 333 4444',
    email: 'hello@blueharbour.lk',
    summary: 'Commercial and coastal property specialists with verified listings across the south.',
    image: 'https://images.unsplash.com/photo-1545996124-8f8a3e1f6f04?auto=format&fit=crop&w=400&q=60',
  },
  {
    name: 'Lanka Land Brokers',
    area: 'Kandy',
    category: 'Land Sales',
    phone: '+94 77 555 6666',
    email: 'sales@lankalandbrokers.lk',
    summary: 'Land sales and development plots across hill country and growing suburbs.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60',
  },
  {
    name: 'City Lettings',
    area: 'Colombo 03',
    category: 'Letting Agents',
    phone: '+94 76 222 3333',
    email: 'rentals@citylettings.lk',
    summary: 'Rental specialists for apartments, office space and short-term leases.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=60',
  },
  {
    name: 'Ceylon Estates',
    area: 'Negombo',
    category: 'Residential sales',
    phone: '+94 76 444 5555',
    email: 'contact@ceylonestates.lk',
    summary: 'Residential sales, new-build homes and investment properties.',
    image: 'https://images.unsplash.com/photo-1531123414780-f099b2a5f9c6?auto=format&fit=crop&w=400&q=60',
  },
  {
    name: 'Southern Commercial Hub',
    area: 'Matara',
    category: 'Commercial property agents',
    phone: '+94 74 555 6666',
    email: 'info@southernhub.lk',
    summary: 'Commercial property agents for shops, offices and mixed-use developments.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60',
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

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071f44] via-[#0b4f9c] to-[#2a78bf] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-100">Find Agents</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Real Estate Agents Directory
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Connect with verified real estate agents, brokers, and realtors across Sri Lanka. Find the right professional for buying, selling, letting, or land sales.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2 backdrop-blur">✓ Verified Agents</span>
              <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2 backdrop-blur">✓ Expert Support</span>
              <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2 backdrop-blur">✓ Fast Contact</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl lg:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-100">Quick stats</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: '120+', label: 'Verified agents' },
                { value: '25', label: 'Locations covered' },
                { value: '24/7', label: 'Search support' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4">
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/75">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(8,48,107,0.08)] ring-1 ring-slate-200 lg:p-8">
          <div className="mb-6 border-b border-slate-200 pb-6">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2171B5]">Search Agents</p>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">Find the Right Agent for You</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Browse verified agents and connect with real estate professionals in your area.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section>
              <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm">
                <form className="grid gap-3 lg:grid-cols-[200px_minmax(0,1fr)_auto] lg:items-center" onSubmit={handleSearch}>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-10 py-3 text-sm text-slate-700 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                      placeholder="Keywords"
                    />
                  </div>

                  <button type="submit" className="rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 font-bold text-sm uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lg">
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

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#2171B5] shadow-sm lg:px-5">
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
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">No agents found - try different keywords or choose another category.</div>
                ) : (
                  pageAgents.map((agent) => (
                    <article key={agent.email} className="group grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl lg:grid-cols-[180px_minmax(0,1fr)_190px] lg:items-center">
                      <div className="flex h-36 items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-[#08306B] text-center text-white shadow-inner">
                        {agent.image ? (
                          <img
                            src={agent.image}
                            alt={agent.name}
                            className="h-36 w-36 object-cover rounded-full"
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60'
                            }}
                          />
                        ) : (
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Verified</div>
                            <div className="mt-2 text-sm font-semibold">Agent Profile</div>
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-slate-900 lg:text-[20px]">{agent.name}</h3>
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f6fb] px-3 py-1 text-xs font-semibold text-[#08306B]">
                            {agent.category}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                          <span className="inline-flex items-center gap-2"><MapPin size={14} /> {agent.area}</span>
                          <span className="inline-flex items-center gap-2"><Star size={14} className="text-[#0aa03c]" /> Verified listing</span>
                        </div>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{agent.summary}</p>
                        <a href="#agent-results" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2171B5] hover:underline">
                          View details <ArrowRight size={14} />
                        </a>
                      </div>

                      <div className="flex flex-col gap-2 lg:items-end">
                        <a href={`tel:${agent.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">
                          <Phone size={14} /> Call
                        </a>
                        <a href={`mailto:${agent.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                          <Mail size={14} /> Email
                        </a>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </section>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#0b1d47] text-white shadow-[0_16px_40px_rgba(11,29,71,0.18)]">
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

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
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

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-slate-900">Need agent assistance?</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">Our Buyer & Seller Assistance team can connect you with vetted agents.</p>
                <Link to="/our-services" className="mt-3 inline-flex rounded-xl bg-[#08306B] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
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
