import {ListItem, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from "react-router-dom";

export default function ChatListItemComp(props) {
  
  const buddy = props.chat.buddy;
  const deleteBuddy = props.deleteBuddy;

  return (
    <ListItem button>
			<NavLink key={buddy.id} to={`/chats/${buddy.id}`} className='chats__link'>
				<Avatar alt={buddy.name} src={buddy.avatar} className='chats__avatar' />
				<ListItemText
					primary={buddy.name}
				/>
			</NavLink>
			<ListItemSecondaryAction onClick={deleteBuddy}>
				<IconButton
					edge="end"
					aria-label="delete"
				>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
  )
}