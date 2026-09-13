import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { TechnologySection } from './components/TechnologySection'
import type { Technology } from './types'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [stack, setStack] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load technologies')
        return response.json() as Promise<Technology[]>
      })
      .then(setTechnologies)
      .catch(() => toast.error('Unable to load technologies. Please refresh.'))
      .finally(() => setLoading(false))
  }, [])

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (technology: Technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  const removeAll = () => {
    if (!stack.length) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fafbfc] text-[#18202d]">
      <Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} />
      <main className="pt-[76px] max-[700px]:pt-[58px]">
        <Hero />
        <TechnologySection technologies={technologies} stack={stack} loading={loading} onAdd={addToStack} onRemove={removeFromStack} onRemoveAll={removeAll} />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2400} theme="light" aria-label="Notifications" />
    </div>
  )
}

export default App
