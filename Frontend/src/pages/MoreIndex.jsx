import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Home, MapPin, BookOpen, Info, Layers, ChevronRight } from 'lucide-react'

const groups = [
  {
    title: 'Assistance',
    items: [
      { label: 'Buyer & Seller Assistance', to: '/more/buyer-seller-assistance' },
      { label: 'Promote your property', to: '/more/promote-your-property' },
    ],
  },
  {
    title: 'Businesses for Sale',
    items: [
      { label: 'New', to: '/more/businesses/new' },
      { label: 'View All Businesses for Sale', to: '/more/businesses' },
      { label: 'Real Estate', to: '/more/businesses/real-estate' },
      { label: 'Restaurant', to: '/more/businesses/restaurant' },
      { label: 'Construction', to: '/more/businesses/construction' },
      { label: 'Agriculture', to: '/more/businesses/agriculture' },
      { label: 'Tech', to: '/more/businesses/tech' },
      { label: 'Hospitality', to: '/more/businesses/hospitality' },
      { label: 'Business', to: '/more/businesses/business' },
      { label: 'Manufacturing', to: '/more/businesses/manufacturing' },
      { label: 'Garment-Textile', to: '/more/businesses/garment-textile' },
      { label: 'Services-BPO', to: '/more/businesses/services-bpo' },
    ],
  },
  {
    title: 'Area Guides',
    items: [
      { label: 'Maps of Sri Lanka', to: '/more/area-guides/maps-of-sri-lanka' },
      { label: 'Area Guide', to: '/more/area-guides/area-guide' },
      { label: 'Point of Interests', to: '/more/area-guides/points-of-interest' },
    ],
  },
  {
    title: 'Guides & Indices',
    items: [
      { label: 'Property Buying Guide', to: '/property-buying-guide' },
      { label: "Foreign Buyers' Guide", to: '/sales/foreigners-guide' },
      { label: 'Capital Gains Tax', to: '/capital-gains-tax' },
      { label: 'Sri Lanka House Price Index', to: '/sales/house-price-index' },
      { label: 'Sri Lanka Land Price Index', to: '/landpriceindex' },
      { label: 'Membership Benefits', to: '/membership-benefits' },
    ],
  },
  {
    title: 'News & About',
    items: [
      { label: 'News & Guides', to: '/news-and-guides' },
      { label: 'About us', to: '/aboutus' },
      { label: 'Careers', to: '/more/careers' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Events', to: '/more/events' },
      { label: 'FAQs', to: '/faqs' },
    ],
  },
  {
    title: 'Ideal Home',
    items: [
      { label: 'Ideal Home', to: '/more/ideal-home' },
      { label: 'Appliances & Electronics', to: '/more/ideal-home/appliances' },
      { label: 'Furniture', to: '/more/ideal-home/furniture' },
      { label: 'Household items', to: '/more/ideal-home/household-items' },
      { label: 'Solar & Hot Water', to: '/more/ideal-home/solar-hot-water' },
      { label: 'Bathrooms', to: '/more/ideal-home/bathrooms' },
      { label: 'Gardening', to: '/more/ideal-home/gardening' },
      { label: 'Kitchen', to: '/more/ideal-home/kitchen' },
      { label: 'Professionals', to: '/more/ideal-home/professionals' },
      { label: 'Flooring', to: '/more/ideal-home/flooring' },
      { label: 'House Construction', to: '/more/ideal-home/house-construction' },
      { label: 'Lighting', to: '/more/ideal-home/lighting' },
      { label: 'Service Providers', to: '/more/ideal-home/service-providers' },
      { label: 'Other Services', to: '/more/ideal-home/other-services' },
    ],
  },
]

export default function MoreIndex() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold">More</h1>
          <p className="mt-3 text-gray-100 max-w-2xl">Helpful guides, directories and services to assist buyers, sellers and property professionals.</p>

          <div className="mt-6 max-w-lg">
            <div className="flex overflow-hidden rounded-xl bg-white">
              <input placeholder="Search guides, businesses, topics..." className="flex-1 px-4 py-3 text-slate-700 outline-none" />
              <button className="px-4 bg-[#2171B5] text-white flex items-center gap-2"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#f0f6fb] p-3 text-[#08306B]">
                  {g.title === 'Assistance' && <Info size={20} />}
                  {g.title === 'Businesses for Sale' && <Briefcase size={20} />}
                  {g.title === 'Area Guides' && <MapPin size={20} />}
                  {g.title === 'Guides & Indices' && <BookOpen size={20} />}
                  {g.title === 'News & About' && <Home size={20} />}
                  {g.title === 'Ideal Home' && <Layers size={20} />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{g.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{g.items.length} links</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {g.items.slice(0, 6).map((item) => (
                  <li key={item.to} className="text-sm">
                    <Link to={item.to} className="text-[#2171B5] hover:underline">{item.label}</Link>
                  </li>
                ))}
              </ul>

              {g.items.length > 6 && (
                <div className="mt-4">
                  <Link to={g.items[0].to} className="inline-flex items-center gap-2 text-sm font-semibold text-[#08306B]">
                    View all <ChevronRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
