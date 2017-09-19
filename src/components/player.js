import React from 'react'
import { connect } from 'react-redux'

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardExampleWithAvatar extends React.Component {

  render() {
    const musicGroup = this.props.musicMsg
    const id = this.props.match.params.id
    const musicMsg = musicGroup[id] || musicGroup[0]
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={musicMsg.songname} subtitle={musicMsg.singername} />}
        >
          <img src={musicMsg.albumpic_big} alt="" />
          <audio src={musicMsg.url || musicMsg.m4a} controls autoPlay loop></audio> 
        </CardMedia>
        <CardActions>
          <FlatButton label="playPre" />
          <FlatButton label="playNext" />
        </CardActions>
      </Card>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    musicMsg: state.musicMessageStore
  }
}

export default connect(mapStateToProps)(CardExampleWithAvatar)