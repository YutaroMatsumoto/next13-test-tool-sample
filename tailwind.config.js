/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      aria: {
        invalid: 'invalid="true"',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      green10: '#dcfce7',
      green20: '#bbf7d0',
      green30: '#86efac',
      green40: '#4ade80',
      green50: '#22c55e',
      gray5: '#f9fafb',
      gray10: '#f3f4f6',
      gray30: '#d1d5db',
      gray20: '#dce7eb',
      gray40: '#9ca3af',
      red: '#f43f5e',
      red10: 'rgb(254 226 226)',
    },
  },
  plugins: [],
}
