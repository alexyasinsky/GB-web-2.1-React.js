import {List, Paper, Typography, Divider} from "@material-ui/core";
import { useParams } from 'react-router-dom';

import MessageList from "./components/MessageListComp";
import Form from "./components/FormContainer";

import {useEffect, useState, useMemo } from "react";

import './style.scss';
import {useSelector, useDispatch } from "react-redux";
import {addMessageWithThunk} from "../../../../store/messages/actions";
import {getMessages} from "../../../../store/messages/selectors";


export default function Dialog() {


	const user = 'Alex';

	const [isDefaultMessageVisible, setVisible] = useState(true);
	const [chatClass, setChatClass] = useState('chat chat_empty');

	const chatList = useSelector(state => state.chats);

	const { buddyId } = useParams();

	const dispatch = useDispatch();
	const messages = useSelector(getMessages);

	const messageList = useMemo(() => {
		return messages[buddyId] || [];
	}, [messages, buddyId]);

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
		dispatch(addMessageWithThunk(buddyId, message, user, buddyName));
	}

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