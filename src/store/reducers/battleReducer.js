import { Types } from '../actions';

const INITIAL_STATE = {
	players:{},
	battle_token:null,
	questions:[],
	loading : false,
	error : false,
	winner : null
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
	const { questions } = newState;
	const question = questions.find(question => question.id == (player.questionId));
	if(player.questionId++==questions.length){
		return {...newState, winner:player.name};
	}else if(question.answer==answerId){
		player.score+=10;
	}
	return newState;
}

export default battleReducer;