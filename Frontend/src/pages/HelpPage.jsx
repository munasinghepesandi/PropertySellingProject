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
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-[1800px] px-5 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-slate-900">Help & Support</h1>
          <p className="mt-3 text-slate-600">Find answers to common questions, contact our support team, or request valuation assistance.</p>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                <details className="rounded-md border border-slate-100 p-4">
                  <summary className="font-semibold">How do I post a property?</summary>
                  <p className="mt-2 text-sm text-slate-600">Click "Post Your Ad" in the top right, fill in the property information and photos, then publish.</p>
                </details>

                <details className="rounded-md border border-slate-100 p-4">
                  <summary className="font-semibold">How are prices calculated for the index?</summary>
                  <p className="mt-2 text-sm text-slate-600">Average prices are based on active property ads on LankaPropertyWeb and are updated quarterly using our outlier-robust algorithm.</p>
                </details>

                <details className="rounded-md border border-slate-100 p-4">
                  <summary className="font-semibold">How do I contact the Buyer & Seller Assistance team?</summary>
                  <p className="mt-2 text-sm text-slate-600">Use the Contact Team button on the Our Services page or email info@lankapropertyweb.com.</p>
                </details>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">Contact Support</h2>
              <p className="mt-3 text-sm text-slate-600">Need additional help? Send us a message and we'll get back to you within one business day.</p>

              <form className="mt-6 grid gap-3" onSubmit={handleSupportSubmit}>
                <input name="name" className="rounded-lg border border-slate-200 p-3" placeholder="Your name" />
                <input name="email" className="rounded-lg border border-slate-200 p-3" placeholder="Email address" />
                <input name="phone" className="rounded-lg border border-slate-200 p-3" placeholder="Phone (optional)" />
                <textarea name="message" className="rounded-lg border border-slate-200 p-3" rows={5} placeholder="Tell us how we can help" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="rounded-lg bg-[#2171B5] px-4 py-2 text-white font-semibold">Send message</button>
                  <button type="button" onClick={() => { window.location.href = 'tel:+94771234567'; }} className="rounded-lg border px-4 py-2">Call +94 77 123 4567</button>
                </div>
              </form>

              <div className="mt-6 text-sm text-slate-600">
                <p><strong>Office:</strong> Colombo, Sri Lanka</p>
                <p><strong>Email:</strong> info@lankapropertyweb.com</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
