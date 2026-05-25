import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function Professionals(){
  const categories = [
    { name: 'Electricians', img: 'https://images.unsplash.com/photo-1581092921461-39b9d9c8e7c3' },
    { name: 'Plumbers', img: 'https://images.unsplash.com/photo-1607472580289-9e5d6ed7a8eb' },
    { name: 'Carpenters', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd' },
  ]

  const listings = [
    { title: 'Certified Electrician', location: 'Colombo', price: 'Call for quote', img: 'https://images.unsplash.com/photo-1581092921461-39b9d9c8e7c3' },
    { title: 'Home Plumbing Expert', location: 'Kandy', price: 'Call for quote', img: 'https://images.unsplash.com/photo-1607472580289-9e5d6ed7a8eb' },
  ]

  return (
    <IdealCategoryTemplate
      title="Professionals"
      subtitle="Find vetted tradespeople, installers and service providers."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Electricians', active: true },
        { label: 'Plumbers' },
        { label: 'Carpenters' },
      ]}
      listings={listings}
    />
  )
}
