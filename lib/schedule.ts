export type ClassType = 'hatha' | 'yin' | 'personal'

export interface ClassTemplate {
  id: string
  type: ClassType
  name: string
  mode: string
  duration: string
  price: string
  desc: string
  waMsg: string
}

export interface RecurringSlot {
  dayOfWeek: number // 0 = Monday
  time: string
  templateId: string
}

export const CLASS_TEMPLATES: ClassTemplate[] = [
  { id: 'h-online', type: 'hatha', name: 'Hatha Yoga',      mode: 'Online',    duration: '45 min', price: '€15 / trial €8',  desc: 'Traditional Hatha — postures and conscious breathing, taught slowly.', waMsg: 'Hi! I would like to book a Hatha Yoga class (online).' },
  { id: 'h-studio', type: 'hatha', name: 'Hatha Yoga',      mode: 'In Studio', duration: '45 min', price: '€18 / trial €10', desc: 'Traditional Hatha in the studio in Barnimblick 21, Ahrensfelde.',                       waMsg: 'Hi! I would like to book an in-studio Hatha Yoga class.' },
  { id: 'yin',      type: 'yin',   name: 'Deep Relaxation', mode: 'In Studio', duration: '45 min', price: '€20 / trial €12', desc: 'Yin poses held for several minutes with Himalayan singing bowl resonance.', waMsg: 'Hi! I would like to book a Deep Relaxation session.' },
]

export const RECURRING_SLOTS: RecurringSlot[] = [
  // Online class — every day 11:30–12:15
  { dayOfWeek: 0, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 1, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 2, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 3, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 4, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 5, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 6, time: '11:30', templateId: 'h-online' },

  // Hatha Yoga in studio — Mon, Wed, Fri, Sat, Sun 10:30–11:15
  { dayOfWeek: 0, time: '10:30', templateId: 'h-studio' },
  { dayOfWeek: 2, time: '10:30', templateId: 'h-studio' },
  { dayOfWeek: 4, time: '10:30', templateId: 'h-studio' },
  { dayOfWeek: 5, time: '10:30', templateId: 'h-studio' },
  { dayOfWeek: 6, time: '10:30', templateId: 'h-studio' },

  // Deep Relaxation — Tue, Thu 10:30 & Sun 14:00
  { dayOfWeek: 1, time: '10:30', templateId: 'yin' },
  { dayOfWeek: 3, time: '10:30', templateId: 'yin' },
  { dayOfWeek: 6, time: '14:00', templateId: 'yin' },
]
