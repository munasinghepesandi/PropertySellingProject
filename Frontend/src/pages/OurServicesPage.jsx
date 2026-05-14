import { Link, useLocation, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import BusinessAdvisoryPage from "./BusinessAdvisoryPage";
import ForeignersGuidePage from "./ForeignersGuidePage";
import SolarPanelsPage from "./SolarPanelsPage";
import MarketInsightsPage from "./MarketInsightsPage";
import {
  
  BadgeDollarSign,
  
  BriefcaseBusiness,
  Calculator,
  
  FileText,
  Handshake,
  
  Landmark,
  
  Phone,
  Scale,
  
  ShieldCheck,
  
} from "lucide-react";

const buyerSellerServices = [
  {
    eyebrow: "Service",
    title: "Property Valuations",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop",
    description:
      "Need to get your property valued? We will find certified valuers in your area who will come and do the valuation for you.",
    heading: "Valuation services that we offer",
    items: [
      "Value your property for sale",
      "Valuation of property for buyers",
      "Obtain valuation reports for Visa or loans",
      "We offer island wide valuations",
      "Valuations carried out by certified valuers",
    ],
  },
  {
    eyebrow: "Legal",
    title: "Legal Assistance",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop",
    description:
      "Our panel of reputable and experienced attorneys will provide legal advice, draft documents and advise on the best ways to keep your documents safe from fraud.",
    heading: "Legal assistance that we offer",
    items: [
      "Checking & preparing of your Deeds",
      "Preparing Tenancy Agreements",
      "Check the validity of the condo or the land that you are buying",
      "Advice on your eligibility and requirements",
      "Advice to foreigners on how to buy property",
      "Advice on CGT and other taxes",
    ],
  },
  {
    eyebrow: "Document",
    title: "Document preparation & submission",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop",
    description:
      "We will get all your documentation related to the property drafted by reputable attorneys and take care of submitting them to the relevant authorities.",
    heading: "Document services that we offer",
    items: [
      "Preparing of your Deeds & Tenancy Agreements",
      "Validating the existing documents at Land Registry",
      "Checking the seller's documents, Deeds, COCs and making sure there are no encumbrances",
      "Submit your documents to the Land Registry",
      "Advice to foreigners on how to buy property",
      "Advice on how to protect your deeds and documents to protect against fraud",
    ],
  },
  {
    eyebrow: "Advice",
    title: "Mortgage Advice",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop",
    description:
      "Looking to get a home loan? We'll help you find the best deals, prepare the documents that the bank will need and submit them to the bank on your behalf.",
    heading: "Mortgage assistance that we offer",
    items: [
      "Check your requirements & advice you on bank's requirements",
      "Do an initial assessment of your eligibility",
      "Advice you on the best rates & offers available from our partner banks",
      "Get the necessary documents prepared",
      "Help you fill in the application forms",
      "Submit your documents to the bank",
      "Follow up with the bank on your application",
    ],
  },
  {
    eyebrow: "Fees",
    title: "Fees & taxes payment",
    icon: BadgeDollarSign,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80&auto=format&fit=crop",
    description:
      "We'll take care of your stamp duty and municipality payments, so you won't need to waste your time going to multiple government institutions.",
    heading: "Fees & Taxes Payment That We Offer",
    items: [
      "Calculate and pay your stamp duty",
      "Calculate and pay your Municipality / Urban Council fees",
      "Calculate and pay your Capital Gains Tax, if any",
    ],
  },
  {
    eyebrow: "Assistance",
    title: "Personal Assistance",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80&auto=format&fit=crop",
    description:
      "You will get a personal assistant to help you through the whole process, while keeping you updated on the status.",
    heading: "Personal services that we offer",
    items: [
      "You will get a dedicated assistant to help you till the end of the process",
      "You will be kept updated on the status at each stage",
      "Personalise the requirements for your needs",
      "Contact through phone, email or chat and ask any questions that you have",
    ],
  },
];

const otherServices = [
  {
    title: "Moving Services",
    image: "https://images.unsplash.com/photo-1600518464441-9306b3b4f3aa?w=1200&q=80&auto=format&fit=crop",
    description:
      "Talk to us to hire professional movers who will package and move your items safely and securely from one location to another.",
    link: "/our-services",
  },
  {
    title: "Solar Panels",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
    description:
      "Go green with solar services - compare solar panel systems, trusted installers, and provider options for your home or business.",
    link: "/our-services/solar-panels",
  },
  {
    title: "Insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
    description:
      "Get the worry off your mind about mortgage repayments and household contents with insurance cover.",
  },
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop",
    description:
      "Get a professional photographer to capture your property and showcase its uniqueness.",
  },
];

const marketServices = [
  "Field based market research",
  "Online based market research",
  "Market analysis reports",
  "Feasibility Study reports",
  "Investment advisory",
  "Demand and pricing analysis",
  "Real Estate demand for a particular area",
  "Reports based on website and market data",
];



 

