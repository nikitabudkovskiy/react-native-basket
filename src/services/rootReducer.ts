import {combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import MainReducer from "../modules/Main";

const rootReducer = combineReducers({
    main: MainReducer,
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

export default store;
