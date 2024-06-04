import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBox = styled.div`
  padding: 32px;
  margin-top: 42px;

  background-color: ${colors.blue};
`

export const Menu = styled.ul`
  display: flex;
  margin: 60px auto;
  justify-content: center;

  li {
    margin: 32px 12px;
  }
`

export const Direitos = styled.p`
  text-align: center;
`
