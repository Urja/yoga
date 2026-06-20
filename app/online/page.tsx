import Link from 'next/link'

export default function OnlinePage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Online Classes</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Practice from home,<br /><em>with full attention.</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            Live online Hatha Yoga via Google Meet. The same small group, the same unhurried pace — from wherever you are.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[780px] mx-auto px-8 space-y-6 text-[0.97rem] text-[#8B7355] leading-[1.85]">
          <p>Online classes are live, not recorded. That distinction matters. I can see you, adjust cues for your setup, and give the same quality of attention I give in the studio — within a small group that makes that possible.</p>
          <p>All you need is enough floor space for a mat, a device you can prop up to show your full body, and a quiet thirty minutes to yourself.</p>

          <h2 className="font-serif text-[2rem] font-light text-[#5C4A32]">Pricing</h2>
          <div className="space-y-2">
            {[['Trial','First class only','€8'],['Drop-In','Per class','€15'],['Weekly','Once a week / month','€48 / mo'],['Monthly','Unlimited','€150 / mo']].map(([label,detail,price]) => (
              <div key={label} className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#FDFAF6] border border-[#EAE0CF] text-[0.85rem]">
                <span className="font-medium text-[#5C4A32] uppercase tracking-wide text-[0.72rem]">{label} <span className="font-normal text-[#8B7355] normal-case tracking-normal">{detail}</span></span>
                <span className="font-serif text-[1.2rem] text-[#5C4A32]">{price}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-6 mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#5C4A32] font-medium">Ready to try a class?</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/schedule" className="px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all">
                See Schedule
              </Link>
              <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20join%20an%20online%20Hatha%20Yoga%20class." target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-[#7A9E7E] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#E8F0E9] transition-all">
                📲 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
