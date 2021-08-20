
import {ListItem, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from "react-router-dom";


export default function ChatListItem(props) {

	const buddy = props.item;
	const deleteItem = () => {
		props.delete(buddy);
	}


	return (

    <ListItem button>
      <NavLink key={buddy.id} to={`/chats/${buddy.name}`} className='chats__link'>
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