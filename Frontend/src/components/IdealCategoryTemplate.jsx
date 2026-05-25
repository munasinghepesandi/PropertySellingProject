import React, { useState } from 'react'
import { Search, ChevronRight, Grid, List } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import PageHeader from './PageHeader'
import ImageWithFallback from './ImageWithFallback'

export default function IdealCategoryTemplate({
  title,
  subtitle,
  heroImage,
  categories = [],
  listings = [],
  sidebarTitle = 'Categories',
  sidebarItems = [],
  searchPlaceholder = 'Search...'
}) {
  const [view, setView] = useState('grid')

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <PageHeader title={title} subtitle={subtitle} image={heroImage} />

      {categories.length > 0 && (
        <div className="px-6 py-6 flex gap-4 overflow-x-auto">
          {categories.map((cat, i) => (
            <div key={i} className="min-w-[160px] bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl hover:-translate-y-1 transition">
              <ImageWithFallback src={cat.img} alt={cat.name} className="h-20 mx-auto object-cover rounded-md mb-3" />
              <p className="text-sm font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
          <div className="flex items-center justify-center min-w-[60px]"><ChevronRight className="text-[#2171B5]" /></div>
        </div>
      )}

      <div className="flex px-6 gap-6 pb-10">
        <div className="w-64 bg-white p-5 rounded-xl shadow-md">
          <h3 className="font-bold text-[#08306B] mb-4">{sidebarTitle}</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            {sidebarItems.map((item, index) => (
              <li key={index} className={item.active ? 'text-[#2171B5] font-semibold cursor-pointer' : 'hover:text-[#2171B5] cursor-pointer'}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#08306B]">{title} Listings</h2>
            <div className="flex gap-3 bg-white p-2 rounded-lg shadow">
              <button onClick={() => setView('grid')}><Grid className={view === 'grid' ? 'text-[#2171B5]' : 'text-gray-500'} /></button>
              <button onClick={() => setView('list')}><List className={view === 'list' ? 'text-[#2171B5]' : 'text-gray-500'} /></button>
            </div>
          </div>

          {view === 'grid' ? (
            <div className="grid md:grid-cols-3 gap-6">
              {listings.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                  <ImageWithFallback src={item.img} alt={item.title} className="h-52 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.location}</p>
                    <p className="text-[#2171B5] font-bold mt-2 text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {listings.map((item, i) => (
                <div key={i} className="flex bg-white rounded-xl shadow-md p-4 gap-4 hover:shadow-lg transition">
                  <ImageWithFallback src={item.img} alt={item.title} className="w-48 h-32 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.location}</p>
                    </div>
                    <p className="text-[#2171B5] font-bold text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
