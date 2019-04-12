import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Flex, Box } from 'rebass'

import Header from './components/Header'
import Footer from './components/Footer'

import NotFound from './pages/NotFound'
import Jackpot from './pages/Jackpot'

const App = ({ chipsgg, ...props }) => (
  <Flex flexDirection="column" width={1} css={{ height: '100vh', overflow: 'hidden' }}>
    <Header chipsgg={chipsgg} {...props} />

    <Switch>
      <Redirect exact from="/" to="/jackpot" />

      <Route
        path="/jackpot"
        render={props => {
          return <Jackpot chipsgg={chipsgg} />
        }}
      />

      <Route component={NotFound} />
    </Switch>
    
    <Footer />
  </Flex>
)

export default withRouter(App)
