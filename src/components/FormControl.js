import React from 'react';
import { View,StyleSheet } from 'react-native';
import { colors,metrics } from '../styles';

const FormControl = ({children}) => (
	<View style={styles.container}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	container:{
		marginVertical: metrics.doubleBaseMargin
	}
});

export default FormControl;