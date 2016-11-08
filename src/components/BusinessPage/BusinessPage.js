import React, { Component } from 'react'
import uuid from 'uuid'
import ScoreDial from '../ScoreDial/ScoreDial'
import companyData from '../../store/companyData'
import ScoreBar from '../ScoreBar/ScoreBar'
import { connect } from 'react-redux'
import { getPrediction } from '../../actions/predictionActions'
import './businessPage.sass'
import { Button, Modal } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import ProfileForm1 from '../ProfileForm/ProfileForm1'

const renderCompany = (i,Prediction,open,close) => (
  <div className="businessContainer">
    <div className="heading">
      <span className="logo"><img src={companyData[i].logo} alt=""/></span>
      <h1>{companyData[i].name}</h1>
    </div>

    <div className="reviewContent">
      <div className="rating"><ScoreDial rating={(companyData[i].overall * 20)} /></div>
      <div className="scoreBars">
        <ScoreBar title="Work Life Balance" aspect={companyData[i].workLifeBalance} />
        <ScoreBar title="Culture and Values" aspect={companyData[i].cultureAndValues} />
        <ScoreBar title="Female Leadership" aspect={companyData[i].femaleLeadership} />
        <ScoreBar title="Benefits" aspect={companyData[i].benefits} />
        <ScoreBar title="Equal Opportunities for Women" aspect={companyData[i].careerOpportunities} />
      </div>
      {Prediction}
    </div>

    <div className="infoSection">
      <p>{companyData[i].companyInfo}</p>
      <ul>
        {companyData[i].benefitInfo.map(benefit => (
          <li key={uuid()}>{benefit}</li>
        ))}
      </ul>
    </div>

    <div className="jobOpenings">
    </div>
    <Modal dimmer='blurring' open={open} onClose={close}>
      <Modal.Header>Tell us about yourself</Modal.Header>
      <Modal.Content>
        <ProfileForm1 />
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
  constructor () {
    super();
    this.state={
      open:false
    }
  this.show = this.show.bind(this);
this.close = this.close.bind(this);
  }
  show(){
    this.setState({ open: true })
  }

  close(){
    this.setState({ open: false })
  }
  componentDidMount () {
    const companyName = companyData[this.props.params.id].companyName
    let localStorageUser;
    try {
      let serializedData = localStorage.getItem('user');
      if (!serializedData) throw new Error();
      localStorageUser = JSON.parse(serializedData);
    } catch (err) {
      localStorageUser = undefined;
    }
    const info = {
      company: companyName,
      user: localStorageUser,
    }
    this.props.getPrediction(info)
  }

  render () {
    let { prediction } = this.props;
    let { open } = this.state;
    let Prediction =(<Button onClick={this.show}>See your fit</Button>);
    if(prediction.overall){
      Prediction = (<div className="yourStats">
      Your predicted fit:<br/>
    <div className="prediction">
      <ScoreDial rating={prediction.overall} />
    </div>
    Your predicted salary: {prediction.salary}
  </div>)
}
return(
    renderCompany(this.props.params.id,Prediction,open,this.close)
)
}
}

export default connect(
  state => ({
    prediction: state.prediction
  }),
  dispatch => ({
    getPrediction(info) {
      dispatch(getPrediction(info))
    }
  }))(BusinessPage)
