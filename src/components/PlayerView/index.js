import React from 'react';
import { View,Text,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { answerQuestion } from '../../store/actions';

import Button from '../../components/Button';
import { colors,metrics } from '../../styles';
import styles from './styles'

class PlayerView extends React.Component{

	_selectColor(score){
		if(score>0){
			return styles.positive;
		}else if(score<0){
			return styles.negative;
		}
		return null;
	}

	render(){
		const { battle,player } = this.props;
		const question = battle.questions[player.questionId];
		return(
			<View style={[styles.container, this.props.rotate ? styles.rotate : null]}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>
						{ player.name }
					</Text>
					<Text style={[styles.infoText,this._selectColor(player.score)]}>
						Pontos { player.score }
					</Text>
				</View>
				<View style={styles.questionContainer}>
					<Text style={styles.questionText}>
						{question.question}
					</Text>
				</View>
				<View style={[styles.buttonContainer,player.inverseBtn ? styles.reverse : null]}>
					<Button
					  title="VERDADEIRO"
					  color={colors.success}
					  onPress={() => {this.props.answerQuestion(player,1)}}
					  icon="check"
					/>
					<Button
					  title="FALSO"
					  color={colors.error}
					  onPress={() => {this.props.answerQuestion(player,0)}}
					  icon="close"
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
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerView);
