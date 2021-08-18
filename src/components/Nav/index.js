import ChatList from "./components/ChatList";
import { NavLink } from "react-router-dom";
import { Grid, Paper, List } from '@material-ui/core';

import ProfileLink from "./components/ProfileLink";
import ChatListLink from "./components/ChatListLink";
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
				<Paper className='chat__link'>
					<ChatListLink/>
				</Paper>
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