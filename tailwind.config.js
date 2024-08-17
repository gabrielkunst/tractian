/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2188FF',
        secondary: '#023B78',
        tertiary: '#17192D',
        destructive: '#ED3833',
        success: '#52C41A',
        'custom-gray-150': '#E3EAEF',
        'custom-gray-200': '#D8DFE6',
        'custom-gray-500': '#88929C',
        'custom-gray-600': '#77818C',
        'custom-gray-950': '#24292F',
        'custom-gray-placeholder': '#C1C9D2',
        'custom-dark-writting': '#1F2937',
        'custom-white': 'rgba(255, 255, 255)',
      },
      screens: {
        mb: '425px',
      },
    },
  },
  plugins: [],
}
