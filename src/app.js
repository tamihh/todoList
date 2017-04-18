import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Header, Card, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

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
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
					</Card>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}



	render() {
		return (
			<ScrollView style={styles.scroll}>
				<Header thingsToShow="Todo List" />
				{this.renderContent()}
			</ScrollView>
		);
	}
}

const styles = {
	scroll: {
			backgroundColor: '#f1f1f1',
			flexDirection: 'column'
	}
}

export default App;
