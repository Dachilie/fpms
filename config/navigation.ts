import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  BarChart3,
  Settings,
} from "lucide-react"

export const MAIN_NAVIGATION = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Faculty",
    href: "/faculty",
    icon: Users,
  },
  {
    title: "PTM",
    href: "/ptm",
    icon: ClipboardCheck,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]