import React from "react";
import Navbar from "../components/Navbar";
import {
  Briefcase,
  Users,
  Rocket,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Careers() {
  const jobs = [
    { title: "Senior Markerting Executive", type: "Full Time", location: "Colombo" },
    { title: "Property Consultant", type: "Full Time", location: "Kandy" },
    { title: "Reaerch Analyst", type: "Remote", location: "Sri Lanka" },
    { title: "Marketing Executive", type: "Hybrid", location: "Negombo" },
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Career Growth",
      desc: "Grow your career with mentorship, training, and leadership opportunities.",
    },
    {
      icon: Users,
      title: "Amazing Team",
      desc: "Collaborate with creative professionals in a modern work culture.",
    },
    {
      icon: HeartHandshake,
      title: "Work-Life Balance",
      desc: "Flexible schedules and supportive policies for better productivity.",
    },
    {
      icon: Briefcase,
      title: "Modern Workplace",
      desc: "Work with cutting-edge tools and technologies in real estate.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left">
            <p className="uppercase tracking-[4px] text-blue-200 mb-4">Join Our Team</p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Career With
              <span className="block text-blue-200">Lanaka Property Web</span>
            </h1>

            <p className="mt-6 text-lg text-blue-100">We’re building Sri Lanka’s next-generation property platform.</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button className="bg-white text-[#08306B] px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">View Openings</button>
              <button className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#08306B] transition">Learn More</button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="team"
              className="rounded-3xl shadow-2xl object-cover h-[480px] w-full max-w-md"
            />

            <div className="absolute -bottom-6 -left-6 bg-white text-[#08306B] p-5 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold">120+</h3>
              <p className="text-gray-600 text-sm">Employees</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#08306B]">Why Join Us?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Build your future with a fast-growing real estate tech company.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                    <Icon className="text-[#2171B5]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#08306B]">{item.title}</h3>
                  <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#08306B]">Open Positions</h2>
            <p className="text-gray-600 mt-3">Explore opportunities and grow with us</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div key={i} className="border border-gray-200 rounded-3xl p-6 flex flex-col lg:flex-row justify-between items-center gap-6 hover:shadow-xl transition">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-[#08306B]">{job.title}</h3>

                  <div className="flex gap-6 mt-3 text-gray-600 justify-center lg:justify-start flex-wrap">
                    <span className="flex items-center gap-2"><Clock3 size={16} /> {job.type}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                  </div>
                </div>

                <button className="bg-[#08306B] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#2171B5] transition">Apply Now <ArrowRight size={18} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready To Start Your Journey?</h2>
          <p className="mt-6 text-blue-100">Join Sri Lanka’s fastest-growing property platform.</p>
          <button className="mt-10 bg-white text-[#08306B] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">Apply Today</button>
        </div>
      </section>
    </div>
  );
}
