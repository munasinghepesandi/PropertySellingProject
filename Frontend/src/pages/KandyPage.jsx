import { Navbar } from "../components/Navbar"

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
    title: 'Land for Sale in Kandy Town',
    location: 'Kandy Town',
    price: 'Rs. 7,800,000',
    beds: 'N/A',
    baths: 'N/A',
    area: '12 Perches',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
    badge: 'Land',
  },
  {
    id: 4,
    title: 'Modern House in Asgiriya',
    location: 'Asgiriya, Kandy',
    price: 'Rs. 21,250,000',
    beds: '4 Beds',
    baths: '2 Baths',
    area: '2,000 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 5,
    title: 'Family Home in Kandy City',
    location: 'Kandy City',
    price: 'Rs. 19,900,000',
    beds: '4 Beds',
    baths: '2 Baths',
    area: '1,850 sqft',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop',
    badge: 'Featured',
  },
]

export default function KandyPage() {
  return (
    <div className="min-h-screen  text-slate-900">
      <Navbar/>
      <section className="relative overflow-hidden text-white min-h-[36vh]">
        <div className="absolute inset-0 bg-black/40 " />
        <img
          src="https://www.johnkeellsproperties.com/_next/image?url=https%3A%2F%2Fd348s9iu5fkczb.cloudfront.net%2F0d02a111-09e3-4fd4-914a-c81ba65c485d.jpg&w=2048&q=75"
          alt="Kandy banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100"
          loading="lazy"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur">
            Kandy Only
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Properties in Kandy city only.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            Browse houses, apartments, and land in Heerassagala, Kandy Town, Asgiriya, and Kandy City.
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