export default function OurServicesPage() {
  const { serviceSlug } = useParams();
  const { pathname } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    payload.property_id = null;

    try {
      const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiBase}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      window.alert('Thanks — we will contact you shortly');
      form.reset();
    } catch (err) {
      window.alert('Submission failed: ' + (err.message || 'Unknown error'));
    }
  };

  if (
    serviceSlug === "advisory" ||
    serviceSlug === "property-buying-advisory" ||
    serviceSlug === "business-advisory" ||
    serviceSlug === "foreigners-buying-assistance" ||
    pathname.includes("market-insight") ||
    pathname.includes("market-insights")
  ) {
    if (serviceSlug === "business-advisory") {
      return <BusinessAdvisoryPage />;
    }

    if (serviceSlug === "foreigners-buying-assistance") {
      return <ForeignersGuidePage />;
    }

    return <MarketInsightsPage />;
  }

  if (serviceSlug === "solar-panels") {
    return <SolarPanelsPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="Property assistance consultation"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-5 py-16 text-center lg:py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-white/90">Buyer and Seller Assistance</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-5xl lg:text-6xl">
            BUYER AND SELLER ASSISTANCE
          </h1>

          <div className="mt-8 w-full max-w-6xl rounded-none bg-black/25 px-4 py-4 backdrop-blur-[2px] md:px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Need help with your property valuation?",
                "Need to get your deeds done?",
                "Want help with your housing loan application?",
                "Short for time or overwhelmed by the whole process?",
              ].map((item) => (
                <div key={item} className="flex items-start justify-center gap-2 text-left text-sm font-semibold leading-6 text-white">
                  <span className="mt-0.5 text-base text-blue-200">☑</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-5xl text-base leading-8 text-white/95 md:text-lg">
            Fear not. We're here to take the hassle off your entire property buying, selling or renting process, so you
            can look forward to enjoying your new property (or the profits of the sale). So contact us for more
            information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="section-divider mx-auto h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Buyer and seller support made simple
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Find the right assistance for valuations, legal support, documents, mortgage advice, and day-to-day property help.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buyerSellerServices.map((service) => {
            const Icon = service.icon;
            const id = `service-${service.title.replace(/\s+/g, '-').toLowerCase()}`;
            return (
              <article
                key={service.title}
                role="article"
                aria-labelledby={id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(8,48,107,0.10)]"
              >
                <div className="relative h-52">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4 rounded-2xl bg-white/95 p-3 text-[#2171B5] shadow-sm ring-1 ring-[#d9e8f6]">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f47]/30 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">{service.eyebrow}</p>
                  <h2 id={id} className="mt-1 text-xl font-black">{service.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                  <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-800">{service.heading}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <ShieldCheck className="mt-1 h-4 w-4 flex-none text-[#2171B5]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    aria-label={`Learn more about ${service.title}`}
                    className="mt-auto w-full rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20"
                  >
                    Learn More
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="overflow-hidden rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-r from-[#08306B] to-[#2171B5] shadow-[0_16px_40px_rgba(8,48,107,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 text-white md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-100">Solar & Hot Water</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] md:text-4xl">
                Discover Green Energy Solutions for Your Home
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
                Find solar panel providers, compare system types, explore net metering options, and request quotes from trusted solar partners.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/our-services/solar-panels"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-black text-[#08306B] transition hover:bg-blue-50"
                >
                  Open Solar Panels Page
                </Link>
                <Link
                  to="/our-services/solar-panels#faq"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  View FAQs
                </Link>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80&auto=format&fit=crop"
              alt="Solar rooftop panels"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="section-divider mx-auto h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Other</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Other services that help you move forward
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Whether you are moving house, protecting your contents, or preparing a listing, we can help with the extras too.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <div key={service.title} className="overflow-hidden rounded-2xl border border-[#d9e8f6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={service.image} alt={service.title} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-black uppercase tracking-wide text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  {service.link && (
                    <Link to={service.link} className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-2.5 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button type="button" className="rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-divider mb-4 h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Market Research and Advisory
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Using our expertise and access to years of data, we can conduct market research, feasibility analysis, and
              advisory to help you identify market demand for your new project or get useful investment information.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sri Lanka's largest real estate project and China's largest developer are among the companies we've done research for.
            </p>

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80&auto=format&fit=crop"
              alt="Market research and advisory"
              className="mt-6 h-72 w-full rounded-3xl object-cover shadow-[0_16px_40px_rgba(8,48,107,0.08)]"
            />
          </div>
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Our services</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">Research support designed for smart decisions</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {marketServices.map((item) => (
                <div key={item} className="rounded-2xl border border-[#d9e8f6] bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <button type="button" className="mt-6 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-8 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)]">
          <Phone size={30} />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Need help?</p>
          <h2 className="mt-3 text-3xl font-black">+94 (0) 117 167 167</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Contact us and our team will guide you to the right property service.
          </p>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <div className="flex items-center gap-3 border-b border-[#eef4fb] px-6 py-4">
              <BriefcaseBusiness className="text-[#2171B5]" size={24} />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">Location</p>
                <h2 className="text-2xl font-black">Find Us on the Map</h2>
              </div>
            </div>
            <iframe
              title="Our Services location map"
              src="https://www.google.com/maps?q=Colombo%2C%20Sri%20Lanka&z=11&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]" aria-label="Contact form">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="text-[#2171B5]" size={24} />
              <h2 className="text-2xl font-black">Contact Us</h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name *</span>
                <input name="name" required className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email *</span>
                <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone *</span>
                <input name="phone" required className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Select your services</span>
                <select name="service" className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]">
                  <option>Property Valuations</option>
                  <option>Legal Assistance</option>
                  <option>Document preparation & submission</option>
                  <option>Mortgage Advice</option>
                  <option>Fees & taxes payment</option>
                  <option>Personal Assistance</option>
                  <option>Market Research and Advisory</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea name="message" rows={5} className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
            </label>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <button type="submit" className="mt-5 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
