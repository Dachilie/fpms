export default function AppHeader() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-[#FF6F4C] transition">
          🔔
        </button>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[#31ACE7] text-white flex items-center justify-center font-semibold">
            IF
          </div>

          <div className="text-sm">
            <p className="font-medium">Ian Fuentes</p>
            <p className="text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  )
}