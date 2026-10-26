import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Classes',
  description: 'Hatha Yoga and Pranayama classes in Ahrensfelde, Berlin — online and in studio. Mon, Wed, Fri mornings · Mon, Wed evenings · Sunday studio class · Friday Pranayama. Trial from €10.',
  alternates: { canonical: 'https://www.urja.yoga/schedule' },
  openGraph: { title: 'Yoga Classes Berlin · Urja Yoga', description: 'Weekly Hatha Yoga and Pranayama classes — online and in studio in Berlin.', url: 'https://www.urja.yoga/schedule' },
}

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children
}
