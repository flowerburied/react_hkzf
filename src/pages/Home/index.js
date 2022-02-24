import React, { useEffect } from "react";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import {
  useNavigate,
  useLocation,
  Outlet,
  matchRoutes,
} from "react-router-dom";

// import styles from "./demo2.less";
import "./index.css";
import router from "../../router/indexRouter";
const Bottom = () => {
  const locationxx = useLocation();
  useEffect(() => {
    const routes = matchRoutes(router, locationxx.pathname);
    // console.log("routes", routes);
    let pathArr = [];
    if (routes !== null) {
      for (let route of routes) {
        let path = route.route.path;
        if (path) {
          pathArr.push(path);
        }
      }
    }
    if (pathArr.length > 0) {
      // console.log("pathArr", pathArr);
    }
  }, [locationxx.pathname]);

  // console.log("this.props", this);
  const navigate = useNavigate();
  // console.log("history", navigate);
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value) => {
    console.log("value", value);
    navigate(value);
  };
  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/profile",
      title: "找房",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/news",
      title: "资讯",
      icon: <MessageOutline />,
    },
    {
      key: "/houselist",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  return (
    <div className="addposition">
      <TabBar
        // style={{ position: "fixed", bottom: 0, width: "100%" }}
        activeKey={pathname}
        onChange={(value) => setRouteActive(value)}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

// const getAllRouter = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const routes = matchRoutes(router, location.pathname);
//     let pathArr = [];
//     if (routes !== null) {
//       for (let route of routes) {
//         let path = route.route.path;
//         if (path) {
//           pathArr.push(path);
//         }
//       }
//     }
//     if (pathArr.length > 0) {
//       console.log("pathArr", pathArr);
//     }
//   }, [location.pathname]);
// };
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Outlet></Outlet>
        <Bottom />
      </div>
    );
  }
}
