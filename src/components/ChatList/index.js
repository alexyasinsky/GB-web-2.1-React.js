
import ChatListItem from "./components/ChatListItemContainer";

import { useSelector } from "react-redux";




export default function ChatList() {

  const profileId = useSelector(state => state.users.profile.id);
  const profileChats  = useSelector(state => state.users.profile.chats);
  const allChats = useSelector(state => state.chats);
  const buddyList = useSelector(state => state.users.buddies);

  const chatList = [];

  profileChats.forEach(profileChat => {
    allChats.forEach(chat => {
      if (chat.chatId === profileChat) {
        let buddyId = '';
        if (profileId === chat.user1) {
          buddyId = chat.user2;
        } else {
          buddyId = chat.user1;
        }
        let currentBuddy = {};
        buddyList.forEach(buddy => {
          if (buddy.id === buddyId) {
            currentBuddy = buddy;
            delete currentBuddy.chats;
          }
        })
        let chatModified = {
          id: chat.chatId,
          buddy: currentBuddy,
          dialogId: chat.dialogId,
        }
        chatList.push(chatModified);
      }
    });
  })

  console.log(chatList);

	return (
		chatList.map((chat) =>
			<ChatListItem key={chat.id} chat={chat}/>
		)
	)
}