import React from 'react'

export default function MorePage({ title }) {
  const displayTitle = title || (typeof window !== 'undefined' ? decodeURIComponent(window.location.pathname.split('/').slice(-1)[0]).replace(/-/g, ' ') : 'More')
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-slate-800">{displayTitle}</h1>
      <p className="mt-4 text-slate-600">This is a placeholder page for "{displayTitle}" — content coming soon.</p>
    </main>
  )
}
