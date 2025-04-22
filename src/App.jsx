import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ChecklistPage from './pages/ChecklistPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<Navigate to="checklist/General/0" replace />}
        />
        <Route path="checklist/:division/:itemId" element={<ChecklistPage />} />
      </Route>
    </Routes>
  )
}