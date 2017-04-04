import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

	state = { email: '', password: '', error: '' };

	onButtonPress() {
		const { email, password } = this.state;

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({ error: 'Authentication Faild.' })
					})
			})
	}

	handleChange(event) {
		this.setState({
			email: 'teste'
		});
		console.log(event.target.value);
	}

	render() {

		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						onChangeText={this.handleChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry 
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={(password) => this.setState({ password })}
					/>
				</CardSection>

				<Text>
					{this.state.error}
				</Text>

				<CardSection >
					<Button onPress={this.onButtonPress.bind(this)}>
						Button
					</Button>
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
