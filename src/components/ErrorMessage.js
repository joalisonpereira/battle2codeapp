import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { colors,metrics } from '../styles';

const ErrorMessage = ({message,active}) => (
	<View style={styles.container}>
		{active ? <Text style={styles.text}>{message}</Text> : null}
	</View>
);

const styles = StyleSheet.create({
	container:{
		margin:metrics.smallMargin
	},
	text:{
		color:'#e52d2d'
	}
});

export default ErrorMessage;