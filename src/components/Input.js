import React from 'react';
import { StyleSheet,TextInput } from 'react-native';
import { colors,metrics,fonts } from '../styles';

const Input = ({style,placeholder,value,onChangeText}) => (
    <TextInput
		style={styles.input}
		placeholder={placeholder}
		value={value}
		onChangeText={onChangeText}
		placeholderTextColor="#999"
		underlineColorAndroid="transparent"
	/>
)

const styles = StyleSheet.create({
	input:{
		padding:metrics.baseMargin,
		borderWidth:1,
		borderColor:colors.secundary,
		borderRadius:metrics.baseRadius,
		backgroundColor:colors.secundary,
		fontSize:fonts.input,
		fontWeight:'bold',
		color:colors.primary
	}
});

export default Input;