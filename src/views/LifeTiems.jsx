import React from "react";
import { root } from "../index";

class LiftTimes extends React.Component {
  // 只执行一次
  constructor(props) {
    super(props);
    this.state = { count: 0, list: [1, 2, 3] };
    console.log(props);
    console.log("constructor...");
  }
  //
  // 如果只是淡出定义一个组件状态 不必要使用constructor
  // state = {count:0,list:[1,2,3]};
  // 默认返回true 只要props/state发生变化 都会执行render+componentDidUpdate
  // 性能优化：避免不必须的更新 要有有意义的更新
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, nextProps);
  //   console.log(this.state, nextState);
  //   console.log("shouldComponentUpdate...");
  //   return true;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.props === nextProps); ->false
  //   return this.props.index !== nextProps.index;
  // }
  // 执行若干次

  render() {
    console.log("render...");
    return (
      <>
        <div onClick={() => this.setState({ count: {} })}>生命周期函数</div>
        <div>props:{this.props.children}</div>
        <div>state:{this.state.count}</div>
        <button onClick={() => root.unmount()}>销毁</button>
      </>
    );
  }
  // 执行若干次
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    console.log(prevState, this.state);
    // 避免死循环
    console.log("componentDidUpdate...");
    if (prevState.id !== this.state.id) {
      this.getFund();
    }
  }
  // 只执行一次
  componentDidMount() {
    console.log("componentDidMount...");
  }
  // 只执行一次
  componentWillUnmount() {
    // 清楚定时器 解绑事件
    console.log("componentWillUnmount...");
  }
}
export default LiftTimes;
/**
 * 1.组件首次渲染会一次触发3个函数：constructor render componentDidMount，
 * 1.1 其中constructor和componentDidMount在整个组件的生命周期中只执行一次
 * 1.2 constructor函数具有一个形参 其作用是收集组件的props属性和子节点(props.children)
 * 2.组件的props/state发生更新时，会依次触发： shouldComponentUpdate render componentDidUpdate
 * 2.1其中shouldComponentUpdate这个函数必须具备返回值且其返回值类型为boolean 用以控制后续的render和componentDidUpdate是否继续执行
 * 2.2如果shouldComponentUpdate返回false 只是UI更新被拦截 props/state值依然会变化
 * 2.3 shouldComponentUpdate这个函数具备两个参数 分别是即将更新的props和即将更新的state
 * 2.4 shouldComponentUpdate核心功能：性能优化 避免不必要的更新render
 * 2.5 componentDidUpdate具备两个参数 分别是上一次的props(prevProps) 和 上一次的state(prevState)
 * 3. React.PureComponent = React.Componet + shouldComponentUpdate
 * 4. componentDidCatch捕获组件运行时异常
 */
// 如何销毁一个组件
