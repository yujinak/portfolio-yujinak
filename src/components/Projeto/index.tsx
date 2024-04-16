import { useEffect, useState } from 'react'
import { Projetos, Projeto, ProjetosContainer, Buttons } from './styles'
import { workerData } from 'worker_threads'
import Loader from '../Loader'

type Props = {
  id?: string
}

const ProjetoBox = ({ id }: Props) => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    setEstaCarregando(true)
    fetch(`https://api.github.com/users/yujinak/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson)
        setEstaCarregando(false)
      })
  }, [])

  const whichLanguage = (repositorio: Repository) => {
    const { language } = repositorio
    if (language === 'TypeScript')
      return <i className="devicon-typescript-plain colored"></i>
    if (language === 'JavaScript')
      return <i className="devicon-javascript-plain colored"></i>
    if (language === 'Java')
      return <i className="devicon-java-plain-wordmark colored"></i>
    if (language === 'HTML')
      return <i className="devicon-html5-plain-wordmark colored"></i>
    if (language === 'C++')
      return <i className="devicon-cplusplus-plain colored"></i>
    if (language === 'Python')
      return <i className="devicon-python-plain-wordmark colored"></i>
    if (language === 'SCSS')
      return <i className="devicon-sass-original colored"></i>
    if (language === 'Vue')
      return <i className="devicon-vuejs-plain-wordmark"></i>
  }

  const fixName = (repositorio: Repository) => {
    const { name } = repositorio
    let newName
    name.includes('-')
      ? (newName = name.split('-'))
      : (newName = name.split('_'))

    return newName.map(
      (word: string) => word.slice(0, 1).toUpperCase() + word.slice(1) + ' '
    )
  }

  return (
    <ProjetosContainer className="container">
      <h2>Projetos</h2>
      <p>
        Aqui estão listados meus projetos. Os dados de cada projeto abaixo são
        extraídos da minha conta do GitHub, através da API da plataforma
        (https://api.github.com/).
      </p>
      {estaCarregando ? (
        <Loader />
      ) : (
        <Projetos>
          {repos.map((repositorio) => (
            <Projeto key={repositorio.id}>
              <h3>
                <i>{whichLanguage(repositorio)}</i> {fixName(repositorio)}
              </h3>

              <p>{repositorio.description}</p>
              <Buttons>
                {repositorio.homepage ? (
                  <a
                    href={repositorio.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver deploy
                  </a>
                ) : (
                  ''
                )}

                <a
                  href={repositorio.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código <i className="devicon-github-original"></i>
                </a>
              </Buttons>
            </Projeto>
          ))}
        </Projetos>
      )}
    </ProjetosContainer>
  )
}

export default ProjetoBox
