import React from 'react'
import { browserHistory } from 'react-router'
import ProfileForm from '../ProfileForm/ProfileForm'

import './profilePage.sass'

class ProfilePage extends React.Component {
  render() {
    return(
      <div className="profileFormContainer">
        <h1>Tell Us About Yourself</h1>
        <ProfileForm />
      </div>
    )
  }
}

export default ProfilePage
