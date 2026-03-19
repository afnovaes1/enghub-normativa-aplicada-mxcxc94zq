import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HardHat } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const nav = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-[380px] p-8 bg-enghub-beige text-slate-800 rounded-3xl shadow-2xl animate-fade-in-up">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 border border-slate-100">
            <HardHat className="w-10 h-10 text-enghub-orange" />
          </div>
          <h1 className="text-3xl font-bold text-enghub-navy tracking-tight">EngHub</h1>
          <p className="text-sm text-slate-500 font-medium mt-1.5 leading-snug">
            Inteligência Normativa Aplicada para o Canteiro de Obras.
          </p>
        </div>

        <div className="space-y-5">
          <Button
            className="w-full bg-enghub-orange hover:bg-enghub-orange/90 text-white font-bold h-12 text-base rounded-xl shadow-lg shadow-enghub-orange/20 transition-transform active:scale-[0.98]"
            onClick={() => nav('/home')}
          >
            Entrar com Google
          </Button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-300/60"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase tracking-widest font-semibold">
              ou acesso restrito
            </span>
            <div className="flex-grow border-t border-slate-300/60"></div>
          </div>

          <div className="space-y-3">
            <Input
              placeholder="E-mail profissional"
              className="h-12 bg-white border-slate-200 rounded-xl px-4"
            />
            <Input
              type="password"
              placeholder="Senha"
              className="h-12 bg-white border-slate-200 rounded-xl px-4"
            />
            <Button
              variant="outline"
              className="w-full h-12 border-slate-200 rounded-xl hover:bg-slate-50 text-enghub-navy font-semibold transition-transform active:scale-[0.98]"
              onClick={() => nav('/home')}
            >
              Acessar
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-enghub-skyblue/60 text-xs font-medium max-w-xs">
        Ao entrar, você concorda com nossos Termos de Serviço e Política de Privacidade.
      </div>
    </div>
  )
}
