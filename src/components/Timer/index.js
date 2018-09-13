import React from 'react';
import { View,StyleSheet,Text,ActivityIndicator } from 'react-native';

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
		position:'absolute',
		top:-6,
		right:0,
	},
	indicator:{
		position:'absolute',
		top:0,
		right:0,
	},
	value:{
		position:'absolute',
		top:7.5,
		right:14,
		fontWeight:'bold'
	}

});

export default Timer;