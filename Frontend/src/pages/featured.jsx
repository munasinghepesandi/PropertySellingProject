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
  { title: "Luxury", price: "50M+", count: "2959+ Properties" },
  { title: "Mid Range", price: "30M - 40M", count: "264+ Properties" },
  { title: "Affordable", price: "20M - 30M", count: "112+ Properties" },
];

export default function Feature() {
  return (
    <div className="bg-[#EAEAEA] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1800&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#203F52]/95 to-[#2A6FA3]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-8 border border-white/20">
                <Sparkles size={16} />
                Premium Real Estate Platform
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-6">
                Discover Modern Living In Sri Lanka
              </h1>

              <p className="text-white/80 mb-10">
                Browse luxury apartments, premium villas and stylish homes.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-[#F3D319] text-[#203F52] px-8 py-4 rounded-2xl font-bold">
                  Explore Homes
                </button>

                <button className="border border-white/40 px-8 py-4 rounded-2xl font-semibold">
                  View Projects
                </button>
              </div>
            </div>

            {/* SEARCH */}
            <div className="bg-white rounded-[35px] p-8 shadow-2xl">
              <div className="flex bg-[#EAEAEA] rounded-2xl p-2 mb-8">
                <button className="bg-[#2A6FA3] text-white w-1/2 py-4 rounded-2xl font-bold">
                  Buy
                </button>
                <button className="w-1/2 py-4 font-bold text-[#203F52]">
                  Rent
                </button>
              </div>

              <div className="mb-6">
                <label className="font-bold text-[#203F52] mb-3 block">
                  Preferred Location
                </label>

                <div className="bg-[#EAEAEA] rounded-2xl px-5 py-4 flex items-center gap-3">
                  <MapPin className="text-[#2A6FA3]" />
                  <input
                    className="bg-transparent outline-none w-full"
                    placeholder="Search Colombo, Kandy..."
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm font-semibold text-[#203F52] mb-3">
                  <span>Rs. 5M</span>
                  <span>Rs. 200M+</span>
                </div>
                <input type="range" className="w-full accent-[#2A6FA3]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-[#EAEAEA] text-[#203F52] py-4 rounded-2xl font-bold flex justify-center gap-2">
                  <SlidersHorizontal size={18} />
                  Filters
                </button>

                <button className="bg-[#203F52] text-white py-4 rounded-2xl font-bold flex justify-center gap-2">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BUDGET */}
      <section className="max-w-7xl mx-auto px-6 -mt-14 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {budgets.map((item, i) => (
            <div key={i} className="bg-white rounded-[30px] p-8 shadow-xl">
              <p className="text-[#4A4A4A] font-semibold">{item.title}</p>
              <h2 className="text-3xl font-black text-[#203F52]">
                {item.price}
              </h2>
              <p className="text-[#556B4E] font-bold mt-4">
                {item.count}
              </p>

              <button className="mt-6 w-full bg-[#203F52] text-white py-4 rounded-2xl font-bold">
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#203F52] mb-12">
            Trending Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <div key={p.id} className="bg-white rounded-[30px] overflow-hidden">
                <img src={p.image} className="h-[320px] w-full object-cover" />
                <div className="p-7">
                  <p className="text-[#2A6FA3] text-sm">{p.location}</p>
                  <h3 className="text-2xl font-bold text-[#203F52]">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#203F52] mb-10">
            Popular Properties
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((p) => (
              <div key={p.id} className="bg-white rounded-[35px] overflow-hidden">
                <img src={p.image} className="h-72 w-full object-cover" />

                <div className="p-7">
                  <h3 className="text-2xl font-black text-[#203F52]">
                    {p.title}
                  </h3>

                  <p className="text-[#4A4A4A]">{p.location}</p>

                  <p className="text-3xl font-black text-[#2A6FA3] mt-4">
                    {p.price}
                  </p>

                  <button className="w-full mt-6 bg-[#203F52] text-white py-4 rounded-2xl">
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