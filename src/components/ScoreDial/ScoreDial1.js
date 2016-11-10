import React from 'react'
import CircularProgressbar1 from 'react-circular-progressbar'
import './scoreDial.sass'

const ScoreDial = rating => {
   const num = Math.round(rating.rating,-2);
 return (
  <div>
    <CircularProgressbar1 className="personal" percentage={num} strokeWidth={10} initialAnimation={true} textForPercentage={(pct) => `${pct}`}/>
  </div>
)}

export default ScoreDial
