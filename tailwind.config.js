import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */

export default withUt({
  // Your existing Tailwind config
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    
  ],
  darkMode:"class",

   theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
   // require("flowbite/plugin")
],
});
