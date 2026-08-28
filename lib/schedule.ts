export type ClassType = 'hatha' | 'yin' | 'personal' | 'sitting' | 'pranayama'

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
  { id: 'h-online',   type: 'hatha',     name: 'Hatha Yoga',  mode: 'Online',    duration: '45 min', price: '€15 / trial €8',  desc: 'Traditional Hatha — postures and conscious breathing, taught slowly. Join via Google Meet.', waMsg: 'Hi! I would like to book a Hatha Yoga class (online).' },
  { id: 'h-studio',   type: 'hatha',     name: 'Hatha Yoga',  mode: 'In Studio', duration: '45 min', price: '€18 / trial €10', desc: 'Traditional Hatha in the studio in Barnimblick 21, Ahrensfelde.', waMsg: 'Hi! I would like to book an in-studio Hatha Yoga class.' },
  { id: 'pranayama',  type: 'pranayama', name: 'Pranayama',   mode: 'Online',    duration: '45 min', price: '€12',  desc: 'Foundational breathing practices from the Hatha tradition — exploring their purpose, effects, and place on the yogic path. Join via Google Meet.', waMsg: 'Hi! I would like to book a Pranayama class (online).' },
]

export const RECURRING_SLOTS: RecurringSlot[] = [
  // Hatha Yoga online — Mon, Wed, Fri 11:30
  { dayOfWeek: 0, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 2, time: '11:30', templateId: 'h-online' },
  { dayOfWeek: 4, time: '11:30', templateId: 'h-online' },

  // Hatha Yoga online — Mon, Wed evening 19:00
  { dayOfWeek: 0, time: '19:00', templateId: 'h-online' },
  { dayOfWeek: 2, time: '19:00', templateId: 'h-online' },

  // Hatha Yoga in studio — Sunday 10:30
  { dayOfWeek: 6, time: '10:30', templateId: 'h-studio' },

  // Pranayama online — Friday 19:00
  { dayOfWeek: 4, time: '19:00', templateId: 'pranayama' },
]
