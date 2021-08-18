
import {ListItem, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



export default function ChatListItem(props) {
	const buddy = props.item;
	const deleteItem = () => {
		props.delete(buddy);
	}


	return (
		<ListItem button>
			<Avatar alt={buddy.name} src={buddy.avatar} className={'chat__avatar'} />
			<ListItemText
				primary={buddy.name}
			/>
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