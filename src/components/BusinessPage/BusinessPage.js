import React, { Component } from 'react'
import uuid from 'uuid'
import ScoreDial from '../ScoreDial/ScoreDial'
import companyData from '../../store/companyData'
import ScoreBar from '../ScoreBar/ScoreBar'
import { connect } from 'react-redux'
import { postReview } from '../../actions/reviewActions'
import './businessPage.sass'

const renderCompany = (i) => (
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
        <ScoreBar title="Career Opportunities" aspect={companyData[i].careerOpportunities} />
      </div>

      <div className="yourStats">
        Your predicted fit:<br/>
        <div className="prediction">
          <ScoreDial rating={70} />
        </div>
        Your predicted salary: {`$${60000}`}
      </div>
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

  </div>
)

class BusinessPage extends Component {
  constructor () {
    super()
    this.state = {
      user: {}
    }
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

    const review = {
      company: companyName,
      user: localStorageUser,
    }
  console.log(review);
    this.props.postReview(review)
  }

  render () {
    return(
      renderCompany(this.props.params.id)
    )
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    postReview(review) {
      dispatch(postReview(review))
    }
  }))(BusinessPage)
