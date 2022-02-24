// import React from "react";
// import * as React from "react";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
// 导入首页和城市选择两个组件
// import Home from "../pages/Home";
// import Home from "../pages/Home";
const Home = lazy(() => import("../pages/Home"));  //路由懒加载
// import CityList from "../pages/CityList"
const CityList = lazy(() => import("../pages/CityList"));
// import News from "../pages/News"
const News = lazy(() => import("../pages/News"));
// import Index from "../pages/Index"
const Index = lazy(() => import("../pages/Index"));
// import HouseList from "../pages/HouseList"
const HouseList = lazy(() => import("../pages/HouseList"));
// import Profile from "../pages/Profile"
const Profile = lazy(() => import("../pages/Profile"));
const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "houseList",
        element: <HouseList />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  { path: "cityList", element: <CityList /> },
];
export default router;

// export default function indexRouter() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/home" component={Home}></Route>
//         <Route path="/citylist" component={CityList}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
