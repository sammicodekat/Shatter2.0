import React, {Component} from 'react'
import uuid from 'uuid'
import ScoreDial from '../ScoreDial/ScoreDial'
import ScoreDial1 from '../ScoreDial/ScoreDial1'
import companyData from '../../store/companyData'
import {connect} from 'react-redux'
import {getPrediction} from '../../actions/predictionActions'
import './businessPage.sass'
import {
    Button,
    Modal,
    Comment,
    Form,
    Header,
    Card,
    Label,
    Progress,
    Statistic,
    Dimmer,
    Loader,
    Segment,
    Divider,
    Icon
} from 'semantic-ui-react'
import {browserHistory} from 'react-router'
import ProfileForm1 from '../ProfileForm/ProfileForm1'
import ReviewForm from '../ReviewForm/ReviewForm'
import JobLists from './JobLists'
import MentorList from './MentorList'
const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink'
]
let localStorageUser;

const renderCompany = (i, Prediction, Mentor, open, close, show, open2) => (
    <div>
        <div className="businessContainer">
            <div className="heading">
                <span className="logo"><img src={companyData[i].logo} alt=""/></span>
                <h1>{companyData[i].name}</h1>
                <div className="addreview">
                    <Button.Group className='buttons'>
                        <Button label={{
                            content: Math.floor(companyData[i].overall * 180)
                        }} icon='write' color='blue' content='Review  ' labelPosition='left' onClick={show}/>
                    </Button.Group>
                </div>
            </div>

            <div className="reviewContent">
                <div className="rating"><ScoreDial rating={(companyData[i].overall * 20)}/>
                    <div className="center">
                        <Statistic>
                            <Statistic.Value>{companyData[i].female_to_male_ratio}</Statistic.Value>
                            <Statistic.Label>Female to male ratio</Statistic.Label>
                        </Statistic>
                    </div>
                </div>
                <div className="scoreBars">
                    <Progress percent={companyData[i].workLifeBalance * 20} color='blue' progress active>Work Life Balance</Progress>
                    <Progress percent={companyData[i].cultureAndValues * 20} color='blue' progress active>Culture and Values</Progress>
                    <Progress percent={companyData[i].femaleLeadership * 20} color='blue' progress active>Female Leadership</Progress>
                    <Progress percent={companyData[i].benefits * 20} color='blue' progress active>Benefits</Progress>
                    <Progress percent={companyData[i].careerOpportunities * 20} color='blue' progress active>Equal Opportunities for Women</Progress>
                </div>
                {Prediction}
            </div>

            <div className="infoSection">
                <h3>About</h3>
                <p>{companyData[i].companyInfo}</p>
                <h3>Benefits</h3>
                {companyData[i].benefitInfo.map((benefit, i) => (
                    <Label as='a' color={colors[i]} tag key={i}>{benefit}</Label>
                ))}
            </div>
        </div>
        <div className="reviewContainer">
            <Comment.Group threaded>
                <Header as='h3' dividing>Reviews</Header>
                <Comment>
                    <Comment.Avatar as='a' src='http://365psd.com/images/premium/thumbs/236/woman-avatar-profile-picture-vector-icon-on-a-grey-background-1148000.jpg'/>
                    <Comment.Content>
                        <Comment.Author as='a'>Anonymous</Comment.Author>
                        <Comment.Text>{companyData[i].reviews[0]}</Comment.Text>
                        <Comment.Actions>
                            <a>Reply</a>
                        </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar as='a' src={companyData[i].logo}/>
                            <Comment.Content>
                                <Comment.Author as='a'>Management Team</Comment.Author>
                                <Comment.Metadata>
                                    <span>Just now</span>
                                </Comment.Metadata>
                                <Comment.Text>Thank you very much for the review.</Comment.Text>
                                <Comment.Actions>
                                    <a>Reply</a>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>

                <Comment>
                    <Comment.Avatar as='a' src='http://365psd.com/images/premium/thumbs/236/woman-avatar-profile-picture-vector-icon-on-a-grey-background-1148000.jpg'/>
                    <Comment.Content>
                        <Comment.Author as='a'>Anonymous</Comment.Author>
                        <Comment.Metadata>
                            <span>Yesterday at 12:30AM</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            {companyData[i].reviews[1]}
                        </Comment.Text>
                        <Comment.Actions>
                            <a>Reply</a>
                        </Comment.Actions>
                    </Comment.Content>

                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar as='a' src={companyData[i].logo}/>
                            <Comment.Content>
                                <Comment.Author as='a'>Management Team</Comment.Author>
                                <Comment.Metadata>
                                    <span>Just now</span>
                                </Comment.Metadata>
                                <Comment.Text>Thank you very much for the review. We'll look into it.</Comment.Text>
                                <Comment.Actions>
                                    <a>Reply</a>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>
                <Comment>
                    <Comment.Avatar as='a' src='http://365psd.com/images/premium/thumbs/236/woman-avatar-profile-picture-vector-icon-on-a-grey-background-1148000.jpg'/>
                    <Comment.Content>
                        <Comment.Author as='a'>Anonymous</Comment.Author>
                        <Comment.Metadata>
                            <span>5 days ago</span>
                        </Comment.Metadata>
                        <Comment.Text>{companyData[i].reviews[2]}</Comment.Text>
                        <Comment.Actions>
                            <a>Reply</a>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </div>
        <div className="job">
            <h3>Recomended Jobs for You</h3>
            <JobLists jobs={companyData[i].jobOpeningings}/>
        </div>
        {Mentor}
        <Modal dimmer='blurring' open={open2} onClose={close}>
            <Modal.Header>Review</Modal.Header>
            <Modal.Content>
                <ReviewForm/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={close}>
                    Go Back
                </Button>
            </Modal.Actions>
        </Modal>
        <Modal dimmer='blurring' open={open} onClose={close}>
            <Modal.Header>Tell us about yourself</Modal.Header>
            <Modal.Content>
                <ProfileForm1/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={close}>
                    Go Back
                </Button>
            </Modal.Actions>
        </Modal>
    </div>
)

class BusinessPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            open2: false,
            prediction: props.prediction,
            userInfo: false,
            loader:true,
        }
        this.show = this.show.bind(this);
        this.show2 = this.show2.bind(this);
        this.close = this.close.bind(this);
    }
    show() {
        this.setState({open: true})
    }
    show2() {
        this.setState({open2: true})
    }

    close() {
        this.setState({open: false, open2: false})
        const companyName = companyData[this.props.params.id].companyName
        const info = {
            company: companyName,
            user: localStorageUser
        }
        this.props.getPrediction(info)
    }
    componentWillReceiveProps(props) {
        this.setState({prediction: props.prediction,loader:false})
    }
    componentWillMount() {
        try {
            let serializedData = localStorage.getItem('user');
            if (!serializedData)
                throw new Error();
            localStorageUser = JSON.parse(serializedData);
        } catch (err) {
            localStorageUser = undefined;
        }
        if (localStorageUser) {
            this.setState({userInfo: true})
        }
          const companyName = companyData[this.props.params.id].companyName
          const info = {
              company: companyName,
              user: localStorageUser
          }
          if (localStorageUser) {
              this.props.getPrediction(info)
          }
    }
    componentDidMount() {

    }
    componentWillUpdate(state, prop) {
        console.log("state", state);
        console.log("prop", prop)
    }

    render() {
        let {open, open2, prediction, userInfo, loader} = this.state;
        let Prediction;
        let Mentor = (
            <div className="mentor">
                <h3>No Mentors Available Yet</h3>
            </div>
        );
        if (companyData[this.props.params.id].mentors) {
            Mentor = (
                <div className="mentor">
                  <h3>Featured Mentors</h3>
                  <MentorList mentors={companyData[this.props.params.id].mentors}/>
                </div>
            );
        }
        if (userInfo) {
            if(loader){
                Prediction = (
                    <Segment className="yourStats">
                      <Dimmer active>
                        <Loader>Magic takes time...</Loader>
                      </Dimmer>
                      <ScoreDial1 rating={80}/>
                      <Statistic size='small'>
                        <Statistic.Value>
                          <Icon name='dollar'/>100,000
                        </Statistic.Value>
                        <Statistic.Label>Your Predicted Salary</Statistic.Label>
                      </Statistic>
                    </Segment>
              )
            }else{
                Prediction = (
                    <Segment className="yourStats" raised>
                      <span><h3>Your Predicted Fit</h3></span>
                      <ScoreDial1 rating={prediction.overall * 20}/>
                      <Statistic size='small'>
                        <Statistic.Value>
                          <Icon name='dollar'/>{prediction.salary}
                        </Statistic.Value>
                        <Statistic.Label>Your Predicted Salary</Statistic.Label>
                      </Statistic>
                    </Segment>
              )
            }
        } else {
            Prediction = (
                <Segment className="yourStats" raised>
                  <div className='question'>
                    <h4>How well will you fit?</h4>
                    <h4>How much will you make?</h4>
                    <Button onClick={this.show} color='blue'>See My Fit</Button>
                  </div>
                </Segment>
            )
        };
        return (renderCompany(this.props.params.id, Prediction, Mentor, open, this.close, this.show2, open2))
    }
}

export default connect(state => ({prediction: state.prediction}), dispatch => ({
    getPrediction(info) {
        dispatch(getPrediction(info))
    }
}))(BusinessPage)
