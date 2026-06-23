import React from 'react'
import IdealCategoryTemplate from '../components/IdealCategoryTemplate'

export default function Flooring() {
  const categories = [
    { name: 'Timber', img: 'https://images.unsplash.com/photo-1494960707330-90c1e2849c15' },
    { name: 'Tiles', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f' },
    { name: 'Vinyl', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85' },
  ]

  const listings = [
    {
      title: 'Engineered Timber Flooring',
      location: 'Colombo',
      price: 'Rs. 3,500/m2',
      img: 'https://images.unsplash.com/photo-1494960707330-90c1e2849c15'
    },
    {
      title: 'Porcelain Tile Supply',
      location: 'Kandy',
      price: 'Rs. 2,100/m2',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f'
    },
  ]

  const theme = {
    primary: "#203F52",
    secondary: "#2A6FA3",
    accent: "#F3D319",
    background: "#FFFFFF",
    muted: "#EAEAEA",
    text: "#4A4A4A",
    border: "#B8B8B8",
    soft: "#2D4F63",
    beige: "#B5A28A",
    green: "#556B4E",
  }

  return (
    <IdealCategoryTemplate
      title="Flooring"
      subtitle="Tiles, timber, vinyl and flooring services."
      heroImage={listings[0].img}
      categories={categories}
      sidebarItems={[
        { label: 'Timber', active: true },
        { label: 'Tiles' },
        { label: 'Vinyl' },
      ]}
      listings={listings}
      theme={theme}
    />
  )
}