import { Menu, FooterBox, Direitos } from './styles'

import { HashLink } from 'react-router-hash-link'

type Props = {
  id?: string
}

const Footer = ({ id }: Props) => {
  return (
    <FooterBox id="footer">
      <Menu>
        <li>
          <HashLink smooth to="#hero">
            home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects">
            projetos
          </HashLink>
        </li>
      </Menu>
      <Direitos>
        Todos os direitos reservados ao autor, Gabriel Yuji Nakashima
      </Direitos>
    </FooterBox>
  )
}

export default Footer
