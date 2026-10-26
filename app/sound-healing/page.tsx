import Link from 'next/link'

export default function SoundHealingPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Sound Healing</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Himalayan Singing Bowls<br /><em>& Deep Rest.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            Sound is woven into every Deep Relaxation session. Private Sound Bath sessions are available on request.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-6 text-[0.97rem] text-[#8B7355] leading-[1.85]">
          <p>
            The human body responds to sound physically, not just emotionally. Low, sustained frequencies slow brainwave activity — inducing the alpha and theta states associated with deep rest and light meditation. You do not need to believe this is happening for it to happen.
          </p>


          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">Deep Relaxation (Yin + Sound)</h2>
          <p>
            Gentle Yin poses held for several minutes, with a Himalayan singing bowl played throughout. The sound gives the nervous system something passive to rest on — making stillness easier to find without requiring you to &quot;do&quot; meditation.
          </p>
          <p>Sessions are 45 minutes, in studio in Barnimblick 21, Ahrensfelde.</p>

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-medium text-[#5C4A32] mb-1">Deep Relaxation · 45 min · By appointment</p>
                <p className="text-[0.82rem]">€20 / session — write to me to schedule</p>
              </div>
              <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20book%20a%20Deep%20Relaxation%20session." target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all whitespace-nowrap">
                Book via WhatsApp
              </a>
            </div>
          </div>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">Private Sound Bath</h2>
          <div className="rounded-xl overflow-hidden aspect-[16/7] my-2">
            <img src="/images/singing-bowls.jpg" alt="Private sound bath — Himalayan singing bowls" className="w-full h-full object-cover object-center" />
          </div>
          <p>
            Private Sound Bath sessions — with Himalayan singing bowls — are available on request. If you are interested in booking one for yourself or a small group, reach out directly.
          </p>

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-medium text-[#5C4A32] mb-1">Private Sound Bath</p>
                <p className="text-[0.82rem]">Available on request · pricing on enquiry</p>
              </div>
              <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20enquire%20about%20a%20private%20Sound%20Bath%20session." target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all whitespace-nowrap">
                Enquire via WhatsApp
              </a>
            </div>
          </div>

          {/* <p className="text-center pt-4">
            <Link href="/blog/sound-healing" className="text-[#526B55] hover:underline text-[0.9rem]">
              Read: Sound healing is not mystical. Here is what it actually does. →
            </Link>
          </p> */}
        </div>
      </section>
    </main>
  )
}
