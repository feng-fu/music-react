
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar  } from 'material-ui/GridList'
import './recommend.css'
import tileData from './../config/music_genre'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100vw'
  },
})

function ImageGridList(props) {
  const classes = props.classes
  console.log(props)
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {tileData.map((tile, index) => (
            <GridListTile
              key={index}
              onClick={() => {
                props.history.push(`/list/${tile.topic_id}`)
              }}
            >
              <img src="https://img10.360buyimg.com/babel/s400x170_jfs/t8149/142/1761260370/13043/8f344e01/59bf50b5Nfa3bf8b2.jpg!q90.webp" alt="" />
              <GridListTileBar
                title={tile.topic_name}
              />
            </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImageGridList)