import React from 'react'
import './searchBar.sass'

const handleSearch = (e) => {
  e.preventDefault()
  const { companyName } = e.target

  const searchEntry = companyName.value
  companyName.value = ''

  console.log('searchEntry: ', searchEntry)
  // props.search(searchEntry)
}

const renderSearchBar = () => (
  <div className="searchBar">
    <form onSubmit={e => handleSearch(e)}>
      <div className="searchBlock">
        <input id="companyName" type="text" placeholder="search" required />
        <button className="searchBtn"><i className="fa fa-search" aria-hidden="true" /></button>
      </div>
    </form>
  </div>
)

const SearchBar = () => (
  renderSearchBar()
)

export default SearchBar
