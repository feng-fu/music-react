import React from 'react'
import { Link } from 'react-router-dom'

const Single = (props) => (
  <Link to={`/player/${props.id}`}>{props.item.songname}</Link>
)



export default (props) => (
  <ul>
    {this.props.list.map((item, index) => (
      <li key={index}>
        <Single item={item} id={index} />
      </li>
    ))}
  </ul>
)