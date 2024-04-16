import { Projeto } from '../App'
import { Projetos } from './styles'

type Props = {
  projeto: Projeto
}

const ProjetosContainer = ({ projeto }: Props) => {
  return (
    <Projetos>
      <h3>{projeto.nome}</h3>
    </Projetos>
  )
}

export default ProjetosContainer
