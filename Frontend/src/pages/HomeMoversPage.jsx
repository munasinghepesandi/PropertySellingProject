import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ArrowRight, CheckCircle, MapPin, Calendar, Truck, Package, Shield, Clock, Phone } from "lucide-react";
import { useState } from "react";

const movingServices = [
  { title: "Residential Moving", icon: "🏠", desc: "Safe relocation of household belongings" },
  { title: "Commercial Moving", icon: "🏢", desc: "Professional office and business relocations" },
  { title: "Long Distance Moving", icon: "🚚", desc: "Interstate and regional moves" },
  { title: "Specialized Moving", icon: "📦", desc: "Fragile items, art, and valuable belongings" },
];

const topCities = [
  "Colombo", "Gampaha", "Dehiwala", "Wattala", "Nugegoda", "Kandy", 
  "Galle", "Jaffna", "Kalutara", "Matara", "Kurunegala", "Mount Lavinia"
];

const movingFaqs = [
  {
    q: "What are the advantages of using Lanka Property Web for movers?",
    a: "Compare verified movers, get free quotes, and choose the best service for your budget and needs. We pre-screen all partners for quality and reliability.",
  },
  {
    q: "Will my belongings be safe during transit?",
    a: "Yes, all our registered movers provide fully insured loading, transit, and unloading. Your items are protected throughout the entire journey.",
  },
  {
    q: "How much does it cost to hire movers and packers?",
    a: "Costs depend on volume, distance, and service type. Our free quote system helps you compare prices from multiple movers.",
  },
  {
    q: "How do I hire packers and movers services?",
    a: "Fill out our quick quote form, share your requirements, and we'll connect you with verified movers who will provide estimates.",
  },
  {
    q: "Is insurance coverage included?",
    a: "Yes, all professional moves include comprehensive insurance coverage for your belongings during packing, transit, and unloading.",
  },
  {
    q: "Can I reschedule my moving date?",
    a: "Yes, you can reschedule your booking. Contact the moving company directly with your confirmation details to adjust dates.",
  },
];

const movingTips = [
  { title: "How to Choose the Right Movers and Packers", desc: "Essential tips for selecting professional moving services" },
  { title: "What to Pack and What to Leave Behind", desc: "Smart packing guide for your relocation" },
  { title: "How to Save Money on Moving", desc: "Cost-effective strategies and money-saving tips" },
  { title: "How to Label and Organize Your Boxes", desc: "Inventory system to track all your belongings" },
  { title: "Protect Valuables and Fragile Items", desc: "Best practices for securing delicate items" },
  { title: "How to Pack by Room: Complete Checklist", desc: "Room-by-room packing guide and timeline" },
  { title: "Avoid Common Moving Mistakes", desc: "Learn from others' moving mishaps" },
  { title: "Unpack and Settle into Your New Home", desc: "Smooth transition guide for your new space" },
];

const movingStats = [
  { label: "Verified Movers", value: "200+", note: "Professional moving companies across Sri Lanka" },
  { label: "Moves Completed", value: "15K+", note: "Safe relocations with zero damage claims" },
  { label: "Customer Satisfaction", value: "98%+", note: "Industry-leading quality and service" },
];

const vehicleOptions = [
  { name: "Cargo Van", capacity: "Small jobs", image: "🚐" },
  { name: "10' Truck", capacity: "Studio/Apartment", image: "🚚" },
  { name: "15' Truck", capacity: "1-2 Bedroom", image: "🚛" },
  { name: "20' Truck", capacity: "3-4 Bedroom", image: "🚛" },
];

