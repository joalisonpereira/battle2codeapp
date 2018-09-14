import React, { Component } from 'react';
import { View,Text } from 'react-native';

import Button from '../../components/Button'

import styles from './styles';

class TutorialScreen extends Component {

	//Ler documentação dos botoes, loading is cool
	render() {
		return (
		  <View style={styles.container}>
		  	<View style={styles.wrapper}>
		  		<Button
				  title='CONTINUAR AGORA'
				  onPress={()=>this.props.navigation.replace("Form")}
				/>
		  	</View>
		  </View>
		);
	}
}

export default TutorialScreen;