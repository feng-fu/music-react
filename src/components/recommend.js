import React from 'react'
import { Link } from 'react-router-dom'
import './recommend.css'
import tilesData from './../config/music_genre'
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100vw'
  },
};

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={120}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          title={tile.topic_name}
          subtitle={<span>by <b>{tile.topic_name}</b></span>}
          containerElement={<Link to={`/list/${tile.topic_id}`} />}
        >
          <img src="https://img10.360buyimg.com/babel/s400x170_jfs/t8149/142/1761260370/13043/8f344e01/59bf50b5Nfa3bf8b2.jpg!q90.webp" alt="" />
        </GridTile>
      ))}
    </GridList>
  </div>
);


export default GridListExampleSimple;