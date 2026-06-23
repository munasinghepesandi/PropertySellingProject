import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Beachfront() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-[#EAEAEA] p-5 font-sans text-[#203F52]">

        {/* SEARCH BAR */}
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#B8B8B8] bg-white p-4">
          <input
            type="text"
            placeholder="Land area / location (Kandy)"
            className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2A6FA3]"
          />

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm outline-none">
            <option>Select Radius</option>
          </select>

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm outline-none">
            <option>Land Type</option>
          </select>

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm outline-none">
            <option>Price Range</option>
          </select>

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm outline-none">
            <option>Show More</option>
          </select>

          <button className="rounded-md bg-[#2A6FA3] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2D4F63]">
            Search
          </button>
        </div>

        {/* FILTERS */}
        <div className="my-4 flex items-center gap-3">
          <span className="rounded-full border border-[#2A6FA3] bg-white px-4 py-1 text-sm text-[#203F52]">
            Land ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-[#2A6FA3]">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-[#203F52]">
          Beachfront Lands for sale in Kandy (Featured Listings)
        </div>

        {/* ACTION BUTTONS */}
        <div className="mb-5 flex flex-wrap gap-3">
          <button className="rounded-md border border-[#2A6FA3] bg-white px-4 py-2 text-sm hover:bg-[#EAEAEA]">
            Save Search
          </button>

          <button className="rounded-md border border-[#2A6FA3] bg-white px-4 py-2 text-sm hover:bg-[#EAEAEA]">
            Create E-Mail Alerts
          </button>

          <button className="rounded-md border border-[#2A6FA3] bg-white px-4 py-2 text-sm hover:bg-[#EAEAEA]">
            Share
          </button>
        </div>

        {/* CHIPS */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="rounded-full border border-[#B5A28A] bg-white px-4 py-1 text-sm text-[#4A4A4A]">
            Residential Lands
          </div>

          <div className="rounded-full border border-[#B5A28A] bg-white px-4 py-1 text-sm text-[#4A4A4A]">
            Commercial Lands
          </div>

          <div className="rounded-full border border-[#B5A28A] bg-white px-4 py-1 text-sm text-[#4A4A4A]">
            Agricultural Lands
          </div>

          <div className="rounded-full border border-[#B5A28A] bg-white px-4 py-1 text-sm text-[#4A4A4A]">
            Investment Plots
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* LEFT SIDE */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {[
                {
                  title: "Prime Land Plot",
                  location: "Peradeniya, Kandy – 10 Perches",
                  img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                },
                {
                  title: "Hill View Land",
                  location: "Katugastota, Kandy – 15 Perches",
                  img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                  hot: true
                },
                {
                  title: "Agricultural Plot",
                  location: "Hanthana, Kandy – 25 Perches",
                  img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
                  hot: true
                },
                {
                  title: "Residential Land",
                  location: "Ampitiya, Kandy – 12 Perches",
                  img: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b"
                },
                {
                  title: "Investment Plot",
                  location: "Digana, Kandy – 20 Perches",
                  img: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
                },
                {
                  title: "City Edge Land",
                  location: "Kandy City Limits – 8 Perches",
                  img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-[#B8B8B8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    {item.hot && (
                      <span className="absolute right-3 top-3 rounded bg-[#F3D319] px-2 py-1 text-[11px] font-bold text-[#203F52]">
                        HOT
                      </span>
                    )}

                    <img
                      src={item.img}
                      alt={item.title}
                      onClick={() => navigate("/propertynew")}
                      className="h-[200px] w-full cursor-pointer object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#203F52]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#4A4A4A]">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5">

            <div className="rounded-xl bg-[#2D4F63] p-6 text-center text-white">
              <h3 className="text-xl font-bold">Kandy Land Market 2026</h3>
              <p className="mt-2 text-[#F3D319]">Latest Price Trends</p>
            </div>

            <div className="rounded-xl border border-[#B8B8B8] bg-white p-4">
              <h4 className="mb-4 text-lg font-semibold text-[#203F52]">
                Featured Land Project
              </h4>

              <img
                src="https://images.unsplash.com/photo-1464146072230-91cabc968266"
                alt="featured land"
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}