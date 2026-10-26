export default function WorkshopsPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Workshops & Events</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Deeper practice,<br /><em>dedicated time.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            Occasional half-day and full-day workshops for students who want to go further — into breath, sound, nervous system regulation, or traditional Hatha philosophy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8">
          <div className="bg-[#FDFAF6] border border-[#EAE0CF] rounded-xl p-8">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <p className="text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[#526B55] mb-2">Upcoming · Autumn 2026</p>
                <h2 className="font-serif text-[1.8rem] font-light text-[#5C4A32]">Nervous System Reset</h2>
              </div>
              <span className="bg-[#E8F0E9] text-[#526B55] text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-[#A8C5AB]">Half Day</span>
            </div>
            <p className="text-[0.95rem] text-[#8B7355] leading-relaxed mb-6">
              A restorative half-day combining Yin Yoga, pranayama, and sound healing — designed for deep rest and nervous system recovery. Suitable for all levels. Maximum 8 participants.
            </p>
            <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20find%20out%20more%20about%20the%20Nervous%20System%20Reset%20workshop." target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all">
              Register Interest via WhatsApp
            </a>
          </div>

          <p className="text-[0.9rem] text-[#8B7355] mt-10 text-center italic">
            More workshops are planned. Follow <a href="https://instagram.com/urja.ramanandi" target="_blank" rel="noopener noreferrer" className="text-[#526B55] hover:underline">@urja.ramanandi</a> for announcements.
          </p>
        </div>
      </section>
    </main>
  )
}
