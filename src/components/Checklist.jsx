import { useState } from 'react';

export default function Checklist({ templateName, items }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const [completed, setCompleted] = useState(
    items.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {})
  );

  const handleCheckbox = (id) =>
    setCompleted((c) => ({ ...c, [id]: !c[id] }));

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold">{templateName}</h2>
      
      {/* Logo upload */}
      <label className="block">
        <span className="text-sm font-medium">Logo (optional):</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogoFile(e.target.files[0])}
          className="mt-1 block w-full"
        />
      </label>

      {/* Title & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Checklist Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* Checklist items */}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-start">
            <input
              type="checkbox"
              checked={completed[item.id]}
              onChange={() => handleCheckbox(item.id)}
              className="mt-1 mr-2"
            />
            <label>{item.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
