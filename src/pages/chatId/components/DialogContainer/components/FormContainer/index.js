import { FormComp } from './components/FormComp';

export default function Form({handler, user}) {

	function createMessage(event) {
		event.preventDefault();
		const newMessage = {
			user: user,
			text: event.target.message.value,
			time: new Date().toLocaleTimeString()
		};
		event.target.message.value = '';
		handler(newMessage);
	}

	return (
    <FormComp
      onSubmit={createMessage}
    />
	)
}
