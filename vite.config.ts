import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), macrosPlugin()],
    define: {
        "process.platform": JSON.stringify("win32"),
        "process.env": {},
    },
});
