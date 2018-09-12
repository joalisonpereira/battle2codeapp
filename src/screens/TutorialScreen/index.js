import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { Button } from 'react-native-elements'

import styles from './styles';
import { colors,metrics } from '../../styles';

class TutorialScreen extends Component {

	//Ler documentação dos botoes, loading is cool
	render() {
		return (
		  <View style={styles.container}>
		  	<Button
			  title='CONTINUAR'
			  borderRadius={metrics.baseRadius}
			  backgroundColor={colors.primary}
			  fontWeight="bold"
			  onPress={()=>this.props.navigation.replace("Form")}
			/>
		  </View>
		);
	}
}

export default TutorialScreen;