import React from 'react';
import { View,StyleSheet,Text,ActivityIndicator } from 'react-native';
import { colors } from '../../styles';

const Timer = ({value,color}) => (
	<View style={styles.container}>
		<ActivityIndicator 
			color={color}
			size="large"
		/>
		<Text style={styles.value}>{value}</Text>
	</View>
);

const styles = StyleSheet.create({
	container:{
		alignItems:'center',
		justifyContent:'center'
	},
	value:{
		position: 'absolute',
		fontWeight: 'bold',
		color: colors.text
	}

});

export default Timer;