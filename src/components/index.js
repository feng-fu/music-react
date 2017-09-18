import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { changeListData } from './../store/musicMessage/actions'

import getDataUtils from '../utils/postData'

const Single = (props) => (
  <Link to={`/player/${props.id}`}>{props.item.songname}</Link>
)

class Full extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <li key={index}>
            <Single item={item} id={index} />
          </li>
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
        <Full list={this.state.listData} />
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
