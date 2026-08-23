'use client'
import { useState } from 'react'
import { CLASS_TEMPLATES, RECURRING_SLOTS, type ClassTemplate } from '@/lib/schedule'

const DAY_NAMES = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const TEMPLATE_COLORS: Record<string, string> = {
  'h-online':  '#5B9BAF',
  'h-studio':  '#7A9E7E',
  'pranayama': '#9B8EC4',
}

function getMondayOf(weekOffset: number): Date {
  const today = new Date()
  const day = today.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const mon = new Date(today)
  mon.setDate(today.getDate() + diff + weekOffset * 7)
  mon.setHours(0, 0, 0, 0)
  return mon
}

interface ModalData {
  tpl: ClassTemplate
  time: string
  date: string
}

export default function SchedulePage() {
  const [weekOffset, setWeekOffset] = useState(0)
  const [modal, setModal] = useState<ModalData | null>(null)

  const monday = getMondayOf(weekOffset)
  const endSun = new Date(monday); endSun.setDate(monday.getDate() + 6)
  const weekLabel = `${monday.getDate()} ${MONTHS[monday.getMonth()]} — ${endSun.getDate()} ${MONTHS[endSun.getMonth()]} ${endSun.getFullYear()}`
  const today = new Date(); today.setHours(0,0,0,0)

  return (
    <main className="pt-36 pb-24">
      <div className="max-w-[1100px] mx-auto px-8">

        <div className="mb-10">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-3">Weekly Schedule</p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-light text-[#5C4A32] mb-3">
            Find a class that <em>fits your week</em>
          </h1>
          <p className="text-[0.75rem] text-[#8B7355] mt-1">All times are Berlin time (CET/CEST). Click any class to book.</p>
        </div>

        {/* Special sessions note */}
        <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl px-6 py-4 mb-4 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[0.85rem] text-[#8B7355]">Looking for <span className="text-[#5C4A32] font-medium">Deep Relaxation, Sound Bath, or a 1:1 session</span>? These are available on request.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20enquire%20about%20a%20Deep%20Relaxation%2C%20Sound%20Bath%20or%201-on-1%20session." target="_blank" rel="noopener noreferrer" className="text-[0.75rem] font-medium px-4 py-2 rounded-full bg-[#7A9E7E] text-white hover:bg-[#526B55] transition-all">📲 WhatsApp</a>
            <a href="mailto:urjaramanandi@gmail.com?subject=Special%20session%20enquiry" className="text-[0.75rem] font-medium px-4 py-2 rounded-full border border-[#DDD0BB] text-[#5C4A32] hover:border-[#7A9E7E] transition-all">✉ Email</a>
          </div>
        </div>

        {/* Flexible timing note */}
        <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-xl px-6 py-4 mb-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[0.85rem] text-[#8B7355]">None of these times work for you? I can often accommodate different slots.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://wa.me/+4917668954497?text=Hi!%20I%20would%20like%20to%20join%20a%20class%20but%20the%20listed%20times%20don't%20work%20for%20me.%20Could%20we%20find%20another%20time?" target="_blank" rel="noopener noreferrer" className="text-[0.75rem] font-medium px-4 py-2 rounded-full bg-[#7A9E7E] text-white hover:bg-[#526B55] transition-all">📲 WhatsApp</a>
            <a href="mailto:urjaramanandi@gmail.com?subject=Class%20timing%20request" className="text-[0.75rem] font-medium px-4 py-2 rounded-full border border-[#DDD0BB] text-[#5C4A32] hover:border-[#7A9E7E] transition-all">✉ Email</a>
          </div>
        </div>

        {/* Week navigation */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <span className="font-serif text-[1.3rem] font-light text-[#5C4A32]">{weekLabel}</span>
          <div className="flex gap-2">
            {([['←', -1],['Today', 0],['→', 1]] as const).map(([label, dir]) => (
              <button
                key={label}
                onClick={() => dir === 0 ? setWeekOffset(0) : setWeekOffset(w => w + dir)}
                className="px-4 py-2 rounded-full border border-[#DDD0BB] text-[0.78rem] text-[#8B7355] hover:border-[#7A9E7E] hover:text-[#526B55] transition-all"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7 gap-2 max-md:grid-cols-4 max-sm:grid-cols-2">
          {DAY_NAMES.map((dayName, d) => {
            const date = new Date(monday); date.setDate(monday.getDate() + d)
            const isToday = date.getTime() === today.getTime()
            const isPast = date < today
            const slots = RECURRING_SLOTS.filter(r => r.dayOfWeek === d).sort((a, b) => a.time.localeCompare(b.time))

            return (
              <div key={d} className="min-w-0">
                <div className="text-center mb-2">
                  <p className="text-[0.62rem] font-medium tracking-[0.12em] uppercase text-[#8B7355]">{dayName}</p>
                  <p className={`font-serif text-[1.3rem] ${isToday ? 'text-[#526B55]' : 'text-[#5C4A32]'}`}>{date.getDate()}</p>
                  {isToday && <div className="w-1 h-1 rounded-full bg-[#7A9E7E] mx-auto mt-0.5" />}
                </div>
                {slots.length === 0 && (
                  <div className="h-16 flex items-center justify-center text-[0.65rem] text-[#DDD0BB]">—</div>
                )}
                {slots.map(slot => {
                  const tpl = CLASS_TEMPLATES.find(t => t.id === slot.templateId)!
                  const color = TEMPLATE_COLORS[slot.templateId] ?? '#8B7355'
                  return (
                    <div
                      key={slot.time}
                      onClick={() => !isPast && setModal({ tpl, time: slot.time, date: `${dayName} ${date.getDate()} ${MONTHS[date.getMonth()]}` })}
                      className={`border border-[#EAE0CF] border-t-4 rounded-lg p-2 mb-2 text-center transition-all
                        ${isPast ? 'bg-[#F7F2EA] opacity-35 cursor-default' : 'bg-[#FDFAF6] cursor-pointer hover:-translate-y-0.5 hover:shadow-md'}`}
                      style={{ borderTopColor: color }}
                    >
                      <p className="text-[0.65rem] font-medium text-[#526B55] mb-0.5">{slot.time}</p>
                      <p className="font-serif text-[0.88rem] text-[#5C4A32] leading-tight">{tpl.name}</p>
                      <p className="text-[0.58rem] uppercase tracking-wide text-[#8B7355] opacity-70 mt-0.5">{tpl.mode}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#3D3028]/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="bg-[#FDFAF6] rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setModal(null)} className="absolute top-5 right-5 text-[#8B7355] text-xl leading-none hover:text-[#5C4A32]">×</button>
            <p className="text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[#526B55] mb-1">{modal.tpl.mode} · {modal.tpl.duration}</p>
            <h2 className="font-serif text-[2rem] font-light text-[#5C4A32] mb-1">{modal.tpl.name}</h2>
            <p className="text-[0.85rem] text-[#8B7355] mb-5">{modal.tpl.desc}</p>
            <div className="bg-[#F7F2EA] rounded-lg p-4 mb-5 space-y-2">
              {[['Date', modal.date],['Time', `${modal.time} (Berlin time)`],['Duration', modal.tpl.duration],['Format', modal.tpl.mode]].map(([k,v]) => (
                <div key={k} className="flex justify-between text-[0.85rem]">
                  <span className="text-[#8B7355]">{k}</span>
                  <span className="font-medium text-[#5C4A32]">{v}</span>
                </div>
              ))}
              <div className="border-t border-[#EAE0CF] pt-2 mt-2 space-y-1">
                {modal.tpl.mode === 'Online' ? (
                  [['Trial','€8'],['Drop-in','€15'],['4-Class Pass','€48 / month'],['Unlimited Membership','€150 / month']].map(([label, price]) => (
                    <div key={label} className="flex justify-between text-[0.82rem]">
                      <span className="text-[#8B7355]">{label}</span>
                      <span className="font-medium text-[#5C4A32]">{price}</span>
                    </div>
                  ))
                ) : (
                  [['Trial','€10'],['Drop-in','€18'],['4-Class Pass','€60 / month']].map(([label, price]) => (
                    <div key={label} className="flex justify-between text-[0.82rem]">
                      <span className="text-[#8B7355]">{label}</span>
                      <span className="font-medium text-[#5C4A32]">{price}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="bg-[#5C4A32] rounded-lg px-4 py-3 mb-3 text-[0.78rem] text-[#F7F2EA] leading-relaxed">
              {modal.tpl.mode === 'Online'
                ? <>💡 <span className="font-medium">Passes available</span> — 4 classes €48/mo · Unlimited €150/mo. Ask via WhatsApp.</>
                : <>💡 <span className="font-medium">Pass available</span> — 4 classes €60/mo. Ask via WhatsApp for details.</>
              }
            </div>
            <div className="space-y-3">
              <a
                href={`https://wa.me/+4917668954497?text=${encodeURIComponent(`${modal.tpl.waMsg} I'd like to book ${modal.date} at ${modal.time} (${modal.tpl.mode}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-full bg-[#7A9E7E] text-[#FDFAF6] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:bg-[#526B55] transition-all"
              >
                📲 Book via WhatsApp
              </a>
              <button onClick={() => setModal(null)} className="block w-full text-center py-3 rounded-full border border-[#DDD0BB] text-[#5C4A32] text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:border-[#7A9E7E] transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
