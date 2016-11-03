import React from 'react'
import './homePage.sass'
import SearchBar from '../SearchBar/SearchBar'
import FeaturedList from '../FeaturedList/FeaturedList'

import { connect } from 'react-redux'
import * as shatterActions from '../../actions/shatterActions'
import { bindActionCreators } from 'redux'

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="homePage">
        <SearchBar />
        <div className="content">
          <FeaturedList />
        </div>
      </div>
    )
  }
}

export default HomePage
