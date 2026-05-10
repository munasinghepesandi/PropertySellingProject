import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Home,
  MapPin,
  PenTool,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const projectTypes = [
  "Construction of a new house",
  "Home renovation & remodeling",
  "Home Demolition",
  "Home Extensions",
];

const projectSituations = [
  "I own the land",
  "I am in the process of purchasing land",
  "I am currently looking for land",
];

const extraServices = ["Estimation", "Architects", "QS", "Interior Designs", "Surveyors", "None"];

const cities = [
  "Ampara",
  "Badulla",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Matara",
  "Kurunegala",
  "Ratnapura",
  "Trincomalee",
  "Nuwara Eliya",
];

const howItWorks = [
  "Share your requirement",
  "Your details will be provided to selected House Builders",
  "Each company will evaluate your requirements and contact you separately",
  "After evaluating their proposals, select a desired House Builder",
  "Monitor the progress of your project",
];

const serviceCards = [
  {
    title: "Movers",
    text: "Relocate with safe and reliable moving services.",
    icon: ArrowRight,
  },
  {
    title: "Construction",
    text: "Build your dream home with trusted house construction teams.",
    icon: Hammer,
  },
  {
    title: "Home loan calculator",
    text: "Calculate your estimated monthly home loan payment.",
    icon: ClipboardList,
  },
  {
    title: "Market Insights",
    text: "Market reports, estimation tools, and property stats.",
    icon: Search,
  },
];

const tips = [
  "Best house construction tips",
  "Construction tips and tricks from experts",
  "Safe demolition practices for home renovation",
  "Steps to building a house",
  "House and kitchen extension ideas",
  "House construction guides",
];

function OptionButton({ children, active = false }) {
  return (
    <button
      type="button"
      className={`min-h-16 rounded border px-4 py-3 text-sm font-semibold leading-6 transition ${
        active
          ? "border-[#009a44] bg-[#e4f8e9] text-[#00863b]"
          : "border-slate-300 bg-white text-slate-700 hover:border-[#009a44] hover:bg-[#f4fbf6]"
      }`}
    >
      {children}
    </button>
  );
}

export default function HouseBuildersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#9fc5b5]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_70%,#ffffff_70%)]" />
        <div className="relative mx-auto grid min-h-[560px] max-w-7xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-h-[360px]">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-none">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop"
                alt="House construction site"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[#9fc5b5]/35 mix-blend-multiply" />
            </div>
          </div>

          <div className="rounded-[1.6rem] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)] md:p-8">
            <h1 className="text-3xl font-black tracking-[-0.03em] text-slate-800">Build your future with us</h1>
            <p className="mt-2 text-lg font-semibold text-slate-500">Find trusted constructors near you</p>

            <div className="mt-5 flex items-center justify-center gap-2 text-[#009a44]">
              <span className="h-3 w-3 rounded-full bg-[#009a44]" />
              <span className="h-px w-14 border-t border-dashed border-slate-500" />
              <span className="h-3 w-3 rounded-full border-2 border-[#009a44] bg-white" />
              <span className="h-px w-14 border-t border-dashed border-slate-500" />
              <span className="h-3 w-3 rounded-full border-2 border-[#009a44] bg-white" />
            </div>

            <div className="mt-8">
              <p className="text-base font-black leading-6 text-slate-600">Which of the following best matches your project?</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {projectTypes.map((type, index) => (
                  <OptionButton key={type} active={index === 0}>
                    {type}
                  </OptionButton>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-base font-black leading-6 text-slate-600">What is the current situation with your project?</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {projectSituations.map((item, index) => (
                  <OptionButton key={item} active={index === 0}>
                    {item}
                  </OptionButton>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <label className="block rounded border border-slate-300 px-4 py-3">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Location of the site</span>
                <input className="mt-2 w-full bg-transparent text-sm font-semibold outline-none" placeholder="Enter city or area" />
              </label>
              <label className="block rounded border border-slate-300 px-4 py-3">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Start constructions</span>
                <input className="mt-2 w-full bg-transparent text-sm font-semibold outline-none" placeholder="Select timeline" />
              </label>
            </div>

            <div className="mt-7">
              <p className="text-base font-black leading-6 text-slate-600">Do you require any other service?</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {extraServices.map((item, index) => (
                  <OptionButton key={item} active={index === 0}>
                    {item}
                  </OptionButton>
                ))}
              </div>
            </div>

            <button type="button" className="mt-7 w-full rounded bg-[#009a44] px-6 py-3 text-sm font-black text-white transition hover:bg-[#00863b]">
              NEXT
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 rounded-[1.6rem] bg-[#eef1ff] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">Get a free estimate</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-800">
              Dreaming of a new home that suits your lifestyle and budget?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Build your dream home with trusted professionals, save time and money, and enjoy a smoother construction process.
            </p>
            <button type="button" className="mt-6 rounded bg-[#009a44] px-6 py-3 text-sm font-black text-white transition hover:bg-[#00863b]">
              GET A FREE ESTIMATE
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Efficient and effective solutions", CheckCircle2],
              ["Flexible and affordable solutions", ShieldCheck],
              ["Smooth and stress-free process", Sparkles],
            ].map(([label, Icon]) => (
              <div key={label} className="rounded-xl bg-white p-5 shadow-sm">
                <Icon className="text-[#009a44]" size={24} />
                <p className="mt-3 text-sm font-black leading-6 text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <aside>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">Top Cities</p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold text-slate-600">
                {cities.map((city) => (
                  <span key={city}>{city}</span>
                ))}
              </div>
            </aside>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">House Builders in Sri Lanka</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">Find the Best House Builders in Sri Lanka</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Find detailed listings and contact information for professionals and companies specializing in house construction,
                renovations, extensions, demolition, and related services.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-black">How it works</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-5">
                  {howItWorks.map((step, index) => (
                    <div key={step} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#009a44] text-sm font-black text-white">
                        {index + 1}
                      </div>
                      <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">Useful Articles</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">Construction of New Houses</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Building a new house is an exciting project, and a solid foundation is essential for longevity and safety.
              Plan soil testing, stable foundation depth, load distribution, and accurate marking before excavation begins.
            </p>
            <h3 className="mt-8 text-2xl font-black">Cost to Build a House in Sri Lanka</h3>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#eef8f2] text-[#00863b]">
                  <tr>
                    <th className="px-4 py-3 font-black">House type</th>
                    <th className="px-4 py-3 font-black">Cost per sq.ft</th>
                    <th className="px-4 py-3 font-black">General features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Basic", "15,000 Rs/sqft", "Cement flooring, local fittings"],
                    ["Mid", "18,000 Rs/sqft", "Tiled flooring, branded fittings"],
                    ["Luxury", "22,000 Rs/sqft", "Premium flooring and fittings"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 font-semibold text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">Project services</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Estimation", Ruler],
                ["Architects", PenTool],
                ["Surveyors", MapPin],
                ["House builders", Home],
              ].map(([label, Icon]) => (
                <div key={label} className="rounded-xl bg-white p-4 shadow-sm">
                  <Icon className="text-[#009a44]" size={22} />
                  <p className="mt-3 text-sm font-black text-slate-700">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">Useful tips</p>
              <div className="mt-4 space-y-3">
                {tips.map((tip) => (
                  <div key={tip} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#009a44]">Explore other services</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon className="text-[#009a44]" size={24} />
                  <h3 className="mt-4 text-lg font-black text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
