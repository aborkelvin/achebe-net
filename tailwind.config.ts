import type { Config } from 'tailwindcss'
import { screens } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      fold: "270px",
      phones: "350px",
      xphones: "400px",
      minitablet: "550px",
      brkpoint: "940px",
      ...screens,
      smlaptops: "1150px",
      mdlaptops: "1230px",
      lglaptops: "1300px",
      xllaptops: "1400px",
    },
    extend: {
      backgroundImage: {        
        'custom-purple-gradient': 'linear-gradient(90deg, #120F11 16.51%, #60132C 135.78%)',
        
        'ask-sidebar-gradient': 'linear-gradient(90deg, #60132C -318.46%, #FFF1FA 173.49%)',
        'ask-gradient':'linear-gradient(90deg,#FFF1FA -1.54%,#60132C 126.39%)',
        'hero-image': 'url(/images/image2.png)',
        'text-dark-to-light': "linear-gradient(90deg, #60132C -16.51%, #FFF1FA 93.65%)"

      },
      colors: {
        'brand-white': '#FFF1FA',
        'brand-dark' : '#120F11'
      },
      fontFamily: {
        fjalla: ['Fjalla One', 'sans-serif'],
        /* oxanium: ['Oxanium', 'sans-serif'], */
      },
    },
  },
  plugins: [],
}
export default config
