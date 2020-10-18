import 'react-native-gesture-handler'; // Required for react navigation v5
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import AppNavigator from './navigation/AppNavigator';
import jokesReducer from './store/reducers/jokes';

const rootReducer = combineReducers({
  jokes: jokesReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

const App = () => {
  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  );
}

export default App;