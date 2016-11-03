// salary: integer
// position: string
// age: integer
// gender: string
// marital_status: string
// education: string
// hasKids: bool
// race: string
import React, {PropTypes} from 'react'

const ProfileForm = (props) => {

  // submitForm() {
  //   console.log('hello')
  // }

  return(
    <div>
      <h1>Profile Form</h1>
      <form>
        <label>Salary</label>
        <input type="number"/>
        <label>Position</label>
        <input type="text"/>
        <label>Age</label>
        <input type="number"/>
        <label>Gender</label>
        <input type="string"/>
        <label>Marital Status</label>
        <input type="string"/>
        <label>Education</label>
        <input type="string"/>
        <label>Has Kids</label>
        <input type="radial"/>
        <label>Race</label>
        <input type="text"/>
        <button onClick={submitForm}></button>
      </form>
    </div>
  )
}

export default ProfileForm