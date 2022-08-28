/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 22:21:05
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 22:24:56
 * @FilePath: \react-travel\src\components\header\Header.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import style from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GatewayOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.svg";

export const Header: React.FC = () => {
  return (
    <div className={style["app-header"]}>
      {/* top-header */}
      <div className={style["top-header"]}>
        <div className={style.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GatewayOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={style["botton-group"]}>
            <Button>注册</Button>
            <Button>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={style["main-header"]}>
        <img src={logo} alt="" className={style["App-logo"]} />
        <Typography.Title level={3} className={style.title}>
          React 旅游网
        </Typography.Title>
        <Input.Search
          className={style["search-input"]}
          placeholder="请输入旅游的目的地、主题、或关键字"
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={style["main-menu"]}>
        <Menu.Item></Menu.Item>
      </Menu>
    </div>
  );
};
