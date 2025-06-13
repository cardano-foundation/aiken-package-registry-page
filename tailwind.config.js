/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 45s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.1)' },
          '66%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Aiken's primary colors
        aiken: {
          // Dark blue background
          dark: '#0F172A',
          // Accent blue
          blue: '#3B82F6',
          // Light blue for hover states
          'blue-light': '#60A5FA',
          // Darker blue for text
          'blue-dark': '#1E40AF',
          // Background colors
          'bg-light': '#F8FAFC',
          'bg-dark': '#0F172A',
          // Text colors
          'text-light': '#F8FAFC',
          'text-dark': '#1E293B',
          'text-muted': '#64748B',
          // Border colors
          'border-light': '#E2E8F0',
          'border-dark': '#334155',
          // Card colors
          'card-bg': '#FFFFFF',
          'card-hover': '#F1F5F9',
        },
        // brand colours
        'cf-blue': {
          50: '#ADC5FF',
          100: '#6E98FF',
          200: '#3973FF',
          300: '#0D54FF',
          400: '#094BEA',
          500: '#023CC7',
          600: '#0033AD',
          900: '#030321',
          1000: '#05143C',
        },
        'cf-gray': {
          50: '#CDCDCD',
          100: '#999999',
          200: '#7B7B7B',
          300: '#595959',
          400: '#3E3E3E',
          500: '#1F1F1F',
          600: '#61787B',
        },
        'cf-red': {
          50: '#FFE5E5',
          100: '#FFCFCF',
          200: '#FFAAAA',
          300: '#FF8C8C',
          400: '#FF7878',
          500: '#FF6C6C',
          600: '#FF5454',
        },
        'cf-green': {
          50: '#D1FFF4',
          100: '#A3FAE6',
          200: '#93EFD9',
          300: '#84E1CB',
          400: '#79D3BE',
          500: '#71C7B2',
          600: '#68B8A5',
          700: '#39937f',
          800: '#48DCCC',
          900: '#1FD9CA',
        },
        'cf-yellow': {
          50: '#FFF5E4',
          100: '#FEE7C3',
          200: '#FFE0AE',
          300: '#FFD693',
          400: '#FFC668',
          500: '#FEB439',
          600: '#F3A31D',
        },
        // one off colours
        'cf-offwhite': '#FBFBFB',
        'cf-neutral-gray': '#61787B',
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        'window-bg': 'var(--window-bg)',
        hr: '#292929',
        border: '#604185',
        link: 'var(--link)',
        text: 'var(--text)',
        'border-text': '#f2f2f2',
        'text-muted': 'var(--text-muted)',
        'code-bg': 'var(--code-bg)',
        'code-text': 'var(--code-text)',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#3B82F6',
              backgroundColor: '#F1F5F9',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
