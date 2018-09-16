export * from './requestWinners';
export * from './storeWinner';
export * from './battleActions';

export const Types = { 
	REQUEST_WINNERS : 'Winners/REQUEST_WINNERS',
	SUCCESS_REQUEST_WINNERS : 'Winners/SUCCESS_REQUEST_WINNERS',
	ERROR_REQUEST_WINNERS : 'Winners/ERROR_REQUEST_WINNERS',
	
	BATTLE_START : 'Battle/BATTLE_START',
	BATTLE_START_SUCCESS : 'Battle/BATTLE_START_SUCCESS', 
	BATTLE_START_ERROR : 'Battle/BATTLE_START_ERROR',
	ANSWER_QUESTION : 'Battle/ANSWER_QUESTION',	
	STORE_WINNER : 'Battle/STORE_WINNER'
};
