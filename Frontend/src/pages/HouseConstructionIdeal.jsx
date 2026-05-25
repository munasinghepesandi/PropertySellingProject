import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function HouseConstructionIdeal(){
  const categories = [
    { name: 'Builders', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
    { name: 'Contractors', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd' },
    { name: 'Renovations', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85' },
  ]

  const listings = [
    { title: 'Local Contractor - Full Build', location: 'Gampaha', price: 'Contact for quote', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
    { title: 'Home Renovation Team', location: 'Colombo', price: 'Contact for quote', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd' },
  ]

  return (
    <IdealCategoryTemplate
      title="House Construction"
      subtitle="Contractors, builders and construction services for new homes and renovations."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Builders', active: true },
        { label: 'Contractors' },
        { label: 'Renovations' },
      ]}
      listings={listings}
    />
  )
}
