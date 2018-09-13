import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import PlayerView from '../../components/PlayerView';

import styles from './styles';

class BattleScreen extends Component {
	render() {
		return (
		  <View style={styles.container}>
		  		<PlayerView
					playerName="Player 2"
					questionId={1}
					rotate
		  		/>
		  		<PlayerView
		  			playerName="Player 1"
		  			questionId={1}
		  		/>
		  </View>
		);
	}
}

export default BattleScreen;