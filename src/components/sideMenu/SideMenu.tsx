/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 22:53:34
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 23:14:33
 * @FilePath: \react-travel\src\components\sideMenu\SideMenu.tsx
 * @Description:
 *
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved.
 */
import React from "react";
import style from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={style["side-menu"]}>
      {sideMenuList.map((item, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {item.title}
            </span>
          }
        >
          {item.subMenu.map((itm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {itm.title}
                </span>
              }
            >
              {itm.subMenu.map((it, sindex) => (
                <Menu.Item key={`sub-sub-menu-${sindex}`}>
                  <span>
                    <GifOutlined />
                    {it}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
