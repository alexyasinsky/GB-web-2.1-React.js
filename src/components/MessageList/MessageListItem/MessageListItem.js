import ListItemText from '@material-ui/core/ListItemText';
import {useEffect, useState} from "react";


export default function MessageListItem (props) {

	const [itemClass, setItemClass] = useState('');

	useEffect(() => {
		if (props.message.isOwner) {
			setItemClass('message-item_owner');
		} else {
			setItemClass('message-item_buddy');
		}
	}, [props])


	return (
			<ListItemText
				className={itemClass}
				primary={props.message.text}
				secondary={props.message.time}
			/>
	)
}