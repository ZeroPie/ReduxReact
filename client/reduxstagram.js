import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import css from  './styles/style.styl'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)


/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
render(
  router,
  document.getElementById('root')
);