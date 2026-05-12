import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { inspirationCategories, inspirationItems } from "./OurServicesPage";

export default function InspirationPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 md:px-8">
        <div className="bg-white px-1 py-2 md:px-2">
          <div className="flex gap-3 overflow-x-auto pb-3">
            {inspirationCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="whitespace-nowrap rounded-full border border-[#2171B5] bg-white px-6 py-2 text-sm font-bold text-[#2171B5] transition hover:bg-[#eff6fd]"
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-600">Home &gt; Inspiration</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.02em] text-slate-900 md:text-4xl">
            70053 Home Inspiration &amp; ideas in Sri Lanka
          </h2>
          <p className="mt-2 text-sm text-slate-500">Browse room, exterior, and luxury inspiration ideas</p>

          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {inspirationItems.map((item, index) => (
              <Link
                key={`${item.title}-${item.tag}`}
                to={`/inspiration/${index + 1}`}
                className="group relative block h-[260px] overflow-hidden rounded-xl bg-slate-100 shadow-sm md:h-[280px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute right-3 top-3 rounded-md bg-[#2171B5] px-3 py-1 text-xs font-black text-white">
                  {item.tag}
                </span>
                <p className="absolute inset-x-3 bottom-3 text-sm font-black leading-5 text-white drop-shadow">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}