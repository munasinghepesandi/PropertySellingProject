import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Search, Home, Building2, KeyRound } from "lucide-react";
import "../styles/homepage.css";

const homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Find Your Dream Property in Sri Lanka</h1>
          <p>
            Buy, rent, or sell houses, lands, and apartments with ease on
            LankaPropertyWeb.
          </p>

          <div className="hero-search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search city, area, property type..."
            />
            <button>Search</button>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/sales')}
              className="rounded-lg border border-white/30 bg-white/10 px-5 py-2 font-semibold text-white transition hover:bg-white/20"
            >
              Go to Sales Page
            </button>
          </div>

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
          <h2>Browse by Property Type</h2>
          <p>Explore properties that match your lifestyle</p>
        </div>

        <div className="category-grid">
          <div className="category-card">
            <Home size={40} />
            <h3>Houses</h3>
            <p>Family homes, villas & bungalows</p>
          </div>

          <div className="category-card">
            <Building2 size={40} />
            <h3>Apartments</h3>
            <p>Modern city living spaces</p>
          </div>

          <div className="category-card">
            <KeyRound size={40} />
            <h3>Rentals</h3>
            <p>Short & long term rental properties</p>
          </div>

          <div className="category-card">
            <Home size={40} />
            <h3>Lands</h3>
            <p>Residential & commercial plots</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="featured">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Hand-picked properties just for you</p>
        </div>

        <div className="property-grid">
          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="house"
            />
            <div className="property-info">
              <h3>Modern Family House</h3>
              <p>Colombo 05</p>
              <span>Rs. 45,000,000</span>
            </div>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="villa"
            />
            <div className="property-info">
              <h3>Luxury Villa</h3>
              <p>Negombo</p>
              <span>Rs. 85,000,000</span>
            </div>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="apartment"
            />
            <div className="property-info">
              <h3>Beachfront Apartment</h3>
              <p>Mount Lavinia</p>
              <span>Rs. 25,000,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to list your property?</h2>
          <p>Reach thousands of buyers across Sri Lanka instantly.</p>
        </div>

        <button className="btn-premium">Post Your Ad</button>
      </section>

      <Footer />
    </div>
  );
};

export default homepage;
