import React from "react";
import "./index.scss";
import Modal from "../index";
import { Button } from "antd-mobile";
function CheckModel(props) {
  const { isShowCheckModal, data, closeModal } = props;

  return (
    // <div>23123213</div>
    // <div>{isShowCheckModal ? <div>正确</div> : <div>错误</div>}</div>

    <Modal className="addmodel" isShowModal={isShowCheckModal} modalTitle="查看事件">
      <p className="topic">时间：{data.id}</p>
      <p className="topic">内容：{data.content}</p>
      <p className="topic">状态：{data.completed ? "完成" : "未完成"}</p>

      <Button size="mini" color="primary" onClick={() => closeModal()}>
        确定
      </Button>
    </Modal>
  );
}

export default CheckModel;
