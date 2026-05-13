import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function PromotePropertyPage() {
  const [form, setForm] = useState({ title: '', location: '', price: '', name: '', phone: '', email: '', description: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSuccess('Your promotion request has been received. We will contact you.')
      setForm({ title: '', location: '', price: '', name: '', phone: '', email: '', description: '' })
    }, 900)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-black text-slate-900">Promote Your Property</h1>
          <p className="mt-2 text-sm text-slate-600">Fill this short form to promote your property across our marketplace and email campaigns.</p>

          {success && (
            <div className="mt-4 rounded-md bg-green-50 border border-green-200 p-4 text-green-800">{success}</div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Property title" className="w-full rounded-lg border px-4 py-3 outline-none" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="location" value={form.location} onChange={handleChange} placeholder="Location (City/Area)" className="rounded-lg border px-4 py-3 outline-none" required />
              <input name="price" value={form.price} onChange={handleChange} placeholder="Price (e.g. Rs. 12,000,000)" className="rounded-lg border px-4 py-3 outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-lg border px-4 py-3 outline-none" required />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-lg border px-4 py-3 outline-none" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-lg border px-4 py-3 outline-none" />
            </div>

            <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Short description / promotion notes" className="w-full rounded-lg border px-4 py-3 outline-none" />

            <div className="flex items-center gap-3">
              <button type="submit" disabled={submitting} className="rounded-md bg-[#2171B5] px-5 py-3 text-white font-semibold hover:bg-[#08306B]">{submitting ? 'Sending...' : 'Submit Promotion'}</button>
              <button type="button" onClick={() => window.location.href = '/post-ad'} className="rounded-md border px-4 py-3">Post regular ad</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}
