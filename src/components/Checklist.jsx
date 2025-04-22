import { useState } from "react";

export default function Checklist({ templateName, items }) {
  const [checked, setChecked] = useState({});

  function toggle(id) {
    setChecked(c => ({ ...c, [id]: !c[id] }));
  }

  // ---- CSV download handler ----
  function downloadCSV() {
    // 1) Build header + rows array
    const header = ["Item ID", "Text", "Checked"];
    const rows = items.map(item => [
      item.id,
      `"${item.text.replace(/"/g, '""')}"`,  // escape quotes
      checked[item.id] ? "TRUE" : "FALSE"
    ]);

    // 2) Join to a single string
    const csvContent =
      [header, ...rows]
        .map(r => r.join(","))   // comma‑separate each row
        .join("\r\n");           // CRLF line endings

    // 3) Create a Blob and an object URL
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);

    // 4) Create a temporary link & click it
    const a = document.createElement("a");
    a.href = url;
    a.download = `${templateName.replace(/\s+/g, "_")}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // 5) Release memory
    URL.revokeObjectURL(url);
  }
  // --------------------------------

  return (
    <div className="…">
      <h2 className="text-xl font-bold mb-4">{templateName}</h2>
      <ul className="space-y-2 mb-6">
        {items.map(item => (
          <li key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={item.id}
              checked={!!checked[item.id]}
              onChange={() => toggle(item.id)}
              className="mr-2"
            />
            <label htmlFor={item.id}>{item.text}</label>
          </li>
        ))}
      </ul>

      <button
        onClick={downloadCSV}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download CSV
      </button>
    </div>
  );
}
