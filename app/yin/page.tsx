import Link from 'next/link'

export default function YinPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Deep Relaxation</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Yin Yoga<br /><em>& Sound Healing</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            Gentle poses held for several minutes, paired with the resonance of a Himalayan singing bowl. Soothing the nervous system and cultivating deep rest.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-6 text-[0.97rem] text-[#8B7355] leading-[1.85]">
          <p>In a Yin class, you hold poses for three to five minutes. The target is not the muscle — it is the connective tissue: the fascia, the ligaments, the joint capsules. These structures respond to gentle, sustained pressure over time. They do not respond to effort. They respond to time.</p>
          <p>In Deep Relaxation sessions, I pair Yin poses with a Himalayan singing bowl. The sound gives the nervous system something to rest on — a frequency that makes stillness easier to find, without requiring you to &quot;do&quot; meditation.</p>

          <div className="bg-[#5C4A32] rounded-xl p-8 my-10">
            <p className="font-serif text-[1.3rem] font-light italic text-[#F7F2EA] leading-relaxed">
              &ldquo;The hardest thing I ask of students in yin class is to do nothing. To stop adjusting, fidgeting, and fixing. Just to stay.&rdquo;
            </p>
          </div>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">What to expect</h2>
          <ul className="space-y-2">
            {['No prior yoga experience needed','Props provided: blankets, bolsters, blocks','45 minutes — never rushed','Studio: Barnimblick 21, Ahrensfelde'].map(item => (
              <li key={item} className="flex gap-3"><span className="text-[#7A9E7E] shrink-0 mt-0.5">—</span><span>{item}</span></li>
            ))}
          </ul>

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-6 mt-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-medium text-[#5C4A32] mb-1">Deep Relaxation (Yin + Sound)</p>
                <p className="text-[0.82rem]">Trial €12 · Drop-in €20 · Regular €16/session</p>
              </div>
              <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20book%20a%20Deep%20Relaxation%20session." target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all whitespace-nowrap">
                Book via WhatsApp
              </a>
            </div>
          </div>
          <p className="text-center"><Link href="/blog/what-yin-yoga-does" className="text-[#526B55] hover:underline text-[0.9rem]">Read: What yin yoga does that other practices cannot →</Link></p>
        </div>
      </section>
    </main>
  )
}
