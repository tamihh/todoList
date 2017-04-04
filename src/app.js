import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyD8bCwW3YB39VHtPT00KkOGD4QoqdqWbfw",
			authDomain: "todolist-31f0f.firebaseapp.com",
			databaseURL: "https://todolist-31f0f.firebaseio.com",
			storageBucket: "todolist-31f0f.appspot.com",
			messagingSenderId: "849399993742"
		});
	}

	render() {
		return (
			<View>
				<Header thingsToShow="Todo List" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
