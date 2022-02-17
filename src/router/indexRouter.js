import React from "react";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
// 导入首页和城市选择两个组件
// import Home from "../pages/Home";
import Home from "../pages/Home";
import CityList from "../pages/CityList";
export default function indexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </Routes>
    </BrowserRouter>
  );
}
