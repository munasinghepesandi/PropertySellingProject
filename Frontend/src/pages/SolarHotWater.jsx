import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function SolarHotWater(){
  const categories = [
    { name: 'Solar Panels', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231' },
    { name: 'Solar Water Heaters', img: 'https://images.unsplash.com/photo-1509395075300-6c6b6b1a8f7b' },
    { name: 'Installation Services', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231' },
  ]

  const listings = [
    { title: 'Domestic Solar Water Heater', location: 'Colombo', price: 'Rs. 65,000', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231' },
    { title: 'Roof Solar Panel Package', location: 'Kandy', price: 'Rs. 180,000', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7' },
  ]

  return (
    <IdealCategoryTemplate
      title="Solar & Hot Water"
      subtitle="Solar panels, heaters and installation services for homes and businesses."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Solar Panels', active: true },
        { label: 'Solar Water Heaters' },
        { label: 'Installation Services' },
      ]}
      listings={listings}
    />
  )
}
