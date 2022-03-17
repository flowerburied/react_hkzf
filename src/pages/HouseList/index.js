import React, { useState, useCallback } from "react";
import MyHeader from "../../components/Header";
import AddInput from "../../components/AddInput";
export default function HouseList() {
  const [isInputShow, setInputShow] = useState(false),
    [todoList, setTodoList] = useState([]);
  const addTtem = useCallback((value) => {
    // console.log("value", value);
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };
    setTodoList((todoList) => [...todoList, dataItem]);
    setInputShow(false);
  }, []);
  return (
    <div>
      <MyHeader openInput={() => setInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addTtem={addTtem} />
    </div>
  );
}
