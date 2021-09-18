import {List, Paper, Typography, Divider} from "@material-ui/core";
import { useParams } from 'react-router-dom';

import MessageList from "./components/MessageList";
import Form from "./components/Form";

import {useEffect, useState} from "react";

import './style.scss';
import {useSelector, useDispatch } from "react-redux";
import {addMessage} from "../../../../store/messages/actions";

export default function Dialog() {

	const user = useSelector(state => state.profile.name);

	const [isDefaultMessageVisible, setVisible] = useState(true);
	const [chatClass, setChatClass] = useState('chat chat_empty');

	const chatList = useSelector(state => state.chats);

	const { buddyId } = useParams();

	const dispatch = useDispatch();
	const messages = useSelector(state => state.messages.messagesList);
	console.log(messages);

	const messageList = messages[buddyId] || [];

	function getBuddyNameById (id, list) {
		let name = '';
		list.forEach(chat => {
			if (chat.id === id) {
				name = chat.name;
			}
		});
		return name;
	}

	const buddyName = getBuddyNameById(buddyId, chatList);

	useEffect(() => {
		if (messageList.length > 0) {
			setVisible(false);
			setChatClass('chat');
		}
	}, [messageList])


	function handleSubmit(message) {
		dispatch(addMessage(buddyId, message));
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
				dispatch(addMessage(buddyId, message));
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