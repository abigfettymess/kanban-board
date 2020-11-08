/* eslint-disable @typescript-eslint/interface-name-prefix */
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import tasks, {TasksState} from './reducer/tasks';
interface IStoreEnhancerState {}

export interface RootState extends IStoreEnhancerState {
	tasks: TasksState,
}

// tslint:disable-next-line: no-any
const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
export const history = createBrowserHistory({ basename: window.location.pathname });
const reducers = combineReducers({ tasks });

const store = createStore(reducers, composeEnhancer(applyMiddleware(routerMiddleware(history))));

export default store;