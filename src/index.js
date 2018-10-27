import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'materialize-css/dist/css/materialize.min.css'
import Materialize from 'materialize-css/dist/js/materialize'
import { reduxFirestore, getFirestore }from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import './index.css'
import App from './App'
import firebaseConfig from './config/firebase'
import rootReducer from './store/reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig)
    )
  )
)
const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'))

document.addEventListener('DOMContentLoaded', () => {
  const sidenav = document.querySelectorAll('.sidenav')
  Materialize.Sidenav.init(sidenav)
})

serviceWorker.unregister()
