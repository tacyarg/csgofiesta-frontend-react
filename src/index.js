import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import './assets/less/variables.less'
import './assets/less/app.less'
import ChipsGG from 'chipsgg-client'


import Actions from './libs/actions'
import App from './App';

// 'http://149.28.121.92:9992', - socket
// 'http://149.28.121.92:9993' - auth

const main = async () => {
  // const actions = await Actions('http://localhost:9001/')
  let chipsgg = null


  try {
    chipsgg = await ChipsGG(
      // 'http://149.28.121.92:9992',
      // 'http://149.28.121.92:9993'
      'https://socket.chips.gg',
      'https://auth.chips.gg'
    )
  } catch (error) {
    console.error("FAILED TO CONNECT", error)
    // render offline page
  }

  // console.log(chipsgg)

  return ReactDOM.render(
    <HashRouter>
      <App chipsgg={chipsgg} />
    </HashRouter>,
    document.getElementById('app')
  )
}

main()
