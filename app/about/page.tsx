export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/wheel-pose.jpg" alt="Urja in wheel pose" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F2EA] via-[#F7F2EA]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[780px] mx-auto px-8 pt-40">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">My Story</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight">
            A quiet, traditional path<br /><em>back to health.</em>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-6 text-[0.97rem] text-[#8B7355] leading-[1.85]">

          <p>Yoga entered my life through necessity, not ambition.</p>

          <p>
            After navigating my own health challenges, I discovered that the slower, traditional practices of yoga supported my wellbeing in ways that exercise alone never could. The physical postures helped me rebuild strength. Breathwork brought steadiness during difficult periods. Stillness taught me how to listen to my body again.
          </p>

          <p>What began as a personal practice gradually became a way of living.</p>

          <p>
            The practice that changed things for me was quieter and more traditional — rooted in awareness rather than achievement, consistency rather than intensity, and long-term wellbeing rather than short-term results.
          </p>

          <p>That experience shaped everything I teach today.</p>

          <p>
            Urja was created to offer others the same kind of space: a place where yoga is practiced slowly, thoughtfully, and with full attention to the individual. Through traditional Hatha Yoga, Yin Yoga, pranayama, and sound, I guide students toward greater balance, resilience, and ease in both body and mind.
          </p>

          <p>
            The name <em className="text-[#5C4A32] not-italic font-normal">Urja</em>, meaning energy or vitality, reflects the balance at the heart of the practice — having the energy to meet daily life while also creating the stillness needed to recover from it.
          </p>

          <div className="bg-[#5C4A32] rounded-xl p-8 my-10">
            <p className="font-serif text-[1.4rem] font-light italic text-[#F7F2EA] leading-relaxed">
              &ldquo;At the heart of every session is one question: what does this person&apos;s body and nervous system need today?&rdquo;
            </p>
          </div>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] pt-4">How I Teach</h2>

          <p>Small groups are not a limitation. They are the method.</p>

          <p>
            This work cannot be done while managing a room of fifteen people. In a class of four to six students, I can observe each person more closely, adapt when needed, and support steady progress over time.
          </p>

          <p>
            I notice when tension keeps returning to the same area. I remember what we worked on last week. I can offer guidance that reflects where you are, not where a generic class plan expects you to be.
          </p>

          <p>The pace is intentionally slow.</p>

          <p>The goal is not to follow me perfectly. The goal is to learn how to listen to your own body.</p>

          <p>
            You will not hear constant instructions throughout class. A few carefully chosen cues are often enough. The rest of the practice is an opportunity to observe, feel, and develop awareness for yourself.
          </p>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] pt-4">What I Offer</h2>

          <ul className="space-y-5 pl-0">
            {[
              ['Traditional Hatha Yoga', 'Physical postures and conscious breathing taught with attention to alignment, awareness, and steadiness.'],
              ['Yin Yoga', 'Long-held postures that gently target connective tissue while cultivating patience, stillness, and deep release.'],
              ['Pranayama', 'Traditional breath practices woven throughout classes to support focus, balance, and nervous system regulation.'],
              ['Sound Healing', 'Himalayan singing bowls used alongside Yin Yoga and relaxation practices to create an environment that supports deep rest, nervous system regulation, and inner stillness.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="text-[#7A9E7E] mt-1 shrink-0">—</span>
                <span><span className="text-[#5C4A32] font-medium">{title}</span> — {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] pt-4">Who This Is For</h2>

          <p>This space is for people seeking something different from a large studio experience.</p>

          <ul className="space-y-2 pl-0">
            {[
              'People living with stress, overwhelm, or ongoing health concerns.',
              'People who feel self-conscious in crowded classes.',
              'People who want to move beyond simply following poses and develop a deeper understanding of themselves through practice.',
            ].map(item => (
              <li key={item} className="flex gap-3">
                <span className="text-[#7A9E7E] mt-1 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>No prior experience is necessary.</p>
          <p className="pb-8">The only requirement is a genuine willingness to slow down and explore.</p>
        </div>
      </section>
    </main>
  )
}
