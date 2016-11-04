import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import './featuredList.sass'

const renderFeaturedList = featured => (
  featured.map(company => (
    <FeaturedCard key={company.id} company={company} />
  ))
)

const FeaturedList = () => {
  const featured = [
    { id: '23454356343', name: 'Company1', rating: 45, topAspect1: { aspect: 'thing1', score: 70 }, topAspect2: { aspect: 'thing2', score: 50 }, topAspect3: { aspect: 'thing3', score: 90 } },
    { id: '34626345236', name: 'Company2', rating: 68, topAspect1: { aspect: 'thing1', score: 40 }, topAspect2: { aspect: 'thing2', score: 70 }, topAspect3: { aspect: 'thing3', score: 30 } },
    { id: '82357342235', name: 'Company3', rating: 82, topAspect1: { aspect: 'thing1', score: 20 }, topAspect2: { aspect: 'thing2', score: 80 }, topAspect3: { aspect: 'thing3', score: 60 } },
  ]
  return (
    <div className="featuredList">
      {renderFeaturedList(featured)}
    </div>
  )
}

export default FeaturedList
