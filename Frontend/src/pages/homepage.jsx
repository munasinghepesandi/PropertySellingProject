import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Search, Home, Building2, KeyRound, ArrowRight, Phone, Mail, MapPin, ShieldCheck, Users } from "lucide-react";
import "../styles/homepage.css";

const homepage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleHeroSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    navigate(query ? `/sales?search=${encodeURIComponent(query)}` : '/sales');
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim() || 'Lanka Property visitor';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || 'I need help with a property search.';
    const subject = encodeURIComponent('Home page contact request');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email || 'Not provided'}\n\n${message}`);
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="home-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-floating-icon">
          <Home size={22} />
        </div>
        <div className="hero-overlay hero-motion">
          <h1>Find Your Dream Property in Sri Lanka</h1>
          <p>
            Buy, rent, or sell houses, lands, and apartments with ease on
            LankaPropertyWeb.
          </p>

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

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/post-ad')}
              className="rounded-lg border border-white/30 bg-white/10 px-5 py-2 font-semibold text-white transition hover:bg-white/20"
            >
              Post Your Ad
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href="#about-us" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-semibold text-[#08306B] transition hover:bg-slate-100">
              About Us
              <ArrowRight size={16} />
            </a>
            <a href="#contact-us" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2 font-semibold text-white transition hover:bg-white/20">
              Contact Us
            </a>
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
          <div className="section-divider" />
          <h2>Browse by Property Type</h2>
          <p>Explore properties that match your lifestyle</p>
        </div>

        <div className="category-grid">
          <div className="category-card float-card">
            <Home size={40} />
            <h3>Houses</h3>
            <p>Family homes, villas & bungalows</p>
          </div>

          <div className="category-card float-card">
            <Building2 size={40} />
            <h3>Apartments</h3>
            <p>Modern city living spaces</p>
          </div>

          <div className="category-card float-card">
            <KeyRound size={40} />
            <h3>Rentals</h3>
            <p>Short & long term rental properties</p>
          </div>

          <div className="category-card float-card">
            <Home size={40} />
            <h3>Lands</h3>
            <p>Residential & commercial plots</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="featured">
        <div className="section-header">
          <div className="section-divider" />
          <h2>Featured Properties</h2>
          <p>Hand-picked properties just for you</p>
        </div>

        <div className="property-grid">
          <div className="property-card float-card">
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

          <div className="property-card float-card">
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

          <div className="property-card float-card">
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

      {/* ABOUT US */}
      <section id="about-us" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="section-divider mx-auto" />
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">About Us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Trusted property guidance for buyers, sellers, and investors across Sri Lanka
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            We help people find, market, and compare properties with clear listings,
            practical support, and market insight designed for Sri Lankan buyers and sellers.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d9e8f6] bg-white p-7 text-left shadow-[0_16px_40px_rgba(8,48,107,0.06)] float-card">
              <div className="inline-flex rounded-2xl bg-[#eff6fd] p-3 text-[#2171B5]">
                <ShieldCheck size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">Why LankaPropertyWeb?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Our platform focuses on verified listings, practical support, and fast access to the right property
                information so you can move with confidence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#eff6fd] px-4 py-2 text-sm font-semibold text-[#08306B] ring-1 ring-[#d9e8f6]">
                  <ShieldCheck size={16} /> Verified listings
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#eff6fd] px-4 py-2 text-sm font-semibold text-[#08306B] ring-1 ring-[#d9e8f6]">
                  <Users size={16} /> Buyer & seller support
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d9e8f6] bg-gradient-to-br from-[#f8fbff] to-white p-7 text-left shadow-[0_16px_40px_rgba(8,48,107,0.06)] float-card">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">What we offer</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-700 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2171B5]" />
                  Property sales and rental search
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2171B5]" />
                  Home loan guidance and valuation support
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2171B5]" />
                  Foreign buyer and market insight articles
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2171B5]" />
                  Fast contact with property owners and agents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section id="contact-us" className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="section-divider mx-auto" />
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Contact Us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Need help with a property search, valuation, or listing?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Our team can help you shortlist properties, answer pricing questions, and guide your next move.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-3xl bg-[#08306B] p-7 text-left text-white shadow-[0_20px_50px_rgba(8,48,107,0.18)] float-card">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-100">Buyer & Seller Assistance</p>
              <h3 className="mt-4 text-2xl font-bold">Talk to our support team</h3>
              <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                Get fast help with listings, pricing, and next steps for buying or selling.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <MapPin size={18} />
                  <span className="text-sm font-semibold">Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <Phone size={18} />
                  <span className="text-sm font-semibold">+94 77 123 4567</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <Mail size={18} />
                  <span className="text-sm font-semibold">info@lankapropertyweb.com</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d9e8f6] bg-white p-7 text-left shadow-[0_16px_40px_rgba(8,48,107,0.06)] float-card">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">Send a quick message</p>
              <form className="mt-5 grid gap-4" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2171B5] focus:bg-white focus:ring-2 focus:ring-[#d5e9fb]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2171B5] focus:bg-white focus:ring-2 focus:ring-[#d5e9fb]"
                />
                <textarea
                  rows="5"
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-[#2171B5] focus:bg-white focus:ring-2 focus:ring-[#d5e9fb]"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-3.5 font-bold text-white transition hover:translate-y-[-1px] hover:shadow-lg hover:shadow-[#08306B]/15"
                >
                  Send Message
                </button>
              </form>
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
