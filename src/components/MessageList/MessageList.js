
import MessageListItem from "./MessageListItem/MessageListItem";
import ListItem from '@material-ui/core/ListItem';

export default function MessageList(props) {
    return (
      props.list.map((message, ind) =>
        <ListItem key={`${message.user}+${ind}`}>
          <MessageListItem message={message}/>
        </ListItem>
      )
    )
}
