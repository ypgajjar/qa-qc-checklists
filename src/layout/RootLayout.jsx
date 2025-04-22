import { Outlet } from 'react-router-dom'
import DivisionSidebar from '../components/DivisionSidebar'
import HeaderForm from '../components/HeaderForm'
import PdfExporter from '../components/PdfExporter'
import SignoffFooter from '../components/SignoffFooter'

export default function RootLayout() {
  return (
    <div className="flex h-screen">
      <DivisionSidebar className="w-64 border-r" />
      <div className="flex-1 flex flex-col">
        <HeaderForm />
        <main id="checklist-print-area" className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
        <SignoffFooter />
        <PdfExporter />
      </div>
    </div>
  )
}