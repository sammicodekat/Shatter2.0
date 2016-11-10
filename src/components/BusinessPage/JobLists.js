import React from 'react'
import {Icon, Card, Button, Rating} from 'semantic-ui-react'

const renderJobLists = jobs => (jobs.map((job, i) => (
    <Card key ={i} className='center' raised onClick={() => {}}>
      <Card.Content >
        <Card.Header>
          {job.jobTitle}
        </Card.Header>
        <Card.Description>
          {job.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating defaultRating={Math.random()*2+3} maxRating={5} disabled/>
      </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Button color='linkedin'>
                    <Icon name='linkedin'/>Apply Now
                </Button>
                <Button.Or/>
                <Button positive>Save Job</Button>
            </Button.Group>
        </Card.Content>
    </Card>
)))

const JobLists = (props) => {
    return (
        <Card.Group>
            {renderJobLists(props.jobs)}
        </Card.Group>
    )
}

export default JobLists
