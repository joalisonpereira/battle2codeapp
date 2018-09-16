import React from 'react';
import { View,StyleSheet,Text,ActivityIndicator } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

import formatTime from '../../util/formatTime';
import { colors } from '../../styles';

const Timer = ({value,color,onFinish}) => (
	<View style={styles.container}>
		<ActivityIndicator 
			color={color}
			size="large"
		/>
		<TimerCountdown
            initialSecondsRemaining={1000*value}
            onTimeElapsed={onFinish}
            formatSecondsRemaining={formatTime}
            allowFontScaling={true}
            style={styles.value}
        />
	</View>
);

const styles = StyleSheet.create({
	container:{
		alignItems:'center',
		justifyContent:'center',
	},
	value:{
		position: 'absolute',
		fontWeight: 'bold',
		color: colors.text,
		paddingBottom:1
	}

});

export default Timer;