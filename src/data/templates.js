// src/data/templates.js
const modules = import.meta.glob("./json/*.json", { eager: true });

export const templates = Object.fromEntries(
  Object.entries(modules).map(([filePath, module]) => {
    // filePath will look like './json/Electrical QAQC.json'
    const name = filePath
      .split("/")
      .pop()
      .replace(/\.json$/, "");
    return [name, module.default];
  })
);
