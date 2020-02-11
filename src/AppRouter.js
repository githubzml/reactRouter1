import React, { Component } from 'react';
//Router 路由器
//Route 线路
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Index from "./page/index"
import List from "./page/List"

//设置规则 
//传递值
//接收值
//显示值
function AppRouter() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/list/222">列表</Link>
                </li>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/:id" exact component={List}></Route>
            </ul>
        </Router>
    )
}

export default AppRouter;