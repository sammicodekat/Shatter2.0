import React from 'react'
import './scoreBar.sass'

const renderScoreBar = (aspect, title) => (
  <div className="aspectBar">
    <span className="title"><span>{title}</span></span>
    <span className="scoreBar" style={{ width: `${(aspect / 5) * 100}%` }} />
  </div>
)

const ScoreBar = ({aspect, title}) => (
  <div>
    {renderScoreBar(aspect, title)}
  </div>
)

export default ScoreBar
