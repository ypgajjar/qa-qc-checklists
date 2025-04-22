import { useParams } from 'react-router-dom'
import ChecklistTable from '../components/ChecklistTable'

export default function ChecklistPage() {
  const { division, itemId } = useParams()
  return (
    <div>
      <ChecklistTable division={division} itemId={parseInt(itemId, 10)} />
    </div>
  )
}