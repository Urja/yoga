'use client'
import { useState } from 'react'

const hatha = {
  online:  { trial: '€8', dropIn: '€15', weekly: '€48 / mo', monthly: '€150 / mo' },
  studio:  { trial: '€10', dropIn: '€18', weekly: '€60 / mo', monthly: '€200 / mo' },
}

export default function Offerings() {
  const [mode, setMode] = useState<'online' | 'studio'>('online')
  const p = hatha[mode]

  return (
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

        {/* Online / Studio toggle — only affects Hatha */}
        <div className="flex items-center gap-1 mb-8 bg-[#EAE0CF] rounded-full p-1 w-fit">
          {(['online', 'studio'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-5 py-2 rounded-full text-[0.72rem] font-medium tracking-[0.1em] uppercase transition-all ${
                mode === m
                  ? 'bg-[#5C4A32] text-[#F7F2EA] shadow-sm'
                  : 'text-[#8B7355] hover:text-[#5C4A32]'
              }`}
            >
              {m === 'online' ? 'Online' : 'In Studio'}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Hatha */}
          <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#A8C5AB] transition-all">
            <div className="aspect-video bg-gradient-to-br from-[#E8F0E9] to-[#C5D9C7] relative">
              <span className="absolute top-3 left-3 bg-white/90 text-[#5C4A32] text-[0.6rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">Energising</span>
              <span className="absolute top-3 right-3 bg-[#5C4A32]/80 text-[#F7F2EA] text-[0.6rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                {mode === 'online' ? 'Online' : 'In Studio'}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[0.68rem] tracking-[0.12em] uppercase text-[#7A9E7E] mb-2">⏱ 45 min · Small group</p>
              <h3 className="font-serif text-[1.5rem] font-normal text-[#5C4A32] mb-3">Hatha Yoga</h3>
              <p className="text-[0.85rem] text-[#8B7355] leading-relaxed mb-5">Uplifting movement that gradually awakens the body, releases stiffness, and sharpens focus through postures and conscious breathing. Taught slowly. Never rushed.</p>
              <div className="border-t border-[#EAE0CF] pt-4 space-y-2 mb-5">
                {([
                  ['Trial', 'First class', null, p.trial],
                  ['Drop-In', 'Per class', null, p.dropIn],
                  ['Weekly', null, 'Popular', p.weekly],
                  ['Monthly', 'Unlimited', null, p.monthly],
                ] as const).map(([label, detail, badge, price]) => (
                  <div key={label} className={`flex items-center justify-between px-3 py-2 rounded-lg text-[0.72rem] ${badge ? 'bg-[#E8F0E9] border border-[#7A9E7E]' : 'bg-[#FDFAF6] border border-[#EAE0CF]'}`}>
                    <span className="flex gap-2 items-center text-[#8B7355] font-medium uppercase tracking-wide">
                      {label}
                      {badge && <span className="bg-[#7A9E7E] text-white text-[0.55rem] px-2 py-0.5 rounded-full">{badge}</span>}
                      {detail && <span className="font-normal opacity-70">{detail}</span>}
                    </span>
                    <span className="font-serif text-[1.1rem] text-[#5C4A32]">{price}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/+4917668954497?text=${encodeURIComponent(`Hi! I would like to book a Hatha Yoga class (${mode === 'online' ? 'online' : 'in studio'}).`)}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-auto w-full text-center py-2.5 rounded-full bg-[#E8F0E9] border border-[#A8C5AB] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#A8C5AB] hover:text-white transition-all"
              >
                📲 Enquire via WhatsApp
              </a>
            </div>
          </div>

          {/* Deep Relaxation */}
          <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#A8C5AB] transition-all">
            <div className="aspect-video bg-gradient-to-br from-[#EDE8F5] to-[#D4CAE8] relative">
              <span className="absolute top-3 left-3 bg-white/90 text-[#5C4A32] text-[0.6rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">Restorative</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[0.68rem] tracking-[0.12em] uppercase text-[#7A9E7E] mb-2">⏱ 45 min · In Studio</p>
              <h3 className="font-serif text-[1.5rem] font-normal text-[#5C4A32] mb-3">Deep Relaxation</h3>
              <p className="text-[0.85rem] text-[#8B7355] leading-relaxed mb-5">Gentle Yin poses held for several minutes with the calming resonance of a Himalayan singing bowl — soothing the nervous system and cultivating deep rest.</p>
              <div className="border-t border-[#EAE0CF] pt-4 space-y-2 mb-5">
                {([['Trial','First session only',null,'€12'],['Drop-In',null,'Popular','€20'],['Regular','Ongoing',null,'€16 / session']] as const).map(([label,detail,badge,price]) => (
                  <div key={label} className={`flex items-center justify-between px-3 py-2 rounded-lg text-[0.72rem] ${badge ? 'bg-[#E8F0E9] border border-[#7A9E7E]' : 'bg-[#FDFAF6] border border-[#EAE0CF]'}`}>
                    <span className="flex gap-2 items-center text-[#8B7355] font-medium uppercase tracking-wide">
                      {label}
                      {badge && <span className="bg-[#7A9E7E] text-white text-[0.55rem] px-2 py-0.5 rounded-full">{badge}</span>}
                      {detail && <span className="font-normal opacity-70">{detail}</span>}
                    </span>
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
            <div className="aspect-video bg-gradient-to-br from-[#F5EDE8] to-[#E8D4C0] relative">
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
  )
}
