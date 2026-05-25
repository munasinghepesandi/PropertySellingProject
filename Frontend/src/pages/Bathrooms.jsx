import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function Bathrooms(){
  const categories = [
    { name: 'Bathroom Suites', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2' },
    { name: 'Wash Basins', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a' },
    { name: 'Showers', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36' },
  ]

  const listings = [
    { title: 'Bathroom Suite - Modern', location: 'Colombo', price: 'Rs. 45,000', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2' },
    { title: 'Luxury Shower Set', location: 'Kandy', price: 'Rs. 28,500', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36' },
  ]

  return (
    <IdealCategoryTemplate
      title="Bathrooms"
      subtitle="Fixtures, fittings and bathroom design services."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Bathroom Suites', active: true },
        { label: 'Wash Basins' },
        { label: 'Showers' },
      ]}
      listings={listings}
    />
  )
}
