export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf8f5] animate-pulse">
      <div className="bg-[#faf8f5] border-b border-primary-200 h-16" />
      <div className="bg-primary-900 h-[500px]" />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="h-8 bg-primary-100 rounded w-1/3 mx-auto mb-4" />
        <div className="h-4 bg-primary-100 rounded w-2/3 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border-l-4 border-primary-400 p-8">
              <div className="w-12 h-12 rounded-full bg-primary-100 mb-5" />
              <div className="h-5 bg-primary-100 rounded w-3/4 mb-3" />
              <div className="h-4 bg-gray-100 rounded w-full mb-2" />
              <div className="h-4 bg-gray-100 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
