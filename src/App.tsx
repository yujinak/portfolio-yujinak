import Footer from './components/Footer'
import Header from './components/Header'
import HeroComponent from './components/Hero'
import ProjetoBox from './components/Projeto'

import { GlobalCSS } from './styles'

export type Projeto = {
  nome: string
}

function App() {
  return (
    <>
      <GlobalCSS />
      <Header />
      <HeroComponent />
      <ProjetoBox />
      <Footer />
    </>
  )
}

export default App
