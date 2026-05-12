import { Link, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";

const providerDetails = {
  "green-smart-solutions": {
    name: "GreenSmart Solutions Pvt Ltd",
    subtitle: "Solar energy solutions provider in Gampaha",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80&auto=format&fit=crop",
    description:
      "GreenSmart Solutions (Pvt) Ltd focuses on residential and business solar installations with an emphasis on practical system sizing and long-term reliability.",
    highlights: [
      "Over 10 years of industry experience",
      "Residential and commercial rooftop systems",
      "Provider matching through the solar quote flow",
    ],
  },
  "aurora-energy-systems": {
    name: "Aurora Energy Systems",
    subtitle: "Grid-tied, off-grid, and hybrid solar systems",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop",
    description:
      "Aurora Energy Systems offers flexible solar configurations for homes, businesses, and industrial spaces that need design support and installation advice.",
    highlights: [
      "Grid-tied, off-grid, and hybrid options",
      "System advice based on roof and usage",
      "Internal quote request and contact flow",
    ],
  },
  "jlanka-technologies": {
    name: "JLanka Technologies",
    subtitle: "Design, supply, installation, and maintenance",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
    description:
      "JLanka Technologies is presented here as a provider profile with key solar service information, matching the app's solar discovery flow.",
    highlights: [
      "Solar system design and installation",
      "Maintenance support and guidance",
      "Easy jump back to the solar panel page",
    ],
  },
};

export default function SolarProviderDetailsPage() {
  const { providerSlug } = useParams();
  const provider = providerDetails[providerSlug] ?? providerDetails["green-smart-solutions"];

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <section className="relative overflow-hidden text-white">
        <img src={provider.image} alt={provider.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/70 to-blue-800/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">
          <div className="inline-block rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">Provider Profile</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">{provider.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/95">{provider.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/help" className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-900 transition hover:shadow-lg hover:scale-105">
              Request Quote
            </Link>
            <Link to="/our-services/solar-panels" className="rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Back to Solar Panels
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100 md:p-12">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Provider Overview</span>
            </div>
            <h2 className="mt-4 text-4xl font-black text-slate-900">{provider.name}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{provider.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {provider.highlights.map((item) => (
                <div key={item} className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-5 text-sm font-semibold leading-7 text-slate-800 border border-blue-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Next Steps</p>
            <div className="mt-5 space-y-3">
              <Link to="/help" className="block rounded-lg border-2 border-blue-600 bg-white px-5 py-4 text-sm font-bold text-blue-600 transition hover:bg-blue-50">
                Talk to support
              </Link>
              <Link to="/our-services/solar-panels#faq" className="block rounded-lg border-2 border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                Read FAQs
              </Link>
              <Link to="/our-services/solar-panels#provider-details" className="block rounded-lg border-2 border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                Compare providers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}