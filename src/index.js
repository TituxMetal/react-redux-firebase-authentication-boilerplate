import React from 'react'
import ReactDOM from 'react-dom'
import 'materialize-css/dist/css/materialize.min.css'
import Materialize from 'materialize-css/dist/js/materialize'
import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

document.addEventListener('DOMContentLoaded', () => {
  const sidenav = document.querySelectorAll('.sidenav')
  Materialize.Sidenav.init(sidenav)
})

serviceWorker.unregister()
