import React from 'react';
import {View, TextInput, Text, Image} from 'react-native';

import { Button,FormValidationMessage } from 'react-native-elements';

import FormControl from '../../components/FormControl';
import { colors,metrics } from '../../styles';
import styles from './styles';

class FormScreen extends React.Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	input1 : '',
	  	input2 : '',
	  	errors : {
	  		input1: false,
	  		input2: false
	  	}
	  };
	}

	static navigationOptions = {
		header : null
	}
	
	_handleChange(key,value){
		this.setState({
			[key] : value
		});
	}

	render() {
		return(
		  <View style={styles.container}>
			<FormControl>
				<TextInput
					style={styles.input}
					placeholder="Player 1"
					underlineColorAndroid="transparent"
					value={this.state.input1}
					onChangeText={value => this._handleChange('input1',value)}
				/>
			</FormControl>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('../../assets/images/logo.png')}
				/>
			</View>
			<FormControl>
				<TextInput
					style={styles.input}
					placeholder="Player 2"
					underlineColorAndroid="transparent"
					value={this.state.input2}
					onChangeText={value => this._handleChange('input2',value)}
				/>
			</FormControl>
			<FormControl>
				<Button
				  title="COMEÇAR BATALHA"
				  borderRadius={metrics.baseRadius}
				  backgroundColor={colors.secundary}
				  containerViewStyle={styles.button}
				  fontWeight="bold"
				  onPress={()=>this.props.navigation.navigate("Form")}
				/>
			</FormControl>
		  </View>
		);
	}
}

export default FormScreen;