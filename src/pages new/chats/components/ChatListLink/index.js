import {ListItem, ListItemText} from '@material-ui/core';

export default function ChatListLink() {
	return (
		<div>
			<ListItem button>
				<ListItemText
					primary='Список чатов'
				/>
			</ListItem>
		</div>
	)
}