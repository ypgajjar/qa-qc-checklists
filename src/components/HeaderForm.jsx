import { useInspectionStore } from '../store/useInspectionStore'

export default function HeaderForm() {
  const { projectName, projectNumber, companyName, dateOfInspection, setField } = useInspectionStore()
  return (
    <form className="grid grid-cols-2 gap-4 p-4 bg-gray-100">
      <div>
        <label>Project Name</label>
        <input
          value={projectName}
          onChange={e => setField('projectName', e.target.value)}
          className="block w-full border rounded p-1"
        />
      </div>
      <div>
        <label>Project Number</label>
        <input
          value={projectNumber}
          onChange={e => setField('projectNumber', e.target.value)}
          className="block w-full border rounded p-1"
        />
      </div>
      <div>
        <label>Company Name</label>
        <input
          value={companyName}
          onChange={e => setField('companyName', e.target.value)}
          className="block w-full border rounded p-1"
        />
      </div>
      <div>
        <label>Date of Inspection</label>
        <input
          type="date"
          value={dateOfInspection}
          onChange={e => setField('dateOfInspection', e.target.value)}
          className="block w-full border rounded p-1"
        />
      </div>
    </form>
  )
}