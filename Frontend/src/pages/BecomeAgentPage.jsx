import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'

export default function BecomeAgentPage() {
  const navigate = useNavigate()
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleChange = (e) => setContact(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess('Thanks — we will contact you shortly')
      setContact({ name: '', email: '', phone: '', message: '' })
    }, 900)
  }

  // Key metrics for visualization
  const metrics = [
    { label: 'Agents Active', value: '2,500+' },
    { label: 'Listings Posted', value: '50,000+' },
    { label: 'Avg. Lead Time', value: '2 hrs' },
  ]

  // Benefits data with progress bars
  const benefits = [
    { title: 'Higher Visibility', pct: 85, desc: 'Featured ads get 3000% more views' },
    { title: 'Lead Generation', pct: 92, desc: 'Qualified buyers reach out directly' },
    { title: 'Time Savings', pct: 78, desc: 'Automate posting with white-label site' },
  ]

  // Package features
  const packages = [
    { 
      name: 'Pro', 
      price: 'Rs 19,900', 
      subtext: '/month',
      border: 'border-2 border-[#2171B5]',
      bg: 'bg-white',
      features: ['Concurrent ads: 20', '2 Phone Numbers', '2 WhatsApp Live Chat', 'Free Website', 'Basic Analytics']
    },
    { 
      name: 'Plus', 
      price: 'Custom', 
      subtext: 'price',
      border: 'border border-blue-200',
      bg: 'bg-[#f8fbff]',
      features: ['Concurrent ads: 50', 'Ad stats & Insights', 'Free Boosts', 'Priority Support', '5% Commission Discount']
    },
    { 
      name: 'Ultimate', 
      price: 'Custom', 
      subtext: 'price',
      border: 'border border-blue-200',
      bg: 'bg-white',
      features: ['Concurrent ads: 500', 'Dedicated Account Manager', 'Branded Website', '24/7 Support', '10% Commission Discount']
    },
  ]

  const addOns = [
    { title: 'Featured Ad', icon: '✦', desc: 'Up to 3000% visibility boost' },
    { title: 'Showcase Ad', icon: '◆', desc: 'Homepage placement' },
    { title: 'Platinum Ad', icon: '★', desc: '30-day top placement' },
    { title: 'Boosting', icon: '▲', desc: 'Move to top immediately' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#08306B] to-[#2171B5] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Grow Your Real Estate Business</h1>
          <p className="text-lg text-blue-100 max-w-3xl">Join 2,500+ agents using LankaPropertyWeb to reach buyers, manage listings, and close deals faster.</p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-[#f0f5fb] py-16 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-5xl font-extrabold text-[#08306B]">{m.value}</div>
                <div className="text-gray-700 mt-3 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Progress Bars */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#08306B] mb-16 text-center">Why Join LankaPropertyWeb?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-xl border border-[#e0ecf7] hover:shadow-lg transition">
                <h3 className="font-bold text-[#08306B] text-lg mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{benefit.desc}</p>
                <div className="bg-[#f0f5fb] rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#2171B5] to-[#08306B] h-full rounded-full transition-all duration-500"
                    style={{ width: `${benefit.pct}%` }}
                  />
                </div>
                <div className="text-right mt-3 text-sm font-bold text-[#2171B5]">{benefit.pct}% of agents</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#08306B] mb-14 text-center">Premium Add-ons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((add) => (
              <div key={add.title} className="bg-white rounded-xl p-8 text-center border border-blue-100 hover:border-[#2171B5] transition">
                <div className="text-5xl mb-4">{add.icon}</div>
                <h4 className="font-bold text-[#08306B] text-lg">{add.title}</h4>
                <p className="text-sm text-gray-600 mt-3">{add.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison with Check marks */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#08306B] mb-16 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`${pkg.bg} ${pkg.border} rounded-xl p-8`}>
                <h3 className="text-2xl font-bold text-[#08306B]">{pkg.name}</h3>
                <div className="mt-4">
                  <div className="text-4xl font-extrabold text-[#2171B5]">{pkg.price}</div>
                  <div className="text-sm text-gray-500 font-medium">{pkg.subtext}</div>
                </div>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#2171B5] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#f0f5fb]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#08306B] mb-14 text-center">What Our Agents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-l-4 border-[#2171B5] shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-xl">⭐</span>)}
              </div>
              <p className="text-gray-700 italic mb-6">"We increased sales by 45% in just 6 months using their featured ads."</p>
              <div className="font-bold text-[#08306B]">Thilina Abeysuriya</div>
              <div className="text-sm text-gray-600">Straight Sale (Pvt) Ltd</div>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-[#08306B] shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-xl">⭐</span>)}
              </div>
              <p className="text-gray-700 italic mb-6">"The leads are highly qualified. We close deals 2x faster here than anywhere else."</p>
              <div className="font-bold text-[#08306B]">Mohamed</div>
              <div className="text-sm text-gray-600">Linea Property</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl p-10 border border-blue-200">
            <h2 className="text-2xl font-bold text-[#08306B] mb-8">Get Started Today</h2>
            {success && (
              <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-6 font-medium">
                {success}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  name="name" 
                  value={contact.name} 
                  onChange={handleChange} 
                  placeholder="Full Name" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2171B5]" 
                  required 
                />
                <input 
                  name="email" 
                  value={contact.email} 
                  onChange={handleChange} 
                  placeholder="Email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2171B5]" 
                  required 
                />
              </div>
              <input 
                name="phone" 
                value={contact.phone} 
                onChange={handleChange} 
                placeholder="Phone Number" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2171B5]" 
              />
              <textarea 
                name="message" 
                value={contact.message} 
                onChange={handleChange} 
                placeholder="Tell us about your business..." 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2171B5]" 
                rows={4} 
              />
              <div className="flex gap-3 pt-2">
                <button 
                  className="flex-1 bg-[#08306B] hover:bg-[#062852] text-white py-3 rounded-lg font-semibold transition disabled:opacity-60" 
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Contact Sales'}
                </button>
                <button 
                  type="button" 
                  onClick={() => navigate('/find-agent')} 
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
