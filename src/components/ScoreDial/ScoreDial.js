import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import './scoreDial.sass'

const ScoreDial = rating => (
  <div>
    <CircularProgressbar percentage={rating.rating} strokeWidth={12} initialAnimation={true} textForPercentage={(pct) => `${pct}`} />
  </div>
)

export default ScoreDial
