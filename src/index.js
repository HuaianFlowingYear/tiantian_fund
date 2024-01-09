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
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
