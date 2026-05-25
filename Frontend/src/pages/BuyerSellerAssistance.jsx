import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function BuyerSellerAssistance() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-[#08306B] mb-4">Buyer & Seller Assistance</h1>
          <p className="text-gray-700 mb-4">
            We help buyers and sellers with valuations, documentation, legal advice, mortgage guidance and
            more. Below are common services and quick links to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/our-services/property-valuations" className="block p-4 border rounded hover:shadow">
              <h3 className="font-semibold">Property Valuations</h3>
              <p className="text-sm text-gray-600">Get a realistic market valuation for your property.</p>
            </Link>

            <Link to="/our-services/legal-assistance" className="block p-4 border rounded hover:shadow">
              <h3 className="font-semibold">Legal Assistance</h3>
              <p className="text-sm text-gray-600">Legal support for contracts, conveyancing and transfers.</p>
            </Link>

            <Link to="/our-services/mortgage-advice" className="block p-4 border rounded hover:shadow">
              <h3 className="font-semibold">Mortgage Advice</h3>
              <p className="text-sm text-gray-600">Compare lender options and understand repayment scenarios.</p>
            </Link>

            <Link to="/promote-property" className="block p-4 border rounded hover:shadow">
              <h3 className="font-semibold">Promote Your Property</h3>
              <p className="text-sm text-gray-600">Get featured placement and marketing support for sellers.</p>
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>If you'd like personalised help, contact our support team or post your ad to reach agents and buyers quickly.</p>
          </div>
        </div>
      </main>
    </>
  )
}
