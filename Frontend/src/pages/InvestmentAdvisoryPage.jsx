import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BarChart3, Lightbulb, MapPin, TrendingUp, Calculator, Phone, Shield, Users } from "lucide-react";
import { API_BASE_URL } from "../utils/auth";

const topInvestmentProperties = [
  {
    location: "Kelaniya",
    rating: 5,
    type: "Bare Land",
    size: "1.25 acres",
    price: "Rs. 3.5M",
    desc: "1.25 acres bare land for sale in Kelaniya",
  },
  {
    location: "Dehiwala",
    rating: 8,
    type: "House",
    size: "2800 sqft",
    price: "Rs. 89M",
    desc: "6 Bedroom 4 Bathroom Newly Built House",
  },
  {
    location: "Negombo",
    rating: 10,
    type: "Villa",
    size: "3150 sqft",
    price: "Rs. 35M",
    desc: "Beach Front 4 Bedroom Villa",
  },
  {
    location: "Digana",
    rating: 10,
    type: "Villa",
    size: "4000 sqft",
    price: "Rs. 275M",
    desc: "Luxury 3 Bed 3 Bath Villa on Victorian Land",
  },
];

const investmentReasons = [
  {
    icon: TrendingUp,
    title: "Rapid Growth Traction",
    desc: "Sri Lanka's infrastructure, tourism and real estate industry are constantly advancing to keep up with new trends.",
  },
  {
    icon: MapPin,
    title: "Large Room for Growth",
    desc: "Condominiums make only 1-2% of Colombo's housing stock, leaving massive room for appreciation.",
  },
  {
    icon: Shield,
    title: "Safe & High Return",
    desc: "Property is one of the safest investments, with value increasing over time and limited supply.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Development",
    desc: "New $1.4Bn land reclaimed project could become the new hub like Hong Kong or Dubai.",
  },
];

const investmentTools = [
  {
    icon: Calculator,
    title: "Home Loan Calculator",
    desc: "Calculate your estimated monthly home loan payment and affordability.",
  },
  {
    icon: BarChart3,
    title: "ROI Calculator",
    desc: "Calculate your ROI and invest in the most profitable developments.",
  },
  {
    icon: Users,
    title: "Property Buying Guide",
    desc: "Learn the A-Z process of buying property and investing in Sri Lanka.",
  },
  {
    icon: TrendingUp,
    title: "House Price Index",
    desc: "Find national property trends and price movements in real time.",
  },
];

const investmentFaqs = [
  "What are the best areas to invest in Sri Lanka?",
  "How do I calculate ROI on a property investment?",
  "Can foreigners invest in Sri Lankan real estate?",
  "What are the tax implications for real estate investments?",
  "How do I finance a real estate investment?",
  "What's the expected annual return on property investments?",
];

const investmentStats = [
  { label: "Years of Market Data", value: "15+", note: "Gathering insights to help investors" },
  { label: "Page Views Monthly", value: "3M+", note: "Largest property portals in the country" },
  { label: "Properties Listed", value: "50K+", note: "Wide range of investment opportunities" },
];

