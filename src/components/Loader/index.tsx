import { SquareLoader } from 'react-spinners'
import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <SquareLoader color={colors.black} />
  </Container>
)

export default Loader
