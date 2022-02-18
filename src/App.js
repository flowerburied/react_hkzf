import React from "react";

// 导入路由
import {  BrowserRouter as Router,Routes, Route } from "react-router-dom";

// 导入首页和城市选择两个组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";

// 导入要使用的组件
// import { Button } from 'antd-mobile'

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Button color='primary'>Primary</Button> */}

        {/* 配置导航菜单 */}
        {/* <Link to="/home">首页</Link>
        <Link to="/citylist">城市选择</Link> */}

        {/* 配置路由 */}
        <Routes>
          <Route path="/home/*" element={<Home></Home>}></Route>
          <Route path="/citylist" element={<CityList></CityList>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
