import React from 'react';
import {View, Text, Image} from 'react-native';

import { Button } from 'react-native-elements';

import Input from '../../components/Input';
import FormControl from '../../components/FormControl';
import ErrorMessage from '../../components/ErrorMessage';

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

	_handleChange(key,value){
		this.setState({
			[key] : value
		});
	}

	_submit(){
		const { input1,input2 } = this.state;
		this.setState({
			errors : {
				input1 : input1.length < 5,
				input2 : input2.length < 5
			}
		});
	}

	render() {
		return(
		  <View style={styles.container}>
		  	<View style={styles.titleContainer}>
		  		<Text style={styles.title}>Battle2Code</Text>
		  	</View>
			<View style={styles.form}>
				<FormControl>
					<Input
						style={styles.input}
						placeholder="Player 1"
						value={this.state.input1}
						onChangeText={value => this._handleChange('input1',value)}
					/>
					<ErrorMessage
						message="Necessário no mínimo 5 caracteres"
						active={this.state.errors.input1}
					/>
				</FormControl>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../../assets/images/logo.png')}
					/>
				</View>
				<FormControl>
					<Input
						style={styles.input}
						placeholder="Player 2"
						value={this.state.input2}
						onChangeText={value => this._handleChange('input2',value)}
					/>
					<ErrorMessage
						message="Necessário no mínimo 5 caracteres"
						active={this.state.errors.input2}
					/>
				</FormControl>
				<FormControl>
					<Button
					  title="COMEÇAR BATALHA"
					  borderRadius={metrics.baseRadius}
					  backgroundColor={colors.primary}
					  containerViewStyle={styles.button}
					  fontWeight="bold"
					  fontSize={18}
					  onPress={()=>this._submit()}
					/>
				</FormControl>
			  </View>
			</View>
		);
	}
}

export default FormScreen;