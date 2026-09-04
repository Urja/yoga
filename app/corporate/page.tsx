export default function CorporatePage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Corporate Wellness</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Bring stillness<br /><em>to your team.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8] mb-8">
            One-off and occasional wellbeing sessions for teams in Berlin — Pranayama, guided meditation and sound baths, brought to your workplace or event.
          </p>
          <a
            href="mailto:urjaramanandi@gmail.com?subject=Corporate%20Wellness%20Enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:bg-[#526B55] hover:-translate-y-0.5 transition-all"
          >
            Enquire about a team session
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-10 text-[0.97rem] text-[#8B7355] leading-[1.85]">

          <div className="space-y-4">
            <p>
              A single focused session can create a meaningful pause in the working day. Whether it's guided Pranayama before a demanding week, meditation during a team wellbeing day, or a sound bath to close a retreat or company offsite — each session is designed to be simple, accessible and deeply restful.
            </p>
            <p>
              No previous experience is needed. Sessions are suitable for mixed groups and can be adapted to your team's space, schedule and level of experience.
            </p>
          </div>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">Sessions</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Pranayama & Meditation',
                duration: '30–60 minutes',
                desc: 'A guided breathing and meditation session to help teams slow down, reset and return to their day with greater clarity.',
              },
              {
                title: 'Sound Bath',
                duration: '45–60 minutes',
                desc: 'A deeply restful experience with Himalayan singing bowls. Well suited to wellbeing days, retreats and team offsites. Participants can lie down or remain comfortably seated depending on the space and format.',
              },
              {
                title: 'Combined Experience',
                duration: '60–90 minutes',
                desc: 'Pranayama and guided meditation followed by a sound bath — ideal as a standalone team wellbeing event or the closing experience of a retreat.',
              },
            ].map(({ title, duration, desc }) => (
              <div key={title} className="bg-[#FDFAF6] border border-[#EAE0CF] rounded-xl px-6 py-5">
                <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                  <p className="font-medium text-[#5C4A32]">{title}</p>
                  <p className="text-[0.75rem] text-[#8B7355] shrink-0">{duration}</p>
                </div>
                <p className="text-[0.88rem] text-[#8B7355] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] mb-4">Ideal for</h2>
            <p className="text-[0.9rem] text-[#8B7355] leading-[2]">
              Company wellbeing days · Team offsites · Retreats · Mental Health Awareness initiatives · Employee appreciation events · Conference wellbeing sessions · Leadership retreats · Occasional workplace wellbeing
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] mb-4">Logistics</h2>
            <ul className="space-y-2">
              {[
                'Sessions held at your office or event space in or around Berlin.',
                'Groups of 5–30 people.',
                'Sessions can be adapted to your available space, whether a meeting room, event hall or outdoor setting.',
                'Pricing on enquiry based on group size, format and duration.',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#7A9E7E] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-6 mt-4">
            <p className="font-medium text-[#5C4A32] mb-1">Planning something for your team?</p>
            <p className="text-[0.85rem] text-[#8B7355] mb-5">Tell me your approximate group size, location and occasion. I'll suggest a suitable format and get back to you within 24 hours.</p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:urjaramanandi@gmail.com?subject=Corporate%20Wellness%20Enquiry"
                className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all whitespace-nowrap"
              >
                Enquire by Email
              </a>
              <a
                href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20enquire%20about%20a%20corporate%20wellness%20session%20for%20my%20team."
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
