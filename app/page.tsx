import Link from 'next/link'
import Image from 'next/image'

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
            <em className="text-[#526B55]">calm & stillness.</em>
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

      {/* ── PHILOSOPHY ── */}
      <section className="bg-[#5C4A32] py-20 text-center">
        <div className="max-w-[1100px] mx-auto px-8">
          <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] font-light italic text-[#F7F2EA] max-w-2xl mx-auto leading-relaxed mb-5">
            "This is not fitness yoga with a different name. It is the practice as it was before it became a format."
          </blockquote>
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[#A8C5AB]">— Urja Yoga Philosophy</p>
          <div className="flex justify-center gap-12 mt-10 flex-wrap">
            {[
              { name: 'Hatha Yoga', icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto mb-2">
                  {/* sun */}
                  <circle cx="12" cy="16" r="4.5" stroke="#A8C5AB" strokeWidth="1.5"/>
                  {[0,45,90,135,180,225,270,315].map(a => {
                    const r = Math.PI*a/180, x1=12+7*Math.cos(r), y1=16+7*Math.sin(r), x2=12+9*Math.cos(r), y2=16+9*Math.sin(r)
                    return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A8C5AB" strokeWidth="1.5" strokeLinecap="round"/>
                  })}
                  {/* crescent */}
                  <path d="M22 10 a6 6 0 1 0 0 12 a4 4 0 1 1 0-12z" fill="#A8C5AB" opacity="0.85"/>
                </svg>
              )},
              { name: 'Yin', icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto mb-2">
                  <path d="M16 4 C10 4 6 9 6 14 C6 18 8 21 12 22.5 C9 23.5 7 26 7 28 L25 28 C25 26 23 23.5 20 22.5 C24 21 26 18 26 14 C26 9 22 4 16 4Z" stroke="#A8C5AB" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
                  <path d="M16 4 C16 4 16 14 16 28" stroke="#A8C5AB" strokeWidth="1" opacity="0.4"/>
                </svg>
              )},
              { name: 'Pranayama', icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto mb-2">
                  {/* seated figure */}
                  <circle cx="16" cy="7" r="3" stroke="#A8C5AB" strokeWidth="1.5"/>
                  {/* body */}
                  <path d="M16 10 L16 18" stroke="#A8C5AB" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* arms out in mudra */}
                  <path d="M8 14 L16 12 L24 14" stroke="#A8C5AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* crossed legs */}
                  <path d="M16 18 L9 24 M16 18 L23 24" stroke="#A8C5AB" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* breath waves above head */}
                  <path d="M11 3 Q12.5 1.5 14 3" stroke="#A8C5AB" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
                  <path d="M18 3 Q19.5 1.5 21 3" stroke="#A8C5AB" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
                </svg>
              )},
              { name: 'Sound Healing', icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto mb-2">
                  {/* himalayan bowl — wide shallow ellipse */}
                  <path d="M6 18 Q7 23 16 24 Q25 23 26 18 Z" stroke="#A8C5AB" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                  {/* bowl rim ellipse */}
                  <ellipse cx="16" cy="18" rx="10" ry="2.5" stroke="#A8C5AB" strokeWidth="1.5"/>
                  {/* base stem */}
                  <line x1="16" y1="24" x2="16" y2="27" stroke="#A8C5AB" strokeWidth="1.5" strokeLinecap="round"/>
                  <ellipse cx="16" cy="27" rx="4" ry="1" stroke="#A8C5AB" strokeWidth="1.2"/>
                  {/* sound waves */}
                  <path d="M11 14 Q13 11 11 8" stroke="#A8C5AB" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M16 13 Q18 10 16 7" stroke="#A8C5AB" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M21 14 Q19 11 21 8" stroke="#A8C5AB" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
                </svg>
              )},
            ].map(({name, icon}) => (
              <div key={name} className="text-center">
                {icon}
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#A8C5AB]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="bg-[#FDFAF6] py-24" id="offerings">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-3">Offerings & Pricing</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#5C4A32]">Practices for every <em>body</em></h2>
            </div>
            <a href="https://wa.me/+4917668954497" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#DDD0BB] text-[#5C4A32] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:border-[#7A9E7E] hover:text-[#526B55] transition-all">
              Book via WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hatha */}
            <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#A8C5AB] transition-all">
              <div className="aspect-video bg-gradient-to-br from-[#E8F0E9] to-[#C5D9C7] flex items-center justify-content-center relative">
                <span className="absolute top-3 left-3 bg-white/90 text-[#5C4A32] text-[0.6rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">Energising</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[0.68rem] tracking-[0.12em] uppercase text-[#7A9E7E] mb-2">⏱ 45 min · Up to 6 students</p>
                <h3 className="font-serif text-[1.5rem] font-normal text-[#5C4A32] mb-3">Hatha Yoga</h3>
                <p className="text-[0.85rem] text-[#8B7355] leading-relaxed mb-5">Uplifting movement that gradually awakens the body, releases stiffness, and sharpens focus through postures and conscious breathing. Taught slowly. Never rushed.</p>
                <div className="border-t border-[#EAE0CF] pt-4 space-y-2 mb-5">
                  {[['Trial','First class',null,'€8 / €10'],['Drop-In','Per class',null,'€15 / €18'],['Weekly',null,'Popular','€48 / mo'],['Monthly','Unlimited',null,'€150 / mo']].map(([label,detail,badge,price]) => (
                    <div key={label} className={`flex items-center justify-between px-3 py-2 rounded-lg text-[0.72rem] ${badge ? 'bg-[#E8F0E9] border border-[#7A9E7E]' : 'bg-[#FDFAF6] border border-[#EAE0CF]'}`}>
                      <span className="flex gap-2 items-center text-[#8B7355] font-medium uppercase tracking-wide">{label}{badge && <span className="bg-[#7A9E7E] text-white text-[0.55rem] px-2 py-0.5 rounded-full">{badge}</span>}{detail && <span className="font-normal opacity-70">{detail}</span>}</span>
                      <span className="font-serif text-[1.1rem] text-[#5C4A32]">{price}</span>
                    </div>
                  ))}
                  <p className="text-[0.68rem] text-[#8B7355] opacity-70 pl-1">Online / In Studio</p>
                </div>
                <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20book%20a%20Hatha%20Yoga%20class." target="_blank" rel="noopener noreferrer" className="mt-auto w-full text-center py-2.5 rounded-full bg-[#E8F0E9] border border-[#A8C5AB] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#A8C5AB] hover:text-white transition-all">
                  📲 Enquire via WhatsApp
                </a>
              </div>
            </div>

            {/* Deep Relaxation */}
            <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#A8C5AB] transition-all">
              <div className="aspect-video bg-gradient-to-br from-[#EDE8F5] to-[#D4CAE8] flex items-center justify-content-center relative">
                <span className="absolute top-3 left-3 bg-white/90 text-[#5C4A32] text-[0.6rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">Restorative</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[0.68rem] tracking-[0.12em] uppercase text-[#7A9E7E] mb-2">⏱ 45 min · Up to 4 students</p>
                <h3 className="font-serif text-[1.5rem] font-normal text-[#5C4A32] mb-3">Deep Relaxation</h3>
                <p className="text-[0.85rem] text-[#8B7355] leading-relaxed mb-5">Gentle Yin poses held for several minutes with the calming resonance of a Himalayan singing bowl — soothing the nervous system and cultivating deep rest.</p>
                <div className="border-t border-[#EAE0CF] pt-4 space-y-2 mb-5">
                  {[['Trial','First session only',null,'€12'],['Drop-In',null,'Popular','€20'],['Regular','Ongoing',null,'€16 / session']].map(([label,detail,badge,price]) => (
                    <div key={label} className={`flex items-center justify-between px-3 py-2 rounded-lg text-[0.72rem] ${badge ? 'bg-[#E8F0E9] border border-[#7A9E7E]' : 'bg-[#FDFAF6] border border-[#EAE0CF]'}`}>
                      <span className="flex gap-2 items-center text-[#8B7355] font-medium uppercase tracking-wide">{label}{badge && <span className="bg-[#7A9E7E] text-white text-[0.55rem] px-2 py-0.5 rounded-full">{badge}</span>}{detail && <span className="font-normal opacity-70">{detail}</span>}</span>
                      <span className="font-serif text-[1.1rem] text-[#5C4A32]">{price}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20book%20a%20Deep%20Relaxation%20session." target="_blank" rel="noopener noreferrer" className="mt-auto w-full text-center py-2.5 rounded-full bg-[#E8F0E9] border border-[#A8C5AB] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#A8C5AB] hover:text-white transition-all">
                  📲 Enquire via WhatsApp
                </a>
              </div>
            </div>

            {/* Personal Session */}
            <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#A8C5AB] transition-all">
              <div className="aspect-video bg-gradient-to-br from-[#F5EDE8] to-[#E8D4C0] flex items-center justify-content-center relative">
                <span className="absolute top-3 left-3 bg-white/90 text-[#5C4A32] text-[0.6rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">Personalised</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[0.68rem] tracking-[0.12em] uppercase text-[#7A9E7E] mb-2">⏱ 45 min · 1-on-1</p>
                <h3 className="font-serif text-[1.5rem] font-normal text-[#5C4A32] mb-3">Personal Session</h3>
                <p className="text-[0.85rem] text-[#8B7355] leading-relaxed mb-5">Fully tailored to your needs, goals, and experience level. Whether you seek strength, flexibility, stress relief, or a consistent practice built just for you.</p>
                <div className="border-t border-[#EAE0CF] pt-4 mb-5">
                  <div className="flex items-center justify-between px-3 py-3 rounded-lg bg-[#E8F0E9] border border-[#A8C5AB]">
                    <div>
                      <p className="text-[0.72rem] font-medium uppercase tracking-wide text-[#8B7355]">Bespoke pricing</p>
                      <p className="text-[0.7rem] text-[#8B7355] opacity-70">Tailored to your goals & schedule</p>
                    </div>
                    <span className="text-[#526B55] text-[0.9rem]">Enquire →</span>
                  </div>
                  <p className="text-[0.8rem] text-[#8B7355] mt-3 leading-relaxed bg-[#EAE0CF] rounded-lg px-3 py-2">Reach out and we will design a practice that fits your life and body.</p>
                </div>
                <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20book%20a%20Personal%20Session." target="_blank" rel="noopener noreferrer" className="mt-auto w-full text-center py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all">
                  📲 Book Personal Session
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

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
