import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import Navbar from '../components/Navbar'


export default function BecomeAgentPage() {
  const navigate = useNavigate()
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleChange = (e) =>
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess('')

    try {
      const apiBase = "http://localhost:5000"; 
      const response = await fetch(`${apiBase}/api/agents`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      })

      const result = await response.json()

      if (!response.ok) throw new Error(result.message || 'Submission failed')

      setSuccess('Thanks — your application has been submitted successfully!')
      setContact({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  const metrics = [
    { label: 'Agents Active', value: '2,500+' },
    { label: 'Listings Posted', value: '50,000+' },
    { label: 'Avg. Lead Time', value: '2 hrs' },
  ]

  const benefits = [
    { title: 'Higher Visibility', pct: 85, desc: 'Featured ads get 3000% more views' },
    { title: 'Lead Generation', pct: 92, desc: 'Qualified buyers reach out directly' },
    { title: 'Time Savings', pct: 78, desc: 'Automate posting with white-label site' },
  ]

  const packages = [
    {
      name: 'Pro',
      price: 'Rs 19,900',
      subtext: '/month',
      border: 'border-2 border-[#203F52]',
      bg: 'bg-white',
      features: ['Concurrent ads: 20', '2 Phone Numbers', 'WhatsApp Chat', 'Free Website', 'Basic Analytics']
    },
    {
      name: 'Plus',
      price: 'Custom',
      subtext: 'price',
      border: 'border border-[#2A6FA3]',
      bg: 'bg-[#EAEAEA]',
      features: ['Concurrent ads: 50', 'Ad stats', 'Free Boosts', 'Priority Support', 'Discounts']
    },
    {
      name: 'Ultimate',
      price: 'Custom',
      subtext: 'price',
      border: 'border border-[#B8B8B8]',
      bg: 'bg-white',
      features: ['500 Ads', 'Account Manager', 'Branded Website', '24/7 Support', 'Premium Discount']
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A4A]">
      <Navbar />

      {/* HERO */}
      <section className="bg-linear-to-r from-[#203F52] to-[#2D4F63] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Grow Your Real Estate Business
          </h1>
          <p className="text-lg text-[#EAEAEA] max-w-3xl">
            Join 2,500+ agents using LankaPropertyWeb.
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-[#EAEAEA] py-16 border-b border-[#B8B8B8]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {metrics.map(m => (
            <div key={m.label}>
              <div className="text-5xl font-extrabold text-[#203F52]">
                {m.value}
              </div>
              <div className="mt-2 text-[#4A4A4A]">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#203F52] text-center mb-14">
            Why Join Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(b => (
              <div key={b.title} className="bg-white border border-[#EAEAEA] p-8 rounded-xl">
                <h3 className="font-bold text-[#203F52]">{b.title}</h3>
                <p className="text-sm text-[#4A4A4A] mt-2">{b.desc}</p>

                <div className="h-3 bg-[#EAEAEA] rounded-full mt-5 overflow-hidden">
                  <div
                    className="h-full bg-[#2A6FA3]"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>

                <div className="text-right text-sm mt-2 text-[#2A6FA3] font-bold">
                  {b.pct}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 bg-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#203F52] text-center mb-14">
            Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <div key={pkg.name} className={`${pkg.bg} ${pkg.border} p-8 rounded-xl`}>
                <h3 className="text-2xl font-bold text-[#203F52]">{pkg.name}</h3>
                <div className="text-3xl font-extrabold text-[#2A6FA3] mt-4">
                  {pkg.price}
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-[#556B4E]" size={18} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#EAEAEA] p-10 rounded-xl">
            <h2 className="text-2xl font-bold text-[#203F52] mb-6">
              Get Started
            </h2>

            {success && (
              <div className="mb-4 p-3 bg-[#EAEAEA] text-[#203F52] rounded">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border border-[#B8B8B8] p-3 rounded"
              />

              <input
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-[#B8B8B8] p-3 rounded"
              />

              <input
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="Mobile"
                className="w-full border border-[#B8B8B8] p-3 rounded"
              />

              <button
                disabled={loading}
                className="w-full bg-[#203F52] text-white py-3 rounded hover:bg-[#2D4F63]"
              >
                {loading ? 'Sending...' : 'Become an Agent'}
              </button>

              <button
                type="button"
                onClick={() => navigate('/find-agent')}
                className="w-full border border-[#B8B8B8] py-3 rounded"
              >
                Back
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}