/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 22:25:14
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 22:27:06
 * @FilePath: \react-travel\src\components\footer\Footer.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import style from "./Footer.module.css";
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} className={style.txCenter}>
        版权所有 @React 旅游网
      </Typography.Title>
    </Layout.Footer>
  );
};
