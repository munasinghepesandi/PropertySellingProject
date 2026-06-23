import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

/* ---------------- HERO SLIDER DATA ---------------- */
const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    title: "Find Your Dream Luxury Home",
    subtitle: "Exclusive Properties Await You",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "Modern Living Spaces",
    subtitle: "Experience Comfort & Style",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    title: "Invest in Premium Real Estate",
    subtitle: "High Value Properties Worldwide",
  },
];

/* ---------------- FEATURED PROPERTIES ---------------- */
const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Oceanfront Glass Villa",
    location: "Malibu, California",
    price: "$5,400,000",
    beds: 6,
    baths: 7,
    sqft: "6,100",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Skyline Penthouse Suite",
    location: "Dubai Marina, UAE",
    price: "$8,250,000",
    beds: 4,
    baths: 5,
    sqft: "4,500",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern Jungle Retreat",
    location: "Bali, Indonesia",
    price: "$2,900,000",
    beds: 5,
    baths: 5,
    sqft: "3,800",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop",
  },
];

export default function CompleteHomepage() {
  const [activeTab, setActiveTab] = useState("SALES");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    maxPrice: "",
  });

  /* ---------------- AUTO SLIDER ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", { activeTab, ...filters });
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-gray-800">

      <Navbar />

      {/* ---------------- HERO IMAGE SLIDER ---------------- */}
      <section className="relative h-[85vh] overflow-hidden">

        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url('${slide.image}')`,
              }}
            />
          </div>
        ))}

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center px-6 md:px-24">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="mt-4 text-lg text-[#b3925c] font-semibold">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- SEARCH ---------------- */}
      <section className="max-w-6xl mx-auto px-4 -mt-28 relative z-20">
        <form
          onSubmit={handleSearch}
          className="bg-[#1a3a4b] rounded-xl p-6 md:p-8 shadow-2xl"
        >
          <div className="flex gap-3 mb-6">
            {["SALES", "RENTALS", "LAND"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-bold uppercase rounded ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-white/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              placeholder="Location"
              className="p-3 rounded"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            />

            <select
              className="p-3 rounded"
              value={filters.type}
              onChange={(e) =>
                setFilters({ ...filters, type: e.target.value })
              }
            >
              <option value="">Property Type</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
            </select>

            <select
              className="p-3 rounded"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            >
              <option value="">Max Price</option>
              <option value="2000000">$2M</option>
              <option value="5000000">$5M</option>
              <option value="10000000">$10M</option>
            </select>

            <button className="bg-[#b3925c] text-white font-bold rounded">
              Search
            </button>
          </div>
        </form>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="max-w-6xl mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 text-center">
        <div>
          <h3 className="text-4xl font-black">$3.8B+</h3>
          <p className="text-xs uppercase">Total Sales</p>
        </div>
        <div>
          <h3 className="text-4xl font-black">15+</h3>
          <p className="text-xs uppercase">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-black">98%</h3>
          <p className="text-xs uppercase">Client Satisfaction</p>
        </div>
        <div>
          <h3 className="text-4xl font-black">320+</h3>
          <p className="text-xs uppercase">Properties Listed</p>
        </div>
      </section>

      {/* ---------------- PROPERTIES ---------------- */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">Featured Properties</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_PROPERTIES.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-gray-500">{p.location}</p>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-lg font-black text-[#1a3a4b]">
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}