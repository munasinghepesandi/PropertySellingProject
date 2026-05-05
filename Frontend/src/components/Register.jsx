import { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

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
    setTimeout(() => {
      console.log('Register:', { userType, ...formData })
      setSuccess('Account created successfully! Please check your email to verify.')
      setLoading(false)
      setFormData({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        acceptTerms: false,
        newsletter: false,
      })
    }, 1000)
  }

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Registration Success:', credentialResponse)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_14%,transparent_14%_100%),linear-gradient(315deg,rgba(255,255,255,0.06)_0_22%,transparent_22%_100%)]"></div>
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[30rem] w-[30rem] rotate-12 rounded-[4rem] bg-white/12 shadow-[0_0_80px_rgba(255,255,255,0.12)]"></div>
      <div className="pointer-events-none absolute top-32 right-[8rem] h-56 w-[18rem] rotate-12 rounded-[3rem] bg-white/18"></div>
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-white/10"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-r from-white/20 via-white/8 to-transparent"></div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-3 py-2 sm:px-4 sm:py-3">
                  <div className="w-full max-w-sm">
          {/* Card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-3.5 sm:p-4">
            <h1 className="mb-1 text-2xl font-bold text-[#08306B] sm:text-3xl">Register Here</h1>
                  <p className="mb-4 text-sm text-gray-600 sm:mb-5 sm:text-base">Create your Lanka Property account</p>

                  <form onSubmit={handleRegister} className="space-y-1.5 sm:space-y-2">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              {/* User Type Selection */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#08306B]">I am an</label>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
                  {['Owner', 'Agent', 'Developer', 'Buyer', 'Business'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setUserType(type.toLowerCase())}
                      className={`rounded-lg border-2 px-3 py-1 text-sm font-semibold transition ${
                        userType === type.toLowerCase()
                          ? 'border-[#2171B5] bg-[#2171B5]/10 text-[#2171B5]'
                          : 'border-[#2171B5] text-[#2171B5] hover:bg-[#2171B5]/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="mb-0.5 block text-sm font-semibold text-[#08306B]">Your name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-1 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-0.5 block text-sm font-semibold text-[#08306B]">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-1 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-0.5 block text-sm font-semibold text-[#08306B]">Create Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-1 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
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
                    <a href="#" className="text-[#2171B5] hover:text-[#08306B] font-medium">
                      Terms & Condition
                    </a>
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2171B5] to-[#08306B] py-1.5 font-bold text-white transition hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'REGISTERING...' : 'CLICK TO REGISTER'}
              </button>
            </form>

            <div className="my-1.5 flex items-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-1 gap-2 mb-2 sm:grid-cols-2">
              <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white py-1 font-semibold text-gray-700 transition hover:border-blue-500">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white py-1 font-semibold text-gray-700 transition hover:border-blue-600">
                <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-[#2171B5] font-bold hover:text-[#08306B] transition"
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
