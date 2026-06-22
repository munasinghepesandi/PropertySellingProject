import { useEffect, useRef, useState } from "react";
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
  BedDouble,
  Bath,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "../styles/homepage.css";
import { readPostedAds } from "../utils/postedAds";

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

const defaultFeaturedProperties = [
  {
    id: 'hp-1', // Add unique IDs for featured properties
    title: "Modern Family House",
    area: "Colombo 05",
    price: "Rs. 45,000,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    tag: "Featured",
    // Add some dummy details for the modal, similar to SalesPage
    beds: '4 Beds',
    baths: '3 Baths',
    sqft: '2,300 sqft',
    description: 'A beautiful modern family house located in a prime residential area of Colombo 05. Features spacious living areas, a well-maintained garden, and easy access to schools and amenities.',
    contact: { name: 'John Doe', phone: '+94 77 123 4567', posted: '1 week ago' },
    features: ['Garden', 'Parking', 'CCTV', 'Air Conditioning'],
  },
  {
    id: 'hp-2',
    title: "Luxury Villa",
    area: "Negombo",
    price: "Rs. 85,000,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    tag: "Premium",
    beds: '5 Beds',
    baths: '4 Baths',
    sqft: '4,500 sqft',
    description: 'An exquisite luxury villa in Negombo offering stunning views and high-end finishes. Includes a private pool, multiple living spaces, and proximity to the beach.',
    contact: { name: 'Jane Smith', phone: '+94 71 987 6543', posted: '3 days ago' },
    features: ['Private Pool', 'Sea View', 'Smart Home', 'Gym'],
  },
  {
    id: 'hp-3',
    title: "Beachfront Apartment",
    area: "Mount Lavinia",
    price: "Rs. 25,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    tag: "New",
    beds: '3 Beds',
    baths: '2 Baths',
    sqft: '1,800 sqft',
    description: 'Brand new beachfront apartment in Mount Lavinia with direct access to the beach. Modern design, spacious balconies, and panoramic ocean views.',
    contact: { name: 'Peter Jones', phone: '+94 76 543 2109', posted: '2 days ago' },
    features: ['Beach Access', 'Ocean View', 'Balcony', '24/7 Security'],
  },
];

const highlights = [
  "Verified listings",
  "Fast response support",
  "Loan and valuation guidance",
  "Trusted across Sri Lanka",
];

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=85",
    subtitle: "Find Your Dream Home in Sri Lanka",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    subtitle: "Luxury Beachfront Properties",
  },
  {
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85",
    subtitle: "Premium Villas & Estates",
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
    subtitle: "Modern City Apartments",
  },
  {
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85",
    subtitle: "Investment Land & Plots",
  },
];

const whyStats = [
  { icon: "🏠", number: "1,200+", label: "Properties Listed" },
  { icon: "👥", number: "500+",   label: "Verified Agents" },
  { icon: "✅", number: "2,000+", label: "Successful Deals" },
  { icon: "⭐", number: "4.8/5",  label: "Customer Rating" },
];

const howSteps = [
  {
    step: 1,
    title: "Search",
    description: "Browse thousands of verified property listings",
  },
  {
    step: 2,
    title: "Connect",
    description: "Contact agents or owners directly",
  },
  {
    step: 3,
    title: "Move In",
    description: "Close the deal with our guidance",
  },
];

const topLocations = [
  {
    city: "Colombo",
    count: "450+ Properties",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Kandy",
    count: "180+ Properties",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Galle",
    count: "120+ Properties",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Negombo",
    count: "95+ Properties",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Nuwara Eliya",
    count: "65+ Properties",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Trincomalee",
    count: "55+ Properties",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    quote:
      "LankaPropertyWeb made finding our dream home in Colombo so easy. The listings were accurate and the agent response was fast!",
    name: "Priya Fernando",
    role: "Home Buyer",
    initial: "P",
  },
  {
    quote:
      "I sold my property within 2 weeks of listing. The platform brings serious buyers.",
    name: "Rajan Perera",
    role: "Property Seller",
    initial: "R",
  },
  {
    quote:
      "As an agent, this platform has transformed my business. Quality leads every week.",
    name: "Amara Silva",
    role: "Real Estate Agent",
    initial: "A",
  },
];

