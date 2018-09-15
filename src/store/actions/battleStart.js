import { Types } from './index';

export const battleStart = (player1,player2) => ({
	type : Types.BATTLE_START,
	payload:{
		players:{
			player1:{
				name:player1,
				questionId:1,
				score:0
			},
			player2:{
				name:player2,
				questionId:1,
				score:0
			}
		}
	}
});

