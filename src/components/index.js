import React from 'react'

import { connect } from 'react-redux'
import { changeListData } from './../store/musicMessage/actions'

import DataDispatcher from '../utils/postData'

import Full from './../common/single'

const postRecommendData = DataDispatcher.postRecommendData

class Index extends React.Component {
  constructor () {
    super()
    this.state = {
      listData: []
    }
  }
  componentWillMount() {
    const id = this.props.match.params.id
    postRecommendData(id).then(
      r => {
        r = r.data
        if(r.showapi_res_body && r.showapi_res_body.pagebean && r.showapi_res_body.pagebean.songlist) {
          let songlist = r.showapi_res_body.pagebean.songlist
          this.setState({
            listData: songlist
          })
          this.props.changeListData(songlist)
        }
      }
    ).catch(e => {
      console.log(e)
    })
  }
  render() {
    return (
      <div className="index">
        <Full list={this.state.listData} history={this.props.history} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatcherToProps = (dispatch) => {
  return {
    changeListData: (text) => {
      dispatch(changeListData(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Index)
