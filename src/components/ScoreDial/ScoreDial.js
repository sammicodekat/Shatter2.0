import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import './scoreDial.sass'

const ScoreDial = rating => (
  <CircularProgressbar percentage={rating.rating} strokeWidth={12} initialAnimation={true} textForPercentage={(pct) => `${pct}`} />
)

export default ScoreDial
