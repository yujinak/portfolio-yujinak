import { Hero } from './styles'

type Props = {
  id?: string
}

const HeroComponent = ({ id }: Props) => {
  return (
    <Hero className="container">
      <img src="https://github.com/yujinak.png" alt="" />
      <p>
        Desenvolvedor motivado pela criatividade e autoconhecimento, com um
        background artístico e comunitário, em busca da primeira oportunidade no
        mercado de trabalho.
      </p>
    </Hero>
  )
}

export default HeroComponent
