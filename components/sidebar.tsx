"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/store/auth-store"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CalendarIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useMobile } from "@/hooks/use-mobile"
import { useSidebarStore } from "@/store/sidebar-store"

export default function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const [sheetOpen, setSheetOpen] = useState(false)
  const isMobile = useMobile()
  const { isCollapsed, toggle, setCollapsed } = useSidebarStore()

  useEffect(() => {
    if (isMobile) setCollapsed(false)
  }, [isMobile, setCollapsed])

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { name: "Appointments", href: "/dashboard/appointments", icon: CalendarIcon },
    { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
  ]

  const NavItem = ({ item, onClick }: { item: (typeof navigation)[0]; onClick?: () => void }) => {
    const isActive = pathname === item.href

    if (isCollapsed && !isMobile) {
      return (
        <TooltipProvider key={item.name} delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-md p-2 text-sm font-medium transition-colors",
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100",
                )}
                onClick={onClick}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100",
        )}
        onClick={onClick}
      >
        <item.icon className="h-5 w-5" />
        <span>{item.name}</span>
      </Link>
    )
  }

  if (isMobile) {
    return (
      <>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-40"
          onClick={() => setSheetOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent side="left" className="p-0 w-[250px]">
            <div className="flex h-full flex-col">
              <div className="border-b p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3">
                <h2 className="text-lg font-semibold">Invitro Medical</h2>
              </div>

              <div className="flex-1 overflow-auto p-4 space-y-1">
                {navigation.map((item) => (
                  <NavItem key={item.name} item={item} onClick={() => setSheetOpen(false)} />
                ))}
              </div>

              <div className="border-t p-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  onClick={() => {
                    logout()
                    setSheetOpen(false)
                  }}
                >
                  <LogOutIcon className="h-5 w-5" />
                  Sign Out
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col border-r bg-white transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        <div className={cn("flex items-center border-b py-4", isCollapsed ? "justify-center px-2" : "px-4 gap-3")}>
          <Avatar>
            <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="px-4 py-3">
            <h2 className="text-lg font-semibold">Invitro Medical</h2>
          </div>
        )}

        <div className={cn("flex-1 overflow-y-auto p-3", isCollapsed && "flex flex-col items-center")}>
          <div className={cn("space-y-1", isCollapsed && "flex flex-col items-center")}>
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className={cn("p-3 border-t", isCollapsed && "flex justify-center")}>
          {isCollapsed ? (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={() => logout()}>
                    <LogOutIcon className="h-5 w-5" />
                    <span className="sr-only">Sign Out</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Sign Out</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button variant="outline" className="w-full justify-start gap-3" onClick={() => logout()}>
              <LogOutIcon className="h-5 w-5" />
              Sign Out
            </Button>
          )}
        </div>

        <div className={cn("p-3 border-t", isCollapsed && "flex justify-center")}>
          <Button variant="ghost" size="sm" onClick={toggle} className="w-full flex items-center justify-center">
            {isCollapsed ? (
              <ChevronRightIcon className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeftIcon className="h-4 w-4 mr-2" />
                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
