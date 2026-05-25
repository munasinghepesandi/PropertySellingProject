import React, { useState } from "react";
import { Search, ChevronRight, Grid, List } from "lucide-react";
import { Navbar } from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import ImageWithFallback from '../components/ImageWithFallback'

export default function Electronic() {
  const [view, setView] = useState("grid");

  const categories = [
    { name: "Water Filter", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
    { name: "Air Conditioners", img: "https://images.unsplash.com/photo-1598300053653-7b5b1c2b9d3e" },
    { name: "CCTV & Security", img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e" },
    { name: "Fans", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
    { name: "Internet & TV", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1" },
    { name: "Kitchen Appliances", img: "https://images.unsplash.com/photo-1586201375761-83865001e17b" },
    { name: "Power Tools", img: "https://images.unsplash.com/photo-1581093588401-16ecb5f84a2c" },
  ];

  const listings = [
    {
      title: "Panasonic Water Filter",
      location: "Colombo",
      price: "Rs. 45,000",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />

      <div className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">
          ideal <span className="text-white/80">home</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <p className="hover:text-gray-200 cursor-pointer">PRODUCTS</p>
          <p className="hover:text-gray-200 cursor-pointer">HOUSE CONSTRUCTION</p>
          <p className="hover:text-gray-200 cursor-pointer">FIND PROFESSIONALS</p>
          <p className="hover:text-gray-200 cursor-pointer">INSPIRATIONS</p>
          <p className="hover:text-gray-200 cursor-pointer">MORE</p>
        </div>

        <button className="bg-white text-[#08306B] px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          POST YOUR AD
        </button>
      </div>

      <PageHeader title="Appliances & Electronics" subtitle="Find trusted suppliers and products for home appliances — refrigerators, washers, smart devices and more." image="https://images.unsplash.com/photo-1586201375761-83865001e17b" />

      <div className="px-6 py-6 flex gap-4 overflow-x-auto">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="min-w-[160px] bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <ImageWithFallback src={cat.img} alt={cat.name} className="h-16 mx-auto object-contain mb-3" />
            <p className="text-sm font-semibold text-gray-700">{cat.name}</p>
          </div>
        ))}
        <div className="flex items-center justify-center min-w-[60px]">
          <ChevronRight className="text-[#2171B5]" />
        </div>
      </div>

      <div className="flex px-6 gap-6 pb-10">
        <div className="w-64 bg-white p-5 rounded-xl shadow-md">
          <h3 className="font-bold text-[#08306B] mb-4">Categories</h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="text-[#2171B5] font-semibold cursor-pointer">Water Filter (1)</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Air Conditioners</li>
            <li className="hover:text-[#2171B5] cursor-pointer">CCTV & Security</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Fans</li>
            <li className="hover:text-[#2171B5] cursor-pointer">Internet & TV</li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#08306B]">Appliances in Sri Lanka</h2>

            <div className="flex gap-3 bg-white p-2 rounded-lg shadow">
              <button onClick={() => setView("grid")}>
                <Grid className={view === "grid" ? "text-[#2171B5]" : "text-gray-500"} />
              </button>
              <button onClick={() => setView("list")}>
                <List className={view === "list" ? "text-[#2171B5]" : "text-gray-500"} />
              </button>
            </div>
          </div>

          {view === "grid" && (
            <div className="grid md:grid-cols-3 gap-6">
              {listings.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                  <ImageWithFallback src={item.img} alt={item.title} className="h-44 w-full object-cover" />

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
                  <ImageWithFallback src={item.img} alt={item.title} className="w-44 h-28 object-cover rounded-lg" />

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
