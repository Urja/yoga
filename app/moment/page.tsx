import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Moment for You',
  description: 'A complimentary 30-minute personal conversation — a space to pause, share and be heard. Introductory offering from Urja Yoga & Sound, Berlin.',
  alternates: { canonical: 'https://www.urja.yoga/moment' },
  openGraph: { title: 'A Moment for You · Urja Yoga & Sound', description: 'A complimentary 30-minute personal conversation — a space to pause, share and be heard.', url: 'https://www.urja.yoga/moment' },
}

export default function MomentPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Urja Yoga & Sound</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            A Moment<br /><em>for You.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            A space to pause, share and be heard.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-6 text-[0.97rem] text-[#8B7355] leading-[1.85]">

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl px-6 py-5">
            <p className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-1">Introductory Offering</p>
            <p className="font-serif text-[1.4rem] font-light text-[#5C4A32]">30-Minute Personal Conversation</p>
            <p className="text-[0.85rem] text-[#526B55] font-medium mt-1">Complimentary</p>
            <p className="text-[0.78rem] text-[#8B7355] mt-2">Limited introductory appointments · No obligation</p>
          </div>

          <p>
            Life doesn't always come with clear answers. Sometimes we need a listening ear, a new perspective, or simply some time to reconnect with ourselves.
          </p>

          <p>
            Through Urja Yoga & Sound, I'm introducing a personal space for mindful conversations — whether about life's challenges, yoga, spirituality, or anything you'd like to share.
          </p>

          <p>
            I am currently welcoming a limited number of introductory conversations at no charge. Future sessions may be offered as a paid service. There is no obligation to continue.
          </p>

          <p className="text-[0.82rem] text-[#8B7355] italic border-l-2 border-[#DDD0BB] pl-4">
            These conversations are a personal and supportive space — they are not therapy, counselling, or a substitute for professional mental health support.
          </p>

          <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl p-6 mt-4">
            <p className="font-medium text-[#5C4A32] mb-1">Reserve your conversation</p>
            <p className="text-[0.85rem] text-[#8B7355] mb-5">Write to me with a few words about what you'd like to talk about. I'll get back to you within 24 hours to arrange a time.</p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:urjaramanandi@gmail.com?subject=A%20Moment%20for%20Me"
                className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all whitespace-nowrap"
              >
                Write to me by Email
              </a>
              <a
                href="https://wa.me/+4917668954497?text=Hi%20Urja%2C%20I%20would%20like%20to%20reserve%20a%20moment%20for%20a%20personal%20conversation."
                target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-[#7A9E7E] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#E8F0E9] transition-all whitespace-nowrap"
              >
                📲 WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
