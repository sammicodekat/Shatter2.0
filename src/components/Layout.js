import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
import ProfileForm from './ProfileForm/ProfileForm'

class Layout extends React.Component {
  render() {
    return (

      <div className="container">
        <h1 className="appTitle">Shatter</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
