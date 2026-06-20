import Link from 'next/link'
import { POSTS } from '@/lib/posts'

export default function BlogPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-4">Writings</p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,3.8rem)] font-light text-[#5C4A32] leading-tight mb-5">
            Notes on practice,<br /><em>recovery & rest</em>
          </h1>
          <p className="text-[1rem] text-[#8B7355] leading-[1.8]">
            Thoughts on traditional yoga, why slower is often more, and what it means to use practice as a path back to health — written plainly, the way I&apos;d say it in class.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-[#FDFAF6] border border-[#EAE0CF] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#A8C5AB] transition-all">
                <div className="aspect-video flex items-center justify-center text-4xl" style={{background: post.bg}}>
                  {post.emoji}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[0.62rem] font-medium tracking-[0.12em] uppercase text-[#526B55] mb-2">{post.tag}</p>
                  <h2 className="font-serif text-[1.3rem] font-normal text-[#5C4A32] leading-snug mb-3">{post.title}</h2>
                  <p className="text-[0.85rem] text-[#8B7355] leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.7rem] text-[#8B7355] opacity-70">{post.date}</span>
                    <span className="text-[0.7rem] font-medium tracking-wide uppercase text-[#526B55] group-hover:underline">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
