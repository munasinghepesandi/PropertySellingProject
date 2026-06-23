import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PRIMARY = "#0B3A66"
const ACCENT = "#1E6FB8"

export default function BuyerSellerAssistance() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-6" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow border border-[#D9E6F2]">

          {/* Title */}
          <h1 className="text-2xl font-bold mb-4" style={{ color: PRIMARY }}>
            Buyer & Seller Assistance
          </h1>

          <p className="text-slate-600 mb-6 leading-7">
            We help buyers and sellers with valuations, documentation, legal advice, mortgage guidance and more.
            Below are common services and quick links to get started.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Link
              to="/our-services/property-valuations"
              className="block p-5 border rounded-xl bg-[#F4F8FC] hover:shadow-md transition border-[#D9E6F2]"
            >
              <h3 className="font-semibold" style={{ color: PRIMARY }}>
                Property Valuations
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Get a realistic market valuation for your property.
              </p>
            </Link>

            <Link
              to="/our-services/legal-assistance"
              className="block p-5 border rounded-xl bg-[#F4F8FC] hover:shadow-md transition border-[#D9E6F2]"
            >
              <h3 className="font-semibold" style={{ color: PRIMARY }}>
                Legal Assistance
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Legal support for contracts, conveyancing and transfers.
              </p>
            </Link>

            <Link
              to="/our-services/mortgage-advice"
              className="block p-5 border rounded-xl bg-[#F4F8FC] hover:shadow-md transition border-[#D9E6F2]"
            >
              <h3 className="font-semibold" style={{ color: PRIMARY }}>
                Mortgage Advice
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Compare lender options and understand repayment scenarios.
              </p>
            </Link>

            <Link
              to="/promote-property"
              className="block p-5 border rounded-xl bg-[#F4F8FC] hover:shadow-md transition border-[#D9E6F2]"
            >
              <h3 className="font-semibold" style={{ color: PRIMARY }}>
                Promote Your Property
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Get featured placement and marketing support for sellers.
              </p>
            </Link>

          </div>

          {/* Footer note */}
          <div className="mt-8 text-sm text-slate-600 border-t pt-4 border-[#D9E6F2]">
            <p>
              If you'd like personalised help, contact our support team or post your
              ad to reach agents and buyers quickly.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-3">
            <button
              className="px-5 py-2 rounded text-white font-semibold"
              style={{ backgroundColor: ACCENT }}
            >
              Contact Support
            </button>

            <button
              className="px-5 py-2 rounded border font-semibold"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Post Property
            </button>
          </div>

        </div>
      </main>
    </>
  )
}