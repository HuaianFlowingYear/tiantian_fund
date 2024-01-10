// // v18.x的写法
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import ErrorBoundary from "./components/ErrorBoundary.jsx";
// export const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ErrorBoundary>
//     <App />
//   </ErrorBoundary>
// );
// /**
//  * v16.x的写法
//  * import React from "react";
//  * import ReactDOM from "react-dom";
//  * import App from "./App";
//  * ReactDOM.render(<App />,document.getElementById("root"));
//  */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import ErrorBoundary from "@/components/ErrorBoundary";
// import "@/index.css";
export const root = ReactDOM.createRoot(document.getElementById("root"));
export const reRenderUI = () => {
  root.render(
    <ErrorBoundary>
      {" "}
      {/* 两个写法等同  */}{" "}
      <App b={2} c="1">
        <span> asd </span>{" "}
      </App>{" "}
      {/* <App {...{ c: "1", b: 2 }} />{" "} */}{" "}
      {/* {App({
                    c: "1",
                    b: 2,
                    children: <span> asd </span>,
                  })}{" "} */}{" "}
    </ErrorBoundary>
  );
};
reRenderUI();
// 定义函数
// 调用函数  更新界面：就是控制函数重复执行
// 理解函数的 形参 和实参
