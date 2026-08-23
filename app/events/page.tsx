export default function EventsPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Events & Workshops</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight">
            Special gatherings<br /><em>beyond the weekly class.</em>
          </h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-8">Upcoming</p>
          <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-2xl overflow-hidden">
            <div className="aspect-[16/6] relative overflow-hidden bg-[#3D4A2E]">
              <img src="/images/workshop20sep.jpg" alt="Hatha Yoga Practice & Philosophy Workshop" className="w-full h-full object-cover object-center opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D4A2E]/70 to-transparent" />
              <span className="absolute top-4 left-4 text-[0.6rem] font-medium tracking-[0.15em] uppercase bg-white/80 text-[#526B55] px-3 py-1 rounded-full">Workshop</span>
            </div>
            <div className="p-8 md:p-10 space-y-6">
              <div>
                <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] leading-snug mb-2">Traditional Hatha Yoga:<br /><em>Practice & Philosophy</em></h2>
                <p className="text-[#8B7355]">A traditional Hatha Yoga workshop exploring the philosophy, practice, and inner traditions of the Hatha Yoga path — mantra, asana, pranayama, and silent meditation.</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  ['Date', 'Saturday, 20 September 2026'],
                  ['Time', '14:00 – 16:00'],
                  ['Location', 'The Lab Studio, Berlin'],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#FDFAF6] border border-[#EAE0CF] rounded-xl px-5 py-4">
                    <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#526B55] mb-1">{label}</p>
                    <p className="text-[#5C4A32] font-medium text-[0.9rem]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[0.75rem] font-medium text-[#526B55] bg-[#E8F0E9] border border-[#A8C5AB] px-4 py-2 rounded-full">€35</span>
                <span className="text-[0.75rem] text-[#8B7355]">·</span>
                <span className="text-[0.75rem] text-[#8B7355]">2 hours</span>
                <span className="text-[0.75rem] text-[#8B7355]">·</span>
                <span className="text-[0.75rem] text-[#8B7355]">All levels welcome</span>
              </div>

              <a
                href={`https://wa.me/+4917668954497?text=${encodeURIComponent('Hi! I would like to book the Traditional Hatha Yoga: Practice & Philosophy Workshop on 20 September.')}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:bg-[#526B55] transition-all"
              >
                📲 Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 border-t border-[#EAE0CF]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-8">Past Events</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden relative group aspect-square">
              <img src="/images/parkyoga8_8.jpeg" alt="Yoga in the Park" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3028]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-[0.65rem] font-medium tracking-[0.1em] uppercase opacity-80 mb-0.5">8 Aug 2026</p>
                <p className="text-white font-serif text-[0.95rem] leading-snug">Yoga in the Park</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden relative group aspect-square">
              <img src="/images/urja-park-yoga.jpg" alt="Yoga in the Park" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3028]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-[0.65rem] font-medium tracking-[0.1em] uppercase opacity-80 mb-0.5">5 Jul 2026</p>
                <p className="text-white font-serif text-[0.95rem] leading-snug">Yoga in the Park</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden relative group aspect-square">
              <img src="/images/studio-event-2.jpg" alt="International Day of Yoga workshop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3028]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-[0.65rem] font-medium tracking-[0.1em] uppercase opacity-80 mb-0.5">21 Jun 2026</p>
                <p className="text-white font-serif text-[0.95rem] leading-snug">Hatha Yoga &amp; Meditation Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
