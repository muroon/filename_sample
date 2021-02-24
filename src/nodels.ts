import path = require("path");
import fs = require("fs");

export const ls = (dirPath: string) => {
    fs.readdir(dirPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
        files.forEach((item: string) => {
            var itemPath = path.resolve(item);
            console.log(itemPath);
        });
    });
}
