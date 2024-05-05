const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000, // Thay đổi cổng mặc định 8080 thành 3000
    open: true, // Tự động mở trình duyệt khi ứng dụng khởi chạy
    proxy: {
      // Cấu hình proxy nếu cần thiết
    },
  },
});