const Homepage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [featuredProperties, setFeaturedProperties] = useState(defaultFeaturedProperties);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const syncFeaturedProperties = () => {
      const postedAds = readPostedAds();
      const postedAdsWithIds = postedAds.map((ad, index) => ({
        id: `posted-${index}-${Date.now()}`,
        ...ad,
        beds: ad.beds || 'N/A',
        baths: ad.baths || 'N/A',
        sqft: ad.area || 'N/A',
        description: ad.description || 'No description available.',
        contact: ad.contact || { name: 'Owner', phone: 'N/A', posted: 'Recently' },
        features: ad.features || [],
      }));
      setFeaturedProperties([...postedAdsWithIds, ...defaultFeaturedProperties]);
    };

    syncFeaturedProperties();
    window.addEventListener('storage', syncFeaturedProperties);
    return () => window.removeEventListener('storage', syncFeaturedProperties);
  }, []);

  // Slideshow auto-advance
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToSlide = (index) => {
    setHeroSlide(index);
    startTimer();
  };

  const prevSlide = () => {
    goToSlide((heroSlide - 1 + heroImages.length) % heroImages.length);
  };

  const nextSlide = () => {
    goToSlide((heroSlide + 1) % heroImages.length);
  };

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

  const closeModal = () => setSelectedProperty(null);

  return (
    <div className="home-page">
      <Navbar />

      {/* ── HERO with slideshow ── */}
      <section className="hero hero-slideshow">
        {heroImages.map((slide, i) => (
          <div
            key={slide.url}
            className={`hero-slide${i === heroSlide ? " active" : ""}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          />
        ))}
        <div className="hero-slide-overlay" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <button className="hero-arrow hero-arrow-prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-arrow hero-arrow-next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>

        <div className="hero-dots">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === heroSlide ? " active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-overlay hero-motion">
          <div className="hero-badge">
            <Sparkles size={14} />
            Sri Lanka's modern property marketplace
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Find, compare, and act on the right property faster.</h1>
              <p className="hero-slide-subtitle">{heroImages[heroSlide].subtitle}</p>
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

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-kicker">Why choose us</p>
          <h2>Numbers that speak for themselves.</h2>
          <p>Trusted by thousands of buyers, sellers, and agents across Sri Lanka.</p>
        </div>
        <div className="why-grid">
          {whyStats.map((stat) => (
            <div key={stat.label} className="why-card float-card">
              <span className="why-icon">{stat.icon}</span>
              <strong className="why-number">{stat.number}</strong>
              <span className="why-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
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

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-kicker">How it works</p>
          <h2>Three simple steps to your next property.</h2>
          <p>We guide you from search to keys in hand.</p>
        </div>
        <div className="how-steps">
          {howSteps.map((item, idx) => (
            <div key={item.step} className="how-step float-card">
              {idx < howSteps.length - 1 && <div className="how-connector" />}
              <div className="how-step-number">{item.step}</div>
              <h3 className="how-step-title">{item.title}</h3>
              <p className="how-step-desc">{item.description}</p>
            </div>
          ))}
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
            <article
              key={property.id || property.title}
              className="property-card float-card"
              onClick={() => setSelectedProperty(property)}
            >
              <div className="property-image-wrap">
                <img src={property.image} alt={property.title} />
                <span className="property-tag">{property.tag}</span>
                <span className="property-price-badge">{property.price}</span>
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <p className="property-location">
                  <MapPin size={13} />
                  {property.area}
                </p>
                {(property.beds || property.baths || property.sqft) && (
                  <div className="property-meta">
                    {property.beds && property.beds !== "N/A" && (
                      <span><BedDouble size={14} />{property.beds}</span>
                    )}
                    {property.baths && property.baths !== "N/A" && (
                      <span><Bath size={14} />{property.baths}</span>
                    )}
                    {property.sqft && property.sqft !== "N/A" && (
                      <span><Maximize2 size={13} />{property.sqft}</span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── TOP LOCATIONS ── */}
      <section className="locations-section">
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-kicker">Top locations</p>
          <h2>Sri Lanka's most sought-after property destinations.</h2>
          <p>Explore listings in the cities and towns people love most.</p>
        </div>
        <div className="locations-grid">
          {topLocations.map((loc) => (
            <button
              key={loc.city}
              className="location-card float-card"
              onClick={() => navigate(`/sales?search=${encodeURIComponent(loc.city)}`)}
            >
              <img src={loc.image} alt={loc.city} className="location-img" />
              <div className="location-overlay">
                <h3 className="location-city">{loc.city}</h3>
                <span className="location-count">{loc.count}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="section-header">
          <div className="section-divider" />
          <p className="section-kicker">What our users say</p>
          <h2>Real stories from real people.</h2>
          <p>Thousands of buyers, sellers, and agents trust LankaPropertyWeb every day.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card float-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div>
                  <strong className="testimonial-name">{t.name}</strong>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
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

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-slate-950/55 p-3 md:p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-t-3xl md:rounded-[1.75rem] bg-white p-4 md:p-6 shadow-2xl ring-1 ring-[#d9e8f6] max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
            <button
              className="absolute right-4 md:right-5 top-4 md:top-5 text-2xl font-bold text-slate-400 transition hover:text-slate-700"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="mb-4 h-48 md:h-56 w-full rounded-2xl object-cover"
            />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">{selectedProperty.area}</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">{selectedProperty.title}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">{selectedProperty.tag}</span>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">{selectedProperty.price}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{selectedProperty.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 text-center text-xs md:text-sm">
              {selectedProperty.beds && <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedProperty.beds}</div>}
              {selectedProperty.baths && <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedProperty.baths}</div>}
              {selectedProperty.sqft && <div className="rounded-xl md:rounded-2xl bg-slate-50 px-2 md:px-3 py-2 md:py-3 font-semibold text-slate-600 ring-1 ring-slate-200">{selectedProperty.sqft}</div>}
            </div>

            {selectedProperty.features && selectedProperty.features.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2171B5]">Key Features</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProperty.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-[#eff6fd] px-3 py-1.5 text-xs font-semibold text-[#08306B] ring-1 ring-[#d9e8f6]">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedProperty.contact && (
              <div className="mt-5 rounded-2xl bg-[#f8fbff] p-4 ring-1 ring-[#d9e8f6]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2171B5]">Seller Contact</p>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <p><span className="font-bold text-slate-800">Agent:</span> {selectedProperty.contact.name}</p>
                  <p><span className="font-bold text-slate-800">Phone:</span> {selectedProperty.contact.phone}</p>
                  <p><span className="font-bold text-slate-800">Posted:</span> {selectedProperty.contact.posted}</p>
                </div>
              </div>
            )}

            <button
              className="mt-6 w-full rounded-lg md:rounded-2xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 md:py-3.5 font-bold text-sm md:text-base text-white transition hover:shadow-lg hover:shadow-[#08306B]/20"
              onClick={() => {
                // Implement actual contact logic here, e.g., navigate to a contact form or open dialer
                if (selectedProperty.contact?.phone) {
                  window.location.href = `tel:${selectedProperty.contact.phone.replace(/[^\d+]/g, '')}`;
                } else {
                  alert('Contact number not available.');
                }
              }}
            >
              Call Now
            </button>
            <button
              className="mt-3 w-full rounded-lg md:rounded-2xl bg-slate-900 px-4 py-3 md:py-3.5 font-bold text-sm md:text-base text-white transition hover:bg-slate-800"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Homepage;
