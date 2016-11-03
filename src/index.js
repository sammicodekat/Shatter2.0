import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} />
  </Router>,
  document.getElementById('root')
)
