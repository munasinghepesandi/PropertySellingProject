import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function ServiceProviders(){
  const categories = [
    { name: 'Plumbing', img: 'https://images.unsplash.com/photo-1607472580289-9e5d6ed7a8eb' },
    { name: 'Electrical', img: 'https://images.unsplash.com/photo-1581092921461-39b9d9c8e7c3' },
    { name: 'Carpentry', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd' },
  ]

  const listings = [
    { title: 'Plumbing Services', location: 'Colombo', price: 'Call for quote', img: 'https://images.unsplash.com/photo-1607472580289-9e5d6ed7a8eb' },
    { title: 'Electrical Service Crew', location: 'Kandy', price: 'Call for quote', img: 'https://images.unsplash.com/photo-1581092921461-39b9d9c8e7c3' },
  ]

  return (
    <IdealCategoryTemplate
      title="Service Providers"
      subtitle="List of vetted service providers and contractors."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Plumbing', active: true },
        { label: 'Electrical' },
        { label: 'Carpentry' },
      ]}
      listings={listings}
    />
  )
}
