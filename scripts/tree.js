import fs from "fs";
import path from "path";

function generateTree(dir, prefix = "", ignore = ["node_modules", ".git", ".next"]) {
  const files = fs.readdirSync(dir);

  let tree = "";

  files.forEach((file, index) => {
    if (ignore.includes(file)) return; // ignora carpetas pesadas

    const filePath = path.join(dir, file);
    const isDir = fs.statSync(filePath).isDirectory();
    const connector = index === files.length - 1 ? "└── " : "├── ";

    tree += prefix + connector + file + "\n";

    if (isDir) {
      const newPrefix = prefix + (index === files.length - 1 ? "    " : "│   ");
      tree += generateTree(filePath, newPrefix, ignore);
    }
  });

  return tree;
}

// Cambia "." si quieres otra carpeta base
const rootDir = process.cwd();
console.log(path.basename(rootDir));
console.log(generateTree(rootDir));
