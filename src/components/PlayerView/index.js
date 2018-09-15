import React from 'react';
import { View,Text,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Timer from '../Timer';

import { colors,metrics } from '../../styles';
import styles from './styles'

class PlayerView extends React.Component{
	
	render(){
		return(
			<View style={[styles.container, this.props.rotate ? styles.rotate : null]}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>player</Text>
					<Timer color={colors.primary} value="5" onFinish={() => console.log("Terminou")} />
				</View>
				<View style={styles.questionContainer}>
					<Text style={styles.questionText}>
						00111 + 11111 = 30
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<Button
					  title="VERDADEIRO"
					  color="#00A86B"
					  onPress={()=>{}}
					/>
					<Button
					  title="FALSO"
					  color="#EA3C53"
					  onPress={()=>{}}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	battle : state.battle
})

export default connect(mapStateToProps,null)(PlayerView);
