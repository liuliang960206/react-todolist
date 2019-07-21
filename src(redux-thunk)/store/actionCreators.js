import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
});

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})

// 使用redux-thunk之后，actionCreaters可以返回一个函数，函数里执行异步的操作
// 如果不使用thunk，action必须返回一个普通对象
export const getTodolist = () => {
	return (dispatch) => {
		axios.get('/list.json')
		.then((res) => {
			const data = res.data;
			console.log(res); // 服务器返回的内容
			console.log(data); // ["hello", "dell", "lee", "Jess"]
			const action = initListAction(data);
			dispatch(action);
		})
	}
}



