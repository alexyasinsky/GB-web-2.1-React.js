import { Button, Icon, TextField } from '@material-ui/core';

import {useRef, useEffect, useState} from "react";


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
		}
		setMessage(newMessage);
	}

	useEffect(() => {
		if (message) {
			handler(message);
		}
	}, [message])

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current?.message.focus();
	});


	return (
		<form ref={inputRef} onSubmit={createMessage}>
			<TextField

				fullWidth={true}
				label="Message"
				name='message'
				multiline
				rows={4}
				variant="outlined"
			/>
			<Button variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        type='submit'
        >Отправить
			</Button>
		</form>
	)
}
