import {useEffect, useState} from "react";
import { FormComp } from './components/FormComp';

export default function Form(props) {
	const handler = props.handler;
	const owner = props.user;


	const [message, setMessage] = useState();



	function createMessage(event) {
		event.preventDefault();
		const newMessage = {
			isOwner: true,
			user: owner,
			text: event.target.message.value,
			time: new Date().toLocaleTimeString()
		};
		event.target.message.value = '';
		setMessage(newMessage);
	}

	useEffect(() => {
		if (message) {
			handler(message);
		}
	}, [message]) // при добавлении handler в зависимости приложение ломается (создается бесконечное количество сообщений)


	return (
    <FormComp
      onSubmit={createMessage}
    />
	)
}
