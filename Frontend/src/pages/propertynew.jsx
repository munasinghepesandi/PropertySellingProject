import React from "react";
import Navbar from "../components/Navbar";
//import { Footer } from "../components/Footer";

export default function Pro() {
  return (
    <div className="w-[90%] mx-auto pb-10 bg-[#f4f7fb] text-gray-800">

      <Navbar />

      {/* Breadcrumb */}
      <div className="my-5 text-sm text-gray-500">
        ← Back to List &nbsp; | &nbsp; Home / House
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            className="w-full h-[420px] object-cover rounded-xl"
            alt="house"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="flex items-center justify-center bg-[#08306B]/90 text-white rounded-xl text-lg">
            +4 more
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-5 text-2xl md:text-3xl font-bold text-[#08306B]">
        House for rent in Kandy - 100,000 Per Month
      </h1>

      <p className="text-gray-500 mt-1">📍 Kandy</p>

      {/* Info */}
      <div className="flex gap-6 my-4 text-base">
        <span>🛏 4</span>
        <span>🛁 3</span>
        <span>📐 2500 sq.ft</span>
        <span>🌿 6 perches</span>
      </div>

      {/* Price */}
      <div className="text-3xl font-bold text-[#2171B5]">
        Rs. 500,000{" "}
        <span className="text-base text-gray-500 font-normal">
          Per Month
        </span>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button className="px-4 py-2 border border-[#2171B5] text-[#2171B5] rounded-md hover:bg-[#2171B5] hover:text-white transition">
          Share
        </button>
        <button className="px-4 py-2 bg-[#2171B5] text-white rounded-md hover:bg-[#08306B] transition">
          Save
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-5">

          {/* Overview */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-[#08306B] text-xl font-semibold">Overview</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {[
                ["🏠", "House", "Property Type"],
                ["🛏", "4", "Bedrooms"],
                ["🛁", "3", "Bathrooms"],
                ["📐", "2500 sq.ft", "Floor Area"],
                ["🌿", "6 perches", "Land Size"],
                ["📌", "Available", "Status"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#f4f7fb] p-4 rounded-lg text-center hover:-translate-y-1 transition"
                >
                  <div className="text-xl">{item[0]}</div>
                  <p className="font-bold">{item[1]}</p>
                  <small className="text-gray-500">{item[2]}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-[#08306B] text-xl font-semibold">
              Property Details
            </h2>

            <p className="mt-2 text-gray-700 leading-relaxed">
              Artistically built luxury house located in the heart of Pamankada,
              designed with spacious interiors and modern finishes.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "🌿 Garden",
                "❄️ A/C Bedrooms",
                "🍽 Modern Kitchen",
                "🚗 Parking",
                "🛋 Spacious Living",
              ].map((f, i) => (
                <span
                  key={i}
                  className="bg-[#f4f7fb] px-3 py-1 rounded-full text-sm"
                >
                  {f}
                </span>
              ))}
            </div>

            <details className="mt-3">
              <summary className="cursor-pointer text-[#2171B5]">
                Read More
              </summary>
              <p className="mt-2 text-gray-600">
                This property includes high-quality fittings, large windows for
                natural light, and a peaceful residential environment ideal for
                families.
              </p>
            </details>
          </div>
        </div>

        {/* RIGHT */}
        <div>

          <div className="bg-white p-5 rounded-xl shadow">

            <div className="flex items-center gap-3">
              <img
                src="https://ui-avatars.com/api/?name=Agent&background=2171B5&color=fff"
                className="w-14 h-14 rounded-full"
                alt="agent"
              />
              <div>
                <h3 className="font-bold">Kisal</h3>
                <p className="text-gray-500 text-sm">Property Agent</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">📅 Available Now</p>

            <div className="space-y-3 mt-4">
              <button className="w-full bg-[#2171B5] text-white py-3 rounded-lg hover:bg-[#08306B]">
                📞 Call Now
              </button>

              <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:opacity-90">
                💬 WhatsApp
              </button>

              <button className="w-full border border-[#2171B5] text-[#2171B5] py-3 rounded-lg hover:bg-[#2171B5] hover:text-white">
                ✉ Email
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              ⚡ Typically responds within 1 hour
            </p>

          </div>

        </div>
      </div>

      

    </div>
  );
}
