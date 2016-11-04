import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import HomePage from './HomePage/HomePage'
import ProfileForm from './ProfileForm/ProfileForm'

class Layout extends React.Component {
  render() {
    return (

      <div className="container">
        <h1 className="appTitle" onClick={() => browserHistory.push('/')}>Shatter</h1>
        <button className="profileBtn" onClick={() => browserHistory.push('/profile')}><i className="fa fa-user" aria-hidden="true" /></button>
        <div className="pageContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
