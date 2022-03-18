import React from "react";
import "./index.scss";
function Model(props) {
  const { isShowModal, modalTitle, children } = props;
  return (
    <>
      {isShowModal ? (
        <div className="model">
          <div className="inner">
            <div className="m-header">{modalTitle}</div>
            <div className="content-wrapper">{children}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Model;
