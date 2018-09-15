import { Types } from './index';

export const storeWinner = winner => ({
	type : Types.STORE_WINNER,
	payload : {
		winner
	}
});
