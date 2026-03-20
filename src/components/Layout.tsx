import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Home, BookOpen, AlertTriangle, Activity, Search } from 'lucide-react'

export default function Layout() {
  const location = useLocation()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-enghub-navy">
        <Sidebar
          variant="sidebar"
          className="border-r-enghub-navy-dark bg-enghub-navy-dark text-enghub-skyblue"
        >
          <SidebarContent>
            <SidebarGroup>
              <div className="px-4 py-6">
                <Link
                  to="/home"
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-lg bg-enghub-teal flex items-center justify-center font-bold text-white shadow-sm">
                    EH
                  </div>
                  <span className="text-xl font-bold text-enghub-beige tracking-tight">EngHub</span>
                </Link>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === '/home' || location.pathname === '/'}
                    >
                      <Link
                        to="/home"
                        className="text-enghub-skyblue hover:text-white hover:bg-enghub-teal/20 transition-colors py-5"
                      >
                        <Home className="w-5 h-5 mr-1" />
                        <span className="font-medium text-[15px]">Início</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location.pathname.startsWith('/normas')}>
                      <Link
                        to="/normas"
                        className="text-enghub-skyblue hover:text-white hover:bg-enghub-teal/20 transition-colors py-5"
                      >
                        <BookOpen className="w-5 h-5 mr-1" />
                        <span className="font-medium text-[15px]">Normas</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname.startsWith('/problemas')}
                    >
                      <Link
                        to="/problemas"
                        className="text-enghub-skyblue hover:text-white hover:bg-enghub-teal/20 transition-colors py-5"
                      >
                        <AlertTriangle className="w-5 h-5 mr-1" />
                        <span className="font-medium text-[15px]">Problemas Comuns</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname.startsWith('/diagnostico')}
                    >
                      <Link
                        to="/diagnostico"
                        className="text-enghub-skyblue hover:text-white hover:bg-enghub-orange/20 transition-colors py-5"
                      >
                        <Activity className="w-5 h-5 mr-1 text-enghub-orange" />
                        <span className="font-bold text-[15px]">Diagnóstico Técnico</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location.pathname.startsWith('/busca')}>
                      <Link
                        to="/busca"
                        className="text-enghub-skyblue hover:text-white hover:bg-enghub-teal/20 transition-colors py-5"
                      >
                        <Search className="w-5 h-5 mr-1" />
                        <span className="font-medium text-[15px]">Busca</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 w-full flex flex-col min-h-screen overflow-x-hidden bg-enghub-navy">
          <header className="flex h-16 items-center gap-4 px-4 md:hidden border-b border-enghub-navy-dark bg-enghub-navy shadow-sm">
            <SidebarTrigger className="text-enghub-skyblue hover:text-white" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-enghub-teal flex items-center justify-center font-bold text-[11px] text-white">
                EH
              </div>
              <span className="font-bold text-enghub-beige tracking-tight text-lg">EngHub</span>
            </div>
          </header>
          <div className="container mx-auto max-w-4xl py-6 px-4 md:px-8 pb-20">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
