import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
  render() {
    // let musicMsg = this.props.musicMsg.pop()
    const musicGroup = this.props.musicMsg
    const id = this.props.match.params.id
    const musicMsg = musicGroup[id] || musicGroup[0]

    return (
      <div className="player_page">
        <div className="summary">
          <div className="title">{musicMsg.songname}</div>
          <div className="singer">{musicMsg.singername}</div>
          <img style={{width: '100vw'}} src={musicMsg.albumpic_big} alt=""/>
        </div>
         <audio src={musicMsg.url || musicMsg.m4a} controls autoPlay loop></audio> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    musicMsg: state.musicMessageStore
  }
}

export default connect(mapStateToProps)(Index)