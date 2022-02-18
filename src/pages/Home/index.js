import React from "react";
import { TabBar } from "antd-mobile";
import styles from "./demo2.less";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import News from "../News";

const Bottom = () => {
  const navigate = useNavigate();
  console.log("history", navigate);
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value) => {
    console.log("value", value);
    navigate(value);
  };
  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/home/news",
      title: "我的待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/message",
      title: "我的消息",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ];
  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.body}>
          <Routes>
            <Route exact path="/news" element={<News></News>}></Route>
          </Routes>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    );
  }
}