export default function HomeMoversPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    movingFrom: "",
    relocateTo: "",
    movingDate: "",
    vehicleSize: "",
    serviceType: "",
    name: "",
    email: "",
    phone: "",
  });

  const steps = [
    {
      title: "Where are you moving from?",
      field: "movingFrom",
      type: "text",
      placeholder: "Current location or city",
    },
    {
      title: "Where are you relocating to?",
      field: "relocateTo",
      type: "text",
      placeholder: "New location or city",
    },
    {
      title: "When do you want to move?",
      field: "movingDate",
      type: "date",
    },
    {
      title: "Size of vehicle needed?",
      options: vehicleOptions.map(v => v.name),
      field: "vehicleSize",
    },
    {
      title: "What kind of service?",
      options: ["Transport Only", "Packing and Transport", "Full Service (Packing, Transport, Unpacking)"],
      field: "serviceType",
    },
    {
      title: "Your details",
      fields: ["name", "email", "phone"],
      type: "details",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27c62d?w=1600&q=80&auto=format&fit=crop"
          alt="Moving services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">Relocation Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Want help with the heavy lifting?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Find trusted moving professionals near you. Professional packing, safe transport, and hassle-free relocation services across Sri Lanka.
          </p>

          <button 
            onClick={() => setShowForm(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2171B5] px-6 py-3 font-black text-white transition hover:shadow-lg hover:shadow-[#2171B5]/20"
          >
            Request a Quote
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <Shield size={28} className="text-[#2171B5]" />
            <h3 className="mt-4 text-lg font-black text-slate-900">Ensure Safety</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Get your belongings inspected and properly insured for complete protection.</p>
          </article>
          <article className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <CheckCircle size={28} className="text-[#2171B5]" />
            <h3 className="mt-4 text-lg font-black text-slate-900">Avoid Expensive Repairs</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Professional handling prevents damage and costly repairs to your items.</p>
          </article>
          <article className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <Clock size={28} className="text-[#2171B5]" />
            <h3 className="mt-4 text-lg font-black text-slate-900">Save Money & Time</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Compare quotes and get the best value without wasting time or money.</p>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Statistics</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Why choose our movers?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {movingStats.map((stat) => (
              <article key={stat.label} className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <p className="text-4xl font-black text-[#2171B5]">{stat.value}</p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.24em] text-slate-600">{stat.label}</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">{stat.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Services</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Moving solutions we offer</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {movingServices.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-lg font-black text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">How it works</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Simple 5-step moving process</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              { num: 1, title: "Share your requirements" },
              { num: 2, title: "Details shared with movers" },
              { num: 3, title: "Receive free quotes" },
              { num: 4, title: "Book your move" },
              { num: 5, title: "Fully insured relocation" },
            ].map((step) => (
              <article key={step.num} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2171B5] font-black text-2xl text-white">
                  {step.num}
                </div>
                <p className="mt-4 font-black text-slate-900 text-sm">{step.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Vehicle Fleet</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Choose the right vehicle size</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {vehicleOptions.map((vehicle) => (
            <article key={vehicle.name} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
              <div className="text-5xl">{vehicle.image}</div>
              <h3 className="mt-4 text-lg font-black text-slate-900">{vehicle.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{vehicle.capacity}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Top Cities</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Find movers in your area</h2>
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
          <Package size={30} />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Get your quote</p>
          <h2 className="mt-3 text-3xl font-black">Moving cost estimation in seconds</h2>
          <p className="mt-3 text-sm leading-7 text-blue-100">
            Share your moving details and receive free quotes from verified movers in your area.
          </p>

          <button 
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-[#2171B5] transition hover:shadow-lg"
          >
            Start Moving Quote
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Resources</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Moving guides & tips</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {movingTips.map((tip) => (
              <article key={tip.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <h3 className="font-black text-slate-900 text-sm">{tip.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-600">{tip.desc}</p>
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
          {movingFaqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-[#d9e8f6] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-black text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
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
                    onChange={(e) => handleInputChange(steps[currentStep].field, e.target.value)}
                    className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                  />
                ) : steps[currentStep]?.type === "text" ? (
                  <input
                    type="text"
                    placeholder={steps[currentStep].placeholder}
                    value={formData[steps[currentStep].field]}
                    onChange={(e) => handleInputChange(steps[currentStep].field, e.target.value)}
                    className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                  />
                ) : (
                  steps[currentStep]?.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleInputChange(steps[currentStep].field, option)}
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
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
                <input
                  type="tel"
                  placeholder="Contact number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
                />
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  if (currentStep > 0) {
                    handleBack();
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
                  onClick={handleNext}
                  className="flex-1 rounded-xl bg-[#2171B5] px-4 py-3 font-black text-white transition hover:bg-[#194d7a]"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => {
                    alert("Thank you! We'll send you moving quotes shortly.");
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
