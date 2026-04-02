export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf8f5] animate-pulse">
      <div className="bg-[#faf8f5] border-b border-primary-200 h-16" />
      <div className="bg-primary-900 h-64" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-primary-100" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-primary-100 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
