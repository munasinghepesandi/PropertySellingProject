import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function IdealAppliances(){
  const categories = [
    { name: 'Refrigerators', img: 'https://images.unsplash.com/photo-1542293787938-c9e299b8802d' },
    { name: 'Washing Machines', img: 'https://images.unsplash.com/photo-1581579180991-8b5b2d8d8f35' },
    { name: 'Kitchen Appliances', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4' },
    { name: 'Air Conditioning', img: 'https://images.unsplash.com/photo-1580572442793-9f8b5a4a1c4f' },
    { name: 'Water Heaters', img: 'https://images.unsplash.com/photo-1582719478140-1b1b1b3b6f2a' },
    { name: 'Smart Home', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4' },
  ]

  const listings = [
    { title: 'Energy Efficient Refrigerator', location: 'Colombo', price: 'Rs. 85,000', img: 'https://images.unsplash.com/photo-1542293787938-c9e299b8802d' },
    { title: 'Front Load Washing Machine', location: 'Kandy', price: 'Rs. 65,000', img: 'https://images.unsplash.com/photo-1581579180991-8b5b2d8d8f35' },
  ]

  return (
    <IdealCategoryTemplate
      title="Appliances & Electronics"
      subtitle="Find trusted suppliers and products for home appliances — refrigerators, washers, smart devices and more."
      heroImage={categories[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Refrigerators', active: true },
        { label: 'Washing Machines' },
        { label: 'Air Conditioning' },
        { label: 'Water Heaters' },
      ]}
      listings={listings}
    />
  )
}
