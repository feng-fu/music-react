import React from 'react'

import getDataUtils from '../utils/postData'

const Single = (props) => (
  <li>{props.item.songname}</li>
)

class Full extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <Single item={item} />
        ))}
      </ul>
    )
  }
}



export default class Index extends React.Component {
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
        <Full list={this.state.listData} />
      </div>
    )
  }
}


