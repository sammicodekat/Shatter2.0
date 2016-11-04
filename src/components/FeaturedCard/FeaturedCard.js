import React from 'react'
import './featuredCard.sass'
import ScoreDial from '../ScoreDial/ScoreDial'
import ScoreBar from '../ScoreBar/ScoreBar'

const renderFeaturedCard = company => (
  <div className="featuredCard">
    <h1 className="companyName">Company Name</h1>
    <div className="cardContent">
      <div className="rating"><ScoreDial rating={60} /></div>
      <div className="aspects">
        <ScoreBar aspect={company.topAspect1} score={70} />
        <ScoreBar aspect={company.topAspect2} score={50} />
        <ScoreBar aspect={company.topAspect3} score={30} />
      </div>
    </div>
  </div>
)

const FeaturedCard = company => (
  renderFeaturedCard(company)
)

export default FeaturedCard
