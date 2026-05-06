import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ChevronRight, Search } from 'lucide-react'

const createSection = (title, subtitle, description, focuses, accent = '#2171B5', heroImage, properties = []) => ({
  title,
  subtitle,
  description,
  focuses,
  accent,
  heroImage,
  properties,
})

const salesSections = {
  'view-all': createSection(
    'View All Sales Listings',
    'Browse the complete sales catalogue',
    'Open every property category in one place and jump straight into the section you need.',
    ['Houses, apartments, land, and commercial', 'Verified listings across Sri Lanka', 'Fast access to every sales category'],
    '#2171B5',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Luxury Villa in Colombo', price: 'Rs. 45M+', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'Premium' },
      { title: 'Modern City Apartment', price: 'Rs. 25M+', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Hot' },
      { title: 'Commercial Space', price: 'Rs. 15M+', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80', badge: 'Investment' },
    ]
  ),
  houses: createSection(
    'Houses for Sale',
    'Family homes, villas, and bungalows',
    'Find family homes in Colombo, Kandy, Negombo, and other popular residential areas.',
    ['Family homes', 'Villas and bungalows', 'Suburban and city options'],
    '#2171B5',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Spacious Family House - Colombo', price: 'Rs. 18.5M', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80', badge: 'Featured' },
      { title: 'Villa with Garden - Kandy', price: 'Rs. 12.8M', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', badge: 'Popular' },
      { title: 'Modern Bungalow - Negombo', price: 'Rs. 22.5M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'New' },
    ]
  ),
  apartments: createSection(
    'Apartments for Sale',
    'Compact city living and modern towers',
    'Compare apartment options for first-time buyers, investors, and city professionals.',
    ['City apartments', 'Mid-range units', 'Luxury towers'],
    '#2171B5',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Modern City Apartment - Colombo 05', price: 'Rs. 25M', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Hot Deal' },
      { title: 'Luxury Tower Unit - Colombo 03', price: 'Rs. 35M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'Premium' },
      { title: 'Compact Apartment - Nugegoda', price: 'Rs. 14.5M', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&q=80', badge: 'Value' },
    ]
  ),
  commercial: createSection(
    'Commercial Property for Sale',
    'Shops, offices, and investment spaces',
    'Explore commercial properties that suit business owners, investors, and developers.',
    ['Shops and offices', 'Warehouses and hotels', 'Colombo business areas'],
    '#2171B5',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Prime Office Space - Fort', price: 'Rs. 28M', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80', badge: 'Prime' },
      { title: 'Retail Shop - Colombo 07', price: 'Rs. 12M', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80', badge: 'Retail' },
      { title: 'Warehouse - Industrial Zone', price: 'Rs. 8.5M', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80', badge: 'Investment' },
    ]
  ),
  bungalows: createSection(
    'Bungalows',
    'Relaxed homes with more space',
    'Browse bungalow-style properties with garden space, privacy, and comfortable layouts.',
    ['Garden space', 'Peaceful neighborhoods', 'Ideal for families'],
    '#2171B5',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Classic Bungalow - Kandy', price: 'Rs. 9.5M', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', badge: 'Popular' },
      { title: 'Garden Bungalow - Galle', price: 'Rs. 11.2M', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80', badge: 'Peaceful' },
      { title: 'Spacious Bungalow - Matara', price: 'Rs. 8.8M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'Value' },
    ]
  ),
  villas: createSection(
    'Villas',
    'Premium homes with stronger lifestyle appeal',
    'See villa listings that focus on comfort, design, and premium residential settings.',
    ['Premium living', 'Private spaces', 'Lifestyle-focused homes'],
    '#2171B5',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Luxury Villa with Pool', price: 'Rs. 32.5M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'Premium' },
      { title: 'Modern Villa - Negombo', price: 'Rs. 28M', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80', badge: 'Luxury' },
      { title: 'Beachfront Villa - Mirissa', price: 'Rs. 45M', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', badge: 'Exclusive' },
    ]
  ),
  'studio-bedsit': createSection(
    'Studio / Bedsit',
    'Small homes for simple city living',
    'Check compact properties that work well for students, singles, and budget-minded buyers.',
    ['Compact layouts', 'Lower entry price', 'Easy to maintain'],
    '#2171B5',
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Studio - Colombo 04', price: 'Rs. 6.5M', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&q=80', badge: 'Budget' },
      { title: 'Bedsit - Wellawatta', price: 'Rs. 5.2M', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Affordable' },
      { title: 'Compact Studio - Galle Road', price: 'Rs. 7M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'City' },
    ]
  ),
  'luxury-apartments': createSection(
    'Luxury Apartments',
    'High-end apartment living',
    'Explore premium apartments with better finishes, amenities, and central locations.',
    ['Premium amenities', 'Central locations', 'Upscale buyers'],
    '#2171B5',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Penthouse - Colombo 03', price: 'Rs. 42M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'Exclusive' },
      { title: 'Luxury Tower - Colombo 07', price: 'Rs. 38M', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Premium' },
      { title: 'Upscale Unit - Mount Lavinia', price: 'Rs. 35M', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', badge: 'Luxury' },
    ]
  ),
  'beachfront-properties': createSection(
    'Beachfront Properties',
    'Coastal homes and investment spots',
    'Explore properties with direct or near-direct access to the beach and coastline.',
    ['Coastal lifestyle', 'Sea-view appeal', 'Holiday and investment value'],
    '#2171B5',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Beachfront Villa - Mirissa', price: 'Rs. 52M', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80', badge: 'Exclusive' },
      { title: 'Beach House - Unawatuna', price: 'Rs. 38M', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80', badge: 'Popular' },
      { title: 'Coastal Apartment - Colombo Beach', price: 'Rs. 28M', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Premium' },
    ]
  ),
  'new-developments': createSection(
    'New Developments',
    'Fresh projects and planned communities',
    'Look at new property launches and planned developments that are coming to market.',
    ['New project launches', 'Planned communities', 'Developer-led sales'],
    '#2171B5',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'New Mixed-Use Complex', price: 'From Rs. 12M', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80', badge: 'Launch' },
      { title: 'Planned Apartment Tower', price: 'From Rs. 18M', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Coming' },
      { title: 'New Villa Community', price: 'From Rs. 22M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'New' },
    ]
  ),
  'warehouse': createSection(
    'Warehouse',
    'Storage and logistics-friendly properties',
    'Find warehouse options for storage, distribution, and business operations.',
    ['Storage space', 'Industrial use', 'Business logistics'],
    '#2171B5',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80&auto=format&fit=crop',
    [
      { title: 'Industrial Warehouse - Katunayake', price: 'Rs. 24M', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80', badge: 'Industrial' },
      { title: 'Storage Facility - Peliyagoda', price: 'Rs. 18M', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80', badge: 'Logistics' },
      { title: 'Distribution Center', price: 'Rs. 35M', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80', badge: 'Prime' },
    ]
  ),
}

const formatSlugLabel = (slug = '') =>
  slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const buildDynamicSection = (slug) => {
  const label = formatSlugLabel(slug) || 'Sales Listings'

  return createSection(
    label,
    `${label} in Sri Lanka`,
    `Discover curated ${label.toLowerCase()} opportunities with verified listings, transparent pricing, and strong location coverage.`,
    ['Verified seller profiles', 'Market-ready pricing', 'Islandwide property options'],
    '#2171B5',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80&auto=format&fit=crop',
    [
      { title: `${label} Opportunity 1`, price: 'From Rs. 12M', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', badge: 'Featured' },
      { title: `${label} Opportunity 2`, price: 'From Rs. 18M', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80', badge: 'Popular' },
      { title: `${label} Opportunity 3`, price: 'From Rs. 24M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', badge: 'Premium' },
    ]
  )
}

export default function SalesSectionPage({ sectionSlug: sectionSlugProp } = {}) {
  const params = useParams()
  const normalizedSlug = sectionSlugProp || params.sectionSlug || 'view-all'
  const section = salesSections[normalizedSlug] || buildDynamicSection(normalizedSlug)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [sortBy, setSortBy] = useState('Relevance')
  const [viewMode, setViewMode] = useState('list')
  const [locationFilter, setLocationFilter] = useState('Any')
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('Any')
  const [budgetFilter, setBudgetFilter] = useState('Any')
  const [tagFilter, setTagFilter] = useState('Any')
  const kandyLocations = [
    'Kandy Town',
    'Peradeniya',
    'Katugastota',
    'Heerassagala',
    'Gampola',
    'Akurana',
    'Digana',
    'Pilimathalawa',
    'Kundasale',
    'Nawalapitiya',
  ]

  const handleSearchClick = () => {
    document.getElementById('sales-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleContactSeller = (property) => {
    const subject = encodeURIComponent(`Inquiry about ${property.title}`)
    const body = encodeURIComponent(`Hi LankaPropertyWeb,\n\nI am interested in ${property.title} listed at ${property.price}. Please share more details.`)
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${subject}&body=${body}`
  }

  const cardTags = ['Verified', 'Prime Location', 'Fast Response']

  const parsePriceMillions = (price = '') => {
    const match = String(price).match(/(\d+(?:\.\d+)?)M/i)
    return match ? Number(match[1]) : 0
  }

  const getPropertyLocation = (index) => kandyLocations[index % kandyLocations.length]

  const filteredProperties = section.properties.filter((property, index) => {
    const title = property.title.toLowerCase()
    const propertyLocation = getPropertyLocation(index)
    const cityMatch = locationFilter === 'Any' || propertyLocation === locationFilter
    const typeMatch = propertyTypeFilter === 'Any' || title.includes(propertyTypeFilter.toLowerCase())
    const tagMatch = tagFilter === 'Any' || property.badge.toLowerCase() === tagFilter.toLowerCase()
    const price = parsePriceMillions(property.price)
    const budgetMatch = budgetFilter === 'Any' ||
      (budgetFilter === 'Under 15M' && price < 15) ||
      (budgetFilter === '15M - 30M' && price >= 15 && price <= 30) ||
      (budgetFilter === '30M+' && price > 30)

    return cityMatch && typeMatch && tagMatch && budgetMatch
  })

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'Price-Low') {
      return a.price.localeCompare(b.price)
    }
    if (sortBy === 'Price-High') {
      return b.price.localeCompare(a.price)
    }
    return 0
  })

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-slate-900">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-slate-500">
            <span className="font-semibold text-slate-700">Home</span>
            <span>›</span>
            <span className="font-semibold text-slate-700">Sales</span>
            <span>›</span>
            <span className="text-slate-500">{section.title}</span>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.45fr_1fr_auto] lg:items-center">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:col-span-2">
              <label className="min-h-[60px] rounded border border-[#d9e8f6] bg-white px-3 py-2 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">Location</div>
                <select value={locationFilter} onChange={(event) => setLocationFilter(event.target.value)} className="mt-1 w-full bg-transparent text-[15px] font-semibold text-slate-700 outline-none">
                  <option>Any</option>
                  {kandyLocations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </label>

              <label className="min-h-[60px] rounded border border-[#d9e8f6] bg-white px-3 py-2 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">Property Type</div>
                <select value={propertyTypeFilter} onChange={(event) => setPropertyTypeFilter(event.target.value)} className="mt-1 w-full bg-transparent text-[15px] font-semibold text-slate-700 outline-none">
                  <option>Any</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </label>

              <label className="min-h-[60px] rounded border border-[#d9e8f6] bg-white px-3 py-2 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">Budget</div>
                <select value={budgetFilter} onChange={(event) => setBudgetFilter(event.target.value)} className="mt-1 w-full bg-transparent text-[15px] font-semibold text-slate-700 outline-none">
                  <option>Any</option>
                  <option>Under 15M</option>
                  <option>15M - 30M</option>
                  <option>30M+</option>
                </select>
              </label>

              <label className="min-h-[60px] rounded border border-[#d9e8f6] bg-white px-3 py-2 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">Tag</div>
                <select value={tagFilter} onChange={(event) => setTagFilter(event.target.value)} className="mt-1 w-full bg-transparent text-[15px] font-semibold text-slate-700 outline-none">
                  <option>Any</option>
                  <option>Featured</option>
                  <option>Popular</option>
                  <option>Premium</option>
                  <option>Hot</option>
                  <option>New</option>
                </select>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" onClick={handleSearchClick} className="inline-flex items-center gap-2 rounded-lg bg-[#2171B5] px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-[#08306B]">
                <Search className="h-4 w-4" />
                Search
              </button>
              <div className="ml-auto inline-flex overflow-hidden rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700">
                <button type="button" onClick={() => setViewMode('list')} className={`px-4 py-2 ${viewMode === 'list' ? 'bg-[#2171B5] text-white' : ''}`}>List</button>
                <button type="button" onClick={() => setViewMode('map')} className={`px-4 py-2 ${viewMode === 'map' ? 'bg-[#2171B5] text-white' : ''}`}>Map</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sales-results" className="border-b border-slate-200 bg-[#f4f4f4]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-3xl font-light tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.8rem]">
              {normalizedSlug === 'view-all' ? 'Featured Projects & Housing Projects in Sri Lanka' : section.title}
              <span className="ml-2 text-[18px] font-medium text-slate-500">({sortedProperties.length} projects)</span>
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {viewMode === 'map' ? 'Map view is active. Listings are still shown below while map integration is being prepared.' : 'List view is active.'}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-[15px]">
              <span className="text-slate-500">Sort by:</span>
              {['Relevance', 'Price-Low', 'Price-High', 'Possession Date'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`transition ${sortBy === option ? 'font-semibold text-[#2171B5]' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {section.focuses.map((focus) => (
                <span key={focus} className="rounded-full bg-white px-3 py-1.5 ring-1 ring-[#d9e8f6]">
                  {focus}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {sortedProperties.map((property, idx) => (
              <article
                key={`${property.title}-${idx}`}
                className="overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="grid gap-0 md:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[240px] bg-slate-200">
                    <img src={property.image} alt={property.title} className="h-full w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#2171B5] px-3 py-1 text-xs font-semibold text-white">
                      {property.badge}
                    </span>
                  </div>

                  <div className="p-5 md:p-6 lg:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-slate-900">{property.title}</h2>
                        <p className="mt-1 text-lg font-semibold text-slate-500">
                          {getPropertyLocation(idx)}, Kandy
                        </p>
                      </div>
                      <div className="rounded-full bg-[#08306B] px-4 py-2 text-sm font-semibold text-white">
                        {property.price}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {cardTags.map((tag) => (
                        <div key={tag} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                          {tag}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span>More details available</span>
                      <span>•</span>
                      <span>Immediate viewing</span>
                      <span>•</span>
                      <span>Verified listing</span>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button type="button"
                        onClick={() => setSelectedProperty(property)}
                        className="rounded-md bg-[#2171B5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#08306B]"
                      >
                        View Details
                      </button>
                      <button type="button" onClick={() => handleContactSeller(property)} className="rounded-md border border-[#c7ddf1] px-5 py-3 text-sm font-semibold text-[#08306B] transition hover:border-[#2171B5] hover:text-[#2171B5]">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {section.focuses.map((focus, index) => (
              <article key={focus} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eff6fd] text-sm font-black text-[#2171B5]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{focus}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#2171B5] px-6 py-8 text-white shadow-lg">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold">Ready to find your next property?</h2>
                <p className="mt-2 max-w-2xl text-sm text-white/85">
                  Browse through the full {section.title.toLowerCase()} catalog with verified information, photos, and direct contact options.
                </p>
              </div>
              <Link
                to="/sales"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#08306B] transition hover:bg-slate-100"
              >
                Browse All Sales <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-slate-200">
            <button
              className="absolute right-4 top-3 text-3xl font-light text-slate-400 transition hover:text-slate-700"
              onClick={() => setSelectedProperty(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} className="h-64 w-full rounded-xl object-cover" />
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2171B5]">Property Overview</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{selectedProperty.title}</h3>
              <p className="mt-2 text-slate-600">{section.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#2171B5] px-3 py-1.5 text-xs font-semibold text-white">{selectedProperty.badge}</span>
                <span className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">{selectedProperty.price}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

