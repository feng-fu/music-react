import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { playOther } from './../store/musicMessage/actions'

import getDataUtils from '../utils/postData'

const Single = (props) => (
  <Link onClick={() => props.playSelect(props.item)} to={`/player/${props.item.url.replace('http://ws.stream.qqmusic.qq.com/', '')}`}>{props.item.songname}</Link>
)

class Full extends React.Component {
  playSelect(item) {
    console.log('triggered')
    this.props.playSelect(item)
  }
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <Single item={item} playSelect={ this.playSelect.bind(this) } />
        ))}
      </ul>
    )
  }
}



class Index extends React.Component {
  constructor () {
    super()
    this.state = {
      listData: []
    }
  }
  componentWillMount() {
    const id = this.props.match.params.id
    getDataUtils.postRecommendData(id).then(
      r => {
        r = r.data
        if(r.showapi_res_body && r.showapi_res_body.pagebean && r.showapi_res_body.pagebean.songlist) {
          this.setState({
            listData: r.showapi_res_body.pagebean.songlist
          })
        }
      }
    ).catch(e => {
      console.log(e)
    })
  }
  render() {
    return (
      <div className="index">
        <Full list={this.state.listData} playSelect={ this.props.playSelect } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatcherToProps = (dispatch) => {
  return {
    playSelect: (text) => {
      dispatch(playOther(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Index)
