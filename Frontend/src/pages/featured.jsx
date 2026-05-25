import React from "react";
import Navbar from "../components/Navbar";
import {
  Search,
  MapPin,
  BedDouble,
  Square,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Map,
  Heart,
  Bath,
  Sparkles,
} from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Ocean Heights",
    location: "Kandy 03",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Skyline Residencies",
    location: "Kandy 05",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Blue Ocean Towers",
    location: "Kandy 07",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
];

const properties = [
  {
    id: 1,
    title: "Oazi Residence",
    location: "Kaduwela",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    bedrooms: "2BR",
    bathrooms: "2 Bath",
    sqft: "878 sqft",
    price: "Rs. 32M",
  },
  {
    id: 2,
    title: "Verdant Square",
    location: "Nugegoda",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    bedrooms: "1BR",
    bathrooms: "1 Bath",
    sqft: "569 sqft",
    price: "Rs. 35M",
  },
  {
    id: 3,
    title: "Sanasro Residencies",
    location: "Koswatta",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    bedrooms: "2BR",
    bathrooms: "2 Bath",
    sqft: "985 sqft",
    price: "Rs. 42M",
  },
];

const budgets = [
  {
    title: "Luxury",
    price: "50M+",
    count: "2959+ Properties",
  },
  {
    title: "Mid Range",
    price: "30M - 40M",
    count: "264+ Properties",
  },
  {
    title: "Affordable",
    price: "20M - 30M",
    count: "112+ Properties",
  },
];

