import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect,bindActionCreators } from 'react-redux';

import { requestWinners } from '../../store/actions';

import Button from '../../components/Button';
import FormControl from '../../components/FormControl';
import RankingList from '../../components/RankingList';
import styles from './styles';

class RankingScreen extends Component {

	componentDidMount(){
		this.props.requestWinners();
	}

	_renderLoading(){
		return (
			<Image
				source={require('../../assets/images/logo.png')}
				style={styles.logo}
			/>
		);
	}

	_renderContent(){
		return(
			<ScrollView>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>Ranking</Text>
				</View>
				<RankingList
					winners={this.props.winners}
				/>
			</ScrollView>
		);
	}

	render() {
		const { loading } = this.props.winners;
		return (
			<View style={styles.container}>
				<View style={[styles.wrapper, loading ? styles.centerLogo : null ]}>
					{ loading ? this._renderLoading() : this._renderContent()}
					<FormControl style={{marginTop:25}}>
						<Button
							title="JOGAR AGORA"
							onPress={ () => this.props.navigation.replace("Form")}
						/>
					</FormControl>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	winners : state.winners
});

const mapDispatchToProps = {
	requestWinners
}

export default connect(mapStateToProps,mapDispatchToProps)(RankingScreen);