import React from 'react';
import {
	Router,
	Route,
	Switch
} from 'react-router-dom';
import User from './pages/User'
import CommingSoon from './pages/CommingSoon'

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Switch>					
					<Route path="/profile/:user" component={User}/>
					<Route component={CommingSoon}/>
				</Switch>
			</Router>
		)
	}
}
