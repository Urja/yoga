'use client'
import { useState } from 'react'
import { CLASS_TEMPLATES, RECURRING_SLOTS, type ClassTemplate } from '@/lib/schedule'

const DAY_NAMES = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function getMondayOf(weekOffset: number): Date {
  const today = new Date()
  const day = today.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const mon = new Date(today)
  mon.setDate(today.getDate() + diff + weekOffset * 7)
  mon.setHours(0, 0, 0, 0)
  return mon
}

const TYPE_COLORS: Record<string, string> = {
  hatha:              'border-t-[#7A9E7E]',
  yin:                'border-t-[#9B8EC4]',
  personal:           'border-t-[#8B7355]',
  'h-beginner-studio':'border-t-[#E8A87C]',
  'h-beginner-online':'border-t-[#E8A87C]',
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
        <div className="mb-12">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-3">Weekly Schedule</p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-light text-[#5C4A32] mb-3">
            Find a class that <em>fits your week</em>
          </h1>
          <p className="text-[0.85rem] text-[#8B7355] italic">Classes are kept small. Click any slot to see details and book via WhatsApp.</p>
        </div>

        {/* Week navigation */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <span className="font-serif text-[1.5rem] font-light text-[#5C4A32]">{weekLabel}</span>
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
            const slots = RECURRING_SLOTS.filter(r => r.dayOfWeek === d).sort((a,b) => a.time.localeCompare(b.time))

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
                  return (
                    <div
                      key={slot.time}
                      onClick={() => !isPast && setModal({ tpl, time: slot.time, date: `${dayName} ${date.getDate()} ${MONTHS[date.getMonth()]}` })}
                      className={`bg-[#FDFAF6] border border-[#EAE0CF] border-t-4 ${TYPE_COLORS[tpl.id] ?? TYPE_COLORS[tpl.type] ?? 'border-t-[#8B7355]'} rounded-lg p-2 mb-2 text-center transition-all
                        ${isPast ? 'opacity-35 cursor-default' : 'cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-[#A8C5AB]'}`}
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

        {/* Legend */}
        <div className="flex gap-6 flex-wrap mt-8 pt-6 border-t border-[#EAE0CF]">
          {[['#7A9E7E','Hatha Yoga'],['#9B8EC4','Deep Relaxation'],['#E8A87C','Beginner Hatha']].map(([color,label]) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm" style={{background: color}} />
              <span className="text-[0.72rem] text-[#8B7355]">{label}</span>
            </div>
          ))}
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
              {[['Date', modal.date],['Time', modal.time],['Duration', modal.tpl.duration],['Format', modal.tpl.mode],['Price', modal.tpl.price]].map(([k,v]) => (
                <div key={k} className="flex justify-between text-[0.85rem]">
                  <span className="text-[#8B7355]">{k}</span>
                  <span className="font-medium text-[#5C4A32]">{v}</span>
                </div>
              ))}
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
