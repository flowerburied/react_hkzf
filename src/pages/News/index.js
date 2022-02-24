import React from "react";

import { Link, useSearchParams } from "react-router-dom";

const Mytest = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();
  console.log("params.get", searchParams.get("qq"));
  return (
    <div>
      new页面
      <Link to={"/news/1"}>用户一</Link>
    </div>
  );
};

export default class News extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Mytest></Mytest>{" "}
      </div>
    );
  }
}
