import React from 'react';
import { View,Text,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { answerQuestion } from '../../store/actions';

import Button from '../../components/Button';
import { colors,metrics } from '../../styles';
import styles from './styles'

const PlayerView = ({battle:{questions}, player, answerQuestion, rotate}) => {
	const question = questions[player.questionId - 1];
	return(
		<View style={[styles.container, rotate ? styles.rotate : null]}>
			<View style={styles.infoContainer}>
				<Text style={styles.infoText}>{player.name}</Text>
			</View>
			<View style={styles.questionContainer}>
				<Text style={styles.questionText}>
					{question.question}
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button
				  title="VERDADEIRO"
				  color="#00A86B"
				  onPress={()=>{answerQuestion(player.id,1)}}
				/>
				<Button
				  title="FALSO"
				  color="#EA3C53"
				  onPress={()=>{answerQuestion(player.id,0)}}
				/>
			</View>
		</View>
	);
}

const mapStateToProps = state => ({
	battle : state.battle
});

const mapDispatchToProps = {
	answerQuestion
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerView);
