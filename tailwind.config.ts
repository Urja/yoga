import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#F7F2EA',
        sand:     '#EAE0CF',
        linen:    '#DDD0BB',
        brown:    '#8B7355',
        bark:     '#5C4A32',
        soil:     '#3D3028',
        sage:     '#7A9E7E',
        'sage-lt': '#A8C5AB',
        'sage-dk': '#526B55',
        mist:     '#E8F0E9',
        parchment: '#FDFAF6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1100px',
      },
    },
  },
  plugins: [],
}

export default config
