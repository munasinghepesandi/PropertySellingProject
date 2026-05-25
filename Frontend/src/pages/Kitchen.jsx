import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function Kitchen(){
  const categories = [
    { name: 'Kitchen Cabinets', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b' },
    { name: 'Kitchen Appliances', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
    { name: 'Countertops', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d' },
  ]

  const listings = [
    { title: 'Modular Kitchen Setup', location: 'Colombo', price: 'Rs. 220,000', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
    { title: 'Kitchen Cabinet Package', location: 'Kandy', price: 'Rs. 145,000', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b' },
  ]

  return (
    <IdealCategoryTemplate
      title="Kitchen"
      subtitle="Kitchen appliances, cabinetry and design services."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Kitchen Cabinets', active: true },
        { label: 'Kitchen Appliances' },
        { label: 'Countertops' },
      ]}
      listings={listings}
    />
  )
}
