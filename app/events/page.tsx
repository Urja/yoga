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

      {/* No upcoming events */}
      <section className="py-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-8">Upcoming</p>
          <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-2xl px-8 py-12 text-center">
            <p className="font-serif text-[1.3rem] font-light text-[#5C4A32] mb-3">No events scheduled right now.</p>
            <p className="text-[0.9rem] text-[#8B7355]">New events will be announced here — or reach out via WhatsApp to be notified directly.</p>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 border-t border-[#EAE0CF]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-8">Past Events</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
