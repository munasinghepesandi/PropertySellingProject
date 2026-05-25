import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle, ctaText, ctaTo, image }){
  const bg = image || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=60'
  return (
    <header className="relative bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(8,48,107,0.66), rgba(33,113,181,0.5)), url('${bg}')` }}>
      <div className="max-w-6xl mx-auto px-6 py-20 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-gray-100 max-w-3xl">{subtitle}</p>}
        {ctaText && ctaTo && (
          <div className="mt-6">
            <Link to={ctaTo} className="inline-block bg-white text-[#08306B] px-4 py-2 rounded-lg font-semibold shadow">{ctaText}</Link>
          </div>
        )}
      </div>
    </header>
  )
}
