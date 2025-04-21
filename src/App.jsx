import { useState } from "react";
import Checklist from "./components/Checklist";
import { templates } from "./data/templates";

export default function App() {
  const names = Object.keys(templates);
  const [selected, setSelected] = useState(names[0]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-xl mx-auto mb-6">
        <label className="block mb-2 font-medium">Choose template:</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <Checklist
        templateName={selected}
        items={templates[selected]}
      />
    </div>
  );
}
