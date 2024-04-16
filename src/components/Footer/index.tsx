import { Menu, FooterBox, Direitos } from './styles'

type Props = {
  id?: string
}

const Footer = ({ id }: Props) => {
  return (
    <FooterBox className="container">
      <Menu>
        <li>
          <a href="#hero">home</a>
        </li>
        <li>
          <a href="#projects">projetos</a>
        </li>
        <li>
          <a href="#contact">contato</a>
        </li>
      </Menu>
      <Direitos>
        Todos os direitos reservados ao autor, Gabriel Yuji Nakashima
      </Direitos>
    </FooterBox>
  )
}

export default Footer
