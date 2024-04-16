import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 20px 0;

  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      margin: 0 auto;
      align-text: center;
      align-items: center;
      padding-right: 2vh;
      height: 100%;

      a,
      svg {
        display: block;
      }

      &:hover {
        color: ${colors.white};
      }
    }
  }

  h1 {
    font-size: 24px;
  }
`
