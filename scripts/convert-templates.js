// scripts/convert-templates.js
import fs   from "fs";
import path from "path";
import xlsx from "xlsx";
const { readFile, utils } = xlsx;

const inDir  = path.resolve("data/qaqc");
const outDir = path.resolve("src/data/json");

// make sure output folder exists
fs.mkdirSync(outDir, { recursive: true });

for (const file of fs.readdirSync(inDir)) {
    if (!file.endsWith(".xlsx")) continue;
    const wb = readFile(path.join(inDir, file));
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rows = utils.sheet_to_json(sheet, { header: ["id","text"], range: 1 });
    const name = file.replace(/\.xlsx$/, "");
    fs.writeFileSync(
      path.join(outDir, name + ".json"),
      JSON.stringify(rows, null, 2),
      "utf-8"
    );
    console.log(`→ wrote ${name}.json`);
  }
