import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function IdealAppliances(){
  const items = [
    {name: 'Refrigerators', desc: 'Energy efficient fridges', img: 'https://images.unsplash.com/photo-1542293787938-c9e299b8802d'},
    {name: 'Washing Machines', desc: 'Top and front load', img: 'https://images.unsplash.com/photo-1581579180991-8b5b2d8d8f35'},
    {name: 'Kitchen Appliances', desc: 'Microwaves & ovens', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4'},
    {name: 'Air Conditioning', desc: 'Split and window AC', img: 'https://images.unsplash.com/photo-1580572442793-9f8b5a4a1c4f'},
    {name: 'Water Heaters', desc: 'Solar & electric', img: 'https://images.unsplash.com/photo-1582719478140-1b1b1b3b6f2a'},
    {name: 'Smart Home', desc: 'Automation & security', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'},
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold">Appliances & Electronics</h1>
            <p className="mt-3 text-gray-200">Find trusted suppliers and products for home appliances — refrigerators, washers, smart devices and more.</p>
            <div className="mt-4">
              <Link to="/more/ideal-home" className="inline-block bg-white text-[#08306B] px-4 py-2 rounded">Back to Ideal Home</Link>
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
                <div className="h-40 bg-gray-100">
                  <img src={it.img + '?auto=format&fit=crop&w=800&q=60'} alt={it.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{it.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-[#2171B5] text-sm hover:underline">View suppliers</button>
                    <span className="text-xs text-gray-400">{idx + 1} / {items.length}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
