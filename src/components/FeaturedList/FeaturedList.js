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
  // const featured = [
  //   { _id: '0', name: 'Umbrella Corp', rating: 45, benefitInfo: ["Coworker Biting Day", "Does stuff", "Creepy Boss"] },
  //   { _id: '1', name: 'Black Mesa Research', rating: 68, benefitInfo: ["Very Wow", "Gives a shit", "Gives two shits sometimes"] },
  //   { _id: '2', name: 'Apature Laboratories', rating: 82, benefitInfo: ["Much good", "Could be worse", "Cake?"] },
  // ]
  return (
    <div className="featuredList">
      {renderFeaturedList(companyData)}
    </div>
  )
}

export default FeaturedList
