import React from 'react'
import ScoreDial from '../ScoreDial/ScoreDial'

import './businessPage.sass'

class BusinessPage extends React.Component {
  render() {
    // const {name, companyInfo} = this.props
    return(
      <div className= "businessContainer">
        {/* <div className="rating"><ScoreDial rating={rating || 82} /></div>
        <h1>{name || 'Apature Laboratories'}</h1>
        <ul>
          {company.benefitInfo.map(benefit => (
            <li key={uuid()}>{benefit}</li>
          ))}
        </ul>
        <p>{companyInfo || 'This is some company info'}</p>
        <div className="jobOpenings">

        </div> */}
      </div>
    )
  }
}

export default BusinessPage
