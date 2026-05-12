import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ArrowRight, CheckCircle, MapPin, Calendar, Briefcase, Users, BarChart3, Shield, Lightbulb, Phone } from "lucide-react";
import { useState } from "react";

const constructionServices = [
  { title: "New House Construction", icon: "🏗️", desc: "Build your dream home from scratch with expert guidance" },
  { title: "Home Renovation & Remodeling", icon: "🔨", desc: "Transform your existing space with modern updates" },
  { title: "Home Demolition", icon: "💥", desc: "Safe and professional demolition services" },
  { title: "Home Extensions", icon: "📐", desc: "Expand your living space efficiently" },
];

const topCities = [
  "Colombo", "Gampaha", "Dehiwala", "Wattala", "Nugegoda", "Kandy", 
  "Galle", "Jaffna", "Kalutara", "Matara", "Kurunegala", "Mount Lavinia"
];

const constructionFaqs = [
  {
    q: "What are the advantages of using Lanka Property Web to find construction service providers?",
    a: "We connect you with trusted builders across Sri Lanka. Compare services, prices, and reviews to choose the best fit for your budget and needs.",
  },
  {
    q: "How does Lanka Property Web ensure a hassle-free experience?",
    a: "We pre-screen all contractors and builders, provide transparent pricing, and facilitate direct communication between you and service providers.",
  },
  {
    q: "What is the cost of hiring a construction service provider?",
    a: "Costs vary based on project scope, location, and materials. Our free estimate form helps you get quotes from multiple builders.",
  },
  {
    q: "How can I hire a construction service provider through Lanka Property Web?",
    a: "Fill out our quick form, share your requirements, and we'll connect you with vetted professionals in your area.",
  },
  {
    q: "How much does it cost to build a house in Sri Lanka?",
    a: "Basic construction costs from Rs. 15,000/sqft, mid-range Rs. 18,000/sqft, and luxury from Rs. 22,000/sqft as of 2025.",
  },
  {
    q: "What is the average construction cost per square foot?",
    a: "Basic: Rs. 15,000/sqft | Mid-range: Rs. 18,000/sqft | Luxury: Rs. 22,000/sqft",
  },
];

const constructionTips = [
  { title: "Best 9 House Construction Tips", desc: "Essential guidelines for starting your construction journey" },
  { title: "35 Tips for Renovating Old Houses", desc: "Transform vintage properties with modern techniques" },
  { title: "Steps to Building a House", desc: "Complete step-by-step guide from planning to completion" },
  { title: "22 Stunning House Extension Ideas", desc: "Creative ways to add valuable space to your home" },
];

const constructionStats = [
  { label: "Verified Builders", value: "500+", note: "Professional contractors across Sri Lanka" },
  { label: "Projects Completed", value: "10K+", note: "Quality constructions and renovations" },
  { label: "Happy Clients", value: "95%+", note: "Customer satisfaction rate" },
];

