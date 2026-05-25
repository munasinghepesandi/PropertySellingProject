import React, { useState } from "react";
import Navbar from "../components/Navbar";

const listings = [
  {
    id: 1,
    title: "Boutique Hotel & Bungalow",
    location: "Kandy",
    price: "Rs. 15 Million",
    type: "Looking to Sell",
    revenue: "12,000,000",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description:
      "A well-established boutique hotel near Kandy Lake with strong tourist demand and online presence.",
  },
  {
    id: 2,
    title: "Restaurant Business",
    location: "Kandy",
    price: "Rs. 8 Million",
    type: "Looking for Investor",
    revenue: "6,500,000",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
    description:
      "Popular restaurant in central Kandy with loyal customers and delivery partnerships.",
  },
  {
    id: 3,
    title: "Retail Clothing Shop",
    location: "Kandy",
    price: "Rs. 5 Million",
    type: "Franchise",
    revenue: "4,200,000",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    description:
      "Well-located clothing store with strong foot traffic and brand recognition.",
  },
];

export default function Real() {
  const [search, setSearch] = useState("");

  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen font-sans">
        {/* SIDEBAR */}
        <div className="w-72 bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-6 text-[#08306B]">Refine Search</h2>

          {/* TYPES */}
          <div className="mb-6">
            <p className="font-medium mb-2">Types</p>
            {[
              "Looking to Sell",
              "Looking for Investor",
              "Franchise",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2 mb-2 text-sm">
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>

          {/* LOCATION */}
          <div className="mb-6">
            <p className="font-medium mb-2">Location</p>
            <input
              type="text"
              placeholder="Kandy"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          {/* INDUSTRIES */}
          <div className="mb-6">
            <p className="font-medium mb-2">Industries</p>
            <div className="space-y-2 text-sm">
              {["Tourism", "Hotel", "Restaurant", "Retail", "Tech"].map(
                (item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* PRICE */}
          <div>
            <p className="font-medium mb-2">Investment (LKR)</p>
            <div className="flex gap-2">
              <input placeholder="Min" className="w-1/2 border p-2 rounded text-sm" />
              <input placeholder="Max" className="w-1/2 border p-2 rounded text-sm" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6">

          {/* SEARCH + SORT */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search businesses..."
              className="flex-1 border rounded px-4 py-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select className="border px-4 py-2 rounded">
              <option>Sort by Latest</option>
              <option>Sort by Price</option>
            </select>

            <button className="bg-[#2171B5] text-white px-5 py-2 rounded hover:bg-[#08306B]">
              Create Alert
            </button>
          </div>

          {/* TITLE */}
          <h2 className="text-xl font-semibold mb-6 text-[#08306B]">
            Showing {filteredListings.length} Businesses in Kandy
          </h2>

          {/* GRID CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredListings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* IMAGE */}
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <p className="text-sm text-gray-500">{item.location}</p>

                  <p className="text-[#2171B5] font-bold mt-2">{item.price}</p>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>

                  {/* TAGS */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="bg-gray-200 text-xs px-3 py-1 rounded">{item.category}</span>

                    <button className="text-sm text-[#2171B5] hover:underline">View Details</button>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-3 border-t pt-3 text-xs text-gray-500 flex justify-between">
                    <span>{item.type}</span>
                    <span>Rev: {item.revenue}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* CTA SECTION */}
          <div className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white p-8 rounded-xl mt-10 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h2 className="text-2xl font-semibold mb-2">Need help investing?</h2>
              <p className="text-sm text-gray-200">Connect with experts and discover the best opportunities in Kandy.</p>
            </div>

            <div className="flex gap-3">
              <button className="bg-white text-[#08306B] px-5 py-2 rounded">Get Advice</button>
              <button className="border border-white px-5 py-2 rounded">Contact Us</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
