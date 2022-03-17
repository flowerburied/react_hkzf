import React, { useRef } from "react";
import "./index.scss";
function AddInput(props) {
  const { isInputShow ,addTtem} = props,
    inputRef = useRef();

  const submitValue = () => {
    const inputValuex = inputRef;
    console.log("inputValue", inputValuex);
    const inputValue = inputRef.current.value.trim();

    if (inputValue.length === 0) {
      return;
    }
    addTtem(inputValue)
    inputRef.current.value = "";
  };
  return (
    <div>
      {isInputShow ? (
        <div className="input_wrapper">
          <input ref={inputRef} placeholder="请输入代办事项" type="text" />

          <button className="btn" onClick={submitValue}>
            增加
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddInput;
