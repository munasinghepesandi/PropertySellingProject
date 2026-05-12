import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function HelpPage() {
  const handleSupportSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim() || 'Website visitor';
    const email = formData.get('email')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || 'Need help with my request.';
    const subject = encodeURIComponent('Help page support request');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email || 'Not provided'}\nPhone: ${phone || 'Not provided'}\n\n${message}`);
    window.location.href = `mailto:info@lankapropertyweb.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(8,48,107,0.06)] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Help & Support</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-900">Need help with your request?</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Find answers to common questions, contact our support team, or request assistance with valuations, property posts, and service requests.
          </p>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 md:p-8">
              <h2 className="text-xl font-black text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                <details className="rounded-2xl border border-[#d9e8f6] bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer font-bold text-slate-800">How do I post a property?</summary>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Click "Post Your Ad" in the top right, fill in the property information and photos, then publish.</p>
                </details>

                <details className="rounded-2xl border border-[#d9e8f6] bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer font-bold text-slate-800">How are prices calculated for the index?</summary>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Average prices are based on active property ads and are updated using our report data and market analysis.</p>
                </details>

                <details className="rounded-2xl border border-[#d9e8f6] bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer font-bold text-slate-800">How do I contact the Buyer & Seller Assistance team?</summary>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Use the support form on this page or email info@lankapropertyweb.com.</p>
                </details>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-6 text-white shadow-[0_18px_45px_rgba(8,48,107,0.12)] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">Contact Support</p>
              <h2 className="mt-3 text-2xl font-black">Send us a message</h2>
              <p className="mt-3 text-sm leading-7 text-white/90">We’ll get back to you within one business day.</p>

              <form className="mt-6 grid gap-3" onSubmit={handleSupportSubmit}>
                <input name="name" className="rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-white" placeholder="Your name" />
                <input name="email" className="rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-white" placeholder="Email address" />
                <input name="phone" className="rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-white" placeholder="Phone (optional)" />
                <textarea name="message" className="rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-white" rows={5} placeholder="Tell us how we can help" />
                <div className="flex flex-wrap items-center gap-3">
                  <button type="submit" className="rounded-xl bg-white px-5 py-3 font-bold text-[#08306B] transition hover:shadow-lg">Send message</button>
                  <button type="button" onClick={() => { window.location.href = 'tel:+94771234567'; }} className="rounded-xl border border-white px-5 py-3 font-bold text-white transition hover:bg-white/10">Call +94 77 123 4567</button>
                </div>
              </form>

              <div className="mt-6 grid gap-3 text-sm text-white/90">
                <p><strong className="text-white">Office:</strong> Colombo, Sri Lanka</p>
                <p><strong className="text-white">Email:</strong> info@lankapropertyweb.com</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
