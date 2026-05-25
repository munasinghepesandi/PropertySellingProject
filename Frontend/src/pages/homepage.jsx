import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  Search,
  Home,
  Building2,
  KeyRound,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
  Sparkles,
  Star,
  TrendingUp,
  Clock3,
  BadgeCheck,
  Layers3,
} from "lucide-react";
import "../styles/homepage.css";

const propertyTypes = [
  {
    icon: Home,
    title: "Houses",
    description: "Family homes, villas, and bungalows",
  },
  {
    icon: Building2,
    title: "Apartments",
    description: "Modern city living spaces",
  },
  {
    icon: KeyRound,
    title: "Rentals",
    description: "Short and long-term rental properties",
  },
  {
    icon: Layers3,
    title: "Lands",
    description: "Residential and commercial plots",
  },
];

const featuredProperties = [
  {
    title: "Modern Family House",
    area: "Colombo 05",
    price: "Rs. 45,000,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    tag: "Featured",
  },
  {
    title: "Luxury Villa",
    area: "Negombo",
    price: "Rs. 85,000,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    tag: "Premium",
  },
  {
    title: "Beachfront Apartment",
    area: "Mount Lavinia",
    price: "Rs. 25,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    tag: "New",
  },
];

const highlights = [
  "Verified listings",
  "Fast response support",
  "Loan and valuation guidance",
  "Trusted across Sri Lanka",
];

const homepage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contactStatus, setContactStatus] = useState("");

  const handleHeroSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    navigate(query ? `/sales?search=${encodeURIComponent(query)}` : "/sales");
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus("");

    const form = event.currentTarget; // capture before async to avoid synthetic event pooling
    const formData = new FormData(form);
    const payload = {
      property_id: null,
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setContactStatus("Please fill in your name, email, and message.");
      return;
    }

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiBase}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit message");
      }

      setContactStatus("Thanks — your message was sent successfully.");
      try { form.reset(); } catch { /* ignore reset errors */ }
    } catch (error) {
      setContactStatus(error.message || "Failed to submit message.");
    }
  };

  return (
    <div className="home-page">
      <Navbar />

      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-overlay hero-motion">
          <div className="hero-badge">
            <Sparkles size={14} />
            Sri Lanka's modern property marketplace
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Find, compare, and act on the right property faster.</h1>
              <p>
                Discover homes, rentals, land, and apartments with a cleaner search experience,
                verified information, and practical support when you need it.
              </p>

              <div className="hero-highlights">
                {highlights.map((item) => (
                  <span key={item} className="hero-highlight-pill">
                    <BadgeCheck size={14} />
                    {item}
                  </span>
                ))}
              </div>

              <div className="hero-stat-strip">
                <div>
                  <strong>1,200+</strong>
                  <span>Properties</span>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Agents</span>
                </div>
                <div>
                  <strong>2,000+</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-top">
                <div className="hero-floating-icon">
                  <Home size={22} />
                </div>
                <div>
                  <p className="hero-panel-label">Smart search</p>
                  <h2>Start with area, city, or property type</h2>
                </div>
              </div>

              <form className="hero-search" onSubmit={handleHeroSearch}>
                <Search className="icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search city, area, property type..."
                />
                <button type="submit">Search</button>
              </form>

              <div className="hero-actions">
                <button 
                  onClick={() => navigate('/post-ad')} 
                  className="hero-action-primary"
                >
                  Post Your Ad
                  <ArrowRight size={16} />
                </button>
                <a href="#about-us" className="hero-action-secondary">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="hero-activity-card">
                <div>
                  <span className="hero-activity-label">Trending now</span>
                  <strong>Beachfront apartments and city homes</strong>
                </div>
                <TrendingUp size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-kicker">Browse by type</p>
          <h2>Explore the property categories people search most.</h2>
          <p>Use a simple, guided starting point to find the right listings faster.</p>
        </div>

        <div className="category-grid">
          {propertyTypes.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.title} type="button" className="category-card float-card" onClick={() => navigate(`/${item.title.toLowerCase()}`)}>
                <span className="category-icon">
                  <Icon size={32} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="featured">
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-kicker">Featured listings</p>
          <h2>Hand-picked properties with a cleaner visual presentation.</h2>
          <p>High-impact cards make it easier to compare listings at a glance.</p>
        </div>

        <div className="property-grid">
          {featuredProperties.map((property) => (
            <article key={property.title} className="property-card float-card">
              <div className="property-image-wrap">
                <img src={property.image} alt={property.title} />
                <span className="property-tag">{property.tag}</span>
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <p>{property.area}</p>
                <span>{property.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about-us" className="about-section">
        <div className="section-header compact">
          <div className="section-divider" />
          <p className="section-kicker">About us</p>
          <h2>Trusted property guidance built for buyers, sellers, and investors.</h2>
          <p>
            A more polished experience for users who want clear listings, practical support,
            and quick access to the right property information.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card about-card-accent float-card">
            <div className="about-icon">
              <ShieldCheck size={22} />
            </div>
            <h3>Why LankaPropertyWeb?</h3>
            <p>
              We focus on verified listings, a faster search flow, and support content that helps people move with confidence.
            </p>
            <div className="about-tags">
              <span><ShieldCheck size={14} /> Verified listings</span>
              <span><Users size={14} /> Buyer & seller support</span>
            </div>
          </div>

          <div className="about-card float-card">
            <p className="section-kicker">What we offer</p>
            <ul className="about-list">
              <li><BadgeCheck size={16} /> Property sales and rental search</li>
              <li><Clock3 size={16} /> Home loan guidance and valuation support</li>
              <li><Star size={16} /> Foreign buyer and market insight articles</li>
              <li><Users size={16} /> Fast contact with property owners and agents</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact-us" className="contact-section">
        <div className="section-header compact">
          <div className="section-divider" />
          <p className="section-kicker">Contact us</p>
          <h2>Need help with a property search, valuation, or listing?</h2>
          <p>
            Reach out for quick help with shortlist building, pricing questions, or the next step in your buying journey.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-surface float-card">
            <p className="section-kicker">Buyer & seller assistance</p>
            <h3>Talk to our support team</h3>
            <p>
              Get help with listings, pricing, and the next step for buying or selling.
            </p>

            <div className="contact-points">
              <div>
                <MapPin size={18} />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div>
                <Phone size={18} />
                <span>+94 77 123 4567</span>
              </div>
              <div>
                <Mail size={18} />
                <span>info@lankapropertyweb.com</span>
              </div>
            </div>
          </div>

          <div className="contact-card float-card">
            <p className="section-kicker">Send a quick message</p>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Email address" required />
              <textarea rows="5" name="message" placeholder="How can we help you?" required />
              <button type="submit">Send Message</button>
            </form>
            {contactStatus ? <p className="contact-status">{contactStatus}</p> : null}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default homepage;
