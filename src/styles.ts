import { createGlobalStyle } from 'styled-components'

export const colors = {
  gray: 'rgb(200, 200, 200, 30%);',
  black: '#000',
  white: '#fff'
}

export const GlobalCSS = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Nunito, sans-serif;
  list-style: none;
  text-decoration: none;

  a {
    padding: 4px;
    text-decoration: none;
    color: ${colors.black};
    transition: 0.5s;


    &:hover {
    color: ${colors.white};
    background-color: ${colors.black};
    }

  }
}

body{
  background-color: ${colors.white};
  color: ${colors.black};
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
