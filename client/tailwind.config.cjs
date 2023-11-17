module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "var(--color-accent1)",
          2: "var(--color-accent2)",
        },
        bkg: {
          1: "var(--color-bkg)",
          2: "var(--color-bkg2)",
        },
        btn: {
          DEFAULT: "var(--color-btn)",
          active: "var(--color-btn-active)",
        },
        emptyBtn: {
          1: "var(--color-emptyBtn)",
          2: "var(--color-emptyBtn-active)",
        },
        content: {
          DEFAULT: "var(--color-content)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
