import React, { useState } from "react";
import { Search, ChevronRight, Grid, List } from "lucide-react";
import { Navbar } from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import ImageWithFallback from '../components/ImageWithFallback'

export default function Household() {
  const [view, setView] = useState("grid");

  const categories = [
    { name: "Cleaning Supplies", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
    { name: "Storage & Organization", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c" },
    { name: "Laundry Items", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c" },
    { name: "Home Decor", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
    { name: "Bathroom Accessories", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1" },
    { name: "Lighting", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" },
  ];

  const listings = [
    {
      title: "Plastic Storage Box Set",
      location: "Colombo",
      price: "Rs. 4,500",
      img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c",
    },
    {
      title: "LED Ceiling Light",
      location: "Kandy",
      price: "Rs. 3,200",
      img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      <Navbar />

      <div className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">ideal <span className="text-white/80">home</span></h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <p className="hover:text-gray-200 cursor-pointer">PRODUCTS</p>
          <p className="hover:text-gray-200 cursor-pointer">HOUSE CONSTRUCTION</p>
          <p className="hover:text-gray-200 cursor-pointer">FIND PROFESSIONALS</p>
          <p className="hover:text-gray-200 cursor-pointer">INSPIRATIONS</p>
          <p className="hover:text-gray-200 cursor-pointer">MORE</p>
        </div>

        <button className="bg-white text-[#08306B] px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">POST YOUR AD</button>
      </div>

      <PageHeader title="Household Items for Everyday Living" subtitle="Everyday household essentials, storage solutions and decor." image="https://images.unsplash.com/photo-1586201375761-83865001e17b" />

      <div className="px-6 py-6 flex gap-4 overflow-x-auto">
        {categories.map((cat, i) => (
          <div key={i} className="min-w-[160px] bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl hover:-translate-y-1 transition">
            <ImageWithFallback src={cat.img} alt={cat.name} className="h-20 mx-auto object-cover rounded-md mb-3" />
            <p className="text-sm font-semibold text-gray-700">{cat.name}</p>
          </div>
        ))}
        <div className="flex items-center justify-center min-w-[60px]"><ChevronRight className="text-[#2171B5]" /></div>
      </div>

      <div className="flex px-6 gap-6 pb-10">
        <div className="w-64 bg-white p-5 rounded-xl shadow-md">
          <h3 className="font-bold text-[#08306B] mb-4">Categories</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="text-[#2171B5] font-semibold cursor-pointer">Cleaning Supplies (1)</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Kitchen Essentials</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Storage & Organization</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Laundry Items</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Home Decor</li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#08306B]">Household Items in Sri Lanka</h2>
            <div className="flex gap-3 bg-white p-2 rounded-lg shadow">
              <button onClick={() => setView("grid")}><Grid className={view === "grid" ? "text-[#2171B5]" : "text-gray-500"} /></button>
              <button onClick={() => setView("list")}><List className={view === "list" ? "text-[#2171B5]" : "text-gray-500"} /></button>
            </div>
          </div>

          {view === "grid" && (
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
          )}

          {view === "list" && (
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
  );
}
