/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "768px" },
      },
      boxShadow: {
        header3D:
          "0px 1px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f",
        box: "0px 0px 1px rgba(0,0,0,0.3),0px 3px 7px rgba(0,0,0,0.3), 0px 1px white inset, 0px -3px 1px rgba(0,0,0,0.3) inset",
      },
      backgroundImage: {
        "body-pattern": "url('../img/pattern.png')",
        banner: "url('../img/bakbaner.png')",
        pxgray: "url('../img/pxgray.png')",
      },
      backgroundPosition: {
        "banner-position": "-200px -200px",
      },
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9",
      },
      animation: {
        "spin-low": "spin 2s linear infinite",
        "from-bellow": "fromBellow 400ms linear",
        "from-right": "fromRight 400ms linear",
        "bg-banner": "backBanner 10s linear",
        "text-banner": "showBannerText 10s linear",
        "from-top": "fromTop 300ms linear",
        "show-card-icon": "showCardIcon 300ms linear",
        "show-card-category": "showCardCategory 300ms linear",
        "show-card-description": "showCardDescription 300ms linear",
      },
      keyframes: {
        fromBellow: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fromRight: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fromTop: {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        showCardIcon: {
          from: { transform: "translateY(-200%)" },
          to: { transform: "translateY(0%)" },
        },
        showCardCategory: {
          from: { transform: "translateY(-300%)" },
          to: { transform: "translateY(0%)" },
        },
        showCardDescription: {
          from: { transform: "translateX(-200%)" },
          to: { transform: "translateX(0%)" },
        },
        backBanner: {
          "0%": { "background-position": "0px 0px" },
          "100%": { "background-position": "-200px -200px" },
        },
        showBannerText: {
          "0%": { transform: "translateX(-600%) scale(5,5)", opacity: 1 },
          "50%": { transform: "translateX(600%) scale(5,5)", opacity: 1 },
          "75%": {
            transform: "translate(-600%)",
            "text-shadow": "none",
            color: "transparent",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0%)",
            "text-shadow": "2px 2px 1px black",
            color: "white",
            opacity: 1,
          },
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "hover", "group-hover"],
    animate: ["responsive", "hover", "group-hover"],
    fontSize: ["responsive", "hover", "group-hover"],
    transform: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
    padding: ["responsive", "hover", "group-hover"],
  },
  plugins: [],
};
