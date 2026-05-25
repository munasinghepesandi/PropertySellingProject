import React from "react";
import Navbar from "../components/Navbar";

export default function BusinessListing() {
  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen font-sans">
        <div className="w-72 bg-white p-5 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Refine your search</h2>

          <div className="mb-5">
            <p className="font-medium mb-2">Types</p>
            {[
              "Looking to Sell",
              "Looking for Investor",
              "Franchise",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2 mb-2">
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>

          <div className="mb-5">
            <p className="font-medium mb-2">Location</p>
            <input
              type="text"
              placeholder="Location"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-5">
            <p className="font-medium mb-2">Industries</p>
            <input
              type="text"
              placeholder="Filter Industries..."
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {[
                "Real Estate",
                "Restaurant",
                "Construction",
                "Agriculture",
                "Tech",
                "Hospitality",
                "Business",
                "Manufacturing",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <p className="font-medium mb-2">Investment size (LKR)</p>
            <div className="flex gap-2">
              <input placeholder="Min" className="w-1/2 border p-2 rounded" />
              <input placeholder="Max" className="w-1/2 border p-2 rounded" />
            </div>
          </div>

          <div className="mb-5">
            <p className="font-medium mb-2">Annual Revenue (LKR)</p>
            <div className="flex gap-2">
              <input placeholder="Min" className="w-1/2 border p-2 rounded" />
              <input placeholder="Max" className="w-1/2 border p-2 rounded" />
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Age of listing</p>
            {[
              "Anytime",
              "Last 3 Days",
              "Last 14 Days",
              "Last Month",
              "Last 3 Months",
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-2 mb-2">
                <input type="radio" name="age" defaultChecked={i === 0} />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              placeholder="Search for businesses in Sri Lanka"
              className="flex-1 border rounded px-4 py-2"
            />
            <button className="bg-[#2171B5] text-white px-6 py-2 rounded">
              SEARCH
            </button>
            <button className="border border-[#2171B5] text-[#2171B5] px-4 py-2 rounded">
              Create Alert
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            Showing 1 Results Business for sale in Sri Lanka
          </h2>

          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h3 className="text-lg font-semibold">Bungalows</h3>

            <p className="text-gray-500 text-sm">Malabe</p>

            <p className="text-green-600 font-semibold mt-1">Rs. 2 million</p>

            <div className="flex gap-4 mt-4">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                alt="business"
                className="w-32 h-24 object-cover rounded"
              />

              <div className="text-sm text-gray-600">
                Established in 2021, Ceylon Oven is a well known Sri Lankan
                lifestyle brand focused on personalized gifts...
                <p className="text-[#2171B5] cursor-pointer mt-1">More details</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 border-t pt-3">
              <p className="text-sm">
                Type: <span className="font-medium">Looking to Sell</span>
              </p>
              <p className="text-sm">
                Revenue: <span className="font-medium">6000000</span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">Business</span>

              <button className="bg-[#08306B] text-white px-5 py-2 rounded">VIEW DETAILS</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#f3f0ec] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Want to sell your business or looking for an investor?</h3>
              <p className="text-sm text-gray-600 mb-4">Whether you seek to sell your thriving business in Sri Lanka or secure a visionary investor, we are your ultimate solution.</p>
              <button className="bg-[#2171B5] text-white px-4 py-2 rounded">Learn more</button>
            </div>

            <div className="bg-[#dbe9f6] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Thinking of buying a business?</h3>
              <p className="text-sm text-gray-600 mb-4">Ready to invest in a thriving business in Sri Lanka? Our expert team can guide you through the process.</p>
              <button className="bg-[#2171B5] text-white px-4 py-2 rounded">Learn more</button>
            </div>

          </div>

          <div className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Get correct advice for your next investment</h2>
              <p className="text-sm text-gray-200 max-w-xl">Not sure which business to invest in? Our experts provide personalized guidance, market insights, and risk analysis to help you make confident investment decisions in Sri Lanka.</p>
            </div>

            <div className="flex gap-3">
              <button className="bg-white text-[#08306B] px-5 py-2 rounded font-medium">Get Advice</button>
              <button className="border border-white px-5 py-2 rounded">Contact Us</button>
            </div>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
            <h2 className="text-2xl font-semibold mb-2 text-[#08306B]">Connect with your investment adviser</h2>
            <p className="text-gray-600 mb-6">Quickly select your investment preferences and get matched with the right advisor.</p>

            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <p className="font-medium mb-2">Investment Type</p>
                <div className="flex flex-wrap gap-2">
                  {['Startup', 'Existing Business', 'Franchise'].map((item) => (
                    <button key={item} className="px-3 py-1 border rounded-full text-sm hover:bg-[#2171B5] hover:text-white">{item}</button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Budget</p>
                <div className="flex flex-wrap gap-2">
                  {['< 1M', '1M - 5M', '5M - 10M', '10M+'].map((item) => (
                    <button key={item} className="px-3 py-1 border rounded-full text-sm hover:bg-[#2171B5] hover:text-white">{item}</button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Preferred Industry</p>
                <div className="flex flex-wrap gap-2">
                  {['Tech', 'Food', 'Real Estate', 'Retail'].map((item) => (
                    <button key={item} className="px-3 py-1 border rounded-full text-sm hover:bg-[#2171B5] hover:text-white">{item}</button>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
              <p className="text-sm text-gray-500">Get personalized recommendations based on your preferences.</p>

              <button className="bg-[#08306B] text-white px-6 py-2 rounded hover:bg-[#021d44]">Connect Now</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
