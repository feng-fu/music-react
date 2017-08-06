import React from 'react'
import { Link } from 'react-router-dom'
import './recommend.css'
import music_genre from './../config/music_genre'

export default class Recommend extends React.Component {
  render() {
    return (
      <ul className="recommend">
        {music_genre.map( (pop, index) => {
          return (
            <SingleRecommend key={index} item={pop} />
          )
        })}
      </ul>
    )
  }
}

class SingleRecommend extends React.Component {
  render() {
    return (
      <li className="single">
        <Link to={`/index/${this.props.item.topic_id}`}>
          {this.props.item.topic_name}
        </Link>
      </li>
    )
  }
}