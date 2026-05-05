const kandyListings = [
  {
    id: 1,
    title: 'Luxury Family House in Heerassagala',
    location: 'Heerassagala, Kandy',
    price: 'Rs. 18,500,000',
    beds: '4 Beds',
    baths: '3 Baths',
    area: '2,300 sqft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Apartment for Sale Near Kandy City',
    location: 'Kandy Town',
    price: 'Rs. 15,750,000',
    beds: '3 Beds',
    baths: '2 Baths',
    area: '1,420 sqft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
    badge: 'Hot',
  },
  {
    id: 3,
    title: 'Land for Sale in Peradeniya',
    location: 'Peradeniya, Kandy',
    price: 'Rs. 7,800,000',
    beds: 'N/A',
    baths: 'N/A',
    area: '12 Perches',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
    badge: 'Land',
  },
  {
    id: 4,
    title: 'Modern House in Katugastota',
    location: 'Katugastota, Kandy',
    price: 'Rs. 21,250,000',
    beds: '4 Beds',
    baths: '2 Baths',
    area: '2,000 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
  },
]

export default function KandyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        <img
          src="https://images.unsplash.com/photo-1505691723518-36a6f14f4f29?w=1600&q=80&auto=format&fit=crop"
          alt="Kandy banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur">
            Kandy Area Only
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Properties in Kandy city and surrounding areas.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            Browse houses, apartments, and land in Heerassagala, Peradeniya, Katugastota, Kandy Town and nearby areas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {kandyListings.map((listing) => (
            <article key={listing.id} className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg ring-1 ring-slate-200">
              <img src={listing.image} alt={listing.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{listing.location}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-800">{listing.title}</h3>
                <p className="mt-2 text-2xl font-black text-[#08306B]">{listing.price}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                  {[listing.beds, listing.baths, listing.area].map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 px-3 py-3 font-semibold text-slate-600 ring-1 ring-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
