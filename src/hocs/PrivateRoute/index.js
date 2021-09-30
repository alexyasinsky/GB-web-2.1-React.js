import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({authenticated, ...rest}) {
	console.log('ready')
	 if (authenticated) {
		 console.log('yes');
		return <Route {...rest}/>
	 } else {
		 console.log('no')
	 	return <Redirect to={{pathname: '/login',}}/>
	 }
}