/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 21:04:59
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 21:29:51
 * @FilePath: \react-travel\src\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
