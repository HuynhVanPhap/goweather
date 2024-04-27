/** @type {import('tailwindcss').Config} */
module.exports = {
  // Những định dạng file mà tailwind có thể ảnh hưởng
  content: ["./src/**/*.{html,vue,js}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#0066BA",
        "weather-secondary": "#004E71",
      },
      fontFamily: {
        // Áp dụng font chữ Ubuntu.
        // Nếu không có hệ thống sẽ tự động tìm một font chữ
        // sans-serif khác.
        ubuntu: ["Ubuntu, sans-serif"],
      },
    },
  },
  plugins: [],
};
