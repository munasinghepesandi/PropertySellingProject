
import Navbar from "../components/Navbar";

export default function Land() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
        {/* SEARCH BAR */}
        <form className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-5">
              <input
                type="text"
                placeholder="Search location, landmark or property ID"
                className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <select className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
                <option>Radius</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <select className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
                <option>Type</option>
                <option>Land</option>
                <option>Residential</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <select className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
                <option>Price Range</option>
              </select>
            </div>

            <div className="md:col-span-1 flex justify-end">
              <button className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">Search</button>
            </div>
          </div>
        </form>

        {/* FILTERS */}
        <div className="my-4 flex items-center gap-3 flex-wrap">
          <span className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Kandy Lands ✕
          </span>

          <button className="ml-2 text-sm font-medium text-blue-700">RESET ALL</button>
        </div>

        {/* TITLE */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Lands for Sale in Kandy</h1>
          <p className="text-sm text-slate-500">1183 properties</p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mb-5 flex flex-wrap gap-3">
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50">Save Search</button>
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50">Create E-Mail Alerts</button>
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50">Share</button>
        </div>

        {/* CHIPS */}
        <div className="mb-6 flex flex-wrap gap-3">
          {['Residential', 'Agricultural', 'Commercial', 'Tea Estate'].map((c) => (
            <button key={c} className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">{c} Lands</button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* LEFT SIDE */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* CARD 1 */}
              <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"
                    className="h-48 w-full object-cover"
                    alt="Kandy land"
                  />
                  <span className="absolute left-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>
                  <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">1180m²</span>
                  <div className="absolute left-3 bottom-3 bg-gradient-to-r from-black/60 to-transparent text-white px-3 py-1 rounded">Rs 2,500,000</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Residential Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Peradeniya, Kandy · 12 km from city</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Listed 3 days ago</div>
                    <button className="text-sm text-blue-700 font-medium">View</button>
                  </div>
                </div>
              </article>

              {/* CARD 2 */}
              <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                    className="h-48 w-full object-cover"
                    alt="Kandy land"
                  />
                  <span className="absolute left-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>
                  <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">3 acres</span>
                  <div className="absolute left-3 bottom-3 bg-gradient-to-r from-black/60 to-transparent text-white px-3 py-1 rounded">Rs 6,800,000</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Agricultural Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Gampola, Kandy · Fertile soil</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Listed 7 days ago</div>
                    <button className="text-sm text-blue-700 font-medium">View</button>
                  </div>
                </div>
              </article>

              {/* CARD 3 */}
              <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop"
                    className="h-48 w-full object-cover"
                    alt="Kandy land"
                  />
                  <span className="absolute left-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>
                  <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">800m²</span>
                  <div className="absolute left-3 bottom-3 bg-gradient-to-r from-black/60 to-transparent text-white px-3 py-1 rounded">Rs 4,200,000</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Commercial Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Katugastota, Kandy · Prime location</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Listed 2 days ago</div>
                    <button className="text-sm text-blue-700 font-medium">View</button>
                  </div>
                </div>
              </article>

              {/* CARD 4 */}
              <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                    className="h-48 w-full object-cover"
                    alt="Kandy land"
                  />
                  <span className="absolute left-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>
                  <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">2,200m²</span>
                  <div className="absolute left-3 bottom-3 bg-gradient-to-r from-black/60 to-transparent text-white px-3 py-1 rounded">Rs 3,100,000</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Hill Country Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Hanthana, Kandy · Scenic views</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Listed 12 days ago</div>
                    <button className="text-sm text-blue-700 font-medium">View</button>
                  </div>
                </div>
              </article>

              {/* CARD 5 */}
              <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop"
                    className="h-48 w-full object-cover"
                    alt="Kandy land"
                  />
                  <span className="absolute left-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>
                  <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">5 acres</span>
                  <div className="absolute left-3 bottom-3 bg-gradient-to-r from-black/60 to-transparent text-white px-3 py-1 rounded">Rs 18,000,000</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Tea Estate Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Pussellawa, Kandy · Established estate</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Listed 1 month ago</div>
                    <button className="text-sm text-blue-700 font-medium">View</button>
                  </div>
                </div>
              </article>

              {/* CARD 6 */}
              <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop"
                    className="h-48 w-full object-cover"
                    alt="Kandy land"
                  />
                  <span className="absolute left-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>
                  <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">1.1 acres</span>
                  <div className="absolute left-3 bottom-3 bg-gradient-to-r from-black/60 to-transparent text-white px-3 py-1 rounded">Rs 9,900,000</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Investment Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Digana, Kandy · Development potential</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-600">Listed 18 days ago</div>
                    <button className="text-sm text-blue-700 font-medium">View</button>
                  </div>
                </div>
              </article>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <aside className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
                <h3 className="text-xl font-bold">Kandy Market Report 2026</h3>
                <p className="mt-2 text-blue-200">LATEST LAND PRICES</p>
              </div>

              <div className="rounded-xl border bg-white p-4">
                <h4 className="mb-4 text-lg font-semibold">Featured Kandy Projects</h4>
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                  className="rounded-lg"
                  alt="featured"
                />
              </div>

              <div className="rounded-xl border bg-white p-5">
                <h4 className="text-lg font-semibold mb-3">Contact an Agent</h4>
                <p className="text-sm text-slate-600 mb-4">Get a free market valuation or connect with a local agent in Kandy.</p>
                <button className="w-full bg-[#2171B5] hover:bg-[#1b5f98] text-white py-2 rounded-md font-medium">Contact Agent</button>
              </div>

              <div className="rounded-xl bg-white p-4 border">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#08306B]">1.1k</div>
                    <div className="text-xs text-slate-500">Listings</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#08306B]">3.2k</div>
                    <div className="text-xs text-slate-500">Views</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#08306B]">4.8</div>
                    <div className="text-xs text-slate-500">Avg Rating</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
