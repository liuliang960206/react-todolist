import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

// 创建一个中间件
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 通过redux中的createStore方法创建一个store，储存state
const store = createStore(
	reducer,
	enhancer
)
// 让saga文件执行起来
sagaMiddleware.run(todoSagas)
export default store;