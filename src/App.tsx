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
        <Header />
        <Rotas />
        <HeroComponent />
        <ProjetoBox />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
