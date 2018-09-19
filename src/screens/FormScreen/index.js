import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import { connect } from 'react-redux';
import { battleStart } from '../../store/actions';
import { SocialIcon } from 'react-native-elements'

import Input from '../../components/Input';
import FormControl from '../../components/FormControl';
import ErrorMessage from '../../components/ErrorMessage';
import Button from '../../components/Button';
import { validateInput } from '../../utils';

import styles from './styles';

class FormScreen extends React.Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	input1 : { value:'asdsadsadsa', error:false },
	  	input2 : { value:'asdsadsadasd', error:false }
	  };
	}

	_handleChange(key,value){
		this.setState({
			[key] : {
				value: value.replace(/\s/g, ''),
				error: false
			}
		});
	}

	_submit(){
		const { input1,input2 } = this.state;
		if(validateInput(input1)){
			this.setState({ input1:{...input1,error:true }});
			return;
		}
		if(validateInput(input2)){
			this.setState({ input2:{...input2,error:true }});
			return;
		}
		this.props.battleStart(input1.value,input2.value);
	}
	
	render() {
		return(
		  <View style={styles.container}>
		  	<View style={styles.titleContainer}>
		  		<View>
		  			<Text style={styles.title}>Battle</Text>
		  		</View>
		  		<View>
		  			<Text style={styles.titleMiddle}>2</Text>
		  		</View>
		  		<View>
		  			<Text style={styles.title}>Code</Text>
		  		</View>
		  	</View>
			<View style={styles.form}>
				<FormControl>
					<Input
						style={styles.input}
						placeholder="Player 1"
						value={this.state.input1.value}
						onChangeText={value => this._handleChange('input1',value)}
						errorStyle={this.state.input1.error}
					/>
					<ErrorMessage
						message="Necessário no mínimo 5 caracteres"
						active={this.state.input1.error}
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
						value={this.state.input2.value}
						onChangeText={value => this._handleChange('input2',value)}
						errorStyle={this.state.input2.error}
					/>
					<ErrorMessage
						message="Necessário no mínimo 5 caracteres"
						active={this.state.input2.error}
					/>
				</FormControl>
				<ErrorMessage
					message={this.props.battle.message}
					active={this.props.battle.error}
				/>
				<FormControl>
					<Button
					  title="COMEÇAR BATALHA"
					  onPress={()=>this._submit()}
					  containerViewStyle={styles.button}
					  loading={this.props.battle.loading}
					/>
				</FormControl>
			  </View>
			  <SocialIcon
			  	  light
				  type='github'
				  style={styles.gitIcon}
				  iconSize={25}
				  onPress={
				  	() => Linking.openURL('https://github.com/joalisonpereira/battle2codeapp')
				  }
			  />
			</View>
		);
	}
}

const mapStateToProps = state => ({
	battle : state.battle
});

const mapDispatchToProps = {
	battleStart
}

export default connect(mapStateToProps,mapDispatchToProps)(FormScreen);