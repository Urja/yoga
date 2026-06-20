'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/hatha', label: 'Hatha' },
  { href: '/yin', label: 'Yin' },
  { href: '/sound-healing', label: 'Sound' },
  { href: '/online', label: 'Online' },
  // { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F7F2EA]/97 backdrop-blur-md shadow-[0_1px_20px_rgba(61,48,40,0.07)]' : 'bg-transparent'
    }`}>
      <div className="max-w-[1100px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Urja Yoga & Sound"
            width={120}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#8B7355] hover:text-[#526B55] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/+4917668954497"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-[0.08em] uppercase transition-all hover:bg-[#526B55] hover:-translate-y-0.5"
        >
          Book a Class
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-[1.5px] bg-[#5C4A32] transition-all" />
          <span className="block w-5 h-[1.5px] bg-[#5C4A32] transition-all" />
          <span className="block w-5 h-[1.5px] bg-[#5C4A32] transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F7F2EA]/98 backdrop-blur-md px-8 pb-6 flex flex-col gap-4 border-t border-[#EAE0CF]">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[#8B7355] hover:text-[#526B55] py-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/+4917668954497"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.75rem] font-medium tracking-[0.08em] uppercase"
          >
            Book a Class
          </a>
        </div>
      )}
    </nav>
  )
}
