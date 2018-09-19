import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TimerCountdown from 'react-native-timer-countdown';

import { formatTime } from '../../utils';
import PlayerView from '../../components/PlayerView';
import styles from './styles';
import { colors } from '../../styles';

class BattleScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	waiting : true
	  };
	}

	_renderWaiting(){
		return (
			<View style={styles.container}>
		        <View style={styles.timerWrapper}>
		        	<TimerCountdown
			            initialSecondsRemaining={1000*5}
			            allowFontScaling={true}
			            style={styles.timer}
			            formatSecondsRemaining={text => formatTime(text)}
			            onTimeElapsed={() => this.setState({waiting:false})}
			        />
		        </View>
			</View>
		);
	}

	_renderBattle(){
		return (
			<View style={styles.container}>
				<PlayerView 
					id={1} 
					player={this.props.battle.players.player1} 
				/>
				<View style={styles.divider} />
				<PlayerView 
					id={2} 
					player={this.props.battle.players.player2} 
					rotate 
				/>
			</View>
		);
	}

	render() {
		return(
			<View style={{flex:1}}>
				{ this.state.waiting ? this._renderWaiting() : this._renderBattle() }
			</View>
		);
	}
}

const mapStateToProps = state => ({
	battle : state.battle
});

export default connect(mapStateToProps,null)(BattleScreen);