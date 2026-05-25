import React from 'react'
import { Link } from 'react-router-dom'

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
      { label: 'Property Buying Guide', to: '/more/guides/property-buying-guide' },
      { label: "Foreign Buyers' Guide", to: '/more/guides/foreign-buyers-guide' },
      { label: 'Capital Gains Tax', to: '/more/guides/capital-gains-tax' },
      { label: 'Sri Lanka House Price Index', to: '/more/guides/house-price-index' },
      { label: 'Sri Lanka Land Price Index', to: '/more/guides/land-price-index' },
      { label: 'Membership Benefits', to: '/more/guides/membership-benefits' },
    ],
  },
  {
    title: 'News & About',
    items: [
      { label: 'News & Guides', to: '/more/news-and-guides' },
      { label: 'About us', to: '/more/about-us' },
      { label: 'Careers', to: '/more/careers' },
      { label: 'Contact Us', to: '/more/contact-us' },
      { label: 'Events', to: '/more/events' },
      { label: 'FAQs', to: '/more/faqs' },
    ],
  },
  {
    title: 'Ideal Home',
    items: [
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
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-slate-800">More</h1>
      <p className="mt-2 text-slate-600">Quick links to help you find what you're looking for.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {groups.map((g) => (
          <section key={g.title} className="p-6 border rounded-lg bg-white">
            <h2 className="font-semibold text-lg text-slate-800 mb-3">{g.title}</h2>
            <ul className="space-y-2 text-slate-600">
              {g.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-blue-600 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
