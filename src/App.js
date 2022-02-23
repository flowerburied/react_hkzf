// 导入路由
import { Route, Routes } from "react-router-dom";

// 导入首页和城市选择两个组件
import CityList from "./pages/CityList";
import Home from "./pages/Home";
import Index from "./pages/Index";
import HouseList from "./pages/HouseList";
// 导入要使用的组件
// import { Button } from 'antd-mobile'
// import router from "./router/indexRouter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Index />}></Route>
        <Route path="/houselist" element={<HouseList />}></Route>
      </Route>
      <Route path="/cityList" element={<CityList />}></Route>
    </Routes>
  );
}

export default App;
