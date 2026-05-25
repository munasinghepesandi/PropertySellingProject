import "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {
  ChevronDown,
  Search,
  List,
  Map,
  MapPin,
  BedDouble,
  Bath,
  Calendar,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Oazi",
    location: "Kaduwela",
    price: "LKR 32 M",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    completion: "June 2029",
    status: "upcoming",
    units: [
      { bed: 2, bath: 2, sqft: "878 Sqft" },
      { bed: 3, bath: 2, sqft: "1136 Sqft" },
    ],
  },
  {
    id: 2,
    title: "THE ARON",
    location: "Dehiwala",
    price: "LKR 52 M",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    completion: "Completed",
    status: "completed",
    units: [
      { bed: 3, bath: 2, sqft: "1240 Sqft" },
      { bed: 4, bath: 3, sqft: "1680 Sqft" },
    ],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Navbar />

      {/* FILTER BAR */}
      <div className="border-b border-gray-200 bg-white px-4 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          {/* FILTERS */}
          <div className="flex flex-wrap overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {/* LOCATION */}
            <div className="min-w-[210px] border-r border-gray-200 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Location
              </p>

              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-medium text-[#08306B]">
                  City, Area
                </span>

                <ChevronDown size={16} className="text-[#2171B5]" />
              </div>
            </div>

            {/* BEDROOMS */}
            <div className="min-w-[210px] border-r border-gray-200 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Bedrooms
              </p>

              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-medium text-[#08306B]">
                  No Bedrooms
                </span>

                <ChevronDown size={16} className="text-[#2171B5]" />
              </div>
            </div>

            {/* BUDGET */}
            <div className="min-w-[210px] border-r border-gray-200 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Budget
              </p>

              <div className="mt-1 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-[#08306B]">
                    Any
                  </span>

                  <ChevronDown size={16} className="text-[#2171B5]" />
                </div>

                <span className="text-gray-400">to</span>

                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-[#08306B]">
                    Any
                  </span>

                  <ChevronDown size={16} className="text-[#2171B5]" />
                </div>
              </div>
            </div>

            {/* STATUS */}
            <div className="min-w-[210px] border-r border-gray-200 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Status
              </p>

              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-medium text-[#08306B]">
                  Any
                </span>

                <ChevronDown size={16} className="text-[#2171B5]" />
              </div>
            </div>

            {/* PROPERTY TYPE */}
            <div className="min-w-[210px] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Property Type
              </p>

              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-medium text-[#08306B]">
                  Apartment
                </span>

                <ChevronDown size={16} className="text-[#2171B5]" />
              </div>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <button className="flex h-[52px] items-center gap-2 rounded-2xl bg-[#2171B5] px-6 text-sm font-semibold tracking-wide text-white transition hover:bg-[#08306B]">
            <Search size={18} />
            Search
          </button>

          {/* LIST MAP */}
          <div className="ml-auto flex overflow-hidden rounded-full border border-[#2171B5]">
            <button className="flex items-center gap-2 bg-[#08306B] px-5 py-2.5 text-sm font-medium text-white">
              <List size={16} />
              List
            </button>

            <button className="flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-medium text-[#2171B5]">
              <Map size={16} />
              Map
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* PREMIUM HEADER */}
        <div className="mb-12 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#08306B] via-[#0b3f82] to-[#2171B5] p-8 shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT CONTENT */}
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[3px] text-blue-100">
                  Sri Lanka Real Estate
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                Featured Projects &
                <span className="block text-blue-200">
                  Housing Projects in Sri Lanka
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
                Explore premium apartments, villas, and modern developments
                across Colombo, Kandy, Dehiwala, and other growing cities.
              </p>

              {/* STATS */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">20+</p>

                  <span className="text-xs uppercase tracking-wide text-blue-100">
                    Projects
                  </span>
                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">12</p>

                  <span className="text-xs uppercase tracking-wide text-blue-100">
                    Cities
                  </span>
                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">Luxury</p>

                  <span className="text-xs uppercase tracking-wide text-blue-100">
                    Properties
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="rounded-[28px] bg-white p-6 shadow-xl lg:w-[340px]">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#2171B5]">
                Quick Overview
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-sm text-gray-500">
                    Available Projects
                  </span>

                  <span className="text-lg font-bold text-[#08306B]">
                    20
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-sm text-gray-500">
                    Starting Price
                  </span>

                  <span className="text-lg font-bold text-[#08306B]">
                    LKR 32M
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-sm text-gray-500">
                    Top Location
                  </span>

                  <span className="text-lg font-bold text-[#08306B]">
                    Colombo
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Project Status
                  </span>

                  <span className="rounded-full bg-[#2171B5] px-3 py-1 text-xs font-semibold text-white">
                    Active
                  </span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-[#08306B] py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#2171B5]">
                Explore Projects
              </button>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
                {/* IMAGE */}
                <div className="h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-between p-6">
                  <div className="flex flex-col justify-between gap-8 lg:flex-row">

                    {/* LEFT */}
                    <div className="max-w-xl">
                      <h2 className="text-2xl font-semibold tracking-tight text-[#08306B]">
                        {project.title}
                      </h2>

                      <div className="mt-2 flex items-center gap-2 text-sm font-medium text-[#2171B5]">
                        <MapPin size={16} />
                        {project.location}
                      </div>

                      <p className="mt-4 text-2xl font-bold text-[#08306B]">
                        {project.price}
                      </p>

                      {/* UNITS */}
                      <div className="mt-6 space-y-3">
                        {project.units.map((unit, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-xl border border-gray-100 bg-[#f8fbff] px-4 py-3"
                          >
                            <div className="flex items-center gap-6 text-sm font-medium text-[#08306B]">
                              <div className="flex items-center gap-2">
                                <BedDouble size={18} />
                                {unit.bed}
                              </div>

                              <div className="flex items-center gap-2">
                                <Bath size={18} />
                                {unit.bath}
                              </div>
                            </div>

                            <span className="text-sm font-semibold text-[#2171B5]">
                              {unit.sqft}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="mt-4 text-sm font-semibold text-[#2171B5] hover:text-[#08306B]">
                        Show More
                      </button>
                    </div>

                    {/* RIGHT */}
                    <div className="flex min-w-[220px] flex-col items-end justify-between">

                      {/* COMPLETION */}
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-[#2171B5]" />

                        <span className="text-sm text-gray-500">
                          Completion:
                        </span>

                        {project.status === "completed" ? (
                          <span className="rounded-full bg-[#2171B5] px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                            Completed
                          </span>
                        ) : (
                          <span className="rounded-lg bg-[#08306B] px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                            {project.completion}
                          </span>
                        )}
                      </div>

                      {/* BUTTONS */}
                      <div className="mt-10 flex gap-3">
              <button
  onClick={() => navigate("/viewmore")}
  className="rounded-xl bg-[#2171B5] px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#08306B]"
>
  VIEW MORE
</button>

                        <button className="rounded-xl border-2 border-[#2171B5] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#2171B5] transition hover:bg-[#2171B5] hover:text-white">
                          CONTACT
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
