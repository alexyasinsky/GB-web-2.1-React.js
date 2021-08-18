import faker from 'faker';
import ChatListItem from "./ChatListItem/ChatListItem";

const list = Array.from({
	length: 5,
}).map(() => ({
	id: faker.datatype.uuid(),
	avatar: faker.image.avatar(),
	name: faker.name.firstName()
}));

export default function ChatList() {
	return (
		list.map((buddy) =>
			<ChatListItem  key={buddy.id} item = {buddy}/>
		)
	)
}