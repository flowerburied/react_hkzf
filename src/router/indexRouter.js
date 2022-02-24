// import React from "react";
// import * as React from "react";
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
// 导入首页和城市选择两个组件
// import Home from "../pages/Home";
import Home from "../pages/Home";
// const Home = lazy(() => import("../pages/Home")); //路由懒加载
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

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>;
};

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: lazyLoad(<Index />) },
      {
        path: "news",
        element: lazyLoad(<News />),
      },
      {
        path: "houseList",
        element: lazyLoad(<HouseList />),
      },
      {
        path: "profile",
        element: lazyLoad(<Profile />),
      },
    ],
  },
  { path: "cityList", element: lazyLoad(<CityList />) },
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
