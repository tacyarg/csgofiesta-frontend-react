import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Flex, Box } from 'rebass'

import Header from './components/Header'
import Footer from './components/Footer'

import NotFound from './pages/NotFound'
import Jackpot from './pages/Jackpot'
import Profile from './pages/Profile'

const App = ({ chipsgg, ...props }) => (
  <Flex
    flexDirection="column"
    css={{ height: '100vh', width: '100vw', overflow: 'hidden' }}
  >
    <Header chipsgg={chipsgg} {...props} />

    <Flex
      css={{
        height: '100%',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Switch>
        <Redirect exact from="/" to="/jackpot" />

        <Route
          path="/jackpot"
          render={props => {
            return <Jackpot chipsgg={chipsgg} {...props}/>
          }}
        />

        <Route
          path="/profile"
          render={props => {
            return <Profile chipsgg={chipsgg} {...props} />
          }}
        />

        <Route component={NotFound} />
      </Switch>
    </Flex>

    <Footer />
  </Flex>
)

export default withRouter(App)