export default function Feature() {
  return (
    <div className="bg-[#F4F7FB] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#08306B]/90 to-[#2171B5]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
                <Sparkles size={16} />
                Premium Real Estate Platform
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                Discover Modern Living In Sri Lanka
              </h1>

              <p className="text-base lg:text-lg text-slate-200 leading-8 mb-10">
                Browse luxury apartments, premium villas and stylish homes
                with advanced search experiences.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-white text-[#08306B] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                  Explore Homes
                </button>

                <button className="border border-white/40 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                  View Projects
                </button>
              </div>
            </div>

            {/* SEARCH CARD */}
            <div className="bg-white/95 backdrop-blur-lg rounded-[35px] p-8 shadow-2xl">
              {/* TABS */}
              <div className="flex bg-slate-100 rounded-2xl p-2 mb-8">
                <button className="bg-[#2171B5] text-white w-1/2 py-4 rounded-2xl font-bold">
                  Buy
                </button>

                <button className="text-[#08306B] w-1/2 py-4 rounded-2xl font-bold">
                  Rent
                </button>
              </div>

              {/* INPUT */}
              <div className="mb-6">
                <label className="text-[#08306B] font-bold mb-3 block">
                  Preferred Location
                </label>

                <div className="bg-slate-100 rounded-2xl px-5 py-4 flex items-center gap-3">
                  <MapPin className="text-[#2171B5]" />

                  <input
                    type="text"
                    placeholder="Search Colombo, Kandy..."
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              </div>

              {/* PRICE */}
              <div className="mb-8">
                <div className="flex justify-between mb-3 text-sm font-semibold text-[#08306B]">
                  <span>Rs. 5M</span>
                  <span>Rs. 200M+</span>
                </div>

                <input
                  type="range"
                  className="w-full accent-[#2171B5]"
                />
              </div>

              {/* BUTTONS */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-slate-200 hover:bg-slate-300 transition rounded-2xl py-4 font-bold text-[#08306B] flex items-center justify-center gap-2">
                  <SlidersHorizontal size={18} />
                  Filters
                </button>

                <button className="bg-gradient-to-r from-[#2171B5] to-[#08306B] text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:scale-105 transition">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGET SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-14 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {budgets.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-slate-400 font-semibold mb-2">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-black text-[#08306B]">
                    {item.price}
                  </h2>
                </div>

                <div className="bg-[#2171B5]/10 p-4 rounded-2xl">
                  <Sparkles className="text-[#2171B5]" size={20} />
                </div>
              </div>

              <p className="text-[#16A34A] font-bold text-lg mb-6">
                {item.count}
              </p>

              <button className="w-full bg-[#08306B] hover:bg-[#2171B5] transition text-white py-4 rounded-2xl font-bold">
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <div>
              <p className="text-[#2171B5] font-bold mb-3 uppercase tracking-widest text-sm">
                Featured Collection
              </p>

              <h2 className="text-4xl font-black text-[#08306B]">
                Trending Projects
              </h2>
            </div>

            <button className="hidden md:flex items-center gap-2 text-[#2171B5] font-bold">
              View All
              <ChevronRight />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-[30px] overflow-hidden shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <button className="absolute top-5 right-5 bg-white/90 p-3 rounded-full">
                    <Heart size={18} className="text-[#08306B]" />
                  </button>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
                    <MapPin size={15} />
                    {project.location}
                  </div>

                  <h3 className="text-2xl font-bold text-[#08306B] mb-6">
                    {project.title}
                  </h3>

                  <button className="w-full bg-[#2171B5] hover:bg-[#08306B] transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
                    View Project
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* FILTER TOP */}
          <div className="bg-white rounded-[30px] p-6 shadow-lg mb-12 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-[#2171B5] text-white px-6 py-3 rounded-full font-semibold">
                Apartments
              </button>

              <button className="bg-slate-100 text-[#08306B] px-6 py-3 rounded-full font-semibold">
                Villas
              </button>

              <button className="bg-slate-100 text-[#08306B] px-6 py-3 rounded-full font-semibold">
                Houses
              </button>
            </div>

            <div className="flex bg-slate-100 rounded-2xl overflow-hidden">
              <button className="px-5 py-4 text-[#2171B5] border-r flex items-center gap-2">
                <Map size={18} />
                Map
              </button>

              <button className="px-5 py-4 bg-[#2171B5] text-white border-r flex items-center gap-2">
                <List size={18} />
                List
              </button>

              <button className="px-5 py-4 text-[#2171B5] flex items-center gap-2">
                <LayoutGrid size={18} />
                Grid
              </button>
            </div>
          </div>

          {/* TITLE */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-[#08306B]">
              Popular Properties
            </h2>

            <p className="text-slate-500 font-semibold text-sm">
              3,741 Properties Available
            </p>
          </div>

          {/* PROPERTY CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt=""
                    className="h-72 w-full object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-[#2171B5] text-white px-5 py-2 rounded-full text-sm font-bold">
                    Featured
                  </div>

                  <button className="absolute top-5 right-5 bg-white p-3 rounded-full">
                    <Heart size={18} className="text-[#08306B]" />
                  </button>
                </div>

                <div className="p-7">
                  <div className="mb-5">
                    <h3 className="text-2xl font-black text-[#08306B] mb-3">
                      {property.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
                      <MapPin size={15} />
                      {property.location}
                    </div>

                    <p className="text-3xl font-black text-[#2171B5]">
                      {property.price}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-slate-100 rounded-2xl p-4 text-center">
                      <BedDouble
                        size={18}
                        className="mx-auto mb-2 text-[#2171B5]"
                      />

                      <p className="font-bold text-[#08306B] text-sm">
                        {property.bedrooms}
                      </p>
                    </div>

                    <div className="bg-slate-100 rounded-2xl p-4 text-center">
                      <Bath
                        size={18}
                        className="mx-auto mb-2 text-[#2171B5]"
                      />

                      <p className="font-bold text-[#08306B] text-sm">
                        {property.bathrooms}
                      </p>
                    </div>

                    <div className="bg-slate-100 rounded-2xl p-4 text-center">
                      <Square
                        size={18}
                        className="mx-auto mb-2 text-[#2171B5]"
                      />

                      <p className="font-bold text-[#08306B] text-sm">
                        {property.sqft}
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#2171B5] to-[#08306B] text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
