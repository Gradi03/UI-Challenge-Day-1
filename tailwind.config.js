/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-pattern": "radial-gradient(circle, #000 1px, transparent 1px)",
      },
      backgroundSize: {
        "dotted-pattern": "10px 10px",
      },
      colors: {
        "custom-yellow": "#FEF3C7", // Soft yellow
        "custom-blue": "#DBEAFE", // Light blue
        "custom-indigo": "#C7D2FE", // Light indigo
      },
      animation: {
        pulse: "pulse 2s infinite",
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
