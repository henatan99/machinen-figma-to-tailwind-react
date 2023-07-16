/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'custom-search': "rgba(255, 255, 255, 0.5)",
            'custom-bg-red': "rgba(220, 38, 38, 1)",
            'custom-divider-bg': "rgba(255, 255, 255, 0.1)",
            'bg-main': "rgba(42, 44, 56, 1)",
            'custom-font-white': "rgba(255, 255, 255, 1)"
        },
    },
    plugins: [],
  }
}