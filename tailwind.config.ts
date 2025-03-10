import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";
import TailwindAnimate from "tailwindcss-animate";
import Plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        "50": "hsl(var(--clr-primary-50-hsl))",
        "100": "hsl(var(--clr-primary-100-hsl))",
        "200": "hsl(var(--clr-primary-200-hsl))",
        "300": "hsl(var(--clr-primary-300-hsl))",
        "400": "hsl(var(--clr-primary-400-hsl))",
        "500": "hsl(var(--clr-primary-500-hsl))",
        "600": "hsl(var(--clr-primary-600-hsl))",
        "700": "hsl(var(--clr-primary-700-hsl))",
        "800": "hsl(var(--clr-primary-800-hsl))",
        "900": "hsl(var(--clr-primary-900-hsl))",
      },
      secondary: {
        "50": "hsl(var(--clr-secondary-50-hsl))",
        "100": "hsl(var(--clr-secondary-100-hsl))",
        "200": "hsl(var(--clr-secondary-200-hsl))",
        "300": "hsl(var(--clr-secondary-300-hsl))",
        "400": "hsl(var(--clr-secondary-400-hsl))",
        "500": "hsl(var(--clr-secondary-500-hsl))",
        "600": "hsl(var(--clr-secondary-600-hsl))",
        "700": "hsl(var(--clr-secondary-700-hsl))",
        "800": "hsl(var(--clr-secondary-800-hsl))",
        "900": "hsl(var(--clr-secondary-900-hsl))",
      },
      accent: {
        "50": "hsl(var(--clr-accent-50-hsl))",
        "100": "hsl(var(--clr-accent-100-hsl))",
        "200": "hsl(var(--clr-accent-200-hsl))",
        "300": "hsl(var(--clr-accent-300-hsl))",
        "400": "hsl(var(--clr-accent-400-hsl))",
        "500": "hsl(var(--clr-accent-500-hsl))",
        "600": "hsl(var(--clr-accent-600-hsl))",
        "700": "hsl(var(--clr-accent-700-hsl))",
        "800": "hsl(var(--clr-accent-800-hsl))",
        "900": "hsl(var(--clr-accent-900-hsl))",
      },
      white: {
        "50": "hsl(var(--clr-white-50-hsl))",
        "100": "hsl(var(--clr-white-100-hsl))",
        "200": "hsl(var(--clr-white-200-hsl))",
        "300": "hsl(var(--clr-white-300-hsl))",
        "400": "hsl(var(--clr-white-400-hsl))",
        "500": "hsl(var(--clr-white-500-hsl))",
        "600": "hsl(var(--clr-white-600-hsl))",
        "700": "hsl(var(--clr-white-700-hsl))",
        "800": "hsl(var(--clr-white-800-hsl))",
        "900": "hsl(var(--clr-white-900-hsl))",
      },
      black: {
        "50": "hsl(var(--clr-black-50-hsl))",
        "100": "hsl(var(--clr-black-100-hsl))",
        "200": "hsl(var(--clr-black-200-hsl))",
        "300": "hsl(var(--clr-black-300-hsl))",
        "400": "hsl(var(--clr-black-400-hsl))",
        "500": "hsl(var(--clr-black-500-hsl))",
        "600": "hsl(var(--clr-black-600-hsl))",
        "700": "hsl(var(--clr-black-700-hsl))",
        "800": "hsl(var(--clr-black-800-hsl))",
        "900": "hsl(var(--clr-black-900-hsl))",
      },
      grey: {
        "50": "hsl(var(--clr-grey-50-hsl))",
        "100": "hsl(var(--clr-grey-100-hsl))",
        "200": "hsl(var(--clr-grey-200-hsl))",
        "300": "hsl(var(--clr-grey-300-hsl))",
        "400": "hsl(var(--clr-grey-400-hsl))",
        "500": "hsl(var(--clr-grey-500-hsl))",
        "600": "hsl(var(--clr-grey-600-hsl))",
        "700": "hsl(var(--clr-grey-700-hsl))",
        "800": "hsl(var(--clr-grey-800-hsl))",
        "900": "hsl(var(--clr-grey-900-hsl))",
      },
      warning: {
        "50": "hsl(var(--clr-warning-50-hsl))",
        "100": "hsl(var(--clr-warning-100-hsl))",
        "200": "hsl(var(--clr-warning-200-hsl))",
        "300": "hsl(var(--clr-warning-300-hsl))",
        "400": "hsl(var(--clr-warning-400-hsl))",
        "500": "hsl(var(--clr-warning-500-hsl))",
        "600": "hsl(var(--clr-warning-600-hsl))",
        "700": "hsl(var(--clr-warning-700-hsl))",
        "800": "hsl(var(--clr-warning-800-hsl))",
        "900": "hsl(var(--clr-warning-900-hsl))",
      },
      success: {
        "50": "hsl(var(--clr-success-50-hsl))",
        "100": "hsl(var(--clr-success-100-hsl))",
        "200": "hsl(var(--clr-success-200-hsl))",
        "300": "hsl(var(--clr-success-300-hsl))",
        "400": "hsl(var(--clr-success-400-hsl))",
        "500": "hsl(var(--clr-success-500-hsl))",
        "600": "hsl(var(--clr-success-600-hsl))",
        "700": "hsl(var(--clr-success-700-hsl))",
        "800": "hsl(var(--clr-success-800-hsl))",
        "900": "hsl(var(--clr-success-900-hsl))",
      },
      error: {
        "50": "hsl(var(--clr-error-50-hsl))",
        "100": "hsl(var(--clr-error-100-hsl))",
        "200": "hsl(var(--clr-error-200-hsl))",
        "300": "hsl(var(--clr-error-300-hsl))",
        "400": "hsl(var(--clr-error-400-hsl))",
        "500": "hsl(var(--clr-error-500-hsl))",
        "600": "hsl(var(--clr-error-600-hsl))",
        "700": "hsl(var(--clr-error-700-hsl))",
        "800": "hsl(var(--clr-error-800-hsl))",
        "900": "hsl(var(--clr-error-900-hsl))",
      },
    },
    fontFamily: {
      iranSansX: ["var(--font-iran-sans-x)"],
    },
    fontSize: {
      "display-1": ["57px", { lineHeight: "155%" }],
      "display-2": ["45px", { lineHeight: "155%" }],
      "display-3": ["36px", { lineHeight: "155%" }],
      "headline-1": ["32px", { lineHeight: "155%" }],
      "headline-2": ["28px", { lineHeight: "155%" }],
      "headline-3": ["24px", { lineHeight: "155%" }],
      "tittle-1": ["22px", { lineHeight: "155%" }],
      "tittle-2": ["16px", { lineHeight: "auto" }],
      "tittle-3": ["14px", { lineHeight: "auto" }],
      "label-1": ["14px", { lineHeight: "auto" }],
      "label-2": ["12px", { lineHeight: "auto" }],
      "label-3": ["11px", { lineHeight: "auto" }],
      "body-1": ["20px", { lineHeight: "155%" }],
      "body-2": ["16px", { lineHeight: "155%" }],
      "body-3": ["14px", { lineHeight: "155%" }],
      "body-4": ["12px", { lineHeight: "155%" }],
      "body-5": ["10px", { lineHeight: "155%" }],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
    },
    backgroundImage: {
      pattern: "url('/patterns/pattern1.png')",
      pattern2: "url('/patterns/pattern2.png')",
      pattern3: "url('/patterns/pattern3.png')",
    },
    extend: {
      lineHeight: {
        155: "155%",
        144: "144%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    TailwindAnimate,
    Plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-pattern-mobile": {
          background:
            "hsl(var(--clr-primary-500-hsl)) url('/patterns/pattern1.png') top left/500px",
        },
        ".bg-pattern-desktop": {
          background:
            "hsl(var(--clr-primary-500-hsl)) url('/patterns/pattern1.png') top left/700px",
        },
      });
    }),
  ],
};

export default withTV(config);
