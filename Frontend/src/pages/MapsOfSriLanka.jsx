import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function MapsOfSriLanka(){
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(8,48,107,0.75), rgba(33,113,181,0.6)), url('https://images.unsplash.com/photo-1505765057513-05d9a8b3b8d6?auto=format&fit=crop&w=1400&q=60')"}}>
          <div className="max-w-6xl mx-auto px-6 py-20 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Maps of Sri Lanka</h1>
            <p className="mt-3 text-gray-100 max-w-2xl">Discover regional maps, neighbourhood boundaries and transport overlays. Start with Kandy's city maps and points of interest.</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://images.unsplash.com/photo-1549887534-2f5a6b2b5f1c?auto=format&fit=crop&w=1200&q=60" alt="Kandy" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Kandy Overview</h3>
                <p className="text-sm text-gray-600 mt-2">Neighbourhoods, transit and planning maps for Kandy with printable overlays.</p>
                <div className="mt-4">
                  <Link to="/more/area-guides/area-guide" className="text-[#2171B5] hover:underline">Open Kandy guide</Link>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-44 bg-gray-100 flex items-center justify-center">
                <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="text-[#2171B5] hover:underline">Open interactive maps</a>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Interactive Map Resources</h3>
                <p className="text-sm text-gray-600 mt-2">External map tools, printable maps and transport overlays you can download.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
