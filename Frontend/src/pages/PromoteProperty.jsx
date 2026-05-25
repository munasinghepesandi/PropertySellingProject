import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function PromoteProperty() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-[#08306B] mb-4">Promote your property</h1>
          <p className="text-gray-700 mb-4">Increase visibility with featured listings, social promotion and targeted campaigns.</p>

          <div className="space-y-4">
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Featured Listing</h3>
              <p className="text-sm text-gray-600">Boost your listing to the top of search results for higher exposure.</p>
            </div>

            <div className="p-4 border rounded">
              <h3 className="font-semibold">Premium Photos & Copy</h3>
              <p className="text-sm text-gray-600">Professional photo and description packages to attract more buyers.</p>
            </div>

            <div className="p-4 border rounded">
              <h3 className="font-semibold">Email & Social Campaigns</h3>
              <p className="text-sm text-gray-600">Targeted distribution to interested buyers and agents.</p>
            </div>
          </div>

          <div className="mt-6">
            <Link to="/post-ad" className="inline-block bg-[#2171B5] text-white px-4 py-2 rounded">Post your ad</Link>
          </div>
        </div>
      </main>
    </>
  )
}
