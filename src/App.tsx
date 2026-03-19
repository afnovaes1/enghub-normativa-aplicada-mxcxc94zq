import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'

import Index from './pages/Index'
import Home from './pages/Home'
import Normas from './pages/Normas'
import NormaDetail from './pages/NormaDetail'
import Problemas from './pages/Problemas'
import Busca from './pages/Busca'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/normas" element={<Normas />} />
          <Route path="/normas/:id" element={<NormaDetail />} />
          <Route path="/problemas" element={<Problemas />} />
          <Route path="/busca" element={<Busca />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
