import { TextField, Button, Grid } from '@material-ui/core';
import { useState } from 'react';

import './style.scss';

export default function BuddyAddForm(props) {

	const addBuddy = props.add;

	const [id, setId] = useState('');

	const handleId = (event) => {
		setId(event.target.value);
	}

	const add = () => {
		addBuddy(id);
		setId('');
	}



	return (
		<Grid container spacing={1}>
			<Grid item>
				<TextField name='id' className='buddy-add__input' value={id} onChange={handleId} label="Введите идентификатор" variant="outlined" />
			</Grid>
			<Grid item>
				<Button variant="contained"
				        color="primary"
				        className='buddy-add__button'
				        onClick={add}
				>Добавить участника
				</Button>
			</Grid>
		</Grid>
	)
}