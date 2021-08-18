import faker from 'faker';
import {ListItem, Avatar, ListItemText} from '@material-ui/core';

export default function ProfileLink() {

	const profile = {
		avatar : faker.image.avatar(),
		name : "Alex's Profile"
	}
	return (
		<div>
			<ListItem button>
				<Avatar alt={profile.name} src={profile.avatar} className={'chat__avatar'} />
				<ListItemText
					primary={profile.name}
				/>
			</ListItem>
		</div>
	)
}