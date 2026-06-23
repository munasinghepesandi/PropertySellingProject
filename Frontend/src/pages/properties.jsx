import React from "react";
import Navbar from "../components/Navbar";

export default function Property() {
  return (
    <>
      <Navbar />

      <div className="bg-[#EAEAEA] p-5 font-sans text-[#4A4A4A]">

        {/* SEARCH BAR */}
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#B8B8B8] bg-[#FFFFFF] p-4">

          <input
            type="text"
            placeholder="School or University"
            className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2A6FA3]"
          />

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm">
            <option>Select Radius</option>
          </select>

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm">
            <option>House</option>
          </select>

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm">
            <option>Price Range</option>
          </select>

          <select className="rounded-md border border-[#B8B8B8] px-4 py-2 text-sm">
            <option>Show More</option>
          </select>

          <button className="rounded-md bg-[#203F52] px-5 py-2 text-sm font-medium text-[#FFFFFF] transition hover:bg-[#2D4F63]">
            Search
          </button>
        </div>

        {/* FILTERS */}
        <div className="my-4 flex items-center gap-3">
          <span className="rounded-full border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-1 text-sm text-[#2A6FA3]">
            House ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-[#2A6FA3]">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-[#203F52]">
          All Properties for rent in Sri Lanka (1183 properties)
        </div>

        {/* ACTION BUTTONS */}
        <div className="mb-5 flex flex-wrap gap-3">

          <button className="rounded-md border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2A6FA3] hover:bg-[#EAEAEA]">
            Save Search
          </button>

          <button className="rounded-md border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2A6FA3] hover:bg-[#EAEAEA]">
            Create E-Mail Alerts
          </button>

          <button className="rounded-md border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2A6FA3] hover:bg-[#EAEAEA]">
            Share
          </button>

        </div>

        {/* CHIPS */}
        <div className="mb-6 flex flex-wrap gap-3">

          <div className="rounded-full border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-1 text-sm text-[#203F52]">
            Apartments (4317)
          </div>

          <div className="rounded-full border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-1 text-sm text-[#203F52]">
            Commercial
          </div>

          <div className="rounded-full border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-1 text-sm text-[#203F52]">
            Villas
          </div>

          <div className="rounded-full border border-[#2A6FA3] bg-[#FFFFFF] px-4 py-1 text-sm text-[#203F52]">
            Rooms
          </div>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* LEFT SIDE */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* CARD */}
              {[
                {
                  title: "Beautiful House",
                  location: "Negombo",
                  img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
                },
                {
                  title: "Modern Villa",
                  location: "Colombo 10",
                  img: "https://images.unsplash.com/photo-1507149833265-60c372daea22",
                },
                {
                  title: "Luxury Home",
                  location: "Colombo 07",
                  img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
                },
                {
                  title: "Stylish Apartment",
                  location: "Mount Lavinia",
                  img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                },
                {
                  title: "Family House",
                  location: "Kandy",
                  img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
                },
                {
                  title: "Modern Residence",
                  location: "Galle",
                  img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-[#B8B8B8] bg-[#FFFFFF] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[200px] w-full object-cover"
                  />

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

            <div className="rounded-xl bg-[#203F52] p-6 text-center text-[#FFFFFF]">
              <h3 className="text-xl font-bold">Market Report 2026</h3>
              <p className="mt-2 text-[#F3D319]">OUT NOW!</p>
            </div>

            <div className="rounded-xl border border-[#B8B8B8] bg-[#FFFFFF] p-4">
              <h4 className="mb-4 text-lg font-semibold text-[#203F52]">
                Featured Projects
              </h4>

              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4"
                alt="featured"
                className="rounded-lg"
              />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}