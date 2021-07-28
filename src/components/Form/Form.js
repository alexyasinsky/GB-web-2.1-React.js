export default function Form(props) {
	const handler = props.handler;

	return (
		<form className='form' onSubmit={handler}>
			<input type="textarea" name='message' className='form__message'/>
			<label htmlFor="user">User:</label><input type="text" name='user' defaultValue={'Alex'} className='form__user'/>
			<button type='submit'>Отправить</button>
		</form>
	)
}
