import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TrendingUp, Home, MapPin, Calendar } from "lucide-react";

export default function PriceMeterPage() {
  const [propertyType, setPropertyType] = useState("house");
  const [location, setLocation] = useState("colombo");
  const [size, setSize] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const priceMultipliers = {
    house: { colombo: 850, kandy: 450, galle: 650, jaffna: 350, matara: 550 },
    apartment: { colombo: 950, kandy: 520, galle: 720, jaffna: 420, matara: 620 },
    land: { colombo: 650, kandy: 320, galle: 480, jaffna: 250, matara: 380 },
    commercial: { colombo: 1200, kandy: 700, galle: 900, jaffna: 600, matara: 800 },
  };

  const calculatePrice = () => {
    if (!size) return;
    const perSqft = priceMultipliers[propertyType][location];
    const total = Math.round(perSqft * parseInt(size) * 10.764); // convert to sq meters
    setEstimatedPrice(total);
  };

  const recentSearches = [
    { type: "House", location: "Colombo", size: "2000", price: "Rs. 18.2M" },
    { type: "Apartment", location: "Kandy", size: "1200", price: "Rs. 7.4M" },
    { type: "Land", location: "Galle", size: "5000", price: "Rs. 25.8M" },
    { type: "Commercial", location: "Colombo", size: "3000", price: "Rs. 42.6M" },
  ];

  const faqs = [
    { q: "How is the price estimated?", a: "Our Price Meter uses real-time market data, location-based pricing, property type, and size to generate accurate estimates." },
    { q: "How accurate are these estimates?", a: "Estimates are typically within 5-15% of actual market values. For precise valuations, consult our expert advisors." },
    { q: "Does this include taxes and fees?", a: "Price estimates show the market value. Taxes, transfer costs, and registration fees are additional." },
    { q: "Can I get a professional valuation?", a: "Yes, our expert valuers can provide detailed property assessments. Contact us for consultation." },
    { q: "Which factors affect property prices?", a: "Location, property type, size, age, amenities, market demand, and neighborhood development all impact prices." },
    { q: "How often are prices updated?", a: "Our database updates monthly with latest market trends and comparable sales data." },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#08306B] to-[#1a4d8f] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-white md:text-5xl">Price Meter</h1>
            <p className="mt-4 text-lg text-blue-100">Get instant property valuations based on real market data</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-br from-[#f8fbff] to-white p-8 shadow-lg">
            <h2 className="text-2xl font-black text-slate-900">Estimate property value instantly</h2>
            <p className="mt-2 text-slate-600">Enter your property details to get an instant market valuation</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-black text-slate-700">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="land">Land</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                >
                  <option value="colombo">Colombo</option>
                  <option value="kandy">Kandy</option>
                  <option value="galle">Galle</option>
                  <option value="jaffna">Jaffna</option>
                  <option value="matara">Matara</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700">Size (Sq. Feet)</label>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="e.g., 2000"
                  className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
              </div>

              <button
                onClick={calculatePrice}
                className="mt-6 rounded-xl bg-[#2171B5] px-6 py-3 font-black text-white transition hover:bg-[#194d7a]"
              >
                Calculate Price
              </button>
            </div>

            {estimatedPrice && (
              <div className="mt-8 rounded-xl border-2 border-[#2171B5] bg-[#f8fbff] p-6">
                <p className="text-sm text-slate-600">Estimated Market Value</p>
                <p className="mt-2 text-3xl font-black text-[#2171B5]">Rs. {(estimatedPrice / 100000).toFixed(1)}M</p>
                <p className="mt-2 text-xs text-slate-500">*Estimate based on current market data. Actual value may vary.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">How It Works</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Valuation methodology</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Home, title: "Property Details", desc: "Type, size, and location" },
              { icon: MapPin, title: "Market Data", desc: "Real-time comparable sales" },
              { icon: TrendingUp, title: "Price Analysis", desc: "Market trend adjustment" },
              { icon: Calendar, title: "Final Estimate", desc: "Instant valuation result" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-[#d9e8f6] bg-white p-6 text-center">
                <item.icon size={32} className="mx-auto text-[#2171B5]" />
                <h3 className="mt-4 font-black text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Recent Valuations</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Recent searches</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recentSearches.map((search, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <p className="text-xs font-black text-[#2171B5]">{search.type}</p>
                <p className="mt-2 text-sm font-black text-slate-900">{search.location}</p>
                <p className="text-xs text-slate-600">{search.size} sq. ft.</p>
                <p className="mt-3 text-lg font-black text-[#2171B5]">{search.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Common questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-black text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
