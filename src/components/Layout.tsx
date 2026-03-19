import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, AlertTriangle, Search, User, HardHat, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Layout() {
  const location = useLocation()
  const isLogin = location.pathname === '/'

  if (isLogin) {
    return (
      <main className="min-h-screen bg-enghub-navy selection:bg-enghub-teal/30 font-sans">
        <Outlet />
      </main>
    )
  }

  const navItems = [
    { label: 'Home', path: '/home', icon: Home },
    { label: 'Normas', path: '/normas', icon: BookOpen },
    { label: 'Diagnóstico Técnico', path: '/diagnostico', icon: Activity },
    { label: 'Erros', path: '/problemas', icon: AlertTriangle },
    { label: 'Busca', path: '/busca', icon: Search },
  ]

  return (
    <div className="flex flex-col h-screen bg-enghub-navy overflow-hidden text-enghub-beige font-sans selection:bg-enghub-teal/30">
      <header className="h-16 shrink-0 flex items-center justify-between px-4 lg:px-8 bg-enghub-navy-dark shadow-sm z-10">
        <div className="flex items-center gap-2 text-enghub-orange font-bold text-xl tracking-tight">
          <HardHat className="w-6 h-6 text-enghub-orange" />
          <span>EngHub</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-enghub-skyblue/10 flex items-center justify-center hover:bg-enghub-skyblue/20 transition-colors">
          <User className="w-5 h-5 text-enghub-orange" />
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <aside className="hidden md:flex flex-col w-[260px] bg-enghub-navy-dark shrink-0 p-4 gap-2 shadow-[2px_0_10px_rgba(0,0,0,0.1)] z-10">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium',
                  isActive
                    ? 'bg-enghub-navy text-white shadow-sm border border-transparent'
                    : 'text-enghub-skyblue hover:bg-enghub-navy/50 hover:text-white',
                )}
              >
                <item.icon className="w-5 h-5 text-enghub-orange" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </aside>

        <main
          id="main-scroll-area"
          className="flex-1 bg-enghub-navy overflow-y-auto pb-24 md:pb-0 relative"
        >
          <div className="max-w-4xl mx-auto p-4 md:p-10">
            <Outlet />
          </div>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[4.5rem] bg-enghub-navy-dark flex items-center justify-around px-1 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] z-20 pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center w-full max-w-[5rem] h-full gap-1 transition-all',
                isActive ? 'text-white' : 'text-enghub-skyblue',
              )}
            >
              <div
                className={cn(
                  'p-1.5 rounded-lg transition-colors flex items-center justify-center',
                  isActive && 'bg-enghub-navy shadow-sm',
                )}
              >
                <item.icon className="w-5 h-5 text-enghub-orange" />
              </div>
              <span className="text-[9px] font-medium tracking-wide truncate w-full text-center px-0.5">
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
