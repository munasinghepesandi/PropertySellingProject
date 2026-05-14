import { Link, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { inspirationItems } from "../data/inspirationData";

function buildFeatureList(tag) {
  const baseFeatures = {
    "Living Room": ["Open-plan lounge", "Natural lighting", "Warm neutral palette"],
    Bathroom: ["Glass shower enclosure", "Premium fittings", "Modern vanity"],
    Bedroom: ["Soft lighting", "Built-in storage", "Calm color scheme"],
    "Dining Room": ["Family seating zone", "Pendant lighting", "Easy entertaining"],
    Exterior: ["Strong street presence", "Weather-friendly finishes", "Private parking"],
    Garden: ["Landscape planting", "Relaxing outdoor seating", "Low-maintenance design"],
    Kitchen: ["Island counter", "Smart storage", "Premium appliances"],
    Luxury: ["High-end finishes", "Statement architecture", "Showcase layout"],
  };

  return baseFeatures[tag] ?? ["Elegant layout", "Thoughtful design", "Premium finishes"];
}

function getCategoryLabel(tag) {
  const categoryMap = {
    "Living Room": "Living Space",
    Bathroom: "Bath Concept",
    Bedroom: "Bedroom Concept",
    "Dining Room": "Dining Concept",
    Exterior: "Facade Inspiration",
    Garden: "Outdoor Inspiration",
    Kitchen: "Kitchen Concept",
    Luxury: "Luxury Living",
  };

  return categoryMap[tag] ?? "Home Inspiration";
}

export default function InspirationDetailPage() {
  const { inspirationId } = useParams();
  const index = Number.parseInt(inspirationId || "1", 10) - 1;
  const inspiration = inspirationItems[index] ?? inspirationItems[0];
  const relatedItems = inspirationItems.filter((item) => item.tag === inspiration.tag && item.title !== inspiration.title).slice(0, 4);
  const featureList = buildFeatureList(inspiration.tag);

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img src={inspiration.image} alt={inspiration.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/90">{getCategoryLabel(inspiration.tag)}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">{inspiration.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
            Click-through inspiration detail page styled like a premium property listing. Use it to browse a specific room style, view related ideas, and jump back to the gallery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/inspiration" className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#08306B] transition hover:shadow-lg">
              Back to Inspiration
            </Link>
            <Link to="/help" className="rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Contact Advertiser
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(8,48,107,0.06)] md:p-10">
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                ["Style", inspiration.tag],
                ["Format", "Gallery Detail"],
                ["Status", "Available Now"],
                ["View", "Full Screen"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2171B5]">{label}</p>
                  <p className="mt-2 text-sm font-bold text-slate-800">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[#d9e8f6]">
              <img src={inspiration.image} alt={inspiration.title} className="h-[420px] w-full object-cover object-center" />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-[-0.03em] text-slate-900">{inspiration.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This inspiration card can be used as a room, exterior, or luxury concept page. It mirrors a property detail experience with large imagery, a clear headline, and additional detail sections below.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featureList.map((feature) => (
                <div key={feature} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4 text-sm font-bold text-slate-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(8,48,107,0.06)] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Quick facts</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p><span className="font-black text-slate-900">Category:</span> {inspiration.tag}</p>
                <p><span className="font-black text-slate-900">Photo type:</span> Premium inspiration image</p>
                <p><span className="font-black text-slate-900">Layout:</span> Property-style detail page</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-6 text-white shadow-[0_18px_45px_rgba(8,48,107,0.12)] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">Need help?</p>
              <h3 className="mt-3 text-2xl font-black">Reach out for similar inspiration or property help</h3>
              <p className="mt-3 text-sm leading-7 text-white/90">
                Use this page to route users into support, related inspiration, or similar property listings inside the app.
              </p>
              <Link to="/help" className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#08306B] transition hover:shadow-lg">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(8,48,107,0.06)] md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Related Inspiration</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {(relatedItems.length > 0 ? relatedItems : inspirationItems.slice(0, 4)).map((item, relatedIndex) => {
              const relatedId = inspirationItems.findIndex((candidate) => candidate.title === item.title && candidate.tag === item.tag) + 1;

              return (
                <Link key={`${item.title}-${relatedIndex}`} to={`/inspiration/${relatedId}`} className="group overflow-hidden rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="p-4">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">{item.tag}</p>
                    <h4 className="mt-2 text-sm font-bold leading-6 text-slate-900">{item.title}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}