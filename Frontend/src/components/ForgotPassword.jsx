import { useState } from 'react'

export default function ForgotPassword({ onBackToLogin }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    setTimeout(() => {
      setLoading(false)
      setMessage('Password reset link has been sent to your email address.')
      setEmail('')
    }, 1000)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_14%,transparent_14%_100%),linear-gradient(315deg,rgba(255,255,255,0.06)_0_22%,transparent_22%_100%)]"></div>
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[30rem] w-[30rem] rotate-12 rounded-[4rem] bg-white/12 shadow-[0_0_80px_rgba(255,255,255,0.12)]"></div>
      <div className="pointer-events-none absolute top-32 right-[8rem] h-56 w-[18rem] rotate-12 rounded-[3rem] bg-white/18"></div>
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-white/10"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-r from-white/20 via-white/8 to-transparent"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-3 py-3 sm:px-4 sm:py-4">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm sm:p-6 md:p-7">
            <div className="mb-6 text-center">
              <h1 className="mb-1 text-2xl font-bold text-[#08306B] sm:text-3xl">Forgot Password</h1>
              <p className="text-sm text-gray-600 sm:text-base">Enter your email to receive a reset link</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {message && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {message}
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#08306B]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] py-2.5 font-bold text-white transition hover:shadow-lg hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'SENDING...' : 'SEND RESET LINK'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={onBackToLogin}
                className="font-bold text-[#2171B5] transition hover:text-[#08306B]"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
