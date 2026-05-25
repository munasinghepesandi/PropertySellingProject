import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function Lighting(){
  const categories = [
    { name: 'LED Lighting', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c' },
    { name: 'Pendant Lights', img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742' },
    { name: 'Outdoor Lights', img: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb' },
  ]

  const listings = [
    { title: 'LED Ceiling Light', location: 'Kandy', price: 'Rs. 3,200', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c' },
    { title: 'Outdoor Wall Lamp', location: 'Colombo', price: 'Rs. 4,800', img: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb' },
  ]

  return (
    <IdealCategoryTemplate
      title="Lighting"
      subtitle="Indoor and outdoor lighting products and installers."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'LED Lighting', active: true },
        { label: 'Pendant Lights' },
        { label: 'Outdoor Lights' },
      ]}
      listings={listings}
    />
  )
}
