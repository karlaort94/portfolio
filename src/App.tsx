import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NescafePage from './pages/projects/NescafePage'
import TravelyPage from './pages/projects/TravelyPage'
import DrGuzmanPage from './pages/projects/DrGuzmanPage'
import LattentePage from './pages/projects/LattentePage'
import LittleDarlingPage from './pages/projects/LittleDarlingPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/nescafe" element={<NescafePage />} />
        <Route path="/travely" element={<TravelyPage />} />
        <Route path="/drguzman" element={<DrGuzmanPage />} />
        <Route path="/lattente" element={<LattentePage />} />
        <Route path="/littledarling" element={<LittleDarlingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
