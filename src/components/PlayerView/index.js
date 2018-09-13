import React from 'react';
import { View,Text } from 'react-native';
import { Button } from 'react-native-elements';

import { colors,metrics } from '../../styles';
import styles from './styles'

const PlayerView = ({playerName,questionId,rotate=false}) => (
	<View style={[styles.container,rotate ? styles.rotate : null]}>
		<Text>{playerName}</Text>
		<View style={styles.questionContainer}>
			<Text style={styles.questionText}>
				00111 + 11111 = 30
			</Text>
		</View>
		<View style={styles.buttonContainer}>
			<Button
			  title="VERDADEIRO"
			  borderRadius={metrics.baseRadius}
			  backgroundColor="#00A86B"
			  fontWeight="bold"
			  fontSize={18}
			  onPress={()=>{}}
			/>
			<Button
			  title="FALSO"
			  borderRadius={metrics.baseRadius}
			  backgroundColor="#EA3C53"
			  fontWeight="bold"
			  fontSize={18}
			  onPress={()=>{}}
			/>
		</View>
	</View>
);

export default PlayerView;