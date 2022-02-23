import React from "react";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

// import styles from "./demo2.less";
import "./index.css";
const Bottom = () => {
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
