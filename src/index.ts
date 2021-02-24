import path = require("path");
import fs = require("fs");

const ls = (dirPath: string) => {
    fs.readdir(dirPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
        files.forEach((item: string) => {
            var itemPath = path.resolve(item);
            console.log(itemPath);
        });
    });
}

ls(__dirname);