import React, { useState, useCallback, useEffect } from "react";
import MyHeader from "../../components/Header";
import AddInput from "../../components/AddInput";
import TodoItem from "../../components/TodoItem/TodoItem";
import CheckModel from "../../components/Model/CheckModel";
import "./index.scss";
export default function HouseList() {
  const [isInputShow, setInputShow] = useState(false),
    [todoList, setTodoList] = useState([]),
    [isShowCheckModal, setShowCheckModal] = useState(false),
    [currentData, setCurrentData] = useState({});

  useEffect(() => {
    console.log("第一个useEffect");
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]");
    setTodoList(todoData);
  }, []);
  useEffect(() => {
    console.log("第二个useEffect");
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);

  const addTtem = useCallback((value) => {
    // console.log("value", value);
    console.log("第三个addTtemt");
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };
    setTodoList((todoList) => [...todoList, dataItem]);
    setInputShow(false);
  }, []);

  const openCheckModal = useCallback(
    (id) => {
      console.log("改变setShowCheckModal");
      setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
      setShowCheckModal(true);
    },
    [todoList]
  );
  return (
    <div>
 
      <MyHeader openInput={() => setInputShow(!isInputShow)} />

      <ul className="todolist">
        {todoList.map((item, index) => {
          return (
            <TodoItem
              openCheckModal={openCheckModal}
              data={item}
              key={index}
            ></TodoItem>
          );
        })}
      </ul>
      <AddInput isInputShow={isInputShow} addTtem={addTtem} />
      <CheckModel
        data={currentData}
        closeModal={() => setShowCheckModal(false)}
        isShowCheckModal={isShowCheckModal}
      ></CheckModel>
    </div>
  );
}
