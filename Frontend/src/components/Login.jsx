import { useState } from 'react'


const AUTH_STORAGE_KEY = 'lanka_property_current_user'

function readStoredUsers() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedUsers = window.localStorage.getItem('lanka_property_registered_users')
    return storedUsers ? JSON.parse(storedUsers) : []
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return []
  }
}

export default function Login({ onSwitchToRegister, onSwitchToForgot, openProperty }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    // Simulate API call
    setTimeout(() => {
      const matchingUser = readStoredUsers().find((user) => user.email?.toLowerCase() === email.toLowerCase())
      const currentUser = {
        fullName: matchingUser?.fullName || (email ? email.split('@')[0] : ''),
        email,
      }

      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser))
      window.dispatchEvent(new Event('storage'))
      setLoading(false)
      // After successful login, open property details (uses sample if no prop passed)
      if (typeof openProperty === 'function') openProperty()
    }, 1000)
  }

  // eslint-disable-next-line no-unused-vars
  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse)
  }

  // eslint-disable-next-line no-unused-vars
  const handleFacebookLogin = (response) => {
    console.log('Facebook Login Success:', response)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#123B44] via-[#2A6F86] to-[#163E4A]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_14%,transparent_14%_100%),linear-gradient(315deg,rgba(255,255,255,0.06)_0_22%,transparent_22%_100%)]"></div>
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[30rem] w-[30rem] rotate-12 rounded-[4rem] bg-white/12 shadow-[0_0_80px_rgba(255,255,255,0.12)]"></div>
      <div className="pointer-events-none absolute top-32 right-[8rem] h-56 w-[18rem] rotate-12 rounded-[3rem] bg-white/18"></div>
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-white/10"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-r from-white/20 via-white/8 to-transparent"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-3 py-3 sm:px-4 sm:py-4">
        <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-6">
          {/* Left Section - Hidden on mobile */}
          <div className="hidden md:block text-white">
            <h2 className="mb-4 text-5xl font-bold lg:text-6xl">Welcome to Lanka Property</h2>
            <p className="mb-8 text-lg text-white/80 lg:text-xl">Find your perfect home with us. Sign in to explore amazing properties.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Browse thousands of properties</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Connect with property experts</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Secure and trusted transactions</span>
              </div>
            </div>
          </div>

          {/* Right Section - Login Card */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm sm:p-6 md:p-7">
              <h1 className="mb-1 text-2xl font-bold text-[#123B44] sm:text-3xl">Login Here</h1>
              <p className="mb-5 text-sm text-gray-600 sm:mb-6 sm:text-base">Sign in to your account</p>

              <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#123B44]">Email / Username</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-[#2A6F86] focus:ring-2 focus:ring-[#2A6F86]/20"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#123B44]">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-[#2A6F86] focus:ring-2 focus:ring-[#2A6F86]/20"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={onSwitchToForgot}
                    className="text-sm text-[#2A6F86] hover:text-[#123B44] font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#2A6F86] to-[#123B44] py-2.5 font-bold text-white transition hover:shadow-lg hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? 'SIGNING IN...' : 'CLICK TO LOGIN'}
                </button>
              </form>

              {/* Social login removed per request */}

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={onSwitchToRegister}
                    className="text-[#2A6F86] font-bold hover:text-[#123B44] transition"
                  >
                    REGISTER HERE
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
