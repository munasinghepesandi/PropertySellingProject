import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, MapPin, Phone, Sparkles, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function normalizeTitle(title) {
  return title || (typeof window !== 'undefined' ? decodeURIComponent(window.location.pathname.split('/').slice(-1)[0]).replace(/-/g, ' ') : 'More')
}

const pageConfig = {
  'News & Guides': {
    subtitle: 'Market updates, expert advice and practical property insights for buyers, sellers and investors.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    cards: [
      { title: 'Market News', text: 'Daily updates on prices, launches and market movement.' },
      { title: 'Buying Guides', text: 'Step-by-step guidance for first-time and experienced buyers.' },
      { title: 'Investment Tips', text: 'Practical ideas for building a stronger property portfolio.' },
    ],
    listTitle: 'Popular topics',
    list: ['Property Buying Guide', 'Foreign Buyers Guide', 'Capital Gains Tax', 'Price Indices', 'Membership Benefits'],
  },
  'About us': {
    subtitle: 'Learn who we are, what we do and how we help people discover better property opportunities in Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    cards: [
      { title: 'Our Mission', text: 'Make property search, selling and discovery simple, fast and trustworthy.' },
      { title: 'Our Team', text: 'A mix of property, design and digital experts working together.' },
      { title: 'Our Vision', text: 'Build the most useful real estate platform in Sri Lanka.' },
    ],
    listTitle: 'What we value',
    list: ['Trust', 'Clarity', 'Speed', 'Support', 'Innovation'],
  },
  'Contact Us': {
    subtitle: 'Reach our team for support, partnerships, advertising help or property-related questions.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    cards: [
      { title: 'Email', text: 'info@lankapropertyweb.com' },
      { title: 'Phone', text: '+94 77 123 4567' },
      { title: 'Office', text: 'Colombo, Sri Lanka' },
    ],
    listTitle: 'Best for',
    list: ['Support requests', 'Listing help', 'Advertising', 'Partnerships', 'General questions'],
  },
  Events: {
    subtitle: 'See property expos, networking sessions and industry gatherings we are hosting or supporting.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    cards: [
      { title: 'Property Expo', text: 'Meet developers, agents and service providers in one place.' },
      { title: 'Investor Session', text: 'Learn about markets, yields and emerging opportunities.' },
      { title: 'Local Community Events', text: 'Discover area showcases and neighborhood meetups.' },
    ],
    listTitle: 'Upcoming focus',
    list: ['Expos', 'Webinars', 'Open houses', 'Workshops', 'Meetups'],
  },
  FAQs: {
    subtitle: 'Answers to the questions people ask most often about buying, selling and using the platform.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    cards: [
      { title: 'Buying help', text: 'How to search, shortlist and contact property owners.' },
      { title: 'Selling help', text: 'How to create listings, advertise and get more enquiries.' },
      { title: 'Support', text: 'How to reach the team when you need guidance.' },
    ],
    listTitle: 'Common questions',
    list: ['How do I post an ad?', 'How can I contact support?', 'Can I promote my listing?', 'How do I find an agent?'],
  },
}

export default function MorePage({ title }) {
  const displayTitle = normalizeTitle(title)
  const config = useMemo(() => pageConfig[displayTitle] || {}, [displayTitle])

  const cards = config.cards || [
    { title: 'Helpful links', text: 'Browse related guides and property services.' },
    { title: 'Quick support', text: 'Use the contact page if you need help fast.' },
    { title: 'Stay informed', text: 'Check back for updates and new content.' },
  ]

  const listItems = config.list || ['Support', 'Guides', 'Updates', 'Services']

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <PageHeader
        title={displayTitle}
        subtitle={config.subtitle || 'A polished content page with the same look and feel as the rest of the site.'}
        ctaText={displayTitle === 'Contact Us' ? 'Open support page' : 'Explore More'}
        ctaTo={displayTitle === 'Contact Us' ? '/contact' : '/more'}
        image={config.image}
      />

      <main className="mx-auto max-w-7xl px-6 py-14">
        <section className="grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5fc] text-[#08306B]">
                <Sparkles size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3 text-[#2171B5]">
              <Star size={18} />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{config.listTitle || 'Highlights'}</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {listItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <CheckCircle2 size={18} className="text-[#2171B5]" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-7 text-white shadow-lg">
            <div className="flex items-center gap-3 text-white/90">
              <Clock3 size={18} />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">Need help now</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold">We’re ready to help you move faster.</h2>
            <p className="mt-3 text-sm leading-6 text-white/85">
              Contact our team for property support, promotions, partnerships or general enquiries.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Mail size={16} /> support@lankapropertyweb.com</div>
              <div className="flex items-center gap-3"><Phone size={16} /> +94 77 123 4567</div>
              <div className="flex items-center gap-3"><MapPin size={16} /> Colombo, Sri Lanka</div>
            </div>
            <Link to={displayTitle === 'Contact Us' ? '/contact' : '/more'} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#08306B]">
              Continue <ArrowRight size={16} />
            </Link>
          </article>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 text-[#2171B5]">
            <CalendarDays size={18} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Quick links</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {['/more', '/news-and-guides', '/aboutus', '/contact', '/more/events', '/faqs'].map((path) => (
              <Link key={path} to={path} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#2171B5] hover:text-[#2171B5]">
                {path.replace('/', '').replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
