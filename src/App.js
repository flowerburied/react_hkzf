import React from "react";

// 导入路由
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 导入首页和城市选择两个组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";

// 导入要使用的组件
// import { Button } from "antd-mobile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Button>登录</Button>
        项目根组件 */}

        {/* 配置导航菜单 */}
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/citylist">城市选择</Link>
          </li>
        </ul>

        {/* 配置路由 */}
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/citylist" element={<CityList></CityList>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
