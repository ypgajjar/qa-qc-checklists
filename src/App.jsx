import Checklist from './components/Checklist';

export default function App() {
  // For now, hard‑code a small sample template:
  const sampleItems = [
    { id: '1', text: 'Item 1: Verify drawings' },
    { id: '2', text: 'Item 2: Check material quality' },
    { id: '3', text: 'Item 3: Record readings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Checklist templateName="Sample QA/QC Template" items={sampleItems} />
    </div>
  );
}
