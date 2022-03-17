import React from "react";

function TodoItem(props) {
  const { data } = props;
  return (
    <div>
      <li>
        <div>
          <input type="checkbox" checked={data.completed} />
        </div>
        <span>
            
        </span>
      </li>
    </div>
  );
}

export default TodoItem;
