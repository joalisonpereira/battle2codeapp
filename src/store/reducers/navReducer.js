import { NavigationActions } from 'react-navigation';

import { Types } from '../actions';
import Router from '../../routes';

const navReducer = (state,action) => {
	let newState;
	switch(action.type){
        case Types.BATTLE_START_SUCCESS:
			newState = Router.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Battle' })),
				state
			break;
		case Types.STORE_WINNER_SUCCESS:
			newState = Router.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Winner' })),
				state
            break;
		default:
            newState = Router.router.getStateForAction(action, state);
            break;
	}
	return newState || state;
}

export default navReducer;