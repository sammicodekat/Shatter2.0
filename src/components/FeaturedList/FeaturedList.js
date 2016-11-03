import React from 'react'

// const renderFeaturedList = (featured) => (
//   featured.map(company => (
//     <div className="featuredCard">
//       <h1 className="companyName">Company Name</h1>
//       <span>rating</span>
//       <span>top aspect 1</span>
//       <span>top aspect 2</span>
//       <span>top aspect 3</span>
//     </div>
//   ))
// )

const renderDummyList = () => (
  <div className="featuredCard">
    <h1 className="companyName">Company Name</h1>
    <span className="aspectBarRating">rating</span>
    <span className="aspectBar">top aspect 1</span>
    <span className="aspectBar">top aspect 2</span>
    <span className="aspectBar">top aspect 3</span>
  </div>
)

const FeaturedList = () => (
  renderDummyList('featured')
)

export default FeaturedList
