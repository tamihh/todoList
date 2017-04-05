import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSucess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSucess.bind(this))
					.catch(this.onLoginFail.bind(this))
			});
	}

	onLoginFail() {
		this.setState({ 
			error: 'Authentication Faild.',
			loading: false
		});
	}

	onLoginSucess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Button
			</Button>
		);
	}

	handleChangeEmail(event) {
		this.setState({
			email: event.nativeEvent.text
		});
	}

	handleChangePassword(event) {
		this.setState({
			password: event.nativeEvent.text
		});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={this.handleChangeEmail.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry 
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={this.handleChangePassword.bind(this)}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection >
					{this.renderButton()}
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
