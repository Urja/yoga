'use client'
import { useState } from 'react'
import { CLASS_TEMPLATES, RECURRING_SLOTS, type ClassTemplate } from '@/lib/schedule'

const DAY_NAMES = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const CATEGORIES = [
  {
    id: 'hatha-online',
    label: 'Hatha Yoga · Online',
    desc: 'Traditional postures and conscious breathing, taught slowly. Join from home via Google Meet.',
    templateIds: ['h-online'],
    color: '#5B9BAF',
  },
  {
    id: 'hatha-studio',
    label: 'Hatha Yoga · Studio',
    desc: 'Traditional postures and conscious breathing in the studio — Barnimblick 21, Ahrensfelde.',
    templateIds: ['h-studio'],
    color: '#7A9E7E',
  },
  {
    id: 'beginner',
    label: 'Beginner Friendly',
    desc: 'Slower pace, more explanation — perfect if you are new to yoga.',
    templateIds: ['h-beginner-online', 'h-beginner-studio'],
    color: '#5B9BAF',
  },
  {
    id: 'pelvic',
    label: 'Pelvic Support',
    desc: 'Hatha Yoga with a focus on pelvic floor awareness and strength.',
    templateIds: ['h-pelvic-online', 'h-pelvic-studio'],
    color: '#C4848A',
  },
  {
    id: 'sitting',
    label: 'Sitting Job Reset',
    desc: 'For desk workers — releases tight hips, back, shoulders and neck built up from a day of sitting.',
    templateIds: ['sitting-online'],
    color: '#B8956A',
  },
  {
    id: 'relaxation',
    label: 'Deep Relaxation',
    desc: 'Yin poses with Himalayan singing bowls — for deep rest and nervous system restoration.',
    templateIds: ['yin'],
    color: '#9B8EC4',
  },
]

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
  const [activeCat, setActiveCat] = useState<string | null>(null)
  const [weekOffset, setWeekOffset] = useState(0)
  const [modal, setModal] = useState<ModalData | null>(null)

  const monday = getMondayOf(weekOffset)
  const endSun = new Date(monday); endSun.setDate(monday.getDate() + 6)
  const weekLabel = `${monday.getDate()} ${MONTHS[monday.getMonth()]} — ${endSun.getDate()} ${MONTHS[endSun.getMonth()]} ${endSun.getFullYear()}`
  const today = new Date(); today.setHours(0,0,0,0)

  const cat = CATEGORIES.find(c => c.id === activeCat)

  const filteredSlots = (dayIndex: number) => {
    const slots = RECURRING_SLOTS.filter(r => r.dayOfWeek === dayIndex)
    if (!cat) return slots.sort((a,b) => a.time.localeCompare(b.time))
    return slots.filter(r => cat.templateIds.includes(r.templateId)).sort((a,b) => a.time.localeCompare(b.time))
  }

  return (
    <main className="pt-36 pb-24">
      <div className="max-w-[1100px] mx-auto px-8">

        <div className="mb-10">
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#526B55] mb-3">Weekly Schedule</p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-light text-[#5C4A32] mb-3">
            Find a class that <em>fits your week</em>
          </h1>
          <p className="text-[0.85rem] text-[#8B7355] italic">Click a category to see its schedule. Click any slot to book.</p>
          <p className="text-[0.75rem] text-[#8B7355] mt-1">All times are Berlin time (CET/CEST).</p>
        </div>

        {/* Category selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCat(activeCat === c.id ? null : c.id)}
              className={`text-left rounded-xl border p-4 transition-all ${
                activeCat === c.id
                  ? 'border-transparent text-white shadow-md'
                  : 'bg-[#F7F2EA] border-[#EAE0CF] text-[#5C4A32] hover:border-[#A8C5AB]'
              }`}
              style={activeCat === c.id ? { background: c.color } : {}}
            >
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: activeCat === c.id ? 'rgba(255,255,255,0.6)' : c.color }} />
              <p className="font-medium text-[0.8rem] leading-snug">{c.label}</p>
              {activeCat === c.id && (
                <p className="text-[0.7rem] mt-1.5 opacity-80 leading-snug">{c.desc}</p>
              )}
            </button>
          ))}
        </div>

        {!activeCat && (
          <div className="bg-[#F7F2EA] border border-[#EAE0CF] rounded-2xl px-8 py-10 text-center mb-10">
            <p className="font-serif text-[1.3rem] font-light text-[#5C4A32] mb-2">Select a class type above</p>
            <p className="text-[0.85rem] text-[#8B7355]">Choose what you are looking for to see available times.</p>
          </div>
        )}

        {activeCat && (
          <>
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
                const slots = filteredSlots(d)

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
                          className={`border border-[#EAE0CF] border-t-4 rounded-lg p-2 mb-2 text-center transition-all
                            ${isPast ? 'bg-[#F7F2EA] opacity-35 cursor-default' : 'bg-[#FDFAF6] cursor-pointer hover:-translate-y-0.5 hover:shadow-md'}`}
                          style={{ borderTopColor: cat?.color }}
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
          </>
        )}
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
                  <>
                    {[['Trial','€8'],['Drop-in','€15'],['4-Class Pass','€48 / month'],['Unlimited Membership','€150 / month']].map(([label, price]) => (
                      <div key={label} className="flex justify-between text-[0.82rem]">
                        <span className="text-[#8B7355]">{label}</span>
                        <span className="font-medium text-[#5C4A32]">{price}</span>
                      </div>
                    ))}
                  </>
                ) : modal.tpl.type === 'yin' ? (
                  <>
                    {[['Trial','€12'],['Drop-in','€20'],['Regular rate','€16 / session']].map(([label, price]) => (
                      <div key={label} className="flex justify-between text-[0.82rem]">
                        <span className="text-[#8B7355]">{label}</span>
                        <span className="font-medium text-[#5C4A32]">{price}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {[['Trial','€10'],['Drop-in','€18'],['4-Class Pass','€60 / month'],['Unlimited Membership','€200 / month']].map(([label, price]) => (
                      <div key={label} className="flex justify-between text-[0.82rem]">
                        <span className="text-[#8B7355]">{label}</span>
                        <span className="font-medium text-[#5C4A32]">{price}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="bg-[#5C4A32] rounded-lg px-4 py-3 mb-3 text-[0.78rem] text-[#F7F2EA] leading-relaxed">
              {modal.tpl.type === 'yin' ? (
                <>💡 <span className="font-medium">Reduced rate available</span> — book regularly and pay €16 per session instead of €20. Ask via WhatsApp.</>
              ) : modal.tpl.mode === 'Online' ? (
                <>💡 <span className="font-medium">Passes available</span> — Weekly 4 classes €48/mo · Unlimited €150/mo. Ask via WhatsApp for details.</>
              ) : (
                <>💡 <span className="font-medium">Passes available</span> — Weekly 4 classes €60/mo · Unlimited €200/mo. Ask via WhatsApp for details.</>
              )}
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
