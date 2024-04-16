import styled from 'styled-components'
import { colors } from '../../styles'

export const ProjetosContainer = styled.div`
  background-color: ${colors.gray};
  padding: 42px 24px;
  border-radius: 12px;
  margin-bottom: 68px;
`

export const Projetos = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
`

export const Projeto = styled.div`
  padding: 12px 20px;
  border: 0.5px solid black;
  margin: 0 auto;
  margin-top: 32px;
  width: 300px;
  transition: 0.5s;

  h3 {
    margin-bottom: 12px;
  }

  p {
    text-align: justify;
  }

  &:hover {
    background-color: ${colors.white};
  }
`

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-around;

  a {
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`
