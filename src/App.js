// 导入路由

import { useRoutes } from "react-router-dom";

// 导入首页和城市选择两个组件

// 导入要使用的组件
// import { Button } from 'antd-mobile'
// import router from "./router/indexRouter";
import router from "./router/indexRouter";
function App() {
  // return <Suspense fallback={<>loading</>}>{useRoutes(router)}</Suspense>;

  return useRoutes(router)
  // const element = useRoutes(router);
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />}>
  //       <Route index element={<Index />}></Route>
  //       <Route path="/houselist" element={<HouseList />}></Route>
  //     </Route>
  //     <Route path="/cityList" element={<CityList />}></Route>
  //   </Routes>
  // );
}

export default App;
