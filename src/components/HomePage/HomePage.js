import React from 'react'
import './homePage.sass'
import SearchBar from '../SearchBar/SearchBar'
import FeaturedList from '../FeaturedList/FeaturedList'

const HomePage = () => (
  <div className="homePage">
    <SearchBar />
    <div className="content">
      <FeaturedList />
    </div>
  </div>
)

export default HomePage
