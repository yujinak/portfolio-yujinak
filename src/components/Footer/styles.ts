import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBox = styled.div`
  padding: 32px;
  margin-top: 42px;
  border-radius: 12px;

  background-color: ${colors.gray};
`

export const Menu = styled.ul`
  margin: 60px 0;
  display: flex;
  text-align: center;

  li {
    margin: 32px 12px;
  }
`

export const Direitos = styled.p`
  text-align: center;
`
