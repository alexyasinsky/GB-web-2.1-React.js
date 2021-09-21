import ListItemText from '@material-ui/core/ListItemText';
import {useEffect, useState} from "react";

import './style.scss'


export default function MessageListItem (props) {
	const message = props.message;
	const [itemClass, setItemClass] = useState('');

	useEffect(() => {
		if (message.isOwner) {
			setItemClass('message-item_owner');
		} else {
			setItemClass('message-item_buddy');
		}
	}, [message])


	return (
			<ListItemText
				className={itemClass}
				primary={message.text}
				secondary={`${message.user}: ${message.time}`}
			/>
	)
}