export default function HouseConstructionPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    ownership: "",
    startDate: "",
    services: [],
    location: "",
    stage: "",
    name: "",
    email: "",
    phone: "",
  });

  const steps = [
    {
      title: "What's your project?",
      options: ["Construction of a new house", "Home renovation & remodeling", "Home Demolition", "Home Extensions"],
      field: "projectType",
    },
    {
      title: "Current situation?",
      options: ["I own the land", "I am in the process of purchasing land", "I am currently looking for land"],
      field: "ownership",
    },
    {
      title: "When to start?",
      field: "startDate",
      type: "date",
    },
    {
      title: "Project stage?",
      options: ["Planning stage", "Design completed", "Ready to build", "Under construction"],
      field: "stage",
    },
    {
      title: "Other services needed?",
      options: ["Architects", "QS", "Interior Designs", "Surveyors", "None"],
      field: "services",
      multiple: true,
    },
    {
      title: "Your details",
      fields: ["name", "email", "phone"],
      type: "details",
    },
  ];

  const handleStepChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1450366154e5-a97c71e0fb97?w=1600&q=80&auto=format&fit=crop"
          alt="House construction"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">Professional Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Build your future with us
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Find trusted constructors, architects, and professionals near you. Get free estimates and expert guidance for your construction project.
          </p>

          <button 
            onClick={() => setShowForm(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2171B5] px-6 py-3 font-black text-white transition hover:shadow-lg hover:shadow-[#2171B5]/20"
          >
            Get a Free Estimate
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {constructionStats.map((stat) => (
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
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Services</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Construction solutions we offer</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {constructionServices.map((service) => (
              <article key={service.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-lg font-black text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">How it works</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Simple 5-step process</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {[
            { num: 1, title: "Share your requirement" },
            { num: 2, title: "Details provided to builders" },
            { num: 3, title: "Receive proposals" },
            { num: 4, title: "Compare & select" },
            { num: 5, title: "Monitor progress" },
          ].map((step) => (
            <article key={step.num} className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2171B5] font-black text-2xl text-white">
                {step.num}
              </div>
              <p className="mt-4 font-black text-slate-900">{step.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Top Cities</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Find professionals in your area</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-6">
            {topCities.map((city) => (
              <button
                key={city}
                className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 text-sm font-black text-[#2171B5] transition hover:bg-[#2171B5] hover:text-white"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-6 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)] md:p-8">
          <Phone size={30} />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Get free estimate</p>
          <h2 className="mt-3 text-3xl font-black">Construction cost estimation in seconds</h2>
          <p className="mt-3 text-sm leading-7 text-blue-100">
            Share your project details and receive free quotes from verified contractors in your area.
          </p>

          <button 
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-[#2171B5] transition hover:shadow-lg"
          >
            Start Estimation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Resources</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Construction guides & tips</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {constructionTips.map((tip) => (
              <article key={tip.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <h3 className="font-black text-slate-900">{tip.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tip.desc}</p>
                <button className="mt-4 text-sm font-black text-[#2171B5]">Read More →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">FAQ</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Frequently asked questions</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {constructionFaqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-[#d9e8f6] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-black text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Cost Guide</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">House construction costs in Sri Lanka (2025)</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#d9e8f6] shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#d9e8f6] bg-[#f8fbff]">
                  <th className="px-6 py-4 font-black text-slate-900">House Type</th>
                  <th className="px-6 py-4 font-black text-slate-900">Cost Per Sq.Ft</th>
                  <th className="px-6 py-4 font-black text-slate-900">General Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#d9e8f6]">
                  <td className="px-6 py-4 font-black text-slate-900">Basic</td>
                  <td className="px-6 py-4 text-[#2171B5]">Rs. 15,000/sqft</td>
                  <td className="px-6 py-4 text-slate-600">Cement flooring, local fittings, plastered blocks</td>
                </tr>
                <tr className="border-b border-[#d9e8f6]">
                  <td className="px-6 py-4 font-black text-slate-900">Mid-Range</td>
                  <td className="px-6 py-4 text-[#2171B5]">Rs. 18,000/sqft</td>
                  <td className="px-6 py-4 text-slate-600">Tiled flooring, branded fittings, brick walls</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-black text-slate-900">Luxury</td>
                  <td className="px-6 py-4 text-[#2171B5]">Rs. 22,000+/sqft</td>
                  <td className="px-6 py-4 text-slate-600">Marble/granite, premium fittings, quality finishes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            These are approximate costs based on April 2025 market rates. Actual costs may vary based on location, materials, labor availability, and specific project requirements. Contact our verified builders for accurate quotes.
          </p>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-6">
              <div className="mb-4 flex gap-1">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition ${
                      i <= currentStep ? "bg-[#2171B5]" : "bg-[#d9e8f6]"
                    }`}
                  />
                ))}
              </div>
              <h2 className="text-2xl font-black text-slate-900">{steps[currentStep]?.title}</h2>
            </div>

            {currentStep < steps.length - 1 ? (
              <div className="space-y-3">
                {steps[currentStep]?.type === "date" ? (
                  <input
                    type="date"
                    value={formData[steps[currentStep].field]}
                    onChange={(e) => handleStepChange(steps[currentStep].field, e.target.value)}
                    className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                  />
                ) : steps[currentStep]?.multiple ? (
                  steps[currentStep]?.options?.map((option) => (
                    <label key={option} className="flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData[steps[currentStep].field]?.includes(option)}
                        onChange={(e) => {
                          const updated = e.target.checked
                            ? [...formData[steps[currentStep].field], option]
                            : formData[steps[currentStep].field].filter((s) => s !== option);
                          setFormData({ ...formData, [steps[currentStep].field]: updated });
                        }}
                        className="accent-[#2171B5]"
                      />
                      <span className="font-bold text-slate-900">{option}</span>
                    </label>
                  ))
                ) : (
                  steps[currentStep]?.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleStepChange(steps[currentStep].field, option)}
                      className="w-full rounded-xl border-2 border-[#d9e8f6] bg-white px-4 py-3 text-left font-black text-slate-900 transition hover:border-[#2171B5] hover:bg-[#f8fbff]"
                    >
                      {option}
                    </button>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
                <input
                  type="tel"
                  placeholder="Contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  if (currentStep > 0) {
                    setCurrentStep(currentStep - 1);
                  } else {
                    setShowForm(false);
                  }
                }}
                className="flex-1 rounded-xl border border-[#d9e8f6] px-4 py-3 font-black text-slate-900 transition hover:bg-[#f8fbff]"
              >
                {currentStep > 0 ? "Back" : "Close"}
              </button>
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex-1 rounded-xl bg-[#2171B5] px-4 py-3 font-black text-white transition hover:bg-[#194d7a]"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => {
                    alert("Thank you! We'll connect you with builders soon.");
                    setShowForm(false);
                  }}
                  className="flex-1 rounded-xl bg-[#2171B5] px-4 py-3 font-black text-white transition hover:bg-[#194d7a]"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
