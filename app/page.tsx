import Link from 'next/link'
import Image from 'next/image'
import Offerings from '@/components/Offerings'

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="min-h-screen grid md:grid-cols-2 items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(122,158,126,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(139,115,85,0.08) 0%, transparent 60%)'}} />
        </div>
        <div className="relative z-10 px-8 md:px-16 py-20">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-[#7A9E7E]" />
            <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[#526B55]">Yoga & Sound</span>
          </div>
          <h1 className="font-serif text-[clamp(3rem,6.5vw,5.2rem)] font-light leading-[1.1] text-[#5C4A32] mb-6">
            A journey into<br />
            <em className="text-[#526B55]">stillness & strength.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] max-w-md mb-3 leading-[1.8]">
            Through hatha, yin, pranayama & sound, I guide you back to calm, stillness, and yourself.
          </p>
          <p className="text-[0.82rem] text-[#8B7355] italic opacity-70 mb-10">
            Traditional practice. Small groups. Full attention.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/schedule" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:bg-[#526B55] hover:-translate-y-0.5 transition-all">
              See Schedule
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#DDD0BB] text-[#5C4A32] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:border-[#7A9E7E] hover:text-[#526B55] hover:-translate-y-0.5 transition-all">
              My Story
            </Link>
          </div>
        </div>
        <div className="relative h-screen overflow-hidden">
          <img
            src="/images/studio.jpg"
            alt="Urja Yoga studio"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2EA] via-[#F7F2EA]/20 to-transparent" />
        </div>
      </section>


      <Offerings />

      {/* ── TESTIMONIALS ── (commented out)
      <section className="bg-[#F7F2EA] py-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-3">Kind Words</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#5C4A32]">What students say</h2>
          </div>
        </div>
      </section>
      */}

      {/* ── CTA BAND ── */}
      <section className="bg-[#3D3028] py-20 text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-[#F7F2EA] mb-4">Ready to begin?</h2>
          <p className="text-[0.95rem] text-[#DDD0BB] mb-8 leading-relaxed">Try your first class for €8 online or €10 in studio. No experience needed.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/schedule" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:bg-[#526B55] hover:-translate-y-0.5 transition-all">
              View Schedule
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#DDD0BB]/30 text-[#DDD0BB] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:border-[#7A9E7E] hover:text-[#A8C5AB] transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
