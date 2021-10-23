import ListItemText from '@material-ui/core/ListItemText';
import {useEffect, useState} from "react";

import './style.scss'
import {useSelector} from "react-redux";


export default function MessageListItem (props) {

	const profile = useSelector(state => state.users.profile);
  const message = props.message;
	const [itemClass, setItemClass] = useState('');

	useEffect(() => {
		if (message.user === profile.name) {
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