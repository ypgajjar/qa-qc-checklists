import { useInspectionStore } from '../store/useInspectionStore'
import templates from '../data/templates'

export default function ChecklistTable({ division, itemId }) {
  const items = templates.find(d => d.id === division)?.items || []
  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="p-2">#</th>
          <th className="p-2">Item</th>
          <th className="p-2">Yes</th>
          <th className="p-2">No</th>
          <th className="p-2">N/A</th>
          <th className="p-2">Comments</th>
        </tr>
      </thead>
      <tbody>
        {items.map((text, i) => (
          <tr key={i} className={i === itemId ? 'bg-yellow-50' : ''}>
            <td className="p-2">{i+1}</td>
            <td className="p-2">{text}</td>
            <td className="p-2"><input type="checkbox" /></td>
            <td className="p-2"><input type="checkbox" /></td>
            <td className="p-2"><input type="checkbox" /></td>
            <td className="p-2"><input type="text" className="w-full border rounded" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}