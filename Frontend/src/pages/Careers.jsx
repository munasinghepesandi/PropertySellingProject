import React from 'react'
import { Briefcase, HeartHandshake, MapPin, Rocket, Users, ArrowRight, Clock3 } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

const jobs = [
  { title: 'Senior Marketing Executive', type: 'Full Time', location: 'Colombo' },
  { title: 'Property Consultant', type: 'Full Time', location: 'Kandy' },
  { title: 'Research Analyst', type: 'Remote', location: 'Sri Lanka' },
  { title: 'Marketing Executive', type: 'Hybrid', location: 'Negombo' },
]

const benefits = [
  { icon: Rocket, title: 'Career Growth', desc: 'Grow with mentorship, training and leadership opportunities.' },
  { icon: Users, title: 'Amazing Team', desc: 'Collaborate with creative professionals in a modern culture.' },
  { icon: HeartHandshake, title: 'Work-Life Balance', desc: 'Flexible schedules and supportive policies for productivity.' },
  { icon: Briefcase, title: 'Modern Workplace', desc: 'Work with tools and systems built for a fast-moving platform.' },
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A4A]">
      <Navbar />

      <PageHeader
        title="Careers"
        subtitle="Join a growing property platform and help shape how people discover homes, land and services in Sri Lanka."
        ctaText="View Openings"
        ctaTo="#openings"
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
      />

      <main className="mx-auto max-w-7xl px-6 py-14">

        {/* BENEFITS */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-3xl border border-[#EAEAEA] bg-[#FFFFFF] p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3D319] text-[#203F52]">
                  <Icon size={20} />
                </div>
                <h2 className="text-xl font-bold text-[#203F52]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4A4A4A]">{item.desc}</p>
              </article>
            )
          })}
        </section>

        {/* JOBS */}
        <section
          id="openings"
          className="mt-10 rounded-[2rem] border border-[#EAEAEA] bg-[#FFFFFF] p-7 shadow-sm"
        >
          <div className="mb-6 flex items-center gap-3 text-[#2A6FA3]">
            <Clock3 size={18} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">
              Open positions
            </span>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="flex flex-col gap-4 rounded-3xl border border-[#EAEAEA] p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#203F52]">
                    {job.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#4A4A4A]">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={16} /> {job.type}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} /> {job.location}
                    </span>
                  </div>
                </div>

                <button
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition"
                  style={{ backgroundColor: '#203F52' }}
                >
                  Apply Now <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-10 rounded-[2rem] p-8 text-white shadow-lg"
          style={{ background: 'linear-gradient(90deg, #203F52, #2A6FA3)' }}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F3D319]">
              Start your journey
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Ready to build your career with us?
            </h2>

            <p className="mt-4 text-white/80">
              Join Sri Lanka’s property platform and work on products that matter.
            </p>

            <button
              className="mt-7 rounded-full px-6 py-3 text-sm font-bold"
              style={{
                backgroundColor: '#F3D319',
                color: '#203F52',
              }}
            >
              Apply Today
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}