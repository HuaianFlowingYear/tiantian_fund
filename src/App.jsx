// 使用函数定义组件 只关心渲染的是谁
// 组件的渲染就是执行该函数
// 组件不仅仅需要初次渲染 还需要若干次更新
// import { useState } from "react";
// import { useData } from "./utils";
// import Foo from "./views/Foo";
// import Layout from "./views/Layout";
import Search from "./views/Serch";
function App() {
  return (
    <div>
      {/* <Foo />
      <Layout /> */}
      <Search />
    </div>
  );

  // 相当于类组件state 和setState
  // const [a, updateA] = useState(1);
  // return <div onClick={() => updateA(a + 1)}>我是App组件{a}</div>;
  // const [a, updateA] = useData(1);
  // return <div onClick={() => updateA(a.value + 1)}>我是App组件{a.value}</div>;
}
// let a = 1;
// function App() {
//   const updateA = () => {
//     a++;
//     reRenderUI();
//     console.log(a);
//     // 值更新 但是UI没有渲染！原因是：你在更新数据的时候App函数并没有重新执行返回新的jsx元素
//     // 解决方案：在数据更新后调用ReactDOM.render()函数强行更新UI界面
//     // 遇到新问题：UI界面依旧不更新 （App函数重新执行导致a的值重置为1）
//     // 解决方案：（将a变为全局变量）
//   };
//   return <div onClick={updateA}>我是App组件{a}</div>;
// }

// 使用类定义组件
/**
 * import React,{Component} from "react";
 * class App extends Component {
 *    render(){
 *      return <div>我是App组件</div>
 *    }
 * }
 *
 */
export default App;

// props * state
// componentDidMount
//
