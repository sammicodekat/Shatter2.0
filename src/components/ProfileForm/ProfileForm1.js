import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {getPrediction} from '../../actions/predictionActions'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Message,
    Radio,
    Select,
    TextArea
} from 'semantic-ui-react'

const genders = [
    {
        text: 'Male',
        value: 'male'
    }, {
        text: 'Female',
        value: 'female'
    }
];

const positions = [
    {
        text: 'Intern',
        value: 'Intern'
    }, {
        text: 'Junior Developer',
        value: 'Junior Developer'
    }, {
        text: 'Senior Developer',
        value: 'Senior-developer'
    }, {
        text: 'Lead Developer',
        value: 'Lead-developer'
    }, {
        text: 'Manager',
        value: 'Manager'
    }, {
        text: 'Exacutive',
        value: 'Exacutive'
    }
];

const racelist = [
    {
        text: 'White',
        value: 'White'
    }, {
        text: 'Asian/Pacific Islander',
        value: 'Asian-Pac-Islander'
    }, {
        text: 'Amer-Indian-Eskimo',
        value: 'Amer-Indian-Eskimo'
    }, {
        text: 'African American',
        value: 'Black'
    }, {
        text: 'Other',
        value: 'Other'
    }
];

const educationlist = [
    {
        text: 'Bachelors',
        value: 'Bachelors'
    }, {
        text: 'Some College',
        value: 'Some-college'
    }, {
        text: 'Hign School Grad',
        value: 'HS-grad'
    }, {
        text: 'Masters',
        value: 'Masters'
    }, {
        text: 'Doctorate',
        value: 'Doctorate'
    }
];

const kids = [
    {
        text: 'Yes',
        value: true
    }, {
        text: 'No',
        value: false
    }
];

const status = [
    {
        text: 'Married',
        value: 'married'
    }, {
        text: 'Single',
        value: 'single'
    }
];

export default class ProfileForm1 extends Component {
    constructor() {
        super()
        this.state = {
            mssg: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e, serializedForm) {
        e.preventDefault();
        serializedForm.hasKids = Boolean(serializedForm.hasKids);
        let serializedData = JSON.stringify(serializedForm);
        localStorage.setItem('user', serializedData);
        this.setState({mssg: true})
    }
    render() {
        let {mssg} = this.state;
        let gender,
            position,
            race,
            education,
            hasKids,
            marital_status = "";
        let Mssg = mssg
            ? (
                <Message positive floating>
                    <Message.Header>Information Saved</Message.Header>
                    <p>Please click go back and find out your matching company</p>
                </Message>
            )
            : (
                <Message floating>
                  <p>Your information is totally anonymous. We'll never use it in a way that might be used to identify you.</p>
                </Message>
            )
        return (
            <Form onSubmit={this.handleSubmit}>
              {Mssg}
              <Form.Group widths='equal'>
                <Form.Select label='Gender' name='gender' options={genders} placeholder='Gender' />
                <Form.Select label='Position' name='position' options={positions} placeholder='Position' />
                <Form.Select label='Race' name='race' options={racelist} placeholder='Race' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select label='Education' name='education' options={educationlist} placeholder='Education' />
                <Form.Select label='Has Kids' name='hasKids' options={kids} placeholder='Yes' />
                <Form.Select label='Marital Status' name='marital_status' options={status} placeholder='Marital Status' />
              </Form.Group>
                <Button primary type='submit'>Submit</Button>
            </Form>
        )
    }
}
