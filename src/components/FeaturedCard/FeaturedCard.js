import React from 'react'
import { browserHistory } from 'react-router'
import uuid from 'uuid'

import './featuredCard.sass'
import ScoreDial from '../ScoreDial/ScoreDial'
import ScoreBar from '../ScoreBar/ScoreBar'

const renderFeaturedCard = company => (
  <div className="featuredCard" onClick={() => browserHistory.push(`/company/${company._id}`)}>
    <h1 className="companyName">{company.name}</h1>
    <div className="cardContent">
      <div className="rating"><ScoreDial rating={company.rating} /></div>
      <div className="aspects">
        <ul>
          {company.benefitInfo.map(benefit => (
            <li key={uuid()}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const FeaturedCard = company => (
  company ? renderFeaturedCard(company.company) : <span>loading...</span>
)

export default FeaturedCard
