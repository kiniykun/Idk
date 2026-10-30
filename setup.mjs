// Rebuilds folders from flat file names: "src__app.ts" -> "src/app.ts"
import fs from "node:fs";
import path from "node:path";
for (const name of fs.readdirSync(".")) {
	if (!name.includes("__") || !fs.statSync(name).isFile()) continue;
	const dest = name.split("__").join("/");
	fs.mkdirSync(path.dirname(dest), { recursive: true });
	fs.renameSync(name, dest);
}
