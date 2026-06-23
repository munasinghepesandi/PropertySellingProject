import React, { useMemo, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  ShieldCheck,
} from "lucide-react";

const apartmentListings = [
  {
    id: 690001,
    title: "Apartment wanted near British School",
    area: "Kandy 7, Nawala",
    summary: "Looking for 2-3 bedroom apartment near international schools.",
    badge: "Family wanted",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: 690002,
    title: "Furnished apartment wanted close to Kandy City",
    area: "Kandy, Peradeniya",
    summary: "Seeking fully furnished apartment in Kandy city or Peradeniya.",
    badge: "Kandy wanted",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: 690003,
    title: "Apartment wanted in Kandy 3 4",
    area: "Kandy 3, Kandy 4",
    summary: "Need a 2 bedroom apartment with parking and lift.",
    badge: "Immediate",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: 690004,
    title: "Studio apartment wanted near Wattala",
    area: "Wattala, Ja-Ela",
    summary: "Studio or 1 bedroom apartment with good public transport links.",
    badge: "Budget",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80&auto=format&fit=crop",
  },
];

function ApartmentsWantedPage() {
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedListing, setSelectedListing] = useState(
    apartmentListings[0]
  );
  const [savedIds, setSavedIds] = useState([]);

  const pageSize = 4;

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase();
    const location = locationQuery.trim().toLowerCase();

    return apartmentListings.filter((l) => {
      const matchesQuery =
        !q ||
        l.title.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.area.toLowerCase().includes(q);

      const matchesLocation =
        !location ||
        l.area.toLowerCase().includes(location);

      return matchesQuery && matchesLocation;
    });
  }, [query, locationQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredListings.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const pageListings = filteredListings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const goToPage = (n) => setPage(Math.min(Math.max(n, 1), totalPages));

  const handleView = (l) => {
    setSelectedListing(l);
    document
      .getElementById("apartment-detail")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSave = (l) =>
    setSavedIds((cur) =>
      cur.includes(l.id)
        ? cur.filter((id) => id !== l.id)
        : [...cur, l.id]
    );

  const handleContact = (l) => {
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${encodeURIComponent(
      "Apartment wanted: " + l.title
    )}`;
  };

  return (
    <div className="min-h-screen bg-[#EAEAEA] text-[#4A4A4A]">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#203F52] via-[#2D4F63] to-[#2A6FA3] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F3D319]">
            Apartments wanted
          </p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            List of Apartments wanted
          </h1>
        </div>
      </section>

      {/* SEARCH */}
      <main className="mx-auto max-w-6xl px-4 py-8">

        <div className="rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] p-6 shadow-sm">

          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8B8B8]"
              size={18}
            />

            <input
              value={locationQuery}
              onChange={(e) => {
                setLocationQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search by area"
              className="w-full rounded-xl border border-[#B8B8B8] bg-[#FFFFFF] py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#2A6FA3]"
            />
          </div>

        </div>

        {/* LISTINGS */}
        <div className="mt-8 space-y-5">

          {pageListings.map((l) => (
            <article
              key={l.id}
              className="overflow-hidden rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] shadow-sm lg:grid lg:grid-cols-[220px_1fr]"
            >

              <img
                src={l.image}
                className="h-full w-full object-cover"
              />

              <div className="p-5">

                <h4 className="text-xl font-bold text-[#203F52]">
                  {l.title}
                </h4>

                <p className="mt-1 text-sm text-[#2A6FA3]">
                  {l.area}
                </p>

                <p className="mt-3 text-sm text-[#4A4A4A]">
                  {l.summary}
                </p>

                <div className="mt-4 flex gap-3">

                  <button
                    onClick={() => handleView(l)}
                    className="rounded-full bg-[#203F52] px-4 py-2 text-white hover:bg-[#2D4F63]"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleSave(l)}
                    className="rounded-full border border-[#2A6FA3] px-4 py-2 text-[#2A6FA3]"
                  >
                    {savedIds.includes(l.id) ? "Saved" : "Save"}
                  </button>

                  <button
                    onClick={() => handleContact(l)}
                    className="rounded-full border border-[#B8B8B8] px-4 py-2"
                  >
                    Contact
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* DETAIL */}
        <div
          id="apartment-detail"
          className="mt-10 rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] p-6"
        >
          <h3 className="text-xl font-bold text-[#203F52]">
            {selectedListing.title}
          </h3>

          <p className="mt-2 text-sm text-[#4A4A4A]">
            {selectedListing.summary}
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default ApartmentsWantedPage;