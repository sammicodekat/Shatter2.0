import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import Layout from './components/Layout'
import {getCompanies} from './actions/companiesActions'
import {getCompany} from './actions/companyActions'
import {getPrediction} from './actions/predictionActions'
import {postReview} from './actions/reviewActions'

const store = configureStore();
// store.dispatch(getCompanies())

// store.dispatch(postReview())
// store.dispatch(getCompany())
// store.dispatch(getPrediction())


render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)
