import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import QueueMusic from 'material-ui-icons/QueueMusic';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
// import { Link } from 'react-router-dom'

const SingleList = (props) => (
  <div>
    <ListItem button onClick={() => {
      console.log(props)
      props.history.push(`/player/${props.id}`)
    }}>
      <Avatar src={props.item.albumpic_big} alt={props.item.songname} />
      <ListItemText primary={props.item.songname} secondary={props.item.singername + (props.item.albumname || '')} />
      <ListItemIcon>
        <QueueMusic />
      </ListItemIcon>
  </ListItem>
  <Divider inset={true} />
</div>
)

const ListGroup = (props) => {
  console.log(props)
  return (
  <div>
  <List>
    {props.list.map((item, index) => (
      <SingleList item={item} id={index} key={index} history={props.history} />
    ))}
  </List>
  </div>
)};

export default ListGroup;