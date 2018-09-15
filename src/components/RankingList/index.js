import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const RankingList = ({winners}) => (
	<List containerStyle={styles.border}>
		{
			winners.data.map((winner,index) => (
				<ListItem
					key={winner.id}
					title={winner.name}
					subtitle={`Pontuação: ${winner.score}`}
					avatar={choosePhoto(++index)}
					containerStyle={styles.border}
					avatarContainerStyle={styles.avatar}
					hideChevron
				/>
			))
		}
	</List>
);


const styles = StyleSheet.create({
	avatar:{
		marginRight:8
	},
	border:{
		borderTopColor:'#E8E8E8',
		borderBottomColor:'#E8E8E8'
	}
});

function choosePhoto(index){
	const path = '../../assets/images/';
	switch(index){
		case 1:
			return require(path + 'gold.jpg');
		case 2:
			return require(path + 'silver.jpg');
		case 3:
			return require(path + 'bronze.jpg');
		default:
			return require(path + 'medal.jpg');
	}
}

export default RankingList;