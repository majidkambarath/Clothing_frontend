const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        Rampart: ["Rampart One", "cursive"],
        purse : ["Purple Purse", "serif"]
      },
      colors: {
        custom: "#FAF9F8",
      },
    },
  },
  plugins: [],
});
