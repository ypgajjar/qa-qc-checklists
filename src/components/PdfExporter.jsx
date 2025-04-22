import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function PdfExporter() {
  const exportPdf = async () => {
    const element = document.getElementById('checklist-print-area')
    const canvas = await html2canvas(element)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [canvas.width, canvas.height] })
    pdf.addImage(imgData, 'PNG', 0, 0)
    pdf.save('inspection.pdf')
  }
  return (
    <button
      onClick={exportPdf}
      className="m-4 p-2 bg-blue-600 text-white rounded"
    >
      Export as PDF
    </button>
  )
}