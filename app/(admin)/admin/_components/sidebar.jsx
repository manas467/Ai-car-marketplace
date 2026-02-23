"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Calendar, Cog, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    label: "Cars",
    icon: Car,
    href: "/admin/cars",
  },
  {
    label: "Test Drives",
    icon: Calendar,
    href: "/admin/test-drives",
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-full w-56 flex-col bg-white border-r shadow-sm">
        <div className="p-6">
          <Link href="/admin">
            <h1 className="text-xl font-bold">Vehiql Admin</h1>
          </Link>
        </div>

        <nav className="flex flex-col">
          {routes.map((route) => {
            const isActive = pathname === route.href;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "h-12 px-6 flex items-center gap-x-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-6">
          <SignOutButton>
            <button className="flex items-center gap-x-2 text-sm font-medium text-slate-500 hover:text-slate-700">
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          </SignOutButton>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t flex">
        {routes.map((route) => {
          const isActive = pathname === route.href;

          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center text-xs font-medium",
                isActive ? "text-blue-700" : "text-slate-500"
              )}
            >
              <route.icon className="h-6 w-6 mb-1" />
              {route.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}