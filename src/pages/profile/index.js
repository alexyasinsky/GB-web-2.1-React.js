import {Paper, Typography} from "@material-ui/core";

import './style.scss';

export default function Profile() {

	return (
		<Paper>
			<div className='profile'>
				<Typography
					variant="h4"
					align='center'
				>
					Профиль
				</Typography></div>
		</Paper>
	)
}