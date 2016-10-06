import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import store, { history } from './Store'
import { Provider } from 'react-redux'

// Styles
import css from '../stylus/main.styl'

// UI
import ui from './ui'

// Components
import App from './components/App'
import Home from './components/Home'
import Users from './components/Users'
import Messages from './components/Messages'
import Settings from './components/Settings'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="users" component={Users} />
        <Route path="messages" component={Messages} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.querySelector('#root'))