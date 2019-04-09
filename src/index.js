import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import './assets/less/variables.less'
import './assets/less/app.less'


import Actions from './libs/actions'
import App from './App';

const main = async () => {
  // const actions = await Actions('http://localhost:9001/')
  const actions = {}
  return ReactDOM.render(
    <HashRouter>
      <App actions={actions} />
    </HashRouter>,
    document.getElementById('app')
  )
}

main()
