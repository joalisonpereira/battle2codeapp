import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const navigationMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav
);

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware,navigationMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;