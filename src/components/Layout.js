import React, { PropTypes } from 'react'
import HomePage from './HomePage/HomePage'
import ProfileForm from './ProfileForm/ProfileForm'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Sweet Mongoose / React Template Ready to Go</h1>
        <HomePage />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
