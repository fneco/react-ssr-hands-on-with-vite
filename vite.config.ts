import react from "@vitejs/plugin-react-swc";
import { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import { defineConfig, PluginOption } from "vite";
import App from "./src/App.tsx";

const htmlPlugin = (): PluginOption => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      const appHtml = ReactDOMServer.renderToString(createElement(App));
      return html.replace(/%App%/, appHtml);
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin()],
})
