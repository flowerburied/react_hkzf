import React from "react";

import {  Routes, Route, Link } from "react-router-dom";

import News from "../News";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        {" "}
        首页
        <Link to="/home/news">首页</Link>
        <Routes>
          <Route path="/news" element={<News></News>}></Route>
        </Routes>
      </div>
    );
  }
}
