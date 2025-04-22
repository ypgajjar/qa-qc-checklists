export default function SignoffFooter() {
    return (
      <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4">
        {['Inspector Name', 'Position', 'Date'].map(label => (
          <div key={label}>
            <label className="block text-sm font-medium">{label}</label>
            <input type={label==='Date'?'date':'text'} className="mt-1 w-full border rounded p-1" />
          </div>
        ))}
      </div>
    )
  }