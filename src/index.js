import React from 'react';
import { Provider,connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import store from './store';
import Router from './routes';

const RouterNavigator = reduxifyNavigator(Router, "root");
const mapStateToProps = (state) => ({ state: state.nav });
const RouterNavigatorState = connect(mapStateToProps)(RouterNavigator);

const App = () => (
  <Provider store={store}>
	<RouterNavigatorState/>
  </Provider>
);

export default App;

