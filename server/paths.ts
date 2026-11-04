import {existsSync} from "fs";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";

function getProjectRoot(): string {
	let dir = dirname(fileURLToPath(import.meta.url));

	while (dir !== dirname(dir)) {
		if (existsSync(resolve(dir, "package.json"))) {
			return dir;
		}
		dir = dirname(dir);
	}

	return process.cwd();
}

export const projectRoot = getProjectRoot();
export const dataDir = resolve(projectRoot, "data");
export const imagesDir = resolve(dataDir, "images");
