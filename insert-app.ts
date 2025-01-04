import fs from "node:fs/promises";
import { render } from "./dist/server/main-at-server.js";

const appHtml = render();
const template = await fs.readFile("./dist/index.html", "utf-8");

await fs.writeFile("./dist/index.html", template.replace("🦜", appHtml));
