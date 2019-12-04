import React from 'react'

import { Container, User, Title } from './styles'

const Header = () => (
  <Container>
    <Title>Movie APP</Title>
    <User>
      <img
        src="https://avatars0.githubusercontent.com/u/24299941?s=460&v=4"
        alt="Avatar"
      />
      Pedro Nahime
    </User>
  </Container>
)

export default Header
