import {ListItem, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from "react-router-dom";

export default function ChatListItemComp({buddy, deleteItem}) {
  return (
    <ListItem button>
			<NavLink key={buddy.email} to={`/chats/${buddy.email}`} className='chats__link'>
				<Avatar alt={buddy.name} src={buddy.avatar} className='chats__avatar' />
				<ListItemText
					primary={buddy.name}
				/>
			</NavLink>
			<ListItemSecondaryAction onClick={deleteItem}>
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