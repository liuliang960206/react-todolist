import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction,getTodolist } from './store/actionCreators'
import TodoListUI from './TodoListUI';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this)
		store.subscribe(this.handleStoreChange);
	}

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemDelete={this.handleItemDelete}
			/>
		)
	}

	componentDidMount() {
		// 在生命周期函数中 componentDidMount是组件完全挂载到网页上才会被调用执行，也就是render之后，所以加载数据和副作用操作都会在componentDidMount函数里面执行
		const action = getTodolist();
		store.dispatch(action); //派发action会调用getTodolist方法 ，getTodolist方法在actionCreaters里面
		// 把异步请求写在actionCreaters里，避免componentDidMount里面请求数据太多不方便于后期的维护，有利于自动化测试
	}

	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleBtnClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleItemDelete(index) {
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}

}

export default TodoList;