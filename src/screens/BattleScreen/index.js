import React, { Component } from 'react';
import { View, Text } from 'react-native';

import PlayerView from '../../components/PlayerView';

import styles from './styles';

class BattleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PlayerView name="Heisenberg"/>
				<View style={styles.divider} />
				<PlayerView name="Newton" rotate/>
			</View>
		);
	}
}

export default BattleScreen;