import { useState } from 'react'
import { Link } from 'react-router-dom'
import divisions from '../data/templates'

export default function DivisionSidebar({ className }) {
  const [open, setOpen] = useState(null)
  return (
    <nav className={className + ' overflow-auto'}>
      <h2 className="p-4 font-bold">Choose Checklist</h2>
      <select
        className="m-4 border rounded"
        onChange={e => window.location.assign(`${import.meta.env.BASE_URL}checklist/${e.target.value}/0`)}
      >
        {divisions.map(d => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
    </nav>
  )
}