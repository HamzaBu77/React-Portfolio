import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Project } from './pages/project';
import './App.css'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300">
      <Header />
      <Home />
      <Project />
      <Footer />
    </div>
    </>
  )
}

export default App
