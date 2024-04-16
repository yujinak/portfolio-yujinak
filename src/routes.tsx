import { Routes, Route } from 'react-router-dom'

import HeroComponent from './components/Hero'
import ProjetoBox from './components/Projeto'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/#hero" element={<HeroComponent />} />
    <Route path="/#projects" element={<ProjetoBox />} />
    <Route path="/#footer" element={<Footer />} />
  </Routes>
)

export default Rotas
