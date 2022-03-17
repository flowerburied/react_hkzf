import React from "react";
import { AddOutline } from "antd-mobile-icons";
import "./index.scss";
export default function Haeder(props) {
    const {openInput} =props
  return (
    <div className="header">
      <h1>事件代办</h1>
      <AddOutline className="icon" onClick={openInput} />

    </div>
  );
}
