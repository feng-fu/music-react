import React from 'react'
import './recommend.css'

export default class Search extends React.Component {
  render() {
    return (
      <ul className="recommend">
        <SearchBox />
        <SearchResult />        
      </ul>
    )
  }
}

class SearchBox extends React.Component {
  render() {
    return (
      <div className="SearchBox">SearchBox</div>
    )
  }
}

class SearchResult extends React.Component {
  render() {
    return (
      <div className="search-result">
        search-result
      </div>
    )
  }
}

