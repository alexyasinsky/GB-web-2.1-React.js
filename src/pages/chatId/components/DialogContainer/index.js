import {List, Paper, Typography, Divider} from "@material-ui/core";
import { useParams } from 'react-router-dom';

import MessageList from "./components/MessageListComp";
import Form from "./components/FormContainer";

import {useEffect, useState } from "react";

import './style.scss';
import {useSelector, useDispatch } from "react-redux";
import { initMessagesList } from '../../../../store/messages/actions';

import { db } from '../../../../api';
import { set, ref, push } from "firebase/database";


export default function Dialog() {

	const user = useSelector(state => state.users.profile.name);

  const chats = useSelector(state => state.users.profile.chats);

  function getCurrentChatByBuddyId(id) {
    let currentChat = {};
    chats.forEach(chat => {
      if (chat.buddy.id === id) {
        currentChat = chat;
      }
    });
    return currentChat;
  }
  const { buddyId } = useParams();

  const currentChat = getCurrentChatByBuddyId(buddyId);

  const buddyName = currentChat.buddy.name;

	const [isDefaultMessageVisible, setVisible] = useState(true);
	const [chatClass, setChatClass] = useState('chat chat_empty');

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(initMessagesList(currentChat.dialogId));
  }, [dispatch, currentChat]);

	const messages = useSelector(state => state.messages);

  console.log(messages);

	useEffect(() => {
		if (messages.length > 0) {
			setVisible(false);
			setChatClass('chat');
		}
	}, [messages])

  const addMessage = async (message) => {
    const newMessageRef = push(ref(db, 'dialogs/' + currentChat.dialogId));
    await set(newMessageRef, message)
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
						<MessageList list={messages}/>
					</List>
				</div>
			</Paper>
			<Form 
        handler={addMessage} 
        user={user} 
      />
		</>
	)
}