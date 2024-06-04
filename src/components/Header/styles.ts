import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: 24px 20px 24px;
  position: sticky;
  top: 0;

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
    text-align: center;
  }
`
