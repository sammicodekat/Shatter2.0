import React from 'react'
import {browserHistory} from 'react-router'
import {Button, Icon} from 'semantic-ui-react'

import './jobOpenings.sass'

const renderJobOpenings = (job) => (
    <div className="jobCard">
        <h1 className="jobName">{job.jobTitle}</h1>
        <div className="jobContent">
            <div className="des">
                <div>{job.description}</div>
            </div>
        </div>
        <div className='jobButton'>
            <Button.Group >
                <Button color='linkedin'>
                    <Icon name='linkedin'/>Apply Now
                </Button>
                <Button.Or/>
                <Button positive>Save Job</Button>
            </Button.Group>
        </div>
    </div>
)

const JobOpenings = (props) => (props.job
    ? renderJobOpenings(props.job)
    : <span>loading...</span>)

export default JobOpenings
