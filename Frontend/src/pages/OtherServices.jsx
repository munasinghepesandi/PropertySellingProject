import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function OtherServices(){
  const categories = [
    { name: 'Moving', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a' },
    { name: 'Storage', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952' },
    { name: 'Cleaning', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952' },
  ]

  const listings = [
    { title: 'Moving & Storage', location: 'Colombo', price: 'Call for quote', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a' },
    { title: 'Deep Cleaning Service', location: 'Kandy', price: 'Call for quote', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952' },
  ]

  return (
    <IdealCategoryTemplate
      title="Other Services"
      subtitle="Miscellaneous home services and offerings."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Moving', active: true },
        { label: 'Storage' },
        { label: 'Cleaning' },
      ]}
      listings={listings}
    />
  )
}
