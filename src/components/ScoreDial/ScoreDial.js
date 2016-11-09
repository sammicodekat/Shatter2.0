import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import './scoreDial.sass'
import { Button } from 'semantic-ui-react'

const ScoreDial = rating => (
  <div>
    <CircularProgressbar percentage={rating.rating} strokeWidth={12} initialAnimation={true} textForPercentage={(pct) => `${pct}`} />
    {/* <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: rating.rating * 8 }}
    /> */}
  </div>
)

export default ScoreDial
