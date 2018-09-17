import React from 'react';
import { View,Text,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { answerQuestion,storeWinner } from '../../store/actions';

import Button from '../../components/Button';
import { colors,metrics } from '../../styles';
import styles from './styles'

class PlayerView extends React.Component{

	_getQuestion(id){
		const {questions} = this.props.battle;
		return question = questions[id] != null ? questions[id] : 'asodijsad';
	}
	
	componentDidUpdate(prevProps){
		const { battle,player } = this.props;
		if((player.questionId)==battle.questions.length){
			this.props.storeWinner(battle);
		}
	}

	render(){
		const { battle,player } = this.props;
		const question = this._getQuestion(player.questionId);
		return(
			<View style={[styles.container, this.props.rotate ? styles.rotate : null]}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>{ player.name }</Text>
					<Text style={styles.infoText}>Pontos { player.score }</Text>
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
					  onPress={() => this.props.answerQuestion(player.id,1)}
					/>
					<Button
					  title="FALSO"
					  color="#EA3C53"
					  onPress={() => this.props.answerQuestion(player.id,0)}
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
	answerQuestion,
	storeWinner
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerView);
