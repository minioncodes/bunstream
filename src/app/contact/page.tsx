'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div className="mx-auto max-w-2xl py-10">
      <h1 className="text-3xl font-bold">Contact sales & support</h1>
      <p className="mt-2 text-gray-600">Fill out the form and we’ll reach out within 24 hours. Replace with your CRM/Helpdesk.</p>
      {!sent ? (
        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <input className="w-full rounded-2xl border border-gray-300 p-3" placeholder="Full name" required />
          <input className="w-full rounded-2xl border border-gray-300 p-3" placeholder="Email address" type="email" required />
          <input className="w-full rounded-2xl border border-gray-300 p-3" placeholder="Phone (optional)" />
          <textarea className="w-full rounded-2xl border border-gray-300 p-3" placeholder="How can we help?" rows={5} />
          <button className="btn btn-primary w-full" type="submit">Send</button>
        </form>
      ) : (
        <div className="mt-6 rounded-2xl bg-green-50 p-4 text-green-800 ring-1 ring-green-200">Thanks! We’ll be in touch shortly.</div>
      )}
      <p className="mt-6 text-xs text-gray-500">By submitting, you agree to our <a className="underline" href="/terms">Terms</a> and <a className="underline" href="/privacy">Privacy Policy</a>.</p>
    </div>
  )
}
