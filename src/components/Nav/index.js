import ChatList from "./components/ChatList";
import { NavLink } from "react-router-dom";
import { Grid, Paper, List, Typography } from '@material-ui/core';

import ProfileLink from "./components/ProfileLink";
import BuddyAddForm from "./components/BuddyAddForm";

import './style.scss';


export default function Nav(props) {
	const listProps = props;
	const addBuddy = props.add;

	return(
		<Grid container spacing={1} direction='column'>
			<Grid item>
				<NavLink to='/profile'>
					<Paper className='owner__link'>
						<ProfileLink/>
					</Paper>
				</NavLink>
			</Grid>
			<Grid item>
				<Typography
					variant="h6"
					align='center'
				>
					Чаты
				</Typography>
			</Grid>
			<Grid item>
				<Paper className='chat__list'>
					<List >
						<ChatList listProps={listProps}/>
					</List>
				</Paper>
			</Grid>
			<Grid item>
				<BuddyAddForm add={addBuddy}/>
			</Grid>
		</Grid>
	)
}