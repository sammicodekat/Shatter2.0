import React from 'react'
import './homePage.sass'
import SearchBar from '../SearchBar/SearchBar'
import FeaturedList from '../FeaturedList/FeaturedList'

import { connect } from 'react-redux'
// import * as companiesActions from '../../actions/companiesActions'
import { bindActionCreators } from 'redux'

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="homePage">
        <div className="topContent">
          <SearchBar />
        </div>
        <div className="pageContent">
          <FeaturedList />
        </div>
      </div>
    )
  }
}

export default HomePage
