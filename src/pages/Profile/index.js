import React, { useState } from "react";

import Test from "../../components/test";

export default function Profile() {
  const [title, setTitle] = useState("这是一个标题");
  const changeTitle = (e) => {
    console.log("e", e);
    setTitle("这是第二季标题");
  };

  return (
    <div>
      <Test changeTitle={changeTitle} title={title}>
        {" "}
      </Test>{" "}
    </div>
  );
}
