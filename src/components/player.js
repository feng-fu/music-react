import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import PlayCircleOutline from 'material-ui-icons/PlayCircleOutline'
import PauseCircleOutline from 'material-ui-icons/PauseCircleOutline'
import SkipNextIcon from 'material-ui-icons/SkipNext'

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 34,
    width: 34,
  },
})

function MediaControlCard(props) {
  const musicGroup = props.musicMsg
  const id = Number(props.match.params.id)
  const musicMsg = musicGroup[id] || musicGroup[0]
  const length = musicGroup.length
  const classes = props.classes
  let audio = null
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">{musicMsg.songname}</Typography>
            <Typography type="subheading" color="secondary">
              {musicMsg.singername}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous" onClick={() => {
              if(id === 0 || length === 1) return
              props.history.push(`/player/${id - 1}`)
            }}>
              <SkipPreviousIcon style={{color: ((id === 0 || length === 1) ? '#d5d5d6' : '#757575')}} />
            </IconButton>
            <IconButton aria-label="Play/pause" onClick={() => {
              props.playState ? audio.pause() : audio.play()
              props.changePlayState()
            }}>
              {
                (() => {
                  return (props.playState ? 
                    <PauseCircleOutline  className={classes.playIcon} /> : 
                    <PlayCircleOutline className={classes.playIcon} />)
                })()
              }
            </IconButton>
            <IconButton aria-label="Next" onClick={() => {
              if(id + 1 > length - 1) return
              props.history.push(`/player/${id + 1}`)
            }}>
              <SkipNextIcon style={{color: (id + 1 > length - 1) ? '#d5d5d6' : '#757575'}} />
            </IconButton>
            <audio
              src={musicMsg.url || musicMsg.m4a}
              controls
              autoPlay
              loop
              style={{display: 'none'}}
              ref={(audioNode) => {
                audio = audioNode
              }}
            >
            </audio>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={musicMsg.albumpic_big}
          title={musicMsg.songname}
        />
      </Card>
    </div>
  )
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

class CardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      playState: true
    }
  }
  changePlayState() {
    
    this.setState({
      playState: !this.state.playState
    })
  }
  render() {
    return (
      <MediaControlCard
        changePlayState={this.changePlayState.bind(this)}
        playState={this.state.playState}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    musicMsg: state.musicMessageStore
  }
}

const CardExampleWithAvatar = withStyles(styles)(CardContainer)

export default connect(mapStateToProps)(CardExampleWithAvatar)