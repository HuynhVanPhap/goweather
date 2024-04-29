/** @type {import('tailwindcss').Config} */
module.exports = {
  // Những định dạng file mà tailwind có thể ảnh hưởng
  content: ["./src/**/*.{html,vue,js}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#fdfbfb",
        "weather-secondary": "#cac8c8",
      },
      fontFamily: {
        // Áp dụng font chữ Ubuntu.
        // Nếu không có hệ thống sẽ tự động tìm một font chữ
        // sans-serif khác.
        ubuntu: ["Ubuntu, sans-serif"],
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
