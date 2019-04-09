import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import NotFound from './pages/NotFound'
import Jackpot from './pages/Jackpot'

const App = ({ actions }) => (
  <>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/jackpot" />

      <Route
        path="/jackpot"
        render={props => {
          return <Jackpot actions={actions} />
        }}
      />

      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
)

export default App
