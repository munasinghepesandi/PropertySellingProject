import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Search, MapPin, BadgePlus, House, PiggyBank, Building } from "lucide-react";
import "../styles/homepage.css";

const Homepage = () => {

  return (
    <div>
      <Navbar />

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

        <div className="property-grid">
          <div className="property-card">
            <div className="property-media">
              <img
                src="https://cdn.mistert.lk/property/sales/5883_1_1774420187.jpeg"
                alt="house"
              />
              <span className="property-chip">For Sale</span>
            </div>
            <div className="property-info">
              <p className="property-location">Colombo 05</p>
              <h3>Modern Family House</h3>
              <div className="property-meta">
                <span>4 Beds</span>
                <span>3 Baths</span>
                <span>2,800 sqft</span>
              </div>
              <div className="property-price-row">
                <span className="property-price">Rs. 45,000,000</span>
                <button className="property-link" type="button">View Details</button>
              </div>
            </div>
          </div>

          <div className="property-card">
            <div className="property-media">
              <img
                src="https://www.lankaislandproperties.com/wp-content/uploads/2025/08/1-400x263.jpg"
                alt="villa"
              />
              <span className="property-chip">Premium</span>
            </div>
            <div className="property-info">
              <p className="property-location">Galle</p>
              <h3>Luxury Villa</h3>
              <div className="property-meta">
                <span>5 Beds</span>
                <span>4 Baths</span>
                <span>4,100 sqft</span>
              </div>
              <div className="property-price-row">
                <span className="property-price">Rs. 85,000,000</span>
                <button className="property-link" type="button">View Details</button>
              </div>
            </div>
          </div>

          <div className="property-card">
            <div className="property-media">
              <img
                src="https://apartments.lk/wp-content/uploads/2023/05/IMG-20230405-WA0015-1600x790.jpg"
                alt="apartment"
              />
              <span className="property-chip">New Listing</span>
            </div>
            <div className="property-info">
              <p className="property-location">Mount Lavinia</p>
              <h3>Beachfront Apartment</h3>
              <div className="property-meta">
                <span>3 Beds</span>
                <span>2 Baths</span>
                <span>1,950 sqft</span>
              </div>
              <div className="property-price-row">
                <span className="property-price">Rs. 25,000,000</span>
                <button className="property-link" type="button">View Details</button>
              </div>
            </div>
          </div>

          <div className="property-card">
            <div className="property-media">
              <img
                src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
                alt="townhouse"
              />
              <span className="property-chip">Hot Deal</span>
            </div>
            <div className="property-info">
              <p className="property-location">Nugegoda</p>
              <h3>Contemporary Townhouse</h3>
              <div className="property-meta">
                <span>4 Beds</span>
                <span>3 Baths</span>
                <span>2,350 sqft</span>
              </div>
              <div className="property-price-row">
                <span className="property-price">Rs. 39,500,000</span>
                <button className="property-link" type="button">View Details</button>
              </div>
            </div>
          </div>

          <div className="property-card">
            <div className="property-media">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt="bungalow"
              />
              <span className="property-chip">Exclusive</span>
            </div>
            <div className="property-info">
              <p className="property-location">Kandy</p>
              <h3>Hillside Bungalow</h3>
              <div className="property-meta">
                <span>3 Beds</span>
                <span>3 Baths</span>
                <span>2,100 sqft</span>
              </div>
              <div className="property-price-row">
                <span className="property-price">Rs. 31,000,000</span>
                <button className="property-link" type="button">View Details</button>
              </div>
            </div>
          </div>

          <div className="property-card">
            <div className="property-media">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                alt="penthouse"
              />
              <span className="property-chip">For Sale</span>
            </div>
            <div className="property-info">
              <p className="property-location">Colombo 02</p>
              <h3>City View Penthouse</h3>
              <div className="property-meta">
                <span>4 Beds</span>
                <span>4 Baths</span>
                <span>3,200 sqft</span>
              </div>
              <div className="property-price-row">
                <span className="property-price">Rs. 92,000,000</span>
                <button className="property-link" type="button">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Homepage;
