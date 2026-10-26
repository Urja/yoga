import Link from 'next/link'
import { POSTS } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <main>
      <section className="pt-40 pb-12 bg-[#FDFAF6]">
        <div className="max-w-[780px] mx-auto px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.08em] uppercase text-[#526B55] hover:text-[#5C4A32] transition-colors mb-8">
            ← Back to writings
          </Link>
          <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#526B55] mb-4">{post.tag}</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light text-[#5C4A32] leading-tight mb-4">{post.title}</h1>
          <p className="font-serif text-[1.15rem] font-light italic text-[#8B7355] mb-6 leading-relaxed">{post.subtitle}</p>
          <div className="flex items-center gap-6 py-4 border-t border-b border-[#EAE0CF] text-[0.78rem] text-[#8B7355]">
            <span>{post.date}</span>
            <span className="opacity-60">{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-14 pb-24">
        <div
          className="max-w-[680px] mx-auto px-8 prose-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            fontSize: '0.97rem',
            lineHeight: '1.85',
            color: '#8B7355',
          }}
        />
        <style>{`
          .prose-content h2 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.8rem; font-weight:300; color:#5C4A32; margin:2.5rem 0 1rem; }
          .prose-content h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.3rem; color:#5C4A32; margin:2rem 0 0.75rem; }
          .prose-content p { margin-bottom:1.5rem; }
          .prose-content blockquote { border-left:3px solid #7A9E7E; padding:1rem 1.5rem; margin:2rem 0; background:#FDFAF6; border-radius:0 12px 12px 0; font-family:'Cormorant Garamond',Georgia,serif; font-size:1.15rem; font-style:italic; color:#5C4A32; }
          .prose-content ul { padding-left:1.5rem; margin-bottom:1.5rem; }
          .prose-content li { margin-bottom:0.5rem; }
        `}</style>

        <div className="max-w-[680px] mx-auto px-8 mt-12">
          <div className="bg-[#E8F0E9] border border-[#A8C5AB] rounded-xl p-8 text-center">
            <h3 className="font-serif text-[1.5rem] font-light text-[#5C4A32] mb-3">Come and find out for yourself</h3>
            <p className="text-[0.88rem] text-[#8B7355] mb-5">Trial classes from €8. No experience needed. Small groups, full attention.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/schedule" className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#526B55] transition-all">
                See Schedule
              </Link>
              <a href="https://wa.me/+4917668954497" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#7A9E7E] text-[#526B55] text-[0.75rem] font-medium tracking-wide uppercase hover:bg-[#E8F0E9] transition-all">
                📲 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
