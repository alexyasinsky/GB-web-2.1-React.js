import ListItemText from '@material-ui/core/ListItemText';
import {useEffect, useState} from "react";

import './style.scss'
import {useSelector} from "react-redux";
import {getProfile} from "../../../../../../../../store/users/selectors";


export default function MessageListItem (props) {

	const profile = useSelector(getProfile);
  const message = props.message;
	const [itemClass, setItemClass] = useState('');

	useEffect(() => {
		if (message.user === profile.name) {
			setItemClass('message-item_owner');
		} else {
			setItemClass('message-item_buddy');
		}
	}, [message, profile.name])


	return (
			<ListItemText
				className={itemClass}
				primary={message.text}
				secondary={`${message.user}: ${message.time}`}
			/>
	)
}