import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReduxers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer.js'

const loggerMiddleware = createLogger({predicate: (getState, actino) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const App = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
)


AppRegistry.registerComponent('AwesomeProject', () => App);
