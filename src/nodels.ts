import path from "path";
import * as fs from "fs";

export const ls = (dirPath: string) => {
    fs.readdir(dirPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
        files.forEach((item: string) => {
            const itemPath = path.resolve(item);
            console.log(itemPath);
        });
    });
}
