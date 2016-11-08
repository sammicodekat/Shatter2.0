import React from 'react'
import { browserHistory } from 'react-router'
// import TextInput from './TextInput'
// import DropdownInput from './DropdownInput'
// import Checkbox from './Checkbox'
// import NumberInput from './NumberInput'

const handleForm = (e) => {
  e.preventDefault()

  const newFormData = {
    salary: e.target.salary.value,
    position: e.target.position.value,
    age: e.target.age.value,
    gender: e.target.gender.value,
    marital_status: e.target.marital_status.value,
    education: e.target.education.value,
    hasKids: false,
    race: e.target.race.value,
  }

  console.log('newFormData: ', newFormData)
  
  browserHistory.push('/')
}

// const ProfileForm = ({profile, allRaces, allEducationLevels, onSave, onChange, loading, errors}) => {
const ProfileForm = () => {
  return(
<div>
      {/*<form>

        <TextInput
        name="postiion"
        label="Position"
        value={profile.position}
        onChange={onChange}
        error={errors.position}/>

      <NumberInput
        name="age"
        label="Age"
        min='13'
        max='120'
        value={profile.age}
        onChange={onChange}
        error={errors.age}/>

      <NumberInput
        name="salary"
        label="Salary"
        min='0'
        max='10000000'
        value={profile.age}
        onChange={onChange}
        error={errors.age}/>

      <DropdownInput
        name="education"
        label="Education"
        value={profile.educaiton}
        defaultOption="Select Education Level"
        options={allEducationLevels}
        onChange={onChange}
        error={errors.education}/>

      <DropdownInput
        name="race"
        label="Race"
        value={profile.race}
        defaultOption="Select Author"
        options={allRaces}
        onChange={onChange}
        error={errors.race}/>

      <TextInput
        name="marital_status"
        label="Marital Status"
        value={profile.marital_status}
        onChange={onChange}
        error={errors.marital_status}/>

      <Checkbox
        name="male"
        label="Male"
        value={profile.gender}
        onChange={onChange}
        error={errors.gender}/>

      <Checkbox
        name="female"
        label="Female"
        value={profile.gender}
        onChange={onChange}
        error={errors.gender}/>

      <Checkbox
        name="hasKids"
        label="Have Kids"
        value={profile.hasKids}
        onChange={onChange}
        error={errors.hasKids}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="someBtnClassName"
        onClick={onSave}/>

      </form>*/}

    <form onSubmit={e => handleForm(e)}>
      <label>Salary</label>
      <input id="salary" type="number"/>
      <label>Position</label>
      <input id="position" type="text"/>
      <label>Age</label>
      <input id="age" type="number"/>
      <label>Gender</label>
      <input id="gender" type="text"/>
      <label>Marital Status</label>
      <input id="marital_status" type="text"/>
      <label>Education</label>
      <input id="education" type="text"/>
      <label>Has Kids</label>
      <input id="hasKids" type="radial"/>
      <label>Race</label>
      <input id="race" type="text"/>
      <button>Submit</button>
    </form>
  </div>
  )
}

export default ProfileForm
