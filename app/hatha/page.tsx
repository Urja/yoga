import Link from 'next/link'

export default function HathaPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Hatha Yoga</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Traditional Hatha,<br /><em>taught slowly.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            Uplifting movement that gradually awakens the body, releases stiffness, and sharpens focus — through postures and conscious breathing. Never rushed.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-6 text-[0.97rem] text-[#8B7355] leading-[1.85]">
          <p>
            Hatha Yoga is the foundation of many modern yoga styles, yet its essence is remarkably simple: moving with awareness, breathing consciously, and paying attention to what is happening within.
          </p>
          <p>
            In this class, we move slowly enough that you can actually feel the practice rather than simply move through it.
          </p>
          <p>
            Breath leads the movement. Attention matters more than performance. There is no pressure to keep up, achieve a particular pose, or push beyond what feels appropriate for your body.
          </p>
          <p>
            The pace creates space to build strength, improve mobility, develop balance, and cultivate a steadier relationship with both body and mind.
          </p>
          <p>
            Instruction is intentionally minimal. The goal is not to follow me perfectly. The goal is to learn how to listen to your own body.
          </p>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">Online Classes</h2>
          <p>
            Online classes are live, not recorded. That distinction matters. I can see you, adjust cues for your setup, and give the same quality of attention I give in the studio — within a small group that makes that possible.
          </p>
          <p>All you need is enough floor space for a mat, a device you can prop up to show your full body, and a quiet thirty minutes to yourself.</p>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">What to Expect</h2>
          <ul className="space-y-2">
            {[
              'No prior experience needed — all levels welcome',
              '45 minutes of asana, pranayama, and dhyan',
              'Pranayama woven naturally into every class',
              'Small groups',
              'Available online via Google Meet, or in person in Ahrensfelde',
            ].map(item => (
              <li key={item} className="flex gap-3">
                <span className="text-[#7A9E7E] shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">Who This Class Is For</h2>
          <ul className="space-y-2">
            {[
              'People who feel stiff from long hours sitting.',
              'People looking to build strength and mobility without intensity.',
              'People experiencing stress, mental fatigue, or difficulty slowing down.',
              'People who want a more traditional and mindful approach to yoga.',
              'People who prefer small groups and personal attention.',
            ].map(item => (
              <li key={item} className="flex gap-3">
                <span className="text-[#7A9E7E] shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[0.9rem] italic text-[#8B7355]">No previous yoga experience is required.</p>

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-6 mt-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-medium text-[#5C4A32] mb-1">Ready to start?</p>
              <p className="text-[0.82rem] text-[#8B7355]">Book a trial class — no commitment needed.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/schedule" className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all">
                See Schedule
              </Link>
              <a
                href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20book%20a%20Hatha%20Yoga%20class."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-[#7A9E7E] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#E8F0E9] transition-all"
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
