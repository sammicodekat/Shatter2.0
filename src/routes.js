import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import HomePage from './components/HomePage/HomePage'
import BusinessPage from './components/BusinessPage/BusinessPage'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="business-page" component={BusinessPage} />
  </Route>
)