import { useState, useEffect } from "react";

export default function Checklist({ templateName, items }) {
  // — logo preview URL
  const [logoUrl, setLogoUrl] = useState("");
  // — title & company name
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  // — track which items are checked
  const [checked, setChecked] = useState({});

  // reset checks when template changes
  useEffect(() => {
    const initial = {};
    items.forEach((it) => (initial[it.id] = false));
    setChecked(initial);
  }, [items]);

  // handle a logo file select
  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoUrl(URL.createObjectURL(file));
    }
  };

  // toggle one checkbox
  const toggle = (id) =>
    setChecked((c) => ({ ...c, [id]: !c[id] }));

  // generate & download CSV
  const download = () => {
    // Build a CSV string
    let csv = `"Template Name","${templateName}"\n`;
    csv += `"Title","${title}"\n`;
    csv += `"Company","${company}"\n\n`;
    csv += `"Item ID","Text","Checked"\n`;
    items.forEach(({ id, text }) => {
      const mark = checked[id] ? "Yes" : "No";
      // escape any quotes
      const esc = (str) => `"${str.replace(/"/g, '""')}"`;
      csv += [esc(id), esc(text), esc(mark)].join(",") + "\n";
    });

    // trigger a download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    // safe filename
    const safeName = templateName.replace(/\W+/g, "_");
    a.download = `${safeName}_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-6 space-y-6">
      {/* Logo */}
      <div>
        <label className="block font-medium mb-1">Logo (optional):</label>
        <input type="file" accept="image/*" onChange={handleLogo} />
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo preview"
            className="h-16 mt-2 object-contain"
          />
        )}
      </div>

      {/* Title & Company */}
      <div>
        <label className="block font-medium mb-1">Checklist Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter a title…"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Company Name:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter company name…"
        />
      </div>

      {/* Checklist items */}
      <div>
        <label className="block font-medium mb-2">
          {templateName} Items:
        </label>
        <ul className="space-y-2">
          {items.map(({ id, text }) => (
            <li key={id}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={!!checked[id]}
                  onChange={() => toggle(id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{text}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Download button */}
      <div className="text-right">
        <button
          onClick={download}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={!title || !company}
        >
          Download CSV
        </button>
      </div>
    </div>
  );
}
