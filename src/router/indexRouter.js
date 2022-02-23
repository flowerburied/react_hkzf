// import React from "react";
import * as React from "react";
import { useRoutes } from "react-router-dom";
// 导入首页和城市选择两个组件
// import Home from "../pages/Home";
import Home from "../pages/Home";
import CityList from "../pages/CityList";
import News from "../pages/News";
import Index from "../pages/Index";

export default function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "news",
          element: <News />,
        },
      ],
    },
    { path: "cityList", element: <CityList /> },
  ]);

  return element;
}
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
