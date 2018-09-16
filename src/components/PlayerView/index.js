import React from 'react';
import { View,Text,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { answerQuestion } from '../../store/actions';

import Button from '../../components/Button';

import { colors,metrics } from '../../styles';
import styles from './styles'

class QuestionView extends React.Component{
	
	_selectPlayer(){
		return this.props.battle.players['player' + this.props.id];
	}

	_selectQuestion(id){
		return this.props.battle.questions[id].question;
	}

	render(){
		const player = this._selectPlayer();
		const question = this._selectQuestion(player.questionId - 1);
		return(
			<View style={[styles.container, this.props.rotate ? styles.rotate : null]}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>{player.name}</Text>
				</View>
				<View style={styles.questionContainer}>
					<Text style={styles.questionText}>
						{question}
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<Button
					  title="VERDADEIRO"
					  color="#00A86B"
					  onPress={()=>{this.props.answerQuestion(player.id,1)}}
					/>
					<Button
					  title="FALSO"
					  color="#EA3C53"
					  onPress={()=>{this.props.answerQuestion(player.id,0)}}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	battle : state.battle
});

const mapDispatchToProps = {
	answerQuestion
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionView);
