'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const res = await fetch('https://formspree.io/f/myklnyaq', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      setStatus('sent')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <main className="pt-40 pb-24">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Get in Touch</p>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-tight mb-6" style={{color:'#5C4A32'}}>
              Let&apos;s begin <em>your journey</em>
            </h1>
            <div className="w-12 h-0.5 bg-[#7A9E7E] mb-6" />
            <p className="text-[0.95rem] text-[#8B7355] mb-10 leading-relaxed">
              Ready to start your practice or have questions? Reach out via WhatsApp for the quickest response.
            </p>
            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Location', value: 'Barnimblick 21, 16356 Ahrensfelde', sub: 'Address shared upon booking' },
                { icon: '📧', label: 'Email', value: 'urja.ramanandi@gmail.com', href: 'mailto:urja.ramanandi@gmail.com' },
                { icon: '📲', label: 'WhatsApp', value: 'Available for bookings & enquiries', href: 'https://wa.me/+4917668954497' },
                { icon: '📸', label: 'Instagram', value: '@urja.ramanandi', href: 'https://instagram.com/urja.ramanandi' },
              ].map(d => (
                <div key={d.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8F0E9] flex items-center justify-center shrink-0 text-base">{d.icon}</div>
                  <div>
                    <p className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-[#526B55] mb-0.5">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[0.9rem] text-[#8B7355] hover:text-[#526B55] transition-colors">{d.value}</a>
                    ) : (
                      <p className="text-[0.9rem] text-[#8B7355]">{d.value}{d.sub && <><br /><em className="text-[0.78rem] opacity-70">{d.sub}</em></>}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#3D3028] rounded-xl p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {[['First Name','Anna','first-name'],['Last Name','Schmidt','last-name']].map(([label, ph, name]) => (
                <div key={name}>
                  <label className="block text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[#A8C5AB] mb-2">{label}</label>
                  <input name={name} type="text" placeholder={ph} required={name === 'first-name'} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[0.9rem] text-[#F7F2EA] placeholder:text-[#DDD0BB]/40 focus:outline-none focus:border-[#7A9E7E] transition-colors" />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[#A8C5AB] mb-2">Email</label>
              <input name="email" type="email" placeholder="anna@example.com" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[0.9rem] text-[#F7F2EA] placeholder:text-[#DDD0BB]/40 focus:outline-none focus:border-[#7A9E7E] transition-colors" />
            </div>
            <div>
              <label className="block text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[#A8C5AB] mb-2">I&apos;m interested in</label>
              <select name="interest" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[0.9rem] text-[#F7F2EA] focus:outline-none focus:border-[#7A9E7E] transition-colors">
                <option value="" className="bg-[#3D3028]">Select a class...</option>
                <option className="bg-[#3D3028]">Hatha Yoga — Online</option>
                <option className="bg-[#3D3028]">Hatha Yoga — In Studio</option>
                <option className="bg-[#3D3028]">Deep Relaxation (Yin + Sound)</option>
                <option className="bg-[#3D3028]">Personal Session</option>
                <option className="bg-[#3D3028]">Private Sound Bath</option>
              </select>
            </div>
            <div>
              <label className="block text-[0.68rem] font-medium tracking-[0.1em] uppercase text-[#A8C5AB] mb-2">Message</label>
              <textarea name="message" rows={4} placeholder="Tell me a bit about yourself and what you're looking for..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[0.9rem] text-[#F7F2EA] placeholder:text-[#DDD0BB]/40 focus:outline-none focus:border-[#7A9E7E] transition-colors resize-y" />
            </div>

            {status === 'sent' && (
              <div className="px-4 py-3 rounded-lg bg-[#E8F0E9] text-[#526B55] text-[0.85rem]">
                Message sent — I&apos;ll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="px-4 py-3 rounded-lg bg-red-900/20 text-red-300 text-[0.85rem]">
                Something went wrong. Please try again or reach out via WhatsApp.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-3 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:bg-[#526B55] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
