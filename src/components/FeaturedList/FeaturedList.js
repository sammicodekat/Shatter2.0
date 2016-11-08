import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import './featuredList.sass'
import companyData from '../../store/companyData'

const renderFeaturedList = featured => (
  featured.map(company => (
    <FeaturedCard key={company._id} company={company} />
  ))
)

const FeaturedList = () => {
  return (
    <div className="featuredList">
      {renderFeaturedList(companyData)}
    </div>
  )
}

export default FeaturedList
