import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    // 有可能请求数据不成功
    try {
        const res = yield axios.get('/list.json'); //把ajax获取的数据存在res里面
        const action = initListAction(res.data);
        yield put(action); // 等action处理完成之后再继续执行代码
    } catch (ev) {
        console.log('list.json网络请求失败')
    }

}

// saga文件必须是一个Generator函数
function* todoSagas() {
    // 捕捉每一个every的类型
    // 通过takeEvery声明要接受的类型是GET_INIT_LIST，接收到后就执行getInitList方法
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default todoSagas;