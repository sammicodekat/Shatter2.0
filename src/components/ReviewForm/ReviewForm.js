import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Message,
    Radio,
    Select,
    TextArea,
    Step,
    Rating
} from 'semantic-ui-react'
const {Content, Description, Group, Title} = Step

const steps = [
    {
        icon: 'user',
        title: 'Find Your Match',
        description: 'Tell Us about yourself'
    }, {
        active: true,
        icon: 'write',
        title: 'Your Review',
        description: 'Your reviews are totally anonymous.'
    }, {
        disabled: true,
        icon: 'comment',
        title: 'Comment'
    }
]

const benefits = [
    {
        text: 'Paid Maternity Leave',
        value: 'maternity'
    }, {
        text: 'Work From Home ',
        value: 'work-from-home'
    }, {
        text: 'Mentor Program',
        value: 'mentor'
    }, {
        text: 'Onsite ChildCare',
        value: 'childcare'
    }
];

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
        text: 'Junior-developer',
        value: 'Junior-developer'
    }, {
        text: 'Senior-developer',
        value: 'Senior-developer'
    }, {
        text: 'Lead-developer',
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
        text: 'Asian-Pac-Islander',
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

let localStorageUser;
try {
    let serializedData = localStorage.getItem('user');
    if (!serializedData)
        throw new Error();
    localStorageUser = JSON.parse(serializedData);
} catch (err) {
    localStorageUser = undefined;
};

export default class ReviewForm extends Component {
    constructor(props) {
        super(props)
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
        let {mssg} = this.state
        let {
            gender,
            position,
            race,
            education,
            hasKids,
            marital_status
        } = localStorageUser;
        let Mssg = mssg
            ? (
                <Message positive floating>
                    <Message.Header>Review Submitted</Message.Header>
                </Message>
            )
            : (<Group items={steps}/>)
        return (
            <Form onSubmit={this.handleSubmit}>
                {Mssg}
                <Form.Group widths='equal'>
                    <Form.Select label='Current Position' name='position' options={positions} placeholder='Position' defaultValue={position}/>
                    <Form.Select label='Company Benefits' name='benefits' options={benefits} placeholder='Search...' search multiple/>
                </Form.Group>
                <h5>Culture and Environment</h5>
                <Form.Group inline>
                    <Form.Checkbox label='Unconscious bias training' name='programs' value='training'/>
                    <Form.Checkbox label='Diversity initiatives ' name='programs' value='diversity-initiative'/>
                    <Form.Checkbox label='Executive coaching' name='programs' value='executive-coaching'/>
                </Form.Group>
                <h5>Ratings</h5>
                <p>Equal Opportunities for Men and Women</p>
                <Rating icon="star" maxRating={10} name="support"/>
                <p>People you work with</p>
                <Rating icon="star" maxRating={10} name="safety"/>
                <p>Female Representation in Top Leadership</p>
                <Rating icon="star" maxRating={10} name="advancement"/>
                <p>Flexibility</p>
                <Rating icon="star" maxRating={10} name="pto"/>
                <div className='center'>
                    <Button primary type='submit' icon="right arrow" labelPosition='right'>Next</Button>
                </div>
            </Form>
        )
    }
}
