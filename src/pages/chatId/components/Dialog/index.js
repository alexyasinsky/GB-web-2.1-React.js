import {List, Paper, Typography, Divider} from "@material-ui/core";
import { useParams } from 'react-router-dom';

import MessageList from "./components/MessageList";
import Form from "./components/Form";

import {useEffect, useState} from "react";

import './style.scss';

export default function Dialog() {

	const user = "Alex";
	const [messageList, setList] = useState([]);

	const [isDefaultMessageVisible, setVisible] = useState(true);
	const [chatClass, setChatClass] = useState('chat chat_empty')

	const { buddyName } = useParams();

	useEffect(() => {
		if (messageList.length > 0) {
			setVisible(false);
			setChatClass('chat');
		}
	}, [messageList])

	useEffect(() => {
		setList([]);
	}, [buddyName])

	function handleSubmit(message) {
		setList(messageList.concat([message]));
	}

	useEffect(() => {
		if (messageList.length !==0 && !(messageList[messageList.length - 1].user === buddyName)) {
			setTimeout(() => {
				let message = [{
					isOwner: false,
					user: buddyName,
					text: `${messageList[messageList.length - 1].text}?`,
					time: new Date().toLocaleTimeString()
				}];
				setList(messageList.concat(message));
			}, 1500);
		}
	}, [buddyName, messageList])

	return (
		<>
			<Paper className='chat__paper'>
				<div>
					<Typography
						variant="h5"
						color='primary'
						align='center'
					>
						{`${buddyName} на связи`}
					</Typography>
				</div>
				<Divider />
				<div className={chatClass}>
					{isDefaultMessageVisible ?
						<Typography
							variant="h6"
							align='center'
						>
							Здесь будут ваши сообщения...
						</Typography>
						: ''
					}
					<List>
						<MessageList list={messageList}/>
					</List>
				</div>
			</Paper>
			<Form handler={handleSubmit} user={user} />
		</>
	)
}