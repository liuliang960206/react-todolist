目录：

- [第一部分：react](#第一部分react)
    - [一、react开发环境准备](#一react开发环境准备)  
        - [A. 通过脚手架工具来编码](#a-通过脚手架工具来编码)
        - [B. 安装](#b-安装)  
    - [二、项目目录分析](#二项目目录分析) 
    - [三、react中的组件](#三react中的组件)        
        - [创建组件的两种方式](#创建组件的两种方式)   
            - [1）用class创建组件](#1用class创建组件) 
            - [2) 函数式创建组件](#2-函数式创建组件)   
    - [四、JSX语法](#四jsx语法)    
    - [五、实现一个todolist页面](#五实现一个todolist页面)    
    - [六、react中的响应式设计和事件绑定](#六react中的响应式设计和事件绑定)    
    - [七、组件之间的传值](#七组件之间的传值)        - [父组件向子组件传递数据](#父组件向子组件传递数据)    
    - [八、围绕react衍生的思考](#八围绕react衍生的思考)        - [数据的单向流动](#数据的单向流动)    
    - [九、PropTypes与DeaultProps](#九proptypes与deaultprops)        
        - [关于propTypes在官网有更多的写法](#关于proptypes在官网有更多的写法)    
    - [十、props,state,render的关系](#十propsstaterender的关系)    
    - [十一、虚拟DOM](#十一虚拟dom)    
    - [十二、虚拟DOM中的diff算法](#十二虚拟dom中的diff算法)    
    - [十三、ref](#十三ref)    
    - [十四、react中的生命周期函数](#十四react中的生命周期函数)        
        - [14.1 `mouting阶段` （只执行一次）](#141-mouting阶段-只执行一次)       
        - [14.2 `updating阶段`](#142-updating阶段) 
        - [14.3 `unmouting阶段`](#143-unmouting阶段)        
        - [页面什么时候会被渲染](#页面什么时候会被渲染)    
    - [十五、在react中发送ajax请求](#十五在react中发送ajax请求)        
        - [15.1 使用Charles 进行接口数据模拟](#151-使用charles-进行接口数据模拟)

- [第二部分：redux](#第二部分redux)    
    - [一、redux中的store](#一redux中的store)    
    - [二、actionTypes的拆分](#二actiontypes的拆分)   
    - [三、使用actionCreate创建统一的action](#三使用actioncreate创建统一的action)    
    - [五、redux总结](#五redux总结)        
        - [5.1 redux设计原则：](#51-redux设计原则)
        - [5.2 redux核心API](#52-redux核心api)    
    - [六、UI组件和容器组件](#六ui组件和容器组件)   
    - [七、无状态组件](#七无状态组件)    
    - [八、redux中发送异步请求获取数据](#八redux中发送异步请求获取数据)    
    - [九、redux-thunk中间件实现ajax数据请求](#九redux-thunk中间件实现ajax数据请求)    
    - [十、redux-thunk中间件](#十redux-thunk中间件)  
    - [十一、redux-saga中间件](#十一redux-saga中间件)

- [第三部分：redux-redux](#第二部分redux-redux)    
    - [redux-redux写todolist](#redux-redux写todolist)


# 第一部分：react

## 一、react开发环境准备

### A. 通过脚手架工具来编码
- `Creact-react-app` 官方提供的脚手架工具
- `node -v` 查看node版本号
- `npm -v` 查看nom版本号

### B. 安装
- `npm i creat-react-app -g` 在全局安装依赖
- `creat-react-app todolist` 创建todolist文件
- `cd todolist` 基于creat-react-app构建的todolist项目目录
- `npm start` 启动开发服务器。
- `npm run build` 将应用程序打包成静态文件进行生产。
- `npm test` 启动测试运行程序。
- `npm start` NPM启动

在浏览器输入http://localhost:3000/，出现react欢迎页即项目启动成功

## 二、项目目录分析
- node-modules node包文件
- public
    - favicon.icon url 图标
    - index.html 项目首页
    - manifest.json 
- src
    - index.js 整个程序运行的入口文件 引入App文件
    - App.js 页面内容
- gitgnore 上传git时，如果有文件不想传到git上，可以放在这个文件下
- package-lock.json 项目文件依赖
- package.json 项目介绍 node包文件
- README.md 项目文件说明

> 在index.js文件中有一行代码
> ```javascript
> // PWA 手机App
> // https协议的服务器上 （用户第一次点击页面需要联网，第二次点击时如果断网仍可访问该页面）
> import * as serviceWorker from './serviceWorker';
> ```
>

## 三、react中的组件

```javascript
//App.js文件
//App组件即为react中一个简单的组件 render里面返回的内容即组件显示的内容
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        hello world
    </div>
    );
  }
}
// 导出组件
export default App;
```

```javascript
//index.js组件文件
import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App'; // 引入App组件
// 第三方模块 把App组件挂载到root节点中 root节点就会展示组件的内容
ReactDOM.render(<App />, document.getElementById('root'));
```

### 创建组件的两种方式
#### 1）用class创建组件    
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
if(module.hot){
    module.hot.accept();
}
// 1) class创建组件
class App extends React.Component{
    render(){
        return (
            <div>
                <div>Hai Jess</div>
                <div>Hai Alex</div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
```


#### 2) 函数式创建组件
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
if(module.hot){
    module.hot.accept();
}

// 2) 函数式创建组件 
function App() {
    return (
        <div>
            <div>Hai Jess</div>
            <div>Hai Alex</div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
```

## 四、JSX语法
JSX语法：可扩展的js语法，不是字符串也不是html

- 1) 结构顶层只能有一个元素

```javascript
// 例如：
<div>hello world!</div><div>123</div>
//会报错
<div>
    <div>hello world!</div>
    <div>123</div>
</div>
//不会报错
```
- 2) class必须写className
- 3) 标签必须是闭合状态 `<input type='text'/>`
- 4) { } 
    - 可以执行JS语句
    - 花括号内有数组默认展开
    - 如果元素属性是一个变量需要花括号 src={obj.xx} 
    - 花括号中不能写for循环

- 5) 受控组件与非受控组件
    - 如果在表单元素上设置一个默认值（value / checked），该元素为受控组件（即无法输入其他内容）
    - 解决方案：加default
        - `<input type='text' defaultValue="hahaha"/>`
        - `<input type='checkbox' defaultChecked/>`
- 6) dangerouslySetInnerHTML
    在JSX中希望显示一些内容，不希望被自动转义（即在input输入框中输入 <p>哈哈</p> ,在页面中显示文字，不显示标签，即通过`dangerouslySetInnerHTM`L属性来设置
    - `dangerouslySetInnerHTML={{__html:item}}`
    ```javascript
     <ul>
        {
            // 渲染页面
            this.state.arr.map((item, i) => {
                return (
                    <li key={i} 
                        onClick={this.delItem.bind(this,i)}
                        dangerouslySetInnerHTML={{__html:item}}
                    ></li>
                )
            })
        }
    </ul>
    ```
- 7) label标签
    ```javascript
    <label htmlFor="text">输入内容</label>
    <input
        id="text"
        className="input"
        type="text"
        onChange={this.inputChange.bind(this)} //为了让input框value值改变 必须要写onChange方法
        value={this.state.val}
    />
    ```


## 五、实现一个todolist页面
```javascript
//Todolist.js组件文件
import React, { Component,Fragment } from 'react';
// 引入Fragment占位符

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // Fragment占位符会让最外层的结构不在页面中显示，即页面中会直接显示Fragment标签里面的结构内容
            <Fragment>
                <div>
                    <input />
                    <button>提交</button>
                </div>
                <ul>
                    <li>123</li>
                    <li>456</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </Fragment>
        );
    }
}

export default Todolist;
```


## 六、react中的响应式设计和事件绑定
```javascript
class Todolist extends Component {
    constructor(props) { //接收props参数
        super(props); //调用父类的构造函数
        this.state = { //组件的状态
            val: '',
            arr: ['Tom','Jess']
        }
    }
    //改变input框的value值
    inputChange (ev){
        console.log(ev.target.value);//input框中输入的value值
        this.setState({ //setState方法会改变state状态中的数据，从而使页面发生改变
            val: ev.target.value //让input中输入的值赋值给state状态的val
        })
    }
    //点击提交按钮
    btnClick(){
        // copy数组，把val值添加到新数组中
        let {arr,val} = this.state;
        arr.push(val)
        this.setState({arr,val:''})
    }
    //点击删除任务
    delItem(id){
        // immutable 
        // state 不允许做任何改变 
        console.log(id)
        const arr = [...this.state.arr];
        arr.splice(id,1);
        this.setState({arr})
    }
    render() {
        return (
            // Fragment占位符会让最外层的结构不在页面中显示，即页面中会直接显示Fragment标签里面的结构内容
            <Fragment>
                <div>
                    <input
                        type="text"
                        onChange={this.inputChange.bind(this)} //为了让input框value值改变 必须要写onChange方法
                        value={this.state.val}
                    />
                    <button
                        onClick={this.btnClick.bind(this)}
                    >提交</button>
                </div>
                <ul>
                    {
                        // 渲染页面
                        this.state.arr.map((item, i) => {
                            return (<li key={i} onClick={this.delItem.bind(this,i)}>{item}</li>)
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}
```


## 七、组件之间的传值
在src文件夹下创建一个文件夹 `components`,即组件

### 父组件向子组件传递数据
- 父组件上给子组件中绑定自定义属性，把数据放到自定义属性上
- 子组件中使用 `this.props.zdy` 去接收
```javascript
//父组件
class App extends Component {
    constructor() {
        super();
        this.state = {
            arr: [11, 22, 33, 44, 55]
        }
    }
  
    render() {
        let {arr} = this.state;
        let arr1 = arr.concat();
        let list = arr1.map((item,i)=>{
            return (
                <List 
                    {...{
                        text:item,
                        key:i,
                        a:123,
                        b:456,
                        c:789
                    }}
                />
            )
        })
        return (
            {/* <List data={this.state.arr}/> */}
            <ul>{list}</ul>
        )
    }
}

//子组件
class List extends Component {
    constructor(){
        super();
        this.state = {}
    }
    render(){
        let {text,key,a,b,c} = this.props;
        console.log(key);
        return(
            <li>{text}</li>
        )
    }
}
```

## 八、围绕react衍生的思考
react: 
- 声明式开发 => 数据驱动 减少大量操作DOM的代码量
- 可以与其他框架共存
- 组件式开发 => 
    - 普通标签与组件的区别：组件标签首字母大写
- 单向数据流
- 视图层框架：大型界面开发时，React.js 只负责视图层内容，我们还需要数据层框架(redux/Flux)等的支持。因为很明显，当复杂的组件关系之间，需要传递数据，React.js 会非常麻烦。
- 函数式编程 => 易维护 容易进行前端自动化测试

### 数据的单向流动
**react数据单向流**：子父组件之间的通讯（数据传递）规则，原则：数据只能从父组件传递到子组件，而不能由子组件直接修改父组件的数据，数据属于谁谁才有资格去修改；

- 情况一：
父级的数据传到子级，数据本身还是父级的，如果用户操作子级要改变传递的数据，那么不能子级改，要让父级修改
父级要定义一个修改数据的方法，在传递数据的时候也一起传给子级
当触发子级行为的时候，子级去调用修改父级数据的方法，然后父级收到后
子级的修改，父级修改数据，当父级的数据发生变化时，又把最新的数据传给子级

- 情况二：
父级把数据给了子级，子级只想在触发子级的时候，子级的数据改变，父级数据不改变
也就是，父级通过自定义的方式传数据给子级，子级可以在constructor中接收到父级传递的数据（就一次），把父级传递的这个数据，变为
this.state，自己就拥有了父级的数据，并且修改自己的数据不会影响到父级



## 九、PropTypes与DeaultProps
子组件接收父组件的参数，可能是函数，数字类型，字符串类型，这时需要基于PropTypes对属性接收做一个强校验
- 引入PropTypes：`import PropTypes from 'prop-types';`
- `defaultProps` : 在子组件给这个必传值设置一个默认值
```javascript

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //点击删除 子组件调用父组件
    delItem = () => {
        let { delItem, i } = this.props;
        delItem(i);
    }
    render() {
        let { content, test } = this.props;
        return (
            <Fragment>
                <li
                    onClick={this.delItem}
                >
                {test}-{content}
                </li>
            </Fragment>
        );
    }
}

//属性强校验 在子组件限制父组件传值的类型，如果父组件没有按照子组件设置的类型传值会报错 不会影响代码执行，但是有利于开发
TodoItem.propTypes = {
    test: PropTypes.string.isRequired, //表示test需要从父组件传递一个字符串类型的值，而且必须传值，如果父组件没有传值会报错
    content: PropTypes.string,
    delItem: PropTypes.func,
    i: PropTypes.number
};

// 如果父组件确实无法传这个值（test），则需要在子组件给这个必传值设置一个默认值
TodoItem.defaultProps = {
    test: 'hello eorld'
}
export default TodoItem;
```

### 关于propTypes在官网有更多的写法
```javascript
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为 JS 原生类型，默认情况下
  // 这些属性都是可选的。
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的数据
  requiredAny: PropTypes.any.isRequired,

  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `onOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
  // 它应该在验证失败时返回一个 Error 对象。
  // 验证器将验证数组或对象中的每个值。验证器的前两个参数
  // 第一个是数组或对象本身
  // 第二个是他们当前的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```

## 十、props,state,render的关系

当组件的state或者props发生改变的时候，render函数就会重新执行
当父组件的render函数被运行时，它的子组件render都将被重新运行一次

## 十一、虚拟DOM
- 1）state 数据
- 2）JSX模板 => render函数下的结构
- 3）数据 + 模板 结合，生成真实的DOM，来显示
- 4）state发生改变
- 5）数据 + 模板 结合，生成真实的DOM，替换原始DOM

缺陷：
第一次生成了一个完整的DOM片段，
第二次生成了一个完整的DOM片段，
第二次的片段替换了第一次的片段，
这样十分消耗性能

改进方案1：
- 1）state 数据
- 2）JSX模板 => render函数下的结构
- 3）数据 + 模板 结合，生成真实的DOM，来显示
- 4）state发生改变
- 5）数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
- 6）新的DOM（Document Fragment文档碎片）和原始的DOM作比对，找差异
- 7）找出input框发生变化
- 8）只用新的DOM中的input，替换原始DOM中的input元素

缺陷：
新的DOM和原始的DOM作比对的过程也会消耗性能，性能提升并不明显

改进方案2：虚拟DOM
- 1）state 数据
- 2）JSX模板 => render函数下的结构
- 3）生成虚拟DOM（虚拟DOM就是一个真实的对象，用它来描述真实的DOM）
    - `['div',{id:'abc'},['span,{},'哈哈']`
- 4）用虚拟DOM的结构，生成真实的DOM，来显示
    - `<div id="abc"><span>哈哈</span></div>`
- 5）state发生变化
- 6）数据 + 模板 生成新的虚拟DOM （极大的提升性能）
    - `['div',{id:'abc'},['span,{},'bye bye']`
- 7）比较原始虚拟DOM和最新虚拟DOM的区别，此例即span中的内容（比对的是js对象，不是真实的DOM）
    - 比较的过程用到`Diff算法(diffence)`
- 8）直接操作DOM，改变span中的内容

虚拟DOM优点：
- 提升性能
- 使得跨端应用得以实现（React Native)

## 十二、虚拟DOM中的diff算法

## 十三、ref
可以快速的获取组件或者元素
在指定组件上写一个ref的属性，任意值
```javascript
<App ref="app"/> // 定义组件
this.ref.app // 获得这个组件
```

## 十四、react中的生命周期函数
生命周期函数，是指在某一个时刻组件会自动调用执行的函数
### 14.1 `mouting阶段` （只执行一次）
- `constructor` 初始化数据
- `componentWillMount` 挂载之前
- `render` 渲染 每次渲染时要处理的逻辑
- `componentDidMount` 请求数据 获取到真实的DOM
```javascript
    constructor(){
        // 初始化数据
        super();
        this.state = {}
        console.log(1)
    }
    componentWillMount(){
        console.log('挂载之前')
    }
    render(){
        // 第一次渲染
        console.log('渲染')
    }
    componentDidMount(){
        // 请求数据
        console.log('挂载之后')
    }
```
### 14.2 `updating阶段`
- `shouldComponentUpdate` 性能优化 此函数必须有返回值，返回布尔值  默认为true 返回true 即更新 返回false 即不更新
- `componentWillUpdate` 数据更新之前
- `render` 数据渲染 (不要使用setState)
- `componentDidUpdate` 数据更新之后
```javascript
    // updating阶段
shouldComponentUpdate(){
    // 性能优化
    // 此函数必须有返回值，返回布尔值 默认为true
    console.log('should');
    return true; // 返回true 即更新 返回false 即不更新
}
componentWillUpdate(){
    console.log('更新之前')
}
componentDidUpdate(){
    console.log('更新之后')
}
myClick=()=>{
    let {num} = this.state;
    num++;
    this.setState({num})
}
render(){
    console.log('渲染')
    return(
        <div id="box">
            <button
                onClick = {this.myClick}
            >{this.state.num}</button>
            
        </div>
    )
}
```
- 注意：updating阶段不要使用setState，否则会死循环
- `componentWillReceiveProps` 父级数据发生变化
    - 一个组件要从父组件接收参数，如果这个组件第一次存在于父组件中，不会执行；如果这个组件之前已经存在于父组件中，才会执行

### 14.3 `unmouting阶段`
- `componentWillUnmout` 当组件死亡时触发（卸载、跳路由、关定时器、数据重置、变量置空、清除事件）

### 页面什么时候会被渲染
- 1. props或者state发生改变时，页面会重新渲染
- 2. 父组件发生改变，子组件会跟随父组件重新渲染（消耗性能）
    - 性能优化方案：
    - 在子组件写一个生命周期函数 `shouldComponentUpdate(nextProps,nextState)`，返回flase，父组件执行，子组件不会再更新

## 十五、在react中发送ajax请求
- 安装模块  `npm add axios`
```javascript
// todolist文件
//AJAX请求数据 只请求一次
componentDidMount(){
    axios.get('/api/todolist')
    .then(()=>{alert('success!')})
    .catch(()=>{alert('errer')})
}
```

### 15.1 使用Charles 进行接口数据模拟

经实践，charles无法请求到数据，原因不明

解决方案：

可以把假数据放在项目中的public目录下，也可以请求到数据



# 第二部分：redux


**类比图书馆借书流程：**
- 首先，我们要借一本书，
- 借书的人（React Components），他说‘我要借一本书’（actionCreaters）
- 这句话被图书馆管理员（store）听见后，管理员去找这本书，但是他自己记不住
- 于是管理员去查阅图书记录本（reducers），记录本会显示这本书放在哪（一来一回）
- 管理员（store）知道这本书放在哪，找到这本书，把这本书给借书的人（React Components）

![](https://user-gold-cdn.xitu.io/2019/7/29/16c3da7a5979d92a?w=705&h=414&f=png&s=106193)


**store、components、actionCreaters、reducers的关系即为：**

- 首先有一个组件，组件要去获取store中的一些数据
- actionCreaters通过dispatch(action)方法  让store知道 组件要获取数据
- store在reducer查组件需要什么数据，reducer返回组件应该拿到的数据
- store获得数据后把数据 返给 组件



## 一、redux中的store
- 安装：`npm install redux -S`
- 创建store文件夹>index.js (图书馆管理员)
- 创建reducer.js (管理员的记录本)

```javascript
//reducer.js文件
//reducer要返回一个函数
const initState = {
    val:'123',
    list:['任务一',"任务二"]
}; //store仓库里默认的数据
export default (state=initState,action) => {
    //state: store仓库里存储的数据
    return state;
}
```
```javascript
//store > index.js
import { createStore } from 'redux'; //从redux中引入createStore方法
import reducer from './reducer'; //获取reduxer中的数据
const store = createStore(reducer);
export default store;
```

## 二、actionTypes的拆分
在store中拆分出一个文件actionTypes.js，把字符串存放在常量里，便于纠错

```javascript
// actionTypes.js
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
```

## 三、使用actionCreate创建统一的action
```javascript
// actionCreate.js
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

// 使用actionCreate创建统一的action
export const getChangeInput = (value) => ({
    type: CHANGE_INPUT_VALUE, //描述这件事是做什么的
    value: value
})

export const addTodoitem = () => ({
    type: ADD_TODO_ITEM
})

export const deleteTodoitem = (i) => ({
    type: DELETE_TODO_ITEM,
    i
})
```

```javascript
// todoList.js
onChange = (ev) => {
    const action = getChangeInput(ev.target.value);
    console.log(ev.target.value);
    store.dispatch(action);//通过dispatch()把action传递给store
}

btnClick = () => {
    const action = addTodoitem()
    store.dispatch(action);
}

itemDelete(i){
    const action = deleteTodoitem(i)
    store.dispatch(action);
}
```

## 五、redux总结

### 5.1 redux设计原则：
- store是惟一的，整个应用只能有一个store
- 只有store能改变自己的内容 
- reducer必须是纯函数
    - 给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
    ```javascript
    // state是固定的，action是固定的，return固定的值
    // 如果newState.val = new Date() 时间不固定 返回值也不固定
    export default (state = initState, action) => {
        if (action.type === CHANGE_INPUT_VALUE) {
            const newState = JSON.parse(JSON.stringify(state))
            newState.val = action.value;
            return newState;
        };
    };
    ```

### 5.2 redux核心API
- `createStore` 创建store
- `store.dispatch` 派发action，action传递给store
- `store.getState()` 获取store里面所有的数据内容
- `store.subscribe()` 订阅store的改变，只要store发生改变，store.subscribe()中的回调函数就会执行

## 六、UI组件和容器组件
- UI组件负责渲染
- 容器组件负责逻辑

## 七、无状态组件
```javascript
// 无状态组件 （函数）性能
// 定义UI组件时，只负责页面的渲染时，使用无状态组件
const TodoListUI = (props) => {
	return (
		<div style={{ marginTop: '10px', marginLeft: '10px' }}>
			<div>
				<Input
					value={props.inputValue}
					placeholder='todo info'
					style={{ width: '300px', marginRight: '10px' }}
					onChange={props.handleInputChange}
				/>
				<Button type="primary" onClick={props.handleBtnClick}>提交</Button>
			</div>
			<List
				style={{ marginTop: '10px', width: '300px' }}
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (<List.Item onClick={(index) => { props.handleItemDelete(index) }}>{item}</List.Item>)}
			/>
		</div>
	)
}
```

## 八、redux中发送异步请求获取数据
使用charles或者mockjs请求模拟接口数据
ajax请求一般写在生命周期函数中
```javascript
// todoList.js
componentDidMount() {
    axios.get('api/list.json').then((res) => {
        const data = res.data;
        const action = initListAction(data);
        store.dispatch(action);
    })
}
// reducer.js
if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
}
// actionCreater.js
export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})
// actionTypes.js
export const INIT_LIST_ACTION = 'init_list_action';
```
## 九、redux-thunk中间件实现ajax数据请求
- 安装： `npm i redux-thunk --save`
把所有异步请求统一放到action中处理

```javascript
// store\index.js => 引入redux中的applyMiddleware方法
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//正常使用REDUX_DEVTOOLS_EXTENSION调试工具
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk),
);

const store = createStore(
	reducer,
	enhancer
);

export default store;
```

```javascript
// todoList.js
import { getInputChangeAction, getAddItemAction, getDeleteItemAction,getTodolist } from './store/actionCreators'
componentDidMount() {
    // 在生命周期函数中 componentDidMount是组件完全挂载到网页上才会被调用执行，也就是render之后，所以加载数据和副作用操作都会在componentDidMount函数里面执行
    const action = getTodolist();
    store.dispatch(action); //派发action会调用getTodolist方法 ，getTodolist方法在actionCreaters里面
    // 把异步请求写在actionCreaters里，避免componentDidMount里面请求数据太多不方便于后期的维护，有利于自动化测试
}
```

```javascript
// actionCreaters.js
// 使用redux-thunk之后，actionCreaters可以返回一个函数，函数里执行异步的操作
// 如果不使用thunk，action必须返回一个普通对象
import axios from 'axios';

export const getTodolist = () => {
	return (dispatch) => {
		axios.get('/list.json').then((res) => {
			const data = res.data;
			console.log(data);
			const action = initListAction(data);
			dispatch(action);
		})
	}
}
```

> 关于reducer的理解： https://zhuanlan.zhihu.com/p/25863768
> 之所以将这样的函数称之为reducer，是因为这种函数与被传入 Array.prototype.reduce(reducer, ?initialValue) 的回调函数属于相同的类型。
>

## 十、redux-thunk中间件

中间件的中间是指：antion和store的中间
对store的dispatch方法进行升级，之前dispatch方法只能返回一个对象，用了thunk中的MiddleWare中间件之后，可以返回函数

- `redux-thunk中间件`是把异步操作放到action里面操作
- `redux-saga中间件`是把异步操作单独放到另一个文件里面进行管理

## 十一、redux-saga中间件

- 安装 `npm i redux-saga --save`
```javascript
// store\index.js
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'; //引入saga中间件
// 在store文件夹下创建一个sagas.js文件
import TodoSagas from './sagas';

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
```
```javascript
// actionCreates.js
export const getInitList = (data) => ({
	type: GET_INIT_LIST
})
```

```javascript
// actionTypes.js
export const GET_INIT_LIST = 'get_init_list';
```
```javascript
// sagas.js
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
```

# 第三部分：redux-redux

## redux-redux写todolist

文件目录
- node_modules
- pusblic
    - favicon.ico
    - index.html
    - list.json
- src
    - store
        - actionCreates.js
        - actionTypes.js
        - index.js
        - reducer.js
    - index.js
    - TodoList.js
- .gitignore
- package-lock.json
- package.json
- README.md

```javascript
// src\index.js
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
```

```javascript
// TodoList.js
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
```


```javascript
// store\index.js
import {createStore}from 'redux';
import reducer from './reducer'
const store = createStore(reducer)
export default store;
```

```javascript
// reducer.js
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        // newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }
    return state;
}
```

```javascript
// actionTypes.js
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_ITEM = 'add_item';
export const DELETE_ITEM = 'delete_item';
```

```javascript
// actionCreater.js
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const changeInputValue = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const addItem = () =>({
    type: ADD_ITEM
})

export const deleteItem = (index) =>({
    type: DELETE_ITEM,
    index
})
```



























