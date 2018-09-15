import React, { Component } from 'react';
import { View, Text } from 'react-native';

import PlayerView from '../../components/PlayerView';
import styles from './styles';

class BattleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PlayerView />
				<View style={styles.divider} />
				<PlayerView rotate/>
			</View>
		);
	}
}

export default BattleScreen;