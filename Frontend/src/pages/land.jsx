import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_BASE = "http://localhost:5000";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop";

function formatPrice(price) {
  if (!price || Number(price) === 0) return "Price on request";
  const num = Number(price);
  if (num >= 1_000_000) return `Rs ${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `Rs ${(num / 1_000).toFixed(0)}k`;
  return `Rs ${num.toLocaleString()}`;
}

function timeAgo(dateStr) {
  if (!dateStr) return "Recently listed";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Recently listed";
  const diff = Date.now() - d.getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 0) return "Recently listed";
  if (days === 0) return "Listed today";
  if (days === 1) return "Listed yesterday";
  if (days < 30) return `Listed ${days} days ago`;
  const months = Math.floor(days / 30);
  return `Listed ${months} month${months > 1 ? "s" : ""} ago`;
}

function getImageSrc(property) {
  if (property && property.cover_image) return `${API_BASE}${property.cover_image}`;
  if (property && property.images && property.images.length > 0) return `${API_BASE}${property.images[0]}`;
  return PLACEHOLDER_IMG;
}

function PropertyCard({ property, onClick }) {
  const imgSrc = getImageSrc(property);
  const dateStr = property?.created_at || property?.createdAt || null;

  return (
    <article
      onClick={onClick}
      className="overflow-hidden rounded-xl border bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col h-full"
      role="button"
      tabIndex={0}
    >
      <div className="relative">
        <img
          src={imgSrc}
          onError={(e) => { e.target.src = PLACEHOLDER_IMG; }}
          className="h-48 sm:h-56 md:h-64 lg:h-52 xl:h-64 w-full object-cover"
          alt={property?.title || "property"}
        />

        <span className="absolute left-3 top-3 bg-white/95 text-xs text-slate-800 px-2 py-1 rounded">For Sale</span>

        {property?.land_area && (
          <span className="absolute right-3 top-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded">{property.land_area} perches</span>
        )}

        {property?.is_featured === 1 && (
          <span className="absolute left-3 bottom-3 bg-yellow-400 text-xs text-slate-800 px-2 py-1 rounded">Featured</span>
        )}

        <div className="absolute right-3 bottom-3 bg-gradient-to-r from-black/70 to-transparent text-white px-3 py-1 rounded-full text-sm font-semibold">{formatPrice(property?.price)}</div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-800 line-clamp-1">{property?.title}</h3>
        <p className="mt-1 text-sm text-slate-500 line-clamp-1">{[property?.city, property?.district_name || property?.district].filter(Boolean).join(", ") || "Sri Lanka"}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-slate-400">{timeAgo(dateStr)}</div>
          <span className="text-sm text-blue-700 font-medium">View →</span>
        </div>
      </div>
    </article>
  );
}

export default function Land() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [activeChip, setActiveChip] = useState("");

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const landTypes = ["Bare Land", "Residential", "Agricultural", "Commercial", "Tea Estate"];
  const priceRanges = [
    { label: "Under Rs 1M", max: 1_000_000 },
    { label: "Rs 1M – 5M", min: 1_000_000, max: 5_000_000 },
    { label: "Rs 5M – 20M", min: 5_000_000, max: 20_000_000 },
    { label: "Above Rs 20M", min: 20_000_000 },
  ];

  const SRI_LANKA_DISTRICTS = [
    "Colombo","Kandy","Galle","Gampaha","Matara","Kurunegala",
    "Ratnapura","Badulla","Nuwara Eliya","Anuradhapura","Polonnaruwa",
    "Trincomalee","Batticaloa","Jaffna","Hambantota","Kegalle",
    "Kalutara","Matale","Ampara","Monaragala","Puttalam","Vavuniya",
  ];

  useEffect(() => {
    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, typeFilter, districtFilter, priceFilter, activeChip]);

  async function fetchProperties() {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set("listing_type", "land");
      params.set("page", page);
      params.set("limit", PER_PAGE);
      if (search.trim()) params.set("q", search.trim());
      if (districtFilter) params.set("district", districtFilter);

      const activeType = activeChip || typeFilter;
      if (activeType) params.set("type", activeType);

      const range = priceRanges.find((r) => r.label === priceFilter);
      if (range?.min) params.set("min_price", range.min);
      if (range?.max) params.set("max_price", range.max);

      const res = await fetch(`${API_BASE}/api/properties?${params.toString()}`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();

      const list = data.data || data.properties || (Array.isArray(data) ? data : []);
      setProperties(list);
      setTotal(data.total ?? list.length);
    } catch (err) {
      setError(err.message);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setPage(1);
    fetchProperties();
  }

  function handleReset() {
    setSearch("");
    setTypeFilter("");
    setDistrictFilter("");
    setPriceFilter("");
    setActiveChip("");
    setPage(1);
    fetchProperties();
  }

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const hasFilters = Boolean(search || typeFilter || districtFilter || priceFilter || activeChip);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="relative">
        <div className="h-56 sm:h-64 lg:h-80 w-full bg-cover bg-center" style={{ backgroundImage: `url(${PLACEHOLDER_IMG})` }}>
          <div className="h-full w-full bg-gradient-to-b from-black/45 to-black/25 flex items-center">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Land for Sale across Sri Lanka</h2>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl">Explore agricultural, residential and commercial land listings with clear pricing and friendly agent support.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button onClick={() => navigate('/post-ad')} className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow">+ Post Free Ad</button>
                <button onClick={() => navigate('/find-agent')} className="rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium">Find an Agent</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 items-center">
            <div className="md:col-span-4">
              <input aria-label="Search properties" type="text" placeholder="Search location, landmark or title" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="md:col-span-2">
              <select value={districtFilter} onChange={(e) => { setDistrictFilter(e.target.value); setPage(1); }} className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
                <option value="">All Districts</option>
                {SRI_LANKA_DISTRICTS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setActiveChip(""); setPage(1); }} className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
                <option value="">All Types</option>
                {landTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <select value={priceFilter} onChange={(e) => { setPriceFilter(e.target.value); setPage(1); }} className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
                <option value="">Price Range</option>
                {priceRanges.map((r) => <option key={r.label} value={r.label}>{r.label}</option>)}
              </select>
            </div>

            <div className="md:col-span-2 flex gap-2">
              <button type="submit" className="flex-1 rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800 shadow">Search</button>
              {hasFilters && <button type="button" onClick={handleReset} className="rounded-md border px-3 py-2 text-sm">Reset</button>}
            </div>
          </div>
        </form>

        {/* ACTIVE FILTER TAGS */}
        {hasFilters && (
          <div className="my-4 flex items-center gap-3 flex-wrap">
            {activeChip && <span className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">{activeChip} Lands <button onClick={() => { setActiveChip(""); setPage(1); }} className="ml-2 text-blue-700">✕</button></span>}
            {districtFilter && <span className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">{districtFilter} <button onClick={() => { setDistrictFilter(""); setPage(1); }} className="ml-2 text-blue-700">✕</button></span>}
            {typeFilter && <span className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">{typeFilter} <button onClick={() => { setTypeFilter(""); setPage(1); }} className="ml-2 text-blue-700">✕</button></span>}
            {priceFilter && <span className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">{priceFilter} <button onClick={() => { setPriceFilter(""); setPage(1); }} className="ml-2 text-blue-700">✕</button></span>}
            <button onClick={handleReset} className="ml-2 text-sm font-medium text-blue-700">RESET ALL</button>
          </div>
        )}

        {/* TITLE */}
        <div className="mb-4 mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Land for Sale in Sri Lanka</h1>
          <p className="text-sm text-slate-500">{loading ? "Loading..." : `${total} propert${total === 1 ? "y" : "ies"}`}</p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mb-5 flex flex-wrap gap-3">
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50 shadow-sm">Save Search</button>
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50 shadow-sm">Create E-Mail Alerts</button>
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50 shadow-sm">Share</button>
        </div>

        {/* TYPE CHIPS */}
        <div className="mb-6 flex flex-wrap gap-3">
          {landTypes.map((c) => (
            <button key={c} onClick={() => { setActiveChip(activeChip === c ? "" : c); setTypeFilter(""); setPage(1); }} className={`rounded-full border px-4 py-1 text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-300 ${activeChip === c ? "bg-blue-700 text-white border-blue-700" : "border-blue-700 bg-white text-slate-700 hover:bg-blue-50"}`}>
              {c} Lands
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-6 text-center text-red-600 mb-4">
                <p className="font-semibold">Could not load properties</p>
                <p className="text-sm mt-1">{error}</p>
                <button onClick={fetchProperties} className="mt-3 text-sm underline text-blue-700">Try again</button>
              </div>
            )}

            {loading && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-xl border bg-white shadow-sm overflow-hidden animate-pulse">
                    <div className="h-48 bg-slate-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-3/4" />
                      <div className="h-3 bg-slate-200 rounded w-1/2" />
                      <div className="h-3 bg-slate-200 rounded w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && properties.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <span className="text-5xl mb-4">🌿</span>
                <p className="text-lg font-semibold">No land listings found</p>
                <p className="text-sm mt-1">Try adjusting your filters or check back later.</p>
                <button onClick={handleReset} className="mt-4 text-sm text-blue-700 underline">Clear all filters</button>
              </div>
            )}

            {!loading && !error && properties.length > 0 && (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {properties.map((property) => (<PropertyCard key={property.id} property={property} onClick={() => navigate(`/properties/${property.id}`)} />))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1.5 rounded-md border text-sm disabled:opacity-40 hover:bg-slate-100">← Prev</button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2).map((p, idx, arr) => (
                      <span key={p} className="flex items-center gap-2">
                        {idx > 0 && arr[idx - 1] !== p - 1 && <span className="px-1 text-slate-400">…</span>}
                        <button onClick={() => setPage(p)} className={`w-9 h-9 rounded-md border text-sm font-medium transition ${p === page ? "bg-blue-700 text-white border-blue-700" : "bg-white text-slate-700 hover:bg-slate-100"}`}>{p}</button>
                      </span>
                    ))}
                    <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1.5 rounded-md border text-sm disabled:opacity-40 hover:bg-slate-100">Next →</button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <aside className="lg:sticky lg:top-20 space-y-5">
              <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
                <h3 className="text-xl font-bold">Sri Lanka Land Market 2026</h3>
                <p className="mt-2 text-blue-200">LATEST LAND PRICES</p>
              </div>

              <div className="rounded-xl border bg-white p-4">
                <h4 className="mb-4 text-lg font-semibold">Featured Projects</h4>
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" className="rounded-lg w-full object-cover h-36" alt="featured" />
              </div>

              <div className="rounded-xl border bg-white p-5">
                <h4 className="text-lg font-semibold mb-3">Contact an Agent</h4>
                <p className="text-sm text-slate-600 mb-4">Get a free market valuation or connect with a local agent.</p>
                <button onClick={() => navigate("/find-agent")} className="w-full bg-[#2171B5] hover:bg-[#1b5f98] text-white py-2 rounded-md font-medium text-sm">Contact Agent</button>
              </div>

              <div className="rounded-xl bg-white p-4 border">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#08306B]">{total > 0 ? (total >= 1000 ? `${(total / 1000).toFixed(1)}k` : total) : "—"}</div>
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

              <div className="rounded-xl border bg-white p-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Post Your Land</h4>
                <p className="text-xs text-slate-500 mb-3">Have land to sell? Reach thousands of buyers on LankaPropertyWeb.</p>
                <button onClick={() => navigate("/post-ad")} className="w-full rounded-md border border-blue-700 text-blue-700 py-2 text-sm font-medium hover:bg-blue-50 transition">+ Post Free Ad</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}