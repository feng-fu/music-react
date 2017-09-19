import React from 'react'
import { changeListData } from './../store/musicMessage/actions'
import {connect} from 'react-redux'

class Search extends React.Component {
  componentWillMount() {

  }
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

const mapDispatcherToEvent = (dispatch) => {
  return {
    refreshMusicList(list) {
      dispatch(changeListData(list))
    }
  }
}

export default connect(mapDispatcherToEvent)(Search)