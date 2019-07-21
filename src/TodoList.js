import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValue, addItem, deleteItem } from './store/actionCreates'

// TodoList组件通过connect方法获取store中的数据
class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.changeIputValue}
                    />
                    <button
                        onClick={this.props.handleClick}
                    >提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li
                                key={index}
                                onClick={() => { this.props.handleDelete(index) }}
                            >{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

//连接方式
const mapStateToProps = (state) => {
    // state是store里面的数据
    return {
        inputValue: state.inputValue,
        // 把store里面的inputValue数据 映射到 props里面的inputValue的位置上
        list: state.list
    }
}

//相当于把store.dispatch方法挂载到props上，当state数据做了修改
const mapDispatchToProps = (dispatch) => {
    return {

        changeIputValue(ev) {
            const action = changeInputValue(ev.target.value)
            console.log(ev.target.value)
            dispatch(action)
        },

        handleClick() {
            const action = addItem()
            dispatch(action);
        },

        handleDelete(index) {
            const action = deleteItem(index)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// 让TodoList组件和store进行连接,