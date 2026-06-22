import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function AreaGuideKandy(){
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-[#123B44] to-[#2A6F86] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold">Kandy — Area Guide</h1>
            <p className="mt-3 text-gray-100 max-w-2xl">Discover neighbourhoods, transport links, schools and local amenities to help you find the right place in Kandy.</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <div className="text-sm text-gray-500 mb-3">
                <Link to="/more/area-guides" className="text-[#2A6F86] hover:underline">Area Guides</Link>
                <span className="mx-2">/</span>
                <span>Kandy</span>
              </div>

              <p className="text-gray-700 mb-6">Kandy is a major city in central Sri Lanka, known for the Temple of the Tooth, cultural heritage, and surrounding hill country. This guide covers neighbourhoods, transport, schools, and local amenities.</p>

              <div className="space-y-6">
                <section>
                  <h2 className="font-semibold text-lg">Neighbourhoods</h2>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Peradeniya</h4>
                      <p className="text-sm text-gray-600">University area, quieter residential zones and easy access to botanical gardens.</p>
                    </div>
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Gampola</h4>
                      <p className="text-sm text-gray-600">Growing suburban area to the south with new housing developments.</p>
                    </div>
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Kandy city centre</h4>
                      <p className="text-sm text-gray-600">Commercial, retail and tourist hub near the Temple of the Tooth.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-semibold text-lg">Transport</h2>
                  <p className="text-gray-700">Accessible by road and rail. Buses and taxis serve local travel; Colombo–Kandy train is popular for scenic routes.</p>
                </section>

                <section>
                  <h2 className="font-semibold text-lg">Schools & Healthcare</h2>
                  <p className="text-gray-700">Several well-regarded schools and hospitals exist in and around Kandy. International options are limited.</p>
                </section>
              </div>

              <div className="mt-6">
                <Link to="/more/area-guides/points-of-interest" className="text-sm text-[#2A6F86] hover:underline">See Points of Interest in Kandy</Link>
              </div>
            </div>

            <aside className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-3">Quick facts</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Population:</strong> ~125,000 (city)</li>
                <li><strong>Best for:</strong> Culture, schools, hill country access</li>
                <li><strong>Nearest airport:</strong> Bandaranaike Intl (approx. 3 hrs by road)</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </>
  )
}
