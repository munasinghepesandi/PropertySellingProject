import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function Gardening(){
  const categories = [
    { name: 'Lawn Care', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
    { name: 'Landscaping', img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
    { name: 'Garden Tools', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e' },
  ]

  const listings = [
    { title: 'Lawn Care Service', location: 'Kandy', price: 'Rs. 8,000/month', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
    { title: 'Garden Design Package', location: 'Colombo', price: 'Rs. 35,000', img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
  ]

  return (
    <IdealCategoryTemplate
      title="Gardening"
      subtitle="Plants, landscaping and garden services."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Lawn Care', active: true },
        { label: 'Landscaping' },
        { label: 'Garden Tools' },
      ]}
      listings={listings}
    />
  )
}
