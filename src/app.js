import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: false };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyD8bCwW3YB39VHtPT00KkOGD4QoqdqWbfw",
			authDomain: "todolist-31f0f.firebaseapp.com",
			databaseURL: "https://todolist-31f0f.firebaseio.com",
			storageBucket: "todolist-31f0f.appspot.com",
			messagingSenderId: "849399993742"
		});

		firebase.auth().onAuthStateChanged( (user) => {
			if(user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});

	}

	renderContent() {
		if (this.state.loggedIn) {
			return(
				<Button>
					Log out
				</Button>
			);
		}

		return <LoginForm/>;
	}



	render() {
		return (
			<View>
				<Header thingsToShow="Todo List" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
