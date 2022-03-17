import React from "react";

function Test(props) {
  const { title, changeTitle } = props;

  return (
    <div>
      <h1> {title} </h1>
      <button onClick={() => changeTitle("这是第三个")}>更改按钮</button>
    </div>
  );
}
export default Test;
