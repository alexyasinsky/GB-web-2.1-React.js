import {Paper, Typography} from "@material-ui/core";

import './style.scss';

export default function Main() {
	return (
		<>
			<Paper>
				<div className='main'>
					<Typography
						variant="h4"
						align='center'
					>
						Приветствую в Мессенджере
					</Typography></div>
			</Paper>
		</>
	)
}