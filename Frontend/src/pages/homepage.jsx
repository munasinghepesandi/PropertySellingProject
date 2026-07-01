import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ImageWithFallback from "../components/ImageWithFallback";
import { API_BASE_URL } from "../utils/auth";


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
  const [latestListings, setLatestListings] = useState([]);
  const [latestLoading, setLatestLoading] = useState(true);
  const [latestError, setLatestError] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    maxPrice: "",
  });

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchLatestListings = async () => {
      try {
        setLatestLoading(true);
        setLatestError("");

        const response = await fetch(`${API_BASE_URL}/properties?status=active&limit=6`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Failed to load listings");
        }

        if (!isMounted) return;

        setLatestListings(Array.isArray(data?.data) ? data.data : []);
      } catch (error) {
        if (!isMounted) return;
        setLatestError(error.message || "Failed to load listings");
      } finally {
        if (isMounted) {
          setLatestLoading(false);
        }
      }
    };

    fetchLatestListings();

    return () => {
      isMounted = false;
    };
  }, []);

  const apiOrigin = API_BASE_URL.replace(/\/api\/?$/, "");

  const resolveImage = (imagePath) => {
    if (!imagePath) {
      return "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop";
    }

    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    return `${apiOrigin}${imagePath}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", { activeTab, ...filters });
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-gray-800">

      <Navbar />

      
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

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b3925c]">
              Fresh from Post Ad
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#1a3a4b]">
              Latest Posted Properties
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              These listings are pulled straight from the backend, including the cover image uploaded when the ad was published.
            </p>
          </div>
        </div>

        {latestLoading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-88 animate-pulse rounded-xl bg-white shadow" />
            ))}
          </div>
        ) : latestError ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {latestError}
          </div>
        ) : latestListings.length ? (
          <div className="grid gap-6 md:grid-cols-3">
            {latestListings.map((property) => (
              <div
                key={property.id}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={resolveImage(property.cover_image)}
                    alt={property.title}
                    className="h-56 w-full object-cover"
                  />
                  {Number(property.image_count || 0) > 1 && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#1a3a4b]/90 px-3 py-1 text-xs font-bold text-white">
                      {property.image_count} photos
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b3925c]">
                    {property.district_name || property.city || property.location || "Sri Lanka"}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-[#1a3a4b]">
                    {property.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {property.description}
                  </p>
                  <p className="mt-4 text-lg font-black text-[#1a3a4b]">
                    Rs. {Number(property.price || 0).toLocaleString("en-LK")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
            No posted properties yet. Submit one from the Post Ad page and it will appear here.
          </div>
        )}
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

<section className="bg-[#1a3a4b] text-white py-20">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">Why Choose Us</h2>
      <p className="mt-4 text-gray-300">
        We provide premium real estate services with unmatched professionalism.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition">
        <div className="text-5xl mb-4">🏡</div>
        <h3 className="text-2xl font-bold mb-3">Luxury Properties</h3>
        <p className="text-gray-300">
          Discover exclusive villas, apartments, and penthouses in the world's
          most desirable locations.
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition">
        <div className="text-5xl mb-4">🤝</div>
        <h3 className="text-2xl font-bold mb-3">Trusted Agents</h3>
        <p className="text-gray-300">
          Our experienced agents guide you through every step of buying,
          renting, or investing.
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition">
        <div className="text-5xl mb-4">💎</div>
        <h3 className="text-2xl font-bold mb-3">Best Investment</h3>
        <p className="text-gray-300">
          Invest in high-value properties with strong returns and long-term
          growth potential.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">
        What Our Clients Say
      </h2>
      <p className="text-gray-500 mt-3">
        Trusted by hundreds of satisfied buyers and investors.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-yellow-500 text-xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 italic">
          "The team helped us find our dream villa. The process was smooth and
          completely stress-free."
        </p>

        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h4 className="font-bold">Sarah Williams</h4>
            <p className="text-sm text-gray-500">
              Property Buyer
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-yellow-500 text-xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 italic">
          "Professional service with amazing property options. Highly recommend
          this company."
        </p>

        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h4 className="font-bold">David Johnson</h4>
            <p className="text-sm text-gray-500">
              Investor
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-yellow-500 text-xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 italic">
          "Excellent customer support and beautiful luxury properties. We found
          exactly what we wanted."
        </p>

        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h4 className="font-bold">Emily Brown</h4>
            <p className="text-sm text-gray-500">
              Home Owner
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section
  className="relative py-28 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600')",
  }}
>
  <div className="absolute inset-0 bg-[#1a3a4b]/80"></div>

  <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
    <h2 className="text-5xl font-bold">
      Ready to Find Your Dream Home?
    </h2>

    <p className="mt-6 text-lg text-gray-200">
      Browse hundreds of luxury properties and connect with experienced real
      estate professionals today.
    </p>

    <button className="mt-10 bg-[#b3925c] hover:bg-[#9c7b49] px-10 py-4 rounded-lg font-semibold text-lg transition">
      Explore Properties
    </button>
  </div>
</section>
      <Footer />
    </div>
  );
}