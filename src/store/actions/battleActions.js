import { Types } from './index';

export const battleStart = (player1,player2) => ({
	type : Types.BATTLE_START,
	payload:{
		players:{
			player1:{
				id:1,
				name:player1,
				questionId:0,
				score:0
			},
			player2:{
				id:2,
				name:player2,
				questionId:0,
				score:0
			}
		}
	}
});

export const answerQuestion = (playerId,answer,isLast) => ({
	type: Types.ANSWER_QUESTION,
	payload:{
		playerId,
		answer,
		isLast
	}
});

export const storeWinner = battle => ({
	type : Types.STORE_WINNER,
	payload : {
		winner: selectWinner(battle)
	}
});

function selectWinner(battle){
	const { player1,player2 } = battle.players;
	let winner=null;
	if(player1.score > player2.score){
		winner = player1;
	}else if(player1.score < player2.score){
		winner = player2;
	}else{
		return {
			name : null,
			score : player1.score
		}
	}
	return {
		battle_token: battle.battle_token,
		name : winner.name,
		score : winner.score
	};
}