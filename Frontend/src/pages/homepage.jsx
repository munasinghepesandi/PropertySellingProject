import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";    
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { API_BASE_URL } from "../utils/auth";

// custom image fallback structure helper
function ImageWithFallback({ src, alt, className }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        e.target.src = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop";
      }}
    />
  );
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    title: "Find Your Dream Luxury Home",
    subtitle: "Exclusive Properties Await You",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "Modern Living Spaces",
    subtitle: "Experience Comfort & Style",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    title: "Invest in Premium Real Estate",
    subtitle: "High Value Properties Worldwide",
  },
];

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Oceanfront Glass Villa",
    location: "Malibu, California",
    price: "$5,400,000",
    beds: 6,
    baths: 7,
    sqft: "6,100",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Skyline Penthouse Suite",
    location: "Dubai Marina, UAE",
    price: "$8,250,000",
    beds: 4,
    baths: 5,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern Jungle Retreat",
    location: "Bali, Indonesia",
    price: "$2,900,000",
    beds: 5,
    baths: 5,
    sqft: "3,800",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
];

const LAST_POSTED_LISTING_KEY = "lanka_property_last_posted_listing"; 


export default function CompleteHomepage() {
  const [activeTab, setActiveTab] = useState("SALES");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filters, setFilters] = useState({ location: "", type: "", maxPrice: "" });
  const [latestListings, setLatestListings] = useState([]);
  const [latestLoading, setLatestLoading] = useState(false);
  const [latestError, setLatestError] = useState("");

  const navigate = useNavigate();

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

        const apiListings = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
        let cachedListing = null;

        try {
          const stored = window.localStorage.getItem(LAST_POSTED_LISTING_KEY);
          cachedListing = stored ? JSON.parse(stored) : null;
        } catch {
          cachedListing = null;
        }

        const mergedListings = cachedListing?.id
          ? [cachedListing, ...apiListings.filter((item) => item.id !== cachedListing.id)]
          : apiListings;

        setLatestListings(mergedListings);
      } catch (error) {
        if (!isMounted) return;
        setLatestError(error.message || "Failed to load listings");
      } {
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

  const parseListingImages = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value !== "string") return [];
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [value];
    }
  };

  const resolveImage = (imagePath) => {
    if (!imagePath) return "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop";
    if (imagePath.startsWith("http")) return imagePath;
    return `${apiOrigin}${imagePath}`;
  };

  const getListingImage = (property) => {
    const storedImages = parseListingImages(property?.images);
    return property?.cover_image || storedImages[0] || property?.image || null;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    if (filters.type) params.set("type", filters.type);
    if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
    if (activeTab) params.set("tab", activeTab);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={`hero-slide-${index}`}
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

      {/* SEARCH */}
      <section className="max-w-6xl mx-auto px-4 -mt-28 relative z-20">
        <form onSubmit={handleSearch} className="bg-[#1a3a4b] rounded-xl p-6 md:p-8 shadow-2xl">
          <div className="flex gap-3 mb-6">
            {["SALES", "RENTALS", "LAND"].map((tab) => (
              <button
                key={`tab-${tab}`}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-bold uppercase rounded ${
                  activeTab === tab ? "bg-white text-black" : "text-white/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              placeholder="Location"
              className="p-3 rounded text-gray-800 bg-white"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
            <select
              className="p-3 rounded text-gray-800 bg-white"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Property Type</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <select
              className="p-3 rounded text-gray-800 bg-white"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            >
              <option value="">Max Price</option>
              <option value="2000000">$2M</option>
              <option value="5000000">$5M</option>
              <option value="10000000">$10M</option>
            </select>
            
            <button 
              type="submit" 
              className="bg-[#b3925c] hover:bg-[#9c7b49] text-white font-bold p-3 rounded transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 text-center">
        <div><h3 className="text-4xl font-black">$3.8B+</h3><p className="text-xs uppercase">Total Sales</p></div>
        <div><h3 className="text-4xl font-black">15+</h3><p className="text-xs uppercase">Years Experience</p></div>
        <div><h3 className="text-4xl font-black">98%</h3><p className="text-xs uppercase">Client Satisfaction</p></div>
        <div><h3 className="text-4xl font-black">320+</h3><p className="text-xs uppercase">Properties Listed</p></div>
      </section>

      {/* LATEST PROPERTIES SECTION */}
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
            {latestListings.map((property) => {
              const storedImages = parseListingImages(property.images);
              const coverImage = getListingImage(property);
              const priceText = typeof property.price === "number"
                ? `Rs. ${Number(property.price).toLocaleString("en-LK")}`
                : property.price || "Price on request";

              return (
                <Link
                  key={property.id}
                  to={`/viewmore?id=${property.id}`}
                  className="block overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-2xl flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative">
                      <ImageWithFallback
                        src={resolveImage(coverImage)}
                        alt={property.title}
                        className="h-56 w-full object-cover"
                      />
                      {Math.max(storedImages.length, Number(property.image_count || 0)) > 1 && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#1a3a4b]/90 px-3 py-1 text-xs font-bold text-white">
                          {Math.max(storedImages.length, Number(property.image_count || 0))} photos
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-gray-500">
                        {property.district_name || property.location || property.city || "Sri Lanka"}
                      </p>
                      <h3 className="font-bold text-gray-800">{property.title}</h3>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <p className="text-lg font-black text-[#1a3a4b]">{priceText}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
            No posted properties yet. Submit one from the Post Ad page and it will appear here.
          </div>
        )}
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-[#1a3a4b]">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_PROPERTIES.map((p) => (
            <div
              key={`featured-${p.id}`}
              onClick={() => navigate(`/properties/${p.id}`)}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between h-full"
            >
              <div>
                <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs text-gray-500">{p.location}</p>
                  <h3 className="font-bold text-gray-800">{p.title}</h3>
                </div>
              </div>
              <div className="px-5 pb-5">
                <p className="text-lg font-black text-[#1a3a4b]">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#1a3a4b] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
            <p className="mt-4 text-gray-300">We provide premium real estate services with unmatched professionalism.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold mb-3">Luxury Properties</h3>
              <p className="text-gray-300">Discover exclusive villas, apartments, and penthouses in the world's most desirable locations.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Trusted Agents</h3>
              <p className="text-gray-300">Our experienced agents guide you through every step of buying, renting, or investing.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-3">Best Investment</h3>
              <p className="text-gray-300">Invest in high-value properties with strong returns and long-term growth potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1a3a4b]">What Our Clients Say</h2>
            <p className="text-gray-500 mt-3">Trusted by hundreds of satisfied buyers and investors.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Williams", role: "Property Buyer", img: "https://randomuser.me/api/portraits/women/44.jpg", text: "The team helped us find our dream villa. The process was smooth and completely stress-free." },
              { name: "David Johnson", role: "Investor", img: "https://randomuser.me/api/portraits/men/52.jpg", text: "Professional service with amazing property options. Highly recommend this company." },
              { name: "Emily Brown", role: "Home Owner", img: "https://randomuser.me/api/portraits/women/65.jpg", text: "Excellent customer support and beautiful luxury properties. We found exactly what we wanted." },
            ].map((t) => (
              <div key={`testimonial-${t.name}`} className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-600 italic">"{t.text}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img src={t.img} alt="" className="w-14 h-14 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600')" }}
      >
        <div className="absolute inset-0 bg-[#1a3a4b]/80"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold">Ready to Find Your Dream Home?</h2>
          <p className="mt-6 text-lg text-gray-200">
            Browse hundreds of luxury properties and connect with experienced real estate professionals today.
          </p>
          <button
            onClick={() => navigate("/properties")}
            className="mt-10 bg-[#b3925c] hover:bg-[#9c7b49] px-10 py-4 rounded-lg font-semibold text-lg transition text-white"
          >
            Explore Properties
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}