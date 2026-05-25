import React, { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ImageWithFallback from '../components/ImageWithFallback'

const categoryMeta = {
  'new': { title: 'New Businesses for Sale', desc: 'Recently listed businesses for sale across Sri Lanka.' },
  'construction': { title: 'Construction Businesses', desc: 'Construction companies, contractors and building services for sale.' },
  'agriculture': { title: 'Agriculture Businesses', desc: 'Farms, plantations and agro-related businesses for sale.' },
  'tech': { title: 'Tech Businesses', desc: 'Technology startups and service companies for sale.' },
  'hospitality': { title: 'Hospitality Businesses', desc: 'Hotels, guesthouses and hospitality services for sale.' },
  'business': { title: 'Businesses', desc: 'General businesses and trading companies for sale.' },
  'manufacturing': { title: 'Manufacturing', desc: 'Factories, workshops and manufacturing companies for sale.' },
  'garment-textile': { title: 'Garment & Textile', desc: 'Textile and garment manufacturers and suppliers for sale.' },
  'services-bpo': { title: 'Services & BPO', desc: 'Service companies, call centres and BPO operations for sale.' },
}

const sampleListings = (slug) => {
  // simple sample data, could be swapped for API data later
  return [
    { id: 1, title: `${categoryMeta[slug]?.title || 'Business'} - Example 1`, location: 'Colombo', price: 'Rs. 2,500,000', img: 'https://images.unsplash.com/photo-1542223616-8d7c5b5a0b33?auto=format&fit=crop&w=1200&q=60', description: 'Well-established operation with stable cashflow.' },
    { id: 2, title: `${categoryMeta[slug]?.title || 'Business'} - Example 2`, location: 'Kandy', price: 'Rs. 1,200,000', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60', description: 'Growing business in an expanding market.', details: { staff: 12, rent: 'Rs. 120,000/mo' } },
    { id: 3, title: `${categoryMeta[slug]?.title || 'Business'} - Example 3`, location: 'Galle', price: 'Rs. 3,750,000', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=60', description: 'High-margin business with room for expansion.' },
  ]
}

export default function BusinessCategory(){
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)
  const slug = parts[parts.length - 1]

  const meta = categoryMeta[slug] || { title: slug.replace(/-/g, ' '), desc: '' }
  const listings = sampleListings(slug)

  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return listings
    return listings.filter((l) => l.title.toLowerCase().includes(q) || l.location.toLowerCase().includes(q) || (l.description || '').toLowerCase().includes(q))
  }, [search, listings])

  return (
    <>
      <PageHeader title={meta.title} subtitle={meta.desc} ctaText="View all businesses" ctaTo="/more/businesses" image={listings[0]?.img} />

      <div className="flex bg-gray-100 min-h-screen font-sans">
        <div className="w-72 bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-6 text-[#08306B]">Refine Search</h2>

          <div className="mb-6">
            <p className="font-medium mb-2">Types</p>
            {['Looking to Sell', 'Looking for Investor', 'Franchise'].map((item) => (
              <label key={item} className="flex items-center gap-2 mb-2 text-sm"><input type="checkbox" />{item}</label>
            ))}
          </div>

          <div className="mb-6">
            <p className="font-medium mb-2">Location</p>
            <input type="text" placeholder="City or region" className="w-full border rounded px-3 py-2 text-sm" />
          </div>

          <div className="mb-6">
            <p className="font-medium mb-2">Investment (LKR)</p>
            <div className="flex gap-2">
              <input className="w-1/2 border p-2 rounded text-sm" placeholder="Min" />
              <input className="w-1/2 border p-2 rounded text-sm" placeholder="Max" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold text-[#08306B] mb-3">About {meta.title}</h2>
            <p className="text-gray-600 text-sm">{meta.desc || `Listings and opportunities in ${meta.title}.`}</p>
            <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
              <div className="bg-gray-100 p-3 rounded">Popular Area</div>
              <div className="bg-gray-100 p-3 rounded">Investment Range</div>
              <div className="bg-gray-100 p-3 rounded">Growth Potential</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <input type="text" placeholder="Search businesses..." className="flex-1 border rounded px-4 py-2" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button className="bg-[#2171B5] text-white px-5 py-2 rounded hover:bg-[#08306B]">Create Alert</button>
          </div>

          <h2 className="text-xl font-semibold mb-6 text-[#08306B]">Showing {filtered.length} Businesses</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">HOT</span>
                <ImageWithFallback src={item.img} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.location}</p>
                  <p className="text-[#2171B5] font-bold mt-2">{item.price}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                  {item.details && (
                    <>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Object.entries(item.details).map(([k,v])=> (
                          <span key={k} className="bg-blue-100 text-xs px-2 py-1 rounded">{k}: {v}</span>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="mt-3 border-t pt-3 text-xs text-gray-500 flex justify-between">
                    <span>{item.type || 'Listing'}</span>
                    <span>Rev: {item.revenue || 'N/A'}</span>
                  </div>

                  <button className="mt-3 text-sm text-[#2171B5] hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white p-8 rounded-xl mt-10 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Need help investing?</h2>
              <p className="text-sm text-gray-200">Connect with experts and discover the best opportunities.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-[#08306B] px-5 py-2 rounded">Get Advice</button>
              <button className="border border-white px-5 py-2 rounded">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
