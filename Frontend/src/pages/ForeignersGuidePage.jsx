import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const rightRailProjects = [
  {
    title: 'Sri Lanka Real Estate Market Outlook Report 2026',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80&auto=format&fit=crop',
    tag: 'Out Now',
  },
  {
    title: 'Featured Projects',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop',
    tag: 'Curated',
  },
]

const sectionLinks = [
  { label: 'Rules & regulations', href: '#rules' },
  { label: 'Company setup', href: '#company-setup' },
  { label: 'Buying land', href: '#buying-land' },
  { label: 'Taxes', href: '#taxes' },
  { label: 'Visa & residency', href: '#visas' },
  { label: 'Funds transfer', href: '#funds' },
]

const updates = [
  'Update 14/12/2022 - VAT on the sale of residential apartments reintroduced from January 1, 2023.',
  'Update 22/05/2018 - Restrictions removed from ground-level up for foreigners and the 49% foreign shareholding limit for listed companies.',
  'Update 02/09/2016 - The 15% land tax for foreigners was removed from 1st Jan 2016.',
  'Last update: Nov 2024',
]

export default function ForeignersGuidePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-900">
      <Navbar />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="font-semibold text-slate-700 hover:text-[#2171B5]">Home</Link>
            <span>›</span>
            <Link to="/sales" className="font-semibold text-slate-700 hover:text-[#2171B5]">Sales</Link>
            <span>›</span>
            <span className="text-slate-500">Foreigners Guide</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <article className="rounded-2xl bg-white px-4 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:px-8 sm:py-8">
          <span className="inline-flex rounded-full bg-[#eff6fd] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#08306B] ring-1 ring-[#d9e8f6]">
            Property Buying Guide
          </span>

          <h1 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[3rem]">
            Guide to buying property in Sri Lanka for foreigners and expats - 2026
          </h1>

          <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-200 pb-4 text-sm font-semibold text-slate-600">
            {sectionLinks.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full bg-slate-50 px-4 py-2 ring-1 ring-slate-200 transition hover:bg-[#eff6fd] hover:text-[#08306B]">
                {item.label}
              </a>
            ))}
          </div>

          <section id="rules" className="mt-8 scroll-mt-24">
            <h2 className="text-2xl font-bold leading-snug text-[#2171B5] sm:text-[1.7rem]">
              What are the rules and regulations for expats and foreigners buying and renting property in Sri Lanka?
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
              <p>
                Foreigners can buy apartments and condominiums from ground level up. However, land cannot be purchased on freehold and can only be leased up to 99 years. A condominium is defined as a group of residences with shared facilities.
              </p>
              <p>
                Condominiums can be purchased provided that the entire value is paid upfront through an inward foreign remittance prior to execution of the deed of transfer.
              </p>
              <p>
                Any private company with minority foreign ownership up to 49% can buy or lease property in Sri Lanka.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">Under the current legislation, a foreigner can enter the property market using the following options:</p>
                <ol className="mt-4 space-y-2 pl-5 text-slate-700">
                  <li>a) By leasing the property</li>
                  <li>b) By inheriting</li>
                  <li>c) By a gift from parents</li>
                  <li>d) Part of a private company with a local shareholding of above 50%</li>
                  <li>e) As part of a locally listed public company</li>
                  <li>f) Buy an apartment / condominium any floor</li>
                  <li>g) By obtaining Dual Citizenship</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="company-setup" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">How to set up a Private Limited Company in Sri Lanka</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
              <p>
                Foreigners may establish private companies in Sri Lanka, subject to various restrictions and rules. The usual steps include securing relevant permits, registering with the Department of Registrar of Companies, and obtaining Board of Investment clearance if the investment exceeds the required level.
              </p>
              <ul className="space-y-2 pl-5">
                <li>Get all required permits and approvals.</li>
                <li>Choose a company structure, with private limited company being the preferred format for most foreign investors.</li>
                <li>Register the company.</li>
                <li>Create a company bank account in Sri Lanka.</li>
                <li>Get the appropriate land permits and confirm that the land is eligible for foreign ownership structure.</li>
                <li>Acquire the property after all approvals are in place.</li>
              </ul>
              <p>
                It is important to note that forming a company and purchasing land in Sri Lanka can be complex. Foreigners should seek help from a local attorney or business consultant.
              </p>
            </div>
          </section>

          <section id="buying-land" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">Buying land</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
              <p>
                Foreigners cannot buy land as sale of land to foreigners has been prohibited from the 2013 budget. Land can only be leased for a maximum of 99 years.
              </p>
              <p>
                Foreigners or companies with more than 50% foreign ownership no longer need to pay the 15% land tax from 1st Jan 2016.
              </p>
              <p>
                The Land (Restrictions on Alienation) (Amendment) rules continue to govern how immovable property may be transferred.
              </p>
            </div>
          </section>

          <section id="taxes" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">Taxes for property, landlords, and capital gains</h2>
            <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">VAT on apartment sales</h3>
                <p className="mt-2">
                  An 18% VAT is payable on any apartment bought on the primary market from the developer. In addition to VAT, a 2.5% SSCL tax is also payable by the buyer to the developer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">Taxes for property</h3>
                <p className="mt-2">There is a 1% Stamp Duty for leasing land up to 99 years.</p>
                <p className="mt-2">If buying property, there will be a 3% Stamp Duty on the first LKR 100,000 and 4% thereafter.</p>
                <p className="mt-2">A lawyer will typically charge 2-3% for preparing the documents.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">Taxes for landlords</h3>
                <p className="mt-2">Anyone leasing out property to a foreigner or local will need to pay a 1% stamp duty when the rent is collected.</p>
                <p className="mt-2">VAT is payable if the lease is to a VAT registered person other than on residential premises.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">Capital Gains Tax</h3>
                <p className="mt-2">
                  Capital Gains Tax of 10% on gains became effective from 1st April 2018. It is a flat 10% rate irrespective of ownership period and applies to both foreigners and locals.
                </p>
                <p className="mt-2">Any gains of less than Rs. 50,000 are not subject to CGT, and principal residence exclusions may also apply in some cases.</p>
              </div>
            </div>
          </section>

          <section id="visas" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">Residency visas and mortgages</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
              <p>
                The Investor Visa program allows non-Sri Lankans to obtain visas by purchasing or showing proof that they are in the process of completing the purchase of an apartment.
              </p>
              <p>
                Investors placing USD 200K or more can receive a 10-year residency visa, while a USD 100K investment qualifies for a 5-year residency visa. Both visas are renewable.
              </p>
              <p>
                Foreigners cannot generally obtain a mortgage from local banks, however dual citizens and non-resident Sri Lankans are able to. Please contact us if you would like help with mortgage support.
              </p>
            </div>
          </section>

          <section id="funds" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">Moving money in and out of the country</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
              <p>
                If a foreign resident wants to purchase property, the money must be channeled into the country via a special Securities Investment Account, now called an Inward Investment Account held at a local bank.
              </p>
              <p>
                Once the property has been sold, the money can be taken out plus gains via the same account in the currency that was originally deposited.
              </p>
              <p>
                If the money was not brought in through an IIA or SIA, an annual limit may apply when taking money out of the country unless the source can be proven to the bank and Central Bank.
              </p>
            </div>
          </section>

          <section id="updates" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">Updates</h2>
            <div className="mt-5 space-y-3 text-[15px] leading-7 text-slate-700">
              {updates.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#08306B] to-[#2171B5] p-6 text-white">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Need help?</p>
                <h3 className="mt-2 text-2xl font-bold">Talk to our property team before you buy.</h3>
                <p className="mt-2 text-sm text-white/85">We can help you understand rules, compare listings, and choose the right property type.</p>
              </div>
              <Link
                to="/sales"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-[#08306B] transition hover:bg-slate-100"
              >
                Browse Sales Listings
              </Link>
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80&auto=format&fit=crop"
              alt="Market outlook report"
              className="h-64 w-full rounded-xl object-cover"
            />
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">Featured Projects</h3>
            <div className="mt-4 space-y-4">
              {rightRailProjects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <span className="inline-flex rounded-full bg-[#eff6fd] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#08306B] ring-1 ring-[#d9e8f6]">
                      {project.tag}
                    </span>
                    <h4 className="mt-3 text-base font-bold text-slate-900">{project.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2171B5]">Quick Notes</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Foreigners usually focus on apartments and condominiums.</li>
              <li>• Land ownership rules should be checked before payment.</li>
              <li>• Legal and banking support is recommended for transfers.</li>
            </ul>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  )
}