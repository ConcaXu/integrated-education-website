import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// 引入 path 模块，你需要安装 @types/node
import { resolve } from "path";
 
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      // 配置 Svg Icons 插件
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(__dirname, "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[name]", // 使用图标的文件名作为symbolId
      }),
      AutoImport({
        // 自动导入 Vue 和 Vue Router 相关函数
        imports: [
          "vue",
          "vue-router",
          "pinia", // 如果你使用 Pinia
        ],
        // 可以选择自动生成类型声明文件
        dts: true, // 生成 auto-imports.d.ts 文件
        //  eslint 配置（如果需要）
        eslintrc: {
          enabled: true, // 生成 eslint 配置
        },
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 将 @ 映射为 src 目录的绝对路径
      },
    },
    server: {
      port: Number(env.VITE_APP_PORT) || 5173,
      open: true,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://XXXXXXXXXXXXXXXXXXXXXXXXXXX",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/prod-api": {
          target: "http://8.135.56.131:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/prod-api/, ""),
        },
      },
    },
  };
});