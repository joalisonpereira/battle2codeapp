import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import FormControl from '../../components/FormControl';
import RankingList from '../../components/RankingList';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './styles';

import { requestWinners } from '../../store/actions';

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

	_renderError(){
		return(
			<ErrorMessage
				message={this.props.winners.message}
				active={this.props.winners.error}
			/>
		);
	}

	_renderContent(){
		return(
			<ScrollView>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Ranking
					</Text>
				</View>
				<RankingList winners={this.props.winners}/>
			</ScrollView>
		);
	}
	
	_renderButton(){
		return(
			<FormControl style={{marginTop:25}}>
				<Button
					title="JOGAR AGORA"
					onPress={() => this.props.navigation.replace("Form")}
				/>
			</FormControl>
		);
	}

	render() {
		const { loading,error } = this.props.winners;
		return (
			<View style={styles.container}>
				<View style={[styles.wrapper, loading ? styles.centerLogo : null ]}>
					{ loading ? this._renderLoading() : this._renderContent()}
					{ error ? this._renderError() : null }
					{ !loading ? this._renderButton() : null}
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