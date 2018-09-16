import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlayerView from '../../components/PlayerView';
import styles from './styles';
import { colors } from '../../styles';

class BattleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PlayerView player={this.props.battle.players.player1} />
				<View style={styles.divider} />
				<PlayerView player={this.props.battle.players.player2} rotate />
			</View>
		);
	}
}

const mapStateToProps = state => ({
	battle : state.battle
});

export default connect(mapStateToProps,null)(BattleScreen);