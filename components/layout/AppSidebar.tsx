import Link from "next/link"

import { BRANDING } from "@/config/branding"
import { MAIN_NAVIGATION } from "@/config/navigation"

export default function AppSidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-[#FF6F4C] tracking-tight">
          {BRANDING.shortName}
        </h1>

        <p className="text-xs uppercase tracking-wider text-gray-500">
          {BRANDING.university}
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {MAIN_NAVIGATION.map((item) => {
  const Icon = item.icon

  return (
    <Link
      key={item.title}
      href={item.href}
      className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FF6F4C] transition"
    >
      <Icon className="h-5 w-5" />
      <span>{item.title}</span>
    </Link>
  )
})}
      </nav>
    </aside>
  )
}