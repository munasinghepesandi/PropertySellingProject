import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Search, Phone, Mail, MapPin } from 'lucide-react'

const sampleAgents = [
  { name: 'Nimal Perera', area: 'Colombo', phone: '+94 77 111 2222', email: 'nimal@agents.lk' },
  { name: 'Samantha Jay', area: 'Kandy', phone: '+94 77 333 4444', email: 'samantha@agents.lk' },
  { name: 'Ravi Fernando', area: 'Galle', phone: '+94 77 555 6666', email: 'ravi@agents.lk' },
]

export default function FindAgentPage() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState('')
  const [resultsMessage, setResultsMessage] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const count = filtered.length
    setResultsMessage(count ? `${count} agent${count === 1 ? '' : 's'} found` : 'No agents found')
    document.getElementById('agent-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filtered = sampleAgents.filter(a => {
    const q = query.toLowerCase()
    return (
      (!q || a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q)) &&
      (!area || a.area.toLowerCase().includes(area.toLowerCase()))
    )
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-slate-900">Find an Agent</h1>
          <p className="mt-2 text-sm text-slate-600">Search agents by name, area or contact details. Contact an agent directly to get personalised assistance.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <form className="flex gap-3" onSubmit={handleSearch}>
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 text-slate-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 p-3 pl-10"
                    placeholder="Search by agent name or email"
                  />
                </div>

                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-36 rounded-lg border border-slate-200 p-3"
                  placeholder="Area (e.g. Colombo)"
                />

                <button type="submit" className="rounded-lg bg-[#2171B5] px-4 py-3 text-white font-semibold">Search</button>
              </form>

              {resultsMessage && <p className="mt-4 text-sm font-semibold text-[#08306B]">{resultsMessage}</p>}

              <div id="agent-results" className="mt-6 space-y-4">
                {filtered.length === 0 ? (
                  <div className="text-sm text-slate-600">No agents found — try different keywords.</div>
                ) : (
                  filtered.map((agent) => (
                    <div key={agent.email} className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{agent.name}</h3>
                        <p className="text-sm text-slate-600 flex items-center gap-2"><MapPin size={14} />{agent.area}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <a href={`tel:${agent.phone}`} className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                          <Phone size={14} /> Call
                        </a>
                        <a href={`mailto:${agent.email}`} className="inline-flex items-center gap-2 rounded-md bg-[#2171B5] px-3 py-2 text-sm text-white">
                          <Mail size={14} /> Email
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <aside>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Agent Tips</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Share clear photos and a short brief.</li>
                  <li>• Mention your budget and preferred areas.</li>
                  <li>• Ask for recent comparable listings.</li>
                </ul>
              </div>

              <div className="mt-4 rounded-lg border border-slate-100 p-4">
                <h4 className="font-semibold text-slate-900">Need agent assistance?</h4>
                <p className="mt-2 text-sm text-slate-600">Our Buyer & Seller Assistance team can connect you with vetted agents.</p>
                <a href="/our-services" className="mt-3 inline-block rounded-lg bg-[#08306B] px-4 py-3 text-sm font-semibold text-white">Request help</a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
