import React from 'react';
import {List, ListItem} from 'material-ui/List';
import QueueMusic from 'material-ui/svg-icons/av/queue-music';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom'

const SingleList = (props) => (
  <div>
    <ListItem
    leftAvatar={<Avatar src={props.item.albumpic_big} />}
    rightIcon={<QueueMusic />}
    primaryText={props.item.songname}
    containerElement={<Link to={`/player/${props.id}`} />}
    secondaryText={
      <p>
        <p style={{color: '#130f13'}}>{props.item.singername}</p>
        <p style={{color: '#b5b5b6'}}>{props.item.albumname}</p>
      </p>
    }
  />
  <Divider inset={true} />
</div>
)

const ListGroup = (props) => (
  <List>
    {props.list.map((item, index) => (
      <SingleList item={item} id={index} key={index} />
    ))}
  </List>
);

export default ListGroup;