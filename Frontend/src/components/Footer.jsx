import "./Footer.css";

import {
  Home,
  Globe as Facebook,
  Link as Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <Home size={18} />
              </div>
              <span>
                LankaProperty<span className="highlight">Web</span>
              </span>
            </div>

            <p>
              Discover your dream property in Sri Lanka. Buy, sell, or rent
              houses, lands, and apartments بسهولة with trusted listings.
            </p>

            <div className="social-icons">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><MessageCircle size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/sales">Buy Property</a></li>
              <li><a href="/rentals">Rent Property</a></li>
              <li><a href="/land">Land</a></li>
              <li><a href="/apartments">Apartments</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Services</h3>
            <ul>
              <li><a href="/post-ad">Post Your Ad</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact</h3>
            <ul className="contact-info">
              <li><MapPin size={16} /> Colombo, Sri Lanka</li>
              <li><Phone size={16} /> +94 77 123 4567</li>
              <li><Mail size={16} /> info@lankapropertyweb.com</li>
            </ul>

            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 LankaPropertyWeb. All Rights Reserved.</p>

          <div className="footer-bottom-links">
            <a href="/terms">Terms</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/contact">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}