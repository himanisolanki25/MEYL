/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  // content array of files that need to be styled.
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        primaryHover: "#EA580C",
        bg: "#FFF7ED",
        card: "#FFFFFF",
        text: "#1F2937",
        muted: "#6B7280",
        border: "#E5E7EB",
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

// npx tailwindcss init -> this executes tailwind => tailwind.config.js gets created using this command
// .postcssrc config lets parcel use tailwind for styling.