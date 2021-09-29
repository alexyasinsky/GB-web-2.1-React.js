import { Button, Icon, TextField, Grid } from '@material-ui/core';

import {useRef, useEffect, useState} from "react";


export default function Form(props) {
	const handler = props.handler;
	const owner = props.user;


	const [message, setMessage] = useState();

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current?.message.focus();
	});

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
		<form ref={inputRef} onSubmit={createMessage}>
			<Grid container spacing={1} direction='column'>
				<Grid item>
					<TextField
						fullWidth={true}
						label="Message"
						name='message'
						multiline
						rows={4}
						variant="outlined"
					/>
				</Grid>
				<Grid item>
					<Button variant="contained"
					        color="primary"
					        endIcon={<Icon>send</Icon>}
					        type='submit'
					>Отправить
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}
