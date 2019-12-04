import React from 'react'
import { Provider } from 'react-redux'
import './config/reactotron'
import store from './store'
import Routes from './routes'
import { GlobalStyle } from './styles/global'
import { Wrapper, Container, Content } from './styles/components'
import Header from './components/Header'
import { hot } from 'react-hot-loader'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
      </Wrapper>
    </Provider>
  )
}

export default hot(module)(App)
