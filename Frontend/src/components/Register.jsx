import { useState } from 'react'
import { registerUser } from '../utils/auth'

export default function Register({ onSwitchToLogin }) {
  const [userType, setUserType] = useState('owner')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    acceptTerms: false,
    newsletter: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.acceptTerms) {
      setError('Please accept the terms and conditions')
      return
    }

    setLoading(true)
    const doRegister = async () => {
      try {
        const payload = {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone || null,
          user_type: userType || null,
        }
        await registerUser(payload)
        setSuccess('Account created successfully')
        window.dispatchEvent(new Event('storage'))
        setFormData({ fullName: '', email: '', password: '', phone: '', acceptTerms: false, newsletter: false })
      } catch (err) {
        setError(err.message || 'Registration failed')
      } finally {
        setLoading(false)
      }
    }

    doRegister()
  }

  // Google registration not connected in this build

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#123B44] via-[#2A6F86] to-[#163E4A]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_14%,transparent_14%_100%),linear-gradient(315deg,rgba(255,255,255,0.06)_0_22%,transparent_22%_100%)]"></div>
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[30rem] w-[30rem] rotate-12 rounded-[4rem] bg-white/12 shadow-[0_0_80px_rgba(255,255,255,0.12)]"></div>
      <div className="pointer-events-none absolute top-32 right-[8rem] h-56 w-[18rem] rotate-12 rounded-[3rem] bg-white/18"></div>
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-white/10"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-r from-white/20 via-white/8 to-transparent"></div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-3 py-2 sm:px-4 sm:py-3">
                  <div className="w-full max-w-sm">
          {/* Card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-3.5 sm:p-4">
            <h1 className="mb-1 text-2xl font-bold text-[#123B44] sm:text-3xl">Register Here</h1>
                  <p className="mb-4 text-sm text-gray-600 sm:mb-5 sm:text-base">Create your Lanka Property account</p>

                  <form onSubmit={handleRegister} className="space-y-1.5 sm:space-y-2">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              {/* User Type Selection */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#123B44]">I am an</label>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
                  {['Owner', 'Agent', 'Developer', 'Buyer', 'Business'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setUserType(type.toLowerCase())}
                      className={`rounded-lg border-2 px-3 py-1 text-sm font-semibold transition ${
                        userType === type.toLowerCase()
                          ? 'border-[#2A6F86] bg-[#2A6F86]/10 text-[#2A6F86]'
                          : 'border-[#2A6F86] text-[#2A6F86] hover:bg-[#2A6F86]/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="mb-0.5 block text-sm font-semibold text-[#123B44]">Your name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-1 outline-none transition focus:border-[#2A6F86] focus:ring-2 focus:ring-[#2A6F86]/20"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-0.5 block text-sm font-semibold text-[#123B44]">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-1 outline-none transition focus:border-[#2A6F86] focus:ring-2 focus:ring-[#2A6F86]/20"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-0.5 block text-sm font-semibold text-[#123B44]">Create Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-1 outline-none transition focus:border-[#2A6F86] focus:ring-2 focus:ring-[#2A6F86]/20"
                  required
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-1">
                <label className="flex items-start gap-2 sm:items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-600">Subscribe to our Newsletter and email alerts</span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 mt-0.5"
                  />
                  <span className="text-sm text-gray-600">
                    I have read, understood and accept{' '}
                    <a href="#" className="text-[#2A6F86] hover:text-[#123B44] font-medium">
                      Terms & Condition
                    </a>
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2A6F86] to-[#123B44] py-1.5 font-bold text-white transition hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'REGISTERING...' : 'CLICK TO REGISTER'}
              </button>
            </form>

            {/* Social registration removed per request */}

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-[#2A6F86] font-bold hover:text-[#123B44] transition"
                >
                  LOGIN HERE
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
