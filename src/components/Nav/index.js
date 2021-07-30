import ChatList from "./components/ChatList";
import { NavLink } from "react-router-dom";
import { Paper, List, Typography } from '@material-ui/core';
import ProfileLink from "./components/ProfileLink";

import './style.scss';

export default function Nav(props) {
	const listProps = props;

	return(
		<>
			<NavLink to='/profile'>
				<Paper className='owner__link'>
					<ProfileLink/>
				</Paper>
			</NavLink>
			<Typography
				variant="h6"
				align='center'
			>
				Чаты
			</Typography>
			<Paper className='chat__list'>
				<List >
					<ChatList listProps={listProps}/>
				</List>
			</Paper>
		</>
	)
}