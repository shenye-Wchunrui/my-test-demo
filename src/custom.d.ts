/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-27 21:21:04
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-27 21:24:09
 * @FilePath: \react-travel\src\custom.d.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved. 
 */
// custom.d.ts
// 声明css关键词
// 表示只要import css文件时都会遵循一下约定
// 这个约定会将值导出为约定对象
declare module '*.css' {
    const css: { [key: string]: string }
    export default css;
}
