import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const pois = [
  { name: 'Temple of the Sacred Tooth Relic', desc: 'Historic cultural site in central Kandy' },
  { name: 'Royal Botanical Gardens, Peradeniya', desc: 'Large botanical gardens with diverse flora' },
  { name: 'Gadaladeniya Temple', desc: 'Ancient temple with scenic views' },
  { name: 'Kandy Lake', desc: 'Central lake ideal for evening walks' },
]

export default function PointsOfInterestKandy(){
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl font-bold">Points of Interest — Kandy</h1>
            <p className="mt-2 text-gray-100">A curated list of places to visit in and around Kandy with quick map links.</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {pois.map((p, i) => (
              <article key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 bg-gray-100">
                  <img src={`https://source.unsplash.com/collection/190727/800x600?sig=${i}`} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(p.name + ' Kandy')}`} target="_blank" rel="noreferrer" className="inline-block mt-3 text-[#2171B5] hover:underline">Open on map</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
