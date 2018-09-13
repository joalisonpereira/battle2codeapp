import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import PlayerView from '../../components/PlayerView';

import styles from './styles';

class BattleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PlayerView playerName="Player 1"/>
				<PlayerView playerName="Player 2" rotate/>
			</View>
		);
	}
}

export default BattleScreen;