import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C9950",
        secondary: "#2C2C2C",
        accent: "#FACC15",
        neutral: "#383838",
        bg: {
          DEFAULT: "#000000",
          secondary: "#008C3E",
          primary: "#FFFFFF",
          neutral: "#F4F4F4",
          accent: "#050409",
        },
        button: {
          DEFAULT: "#EA0A0B",
        },
        textColor: {
          primary: "#2C2C2C",
          secondary: "#FFFFFF",
        },
      },
      fontFamily: {
        robotoBold: ["RobotoBold"],
        neueRegular: ["BebasNeueRegular"],
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        x2l: "24px",
        x3l: "28px",
        x4l: "36px",
        x5l: "48px",
      },
      screens: {
        xl: { min: "1440px" },
        lg: { max: "1024px" },
        md: { max: "912px" },
        sm: { max: "768px" },
        xs: { max: "480px" },
      },
      container: {
        center: true, // Centra automáticamente
        screens: {
          xl: "1440px",
        },
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(0deg, #00451D 0%, #1FA557 100%)",
      },
      dropShadow: {
        "drop-shadow-3xl": "0 0px 10px #008C3E",
        "drop-shadow-3xl-white": "0 0px 8px #FFFFFF",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".p-container": {
          padding: "27px 55px 27px 55px",
        },
        ".list-circle": {
          listStyleType: "none",
          position: "relative",
          paddingLeft: "1em",
        },
        ".list-circle li::before": {
          content: '"• "',
          position: "absolute",
          left: 0,
        },
      });
    }),
  ],
} satisfies Config;
