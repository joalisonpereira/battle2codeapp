import { Types } from './index';

export const answerQuestion = (playerId,answerId) => ({
	type: Types.ANSWER_QUESTION,
	payload:{
		playerId,
		answerId
	}
});