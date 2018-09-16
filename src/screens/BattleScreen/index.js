import React, { Component } from 'react';
import { View, Text } from 'react-native';

import PlayerView from '../../components/PlayerView';
import styles from './styles';
import { colors } from '../../styles';

class BattleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PlayerView id={1} />
				<View style={styles.divider} />
				<PlayerView id={2} rotate />
			</View>
		);
	}
}


export default BattleScreen;