export default function InvestmentAdvisoryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '', // This will be the user's additional message
    investmentAmount: '',
    currency: 'LKR', // Default currency
  });
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePurposeChange = (purpose) => {
    setSelectedPurpose(purpose);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!formData.name || !formData.email || !selectedPurpose || !agreedToPolicy) {
      setErrorMessage('Please fill in all required fields and agree to the Privacy Policy.');
      setLoading(false);
      return;
    }

    let fullMessage = `Investment Inquiry:\n`;
    fullMessage += `Purpose: ${selectedPurpose}\n`;
    if (formData.investmentAmount) {
      fullMessage += `Amount: ${formData.currency} ${formData.investmentAmount}\n`;
    }
    if (formData.message) {
      fullMessage += `User Message: ${formData.message}\n`;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ property_id: null, name: formData.name, email: formData.email, phone: formData.phone || null, message: fullMessage }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to submit inquiry.');
      setSuccessMessage('Your investment inquiry has been submitted successfully! Our team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '', investmentAmount: '', currency: 'LKR' });
      setSelectedPurpose('');
      setAgreedToPolicy(false);
    } catch (err) {
      console.error('Investment Inquiry Error:', err);
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop"
          alt="Investment opportunities"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">Real Estate Investment</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Invest in Sri Lanka's growing real estate market.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Access 15+ years of market data, ROI tools, and expert advisory to find the best investment properties in Sri Lanka. From prime Colombo locations to emerging regional opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#2171B5] px-5 py-3 font-black text-white transition hover:shadow-lg hover:shadow-[#2171B5]/20">
              Browse Properties
              <MapPin size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20">
              Get Adviser
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {investmentStats.map((stat) => (
            <article key={stat.label} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
              <p className="text-4xl font-black text-[#2171B5]">{stat.value}</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.24em] text-slate-600">{stat.label}</p>
              <p className="mt-2 text-xs leading-6 text-slate-500">{stat.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Top Opportunities</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Hand-picked investment properties</h2>
            <p className="mt-2 text-sm text-slate-600">Selected based on our proprietary algorithm and market analysis</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {topInvestmentProperties.map((prop) => (
              <article key={prop.location} className="overflow-hidden rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <div className="relative h-48 bg-linear-to-br from-[#2171B5] to-[#08306B]" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">{prop.type}</p>
                      <h3 className="mt-2 text-lg font-black text-slate-900">{prop.location}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#2171B5] px-2.5 py-1 text-xs font-black text-white">
                      ⭐ {prop.rating}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600">{prop.size}</p>
                  <p className="mt-1 text-xl font-black text-[#08306B]">{prop.price}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{prop.desc}</p>
                  <button className="mt-4 text-sm font-black text-[#2171B5]">View Details</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Why Invest</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">In Sri Lanka's real estate market?</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {investmentReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <div className="inline-flex rounded-2xl bg-[#eff6fd] p-3 text-[#2171B5]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-black text-slate-900">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{reason.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Exclusive Tools</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Make your property decisions smart and informed</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {investmentTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <article key={tool.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                  <div className="inline-flex rounded-2xl bg-[#eff6fd] p-3 text-[#2171B5]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-slate-900">{tool.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{tool.desc}</p>
                  <button className="mt-4 text-sm font-black text-[#2171B5]">Try Now →</button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-6 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)] md:p-8">
            <Phone size={30} />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Investment Advisory</p>
            <h2 className="mt-3 text-3xl font-black">Connect with your investment adviser</h2>
            <p className="mt-3 text-sm leading-7 text-blue-100">
              Share your investment preferences and let our expert team help you find the best opportunities that match your budget and goals.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-lg">
              <h3 className="text-xl font-black">Investment Preference</h3>
              
              {successMessage && (
                <div className="rounded-lg bg-green-50 p-3 text-sm font-bold text-green-700 ring-1 ring-green-200">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="rounded-lg bg-red-50 p-3 text-sm font-bold text-red-700 ring-1 ring-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-2">
                {[
                  "Property with high ROI",
                  "Commercial opportunity",
                  "Luxury residential",
                  "Land development",
                ].map((pref) => (
                  <label key={pref} className="flex items-center gap-2 rounded-xl bg-[#f8fbff] px-3 py-2">
                    <input 
                      type="radio" 
                      name="preference" 
                      value={pref}
                      checked={selectedPurpose === pref}
                      onChange={() => handlePurposeChange(pref)}
                      className="accent-[#2171B5]" 
                      required
                    />
                    <span className="text-sm font-bold">{pref}</span>
                  </label>
                ))}
              </div>
              <div className="grid gap-4">
                <input name="name" value={formData.name} onChange={handleInputChange} required className="rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Name" />
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Email" />
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Phone" />
              </div>
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" checked={agreedToPolicy} onChange={(e) => setAgreedToPolicy(e.target.checked)} required className="mt-1 accent-[#2171B5]" />
                <span>I agree to LankaPropertyWeb's Privacy Policy</span>
              </label>
              <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#2171B5] px-5 py-3 font-black text-white transition hover:bg-[#194d7a] disabled:opacity-70">
                {loading ? 'Sending...' : 'Connect with Adviser'}
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Our Services</p>
            <h2 className="mt-3 text-2xl font-black text-slate-900">Get correct advice for your next investment</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="font-black text-slate-900">Help with your research</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  With data analysis, tools, guides and search options, we'll provide the assistance you need to research and identify investment potentials.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="font-black text-slate-900">Identify best investment options</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  With access to 15+ years of market data, our experts and machine learning will find the best investment properties for your ROI.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="font-black text-slate-900">Investment advisory</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We guide you through the best investment options using our in-house data analysis and research teams.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="font-black text-slate-900">Implementation support</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We help with legal, documentation, regulatory clearance and even finding premises for your investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Frequently asked questions</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {investmentFaqs.map((faq) => (
              <details key={faq} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-black text-slate-900">{faq}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We can help you analyze market trends, compare properties, calculate ROI, and determine which investments align with your goals and budget.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
          <h2 className="text-2xl font-black text-slate-900">Real Estate Investment in Sri Lanka</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Out of all the things a person could choose to invest in, property is one of the safest and highest return investments in Sri Lanka. When compared to non-real estate investments such as Fixed Deposits, property is the only asset where the value increases with time and is available limitedly. With development taking place and more financial investments being made in a country, the value of its property market also grows in return.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Most properties and their worth aren't the same. The area, infrastructure, amenities, etc. largely affects this. The potential for development in that area also influences the value of its property. That is why when you forecast a favourable return for a property in a particular area, invest in it before the prices rise.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-[#2171B5] px-6 py-3 font-black text-white">Browse Properties</button>
            <button className="rounded-xl border border-[#2171B5] bg-white px-6 py-3 font-black text-[#2171B5]">Calculate ROI</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
