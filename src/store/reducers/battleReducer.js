import { Types } from '../actions';

const INITIAL_STATE = {
	players:{},
	battle_token:null,
	questions:[],
	loading : false,
	error : false,
};

const battleReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case Types.BATTLE_START:
			return {...state, loading:true};
		case Types.BATTLE_START_SUCCESS:
			return {...action.payload.battle, loading:false};
		case Types.BATTLE_START_ERROR:
			return {...state, error:true, loading:false};
		case Types.ANSWER_QUESTION:
			return answerQuestion(state,action);
		default:
			return state;
	}
}

const answerQuestion = (state,action) => {
	const { playerId,answerId } = action.payload;
	const newState = {...state};
	const player = newState.players['player' + playerId];
	const question = newState.questions.find(question => question.id == (player.questionId));
	if(question.answer==answerId){
		player.score+=10;
	}
	player.questionId++;
	return newState;
}

export default battleReducer;