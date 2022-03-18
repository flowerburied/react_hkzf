import React from "react";
import { Button } from "antd-mobile";
import "./todoitem.scss";
function TodoItem(props) {
  const { data,openCheckModal } = props;
  return (
    <div>
      <li className="todoitem">
        <div>
          <input type="checkbox" checked={data.completed} />
        </div>
        <span
          className="content"
          style={{ textDecoration: data.completed ? "line-through" : "none" }}
        >
          {data.content}
        </span>
        <div className="btn-group">
          <Button size="mini" color="primary" onClick={() => openCheckModal(data.id)}>
            查看
          </Button>
          <Button size="mini" color="success">
            编辑
          </Button>
          <Button size="mini" color="danger">
            删除
          </Button>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
