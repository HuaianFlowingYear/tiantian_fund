// use开头的函数 hook函数
// useEffect == componentDidMount + componentDidUpdate + componentWillUnmount
import { useState, useEffect, useRef } from "react";
import { root } from "..";
// 基于useEffect实现useComponentDidMount
import { useComponentDidMount } from "../hooks/index";
function Foo() {
  const [count, setCount] = useState(123);
  const divRef = useRef(null);
  // 使用useEffect实现componentDidMount
  useEffect(() => {
    console.log("componentDidMount", 1);
  }, []);
  // 使用useEffect实现componentDidMount+ componentDidUpdate
  useEffect(() => {
    // console.log("componentDidMount+ componentDidUpdate", 1, "不打印");
  }, [count]);
  // [count] 这个第二个参数是一个依赖项 指定那个数据发生变化的时候发请求
  // 使用useEffect实现componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount", 2);
    };
  }, []);
  // 1.组件第一次执行 打印1 组件任何数据更新 打印1 组件卸载 打印2
  useEffect(() => {
    console.log(1);
    return () => {
      console.log(2);
    };
  });
  // 2.组件第一次执行 打印1 组件任何数据更新 不打印 组件卸载 打印2
  useEffect(() => {
    console.log(1);
    return () => {
      console.log(2);
    };
  }, []);

  useEffect(() => {
    console.log(divRef.current);
  }, [divRef]);
  useComponentDidMount(() => {
    console.log("useComponentDidMount", divRef.current);
  });
  return (
    <>
      <div ref={divRef} onClick={() => setCount(count + 1)}>
        {count}
      </div>

      <button onClick={() => root.unmount()}>销毁</button>
    </>
  );
}
export default Foo;
// react hooks是什么？ 一组能够模拟类组件功能的函数
// react hooks 是一组函数 只要是use开头的都是hook
// 为什么要有react hook？
// 为了让函数组件的功能和类组件相当，但是 学习复杂度+记忆成本 直线降低
// 类组件 === 函数式组件 + hooks

/**
 * hook使用的条件
 * hook在组件中使用时必须在组件的顶层 不得出现在任何嵌套结构 （if条件判断 for循环） 中
 * react允许你基于官方的hook函数封装自己的自定义hook函数（hook可以在任何自定义hook函数中的顶层使用）
 */
