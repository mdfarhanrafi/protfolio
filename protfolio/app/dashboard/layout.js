"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {LayoutDashboard,LogOut, Menu, X ,FolderKanban,Library,User  } from "lucide-react";



export default function DashBoardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname= usePathname()
    const navLinks = [
      { href:"/dashboard", label: "Dashboard",icons: LayoutDashboard},
      { href:"/dashboard/projects", label: "Projects",icons:FolderKanban },
      { href:"/dashboard/skill", label: "Skills",icons:Library },
      { href:"/person", label: "Person",icons:User}
    ]
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  async function handleLogout() {
    console.log("I am logged Out");
  }
  return (
    <div className="flex bg-gray-100">
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">
            <svg
              width="70"
              height="70"
              viewBox="0 0 353 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200.091"
                cy="31.0001"
                r="25.3636"
                stroke="#1A1A1A"
                stroke-opacity="0.15"
                stroke-width="10"
              />
              <circle
                opacity="0.6"
                cx="200.091"
                cy="31.0001"
                r="24.3636"
                stroke="#1A1A1A"
                stroke-width="2"
              />
              <path
                d="M8.20117 62H0L23.7203 0H31.7953L55.5156 62H47.3144L28.0101 9.80859H27.5055L8.20117 62ZM11.2293 37.7812H44.2863V44.4414H11.2293V37.7812Z"
                fill="#1A1A1A"
              />
              <path
                d="M68.2274 62H60.0262L83.7465 0H91.8215L115.542 62H107.341L88.0364 9.80859H87.5317L68.2274 62ZM71.2555 37.7812H104.313V44.4414H71.2555V37.7812Z"
                fill="#1A1A1A"
              />
              <path
                d="M125.604 62V0H147.432C152.479 0 156.621 0.827473 159.86 2.48242C163.098 4.11719 165.495 6.36751 167.051 9.2334C168.608 12.0993 169.386 15.3587 169.386 19.0117C169.386 22.6647 168.608 25.904 167.051 28.7295C165.495 31.555 163.109 33.7751 159.891 35.3896C156.674 36.984 152.563 37.7812 147.558 37.7812H129.894V31H147.306C150.754 31 153.53 30.5156 155.633 29.5469C157.757 28.5781 159.292 27.2057 160.238 25.4297C161.206 23.6335 161.689 21.4941 161.689 19.0117C161.689 16.5293 161.206 14.3597 160.238 12.5029C159.271 10.6462 157.725 9.21322 155.601 8.2041C153.477 7.1748 150.67 6.66016 147.179 6.66016H133.427V62H125.604ZM156.011 34.1484L171.909 62H162.825L147.179 34.1484H156.011Z"
                fill="#1A1A1A"
              />
              <path
                d="M285.247 0V62H277.66L242.381 13.3203H241.749V62H233.909V0H241.496L276.902 48.8008H277.534V0H285.247Z"
                fill="#1A1A1A"
              />
              <path
                d="M352.273 0V62H344.686L309.407 13.3203H308.775V62H300.935V0H308.522L343.927 48.8008H344.559V0H352.273Z"
                fill="#1A1A1A"
              />
            </svg>
          </h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100
                    ${pathname === item.href ? "bg-gray-200" : ""}
                  `}
                >
                  <item.icons className="h-5 w-5 mr-2" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
       
          <div className="flex items-center justify-between p-4 md:justify-end">
            <Button onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-0">
     
          {children}
        </main>
      </div>
    </div>
  );
}
