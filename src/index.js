import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
    // Provider链接store，Provider里面的组件都能够获取store中的内容
    <Provider store={store}>
        <TodoList />
    </Provider>
    , document.getElementById('root')
);