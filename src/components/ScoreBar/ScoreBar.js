import React from 'react'

const renderScoreBar = (aspect, score) => (
  <div className="aspectBar">
    {aspect}
    <span className="scoreBar" width={`${score}`} />
  </div>
)

const ScoreBar = aspect => (
  <div>
    {renderScoreBar(aspect.aspect, aspect.score)}
  </div>
)

export default ScoreBar
