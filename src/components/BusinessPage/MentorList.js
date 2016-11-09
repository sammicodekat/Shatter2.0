import React from 'react'
import {
    List,
    Item,
    Image,
    Label,
    Icon,
    Card,
    Grid,
    Button,
    Modal,
    Rating
} from 'semantic-ui-react'

const renderMentorList = mentors => (mentors.map((mentor, i) => (
    <Card key ={i} label={{
        as: 'a',
        corner: 'right',
        icon: 'heart',
        color: 'red'
    }} className='center'>
        <Image src={mentor.image} size='medium' className='img'/>
        <Card.Content>
            <Card.Header>
                {mentor.name}
            </Card.Header>
            <Card.Meta>
                {mentor.title}
            </Card.Meta>
            <Card.Meta>
                <Rating icon='star' defaultRating={5} maxRating={5}/>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Button color='green'>Contact Her</Button>
        </Card.Content>
    </Card>
)))

const MentorList = (props) => {
    return (
        <Card.Group>
            {renderMentorList(props.mentors)}
        </Card.Group>
    )
}

export default MentorList
