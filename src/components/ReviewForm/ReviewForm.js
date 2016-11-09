import React from 'react'
import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'

const genders = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
];

const positions = [
  { text: 'Intern', value: 'Intern' },
  { text: 'Junior-developer', value: 'Junior-developer' },
  { text: 'Senior-developer', value: 'Senior-developer' },
  { text: 'Lead-developer', value: 'Lead-developer' },
  { text: 'Manager', value: 'Manager' },
  { text: 'Exacutive', value: 'Exacutive' }
];

const racelist = [
  { text: 'White', value: 'White' },
  { text: 'Asian-Pac-Islander', value: 'Asian-Pac-Islander' },
  { text: 'Amer-Indian-Eskimo', value: 'Amer-Indian-Eskimo' },
  { text: 'African American', value: 'Black' },
  { text: 'Other', value: 'Other' }
];

const educationlist = [
  { text: 'Bachelors', value: 'Bachelors' },
  { text: 'Some College', value: 'Some-college' },
  { text: 'Hign School Grad', value: 'HS-grad' },
  { text: 'Masters', value: 'Masters' },
  { text: 'Doctorate', value: 'Doctorate' }
];

const kids = [
  { text: 'Yes', value: true },
  { text: 'No', value: false },
];

const status = [
  { text: 'Married', value: 'married' },
  { text: 'Single', value: 'single' },
];

let localStorageUser;
try {
  let serializedData = localStorage.getItem('user');
  if (!serializedData) throw new Error();
  localStorageUser = JSON.parse(serializedData);
} catch (err) {
  localStorageUser = undefined;
};

const ProfileForm = () => {
  const handleSubmit = (e, serializedForm) => {
    e.preventDefault();
    serializedForm.hasKids=Boolean(serializedForm.hasKids);
    let serializedData = JSON.stringify(serializedForm);
    localStorage.setItem('user', serializedData);
  };
  // let gender,position,race,education,hasKids,marital_status ="";
  // if(localStorageUser!=undefined){
    let { gender, position, race, education, hasKids, marital_status } = localStorageUser;
  // }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Select label='Gender' name='gender' options={genders} placeholder='Gender' defaultValue={gender}/>
        <Form.Select label='Position' name='position' options={positions} placeholder='Position' defaultValue={position}/>
        <Form.Select label='Race' name='race' options={racelist} placeholder='Race' defaultValue={race}/>
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Select label='Education' name='education' options={educationlist} placeholder='Education' defaultValue={education}/>
        <Form.Select label='Has Kids' name='hasKids' options={kids} placeholder='Yes' defaultValue={hasKids}/>
        <Form.Select label='Marital Status' name='marital_status' options={status} placeholder='Marital Status' defaultValue={marital_status}/>
      </Form.Group>
      <Button primary type='submit'>Submit</Button>
    </Form>
  )
}
export default ProfileForm
