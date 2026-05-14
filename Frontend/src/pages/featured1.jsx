import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Bath,
  Calendar,
  Search,
  List,
  Map,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hanthana Peak Residences",
    location: "Hanthana, Kandy",
    price: "LKR 45 M",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    completion: "Dec 2028",
    status: "upcoming",
    units: [
      { bed: 2, bath: 2, sqft: "950 Sqft" },
      { bed: 3, bath: 2, sqft: "1280 Sqft" },
    ],
  },
  {
    id: 2,
    title: "Kandy Lake View Residences",
    location: "Kandy City Center",
    price: "LKR 62 M",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    completion: "Completed",
    status: "completed",
    units: [
      { bed: 3, bath: 2, sqft: "1200 Sqft" },
      { bed: 4, bath: 3, sqft: "1650 Sqft" },
    ],
  },
  {
    id: 3,
    title: "Peradeniya Green Towers",
    location: "Peradeniya, Kandy",
    price: "LKR 38 M",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    completion: "Aug 2029",
    status: "upcoming",
    units: [
      { bed: 1, bath: 1, sqft: "650 Sqft" },
      { bed: 2, bath: 2, sqft: "980 Sqft" },
    ],
  },
];

export default function Featurednew() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7fb] to-white">
      <Navbar />

      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="rounded-[32px] bg-gradient-to-r from-[#08306B] via-[#0b3f82] to-[#2171B5] p-10 text-white shadow-2xl">
          <h1 className="text-3xl font-bold md:text-5xl">
            Featured Projects in
            <span className="block text-blue-200">Kandy, Sri Lanka</span>
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Discover premium apartments and luxury developments across
            Hanthana, Peradeniya, and Kandy City.
          </p>

          <div className="mt-6 flex gap-4">
            <div className="rounded-xl bg-white/10 px-4 py-2">
              <p className="text-xl font-bold">15+</p>
              <span className="text-xs">Projects</span>
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2">
              <p className="text-xl font-bold">3</p>
              <span className="text-xs">Prime Areas</span>
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2">
              <p className="text-xl font-bold">Luxury</p>
              <span className="text-xs">Living</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="mx-auto mt-10 max-w-7xl px-4">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">

          <input
            placeholder="Search projects in Kandy..."
            className="flex-1 rounded-xl border px-4 py-2 text-sm outline-none"
          />

          <button className="flex items-center gap-2 rounded-xl bg-[#2171B5] px-5 py-2 text-white">
            <Search size={16} />
            Search
          </button>

          <div className="ml-auto flex overflow-hidden rounded-xl border">
            <button className="flex items-center gap-2 bg-[#08306B] px-4 py-2 text-white">
              <List size={16} /> List
            </button>
            <button className="flex items-center gap-2 bg-white px-4 py-2 text-[#2171B5]">
              <Map size={16} /> Map
            </button>
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-lg font-bold text-[#08306B]">
                {project.title}
              </h2>

              <div className="mt-1 flex items-center gap-2 text-sm text-[#2171B5]">
                <MapPin size={14} />
                {project.location}
              </div>

              <p className="mt-3 text-xl font-bold text-[#08306B]">
                {project.price}
              </p>

              {/* UNITS */}
              <div className="mt-4 space-y-2">
                {project.units.map((u, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-[#f6f9ff] px-3 py-2 text-sm"
                  >
                    <div className="flex gap-4 text-[#08306B]">
                      <span className="flex items-center gap-1">
                        <BedDouble size={14} /> {u.bed}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={14} /> {u.bath}
                      </span>
                    </div>
                    <span className="font-semibold text-[#2171B5]">
                      {u.sqft}
                    </span>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar size={14} />
                  {project.status === "completed"
                    ? "Completed"
                    : project.completion}
                </div>

                <button
                  onClick={() => navigate("/viewmore")}
                  className="rounded-xl bg-[#2171B5] px-4 py-2 text-xs font-semibold text-white hover:bg-[#08306B]"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
