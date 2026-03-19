import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, AlertTriangle, Search, User, HardHat } from 'lucide-react'
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
    { label: 'Alertas', path: '/problemas', icon: AlertTriangle },
    { label: 'Busca', path: '/busca', icon: Search },
  ]

  return (
    <div className="flex flex-col h-screen bg-enghub-navy overflow-hidden text-slate-800 font-sans selection:bg-enghub-teal/30">
      <header className="h-16 shrink-0 flex items-center justify-between px-4 lg:px-8 bg-enghub-navy border-b border-enghub-navy z-10">
        <div className="flex items-center gap-2 text-enghub-orange font-bold text-xl tracking-tight">
          <HardHat className="w-6 h-6" />
          <span>EngHub</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-enghub-skyblue/10 flex items-center justify-center text-enghub-beige hover:bg-enghub-skyblue/20 transition-colors">
          <User className="w-5 h-5" />
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <aside className="hidden md:flex flex-col w-[260px] bg-enghub-navy shrink-0 p-4 gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium',
                  isActive
                    ? 'bg-enghub-teal text-white shadow-md'
                    : 'text-enghub-skyblue hover:bg-white/5 hover:text-white',
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </aside>

        <main
          id="main-scroll-area"
          className="flex-1 bg-enghub-beige md:rounded-tl-3xl shadow-2xl overflow-y-auto pb-24 md:pb-0 relative"
        >
          <div className="max-w-4xl mx-auto p-4 md:p-10">
            <Outlet />
          </div>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[4.5rem] bg-enghub-navy flex items-center justify-around px-2 border-t border-white/5 z-20 pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center w-16 h-full gap-1 transition-all',
                isActive ? 'text-enghub-orange' : 'text-enghub-skyblue',
              )}
            >
              <div
                className={cn(
                  'p-1.5 rounded-lg transition-colors',
                  isActive && 'bg-enghub-orange/10',
                )}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
