import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import './featuredList.sass'

const renderFeaturedList = featured => (
  featured.map(company => (
    <FeaturedCard key={company._id} company={company} />
  ))
)

const FeaturedList = () => {
  const featured = [
    { _id: '23454356343', name: 'Umbrella Corp', rating: 45, benefitInfo: ["Coworker Biting Day", "Does stuff", "Creepy Boss"] },
    { _id: '34626345236', name: 'Black Mesa Research', rating: 68, benefitInfo: ["Very Wow", "Gives a shit", "Gives two shits sometimes"] },
    { _id: '82357342235', name: 'Apature Laboratories', rating: 82, benefitInfo: ["Much good", "Could be worse", "Cake?"] },
  ]
  return (
    <div className="featuredList">
      {renderFeaturedList(featured)}
    </div>
  )
}

export default FeaturedList
