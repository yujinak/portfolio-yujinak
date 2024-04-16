import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Rotas from './routes'

import Footer from './components/Footer'
import Header from './components/Header'
import HeroComponent from './components/Hero'
import ProjetoBox from './components/Projeto'

export type Projeto = {
  nome: string
}

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCSS />
        <Header id="menu" />
        <Rotas />
        <HeroComponent id="hero" />
        <ProjetoBox id="projects" />
        <Footer id="footer" />
      </BrowserRouter>
    </>
  )
}

export default App
