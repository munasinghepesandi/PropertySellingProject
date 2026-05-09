import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Search, MapPin, BadgePlus, House, PiggyBank, Building, Trophy, Zap, Layers, Shield } from "lucide-react";
import { API_BASE_URL } from "../utils/auth";
import "../styles/homepage.css";

const fallbackProperties = [
  {
    id: "fallback-1",
    title: "Modern Family House",
    location: "Colombo 05",
    price: 45000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "house",
    image_url: "https://cdn.mistert.lk/property/sales/5883_1_1774420187.jpeg",
  },
  {
    id: "fallback-2",
    title: "Luxury Villa",
    location: "Galle",
    price: 85000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4100,
    type: "villa",
    image_url: "https://www.lankaislandproperties.com/wp-content/uploads/2025/08/1-400x263.jpg",
  },
  {
    id: "fallback-3",
    title: "Beachfront Apartment",
    location: "Mount Lavinia",
    price: 25000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1950,
    type: "apartment",
    image_url: "https://apartments.lk/wp-content/uploads/2023/05/IMG-20230405-WA0015-1600x790.jpg",
  },
  {
    id: "fallback-4",
    title: "Contemporary Townhouse",
    location: "Nugegoda",
    price: 39500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2350,
    type: "house",
    image_url: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fallback-5",
    title: "Hillside Bungalow",
    location: "Kandy",
    price: 31000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    type: "house",
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fallback-6",
    title: "City View Penthouse",
    location: "Colombo 02",
    price: 92000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    type: "apartment",
    image_url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
];

function formatPrice(price) {
  if (!price) return "Price on request";
  return `Rs. ${new Intl.NumberFormat("en-LK").format(price)}`;
}

function getBadge(type) {
  if (type === "villa") return "Premium";
  if (type === "land") return "Land";
  if (type === "commercial") return "Commercial";
  return "For Sale";
}

const Homepage = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadFeaturedProperties = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/properties`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Failed to load featured properties");
        }

        const backendProperties = Array.isArray(data?.data) ? data.data : [];

        if (!cancelled) {
          setProperties(backendProperties.slice(0, 6));
        }
      } catch {
        if (!cancelled) {
          setProperties(fallbackProperties);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadFeaturedProperties();

    return () => {
      cancelled = true;
    };
  }, []);

  const featuredProperties = useMemo(() => {
    if (properties.length > 0) {
      return properties;
    }
    return fallbackProperties;
  }, [properties]);

  const justPosted = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("posted") === "1";
  }, [location.search]);

  return (
    <div>
      <Navbar />

      {justPosted && (
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            Your ad has been posted successfully and is now visible in featured listings.
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ ['--hero-bg']: 'url("https://www.johnkeellsproperties.com/_next/image?url=https%3A%2F%2Fd348s9iu5fkczb.cloudfront.net%2F0d02a111-09e3-4fd4-914a-c81ba65c485d.jpg&w=2048&q=75")' }}
      >
        <div className="hero-overlay">
          <h1>Find Your Dream Property in <br/> Sri Lanka</h1>

          <p>Discover the perfect home in Sri Lanka.</p>

          <div className="hero-search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search city, area, property type..."
              className="hero-search__input"
            />
            <button className="hero-search__button">Search</button>
          </div>
          <br/>

          <div className="stats">
            <div>
              <h2>1,200+</h2>
              <p>Properties</p>
            </div>
            <div>
              <h2>500+</h2>
              <p>Agents</p>
            </div>
            <div>
              <h2>2,000+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <div className="section-header">
          <h2 className="font-bold">Browse Property Types</h2>
          <p>Make your property decisions smart and informed.</p>
        </div>
        <br/>
        <div className="category-carousel" aria-label="Browse property types">
          
          <div className="category-track">
            <article className="category-card category-card--green">
              <div className="category-card__icon">
                <MapPin size={34} />
              </div>
              <h3>Find a land for sale</h3>
              <p>Find residential or commercial lands for sale</p>
            </article>

            <article className="category-card category-card--blue is-active">
              <div className="category-card__icon">
                <BadgePlus size={34} />
              </div>
              <h3>Post your ad</h3>
              <p>Post your property advertisement</p>
            </article>

            <article className="category-card category-card--teal">
              <div className="category-card__icon">
                <House size={34} />
              </div>
              <h3>Find the best home loan rates</h3>
              <p>Compare and find the best home loans for you</p>
            </article>

            <article className="category-card category-card--purple">
              <div className="category-card__icon">
                <PiggyBank size={34} />
              </div>
              <h3>Find the best investments</h3>
              <p>Discover the best investment options available for you</p>
            </article>

            <article className="category-card category-card--cyan">
              <div className="category-card__icon">
                <Building size={34} />
              </div>
              <h3>Find new apartments</h3>
              <p>Find the best luxury apartments in Sri Lanka</p>
            </article>

            
          </div>

          
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="featured">
        <div className="section-header">
          <h2 className="font-bold">Featured Properties</h2>
          <p>Hand-picked properties just for you</p>
        </div>

        {loading && <p className="text-sm font-semibold text-slate-500">Loading latest listings...</p>}

        <div className="property-grid">
          {featuredProperties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-media">
                <img
                  src={property.image_url || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop"}
                  alt={property.title}
                />
                <span className="property-chip">{getBadge(property.type)}</span>
              </div>
              <div className="property-info">
                <p className="property-location">{property.location}</p>
                <h3>{property.title}</h3>
                <div className="property-meta">
                  <span>{property.bedrooms ? `${property.bedrooms} Beds` : "N/A"}</span>
                  <span>{property.bathrooms ? `${property.bathrooms} Baths` : "N/A"}</span>
                  <span>{property.area ? `${property.area} sqft` : "N/A"}</span>
                </div>
                <div className="property-price-row">
                  <span className="property-price">{formatPrice(property.price)}</span>
                  <button className="property-link" type="button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-us">
        <div className="why-choose-us-container">
          <div className="section-header">
            <h2 className="font-bold">Why Choose Us</h2>
            <p>Discover why thousands of customers trust us for their property needs</p>
          </div>

          <div className="why-choose-us-grid">
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <Trophy size={40} />
              </div>
              <h3>Expert Team</h3>
              <p>Our experienced professionals are dedicated to finding you the perfect property with personalized guidance.</p>
            </div>

            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <Zap size={40} />
              </div>
              <h3>Fast Process</h3>
              <p>Quick and streamlined property search, verification, and transaction processes to save your time.</p>
            </div>

            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <Layers size={40} />
              </div>
              <h3>Wide Selection</h3>
              <p>Access to thousands of verified properties across Sri Lanka, from apartments to luxury estates.</p>
            </div>

            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <Shield size={40} />
              </div>
              <h3>Secure & Safe</h3>
              <p>All transactions are secured with complete verification and transparent pricing with no hidden costs.</p>
            </div>
          </div>

          <div className="why-choose-us-footer">
            <p>Join 2,000+ happy customers who found their dream properties with us</p>
            <button className="why-choose-us-cta">Start Your Journey</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
