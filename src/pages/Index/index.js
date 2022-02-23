import React from "react";
import { Swiper, Toast } from "antd-mobile";
import "./index.css";
// 导入axios
import axios from "axios";
export default class Index extends React.Component {
  state = {
    swipers: [],
    colors: ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"],
  };

  async getSwipers() {
    const res = await axios.get("http://localhost:8080/home/swiper");
    console.log("res", res);
    // this.setState(()=>{
    //   return{
    //     swipers:res.data.body
    //   }
    // })
  }

  componentDidMount() {
    this.getSwipers()
  }

  render() {
    const items = this.state.colors.map((color, index) => (
      <Swiper.Item key={index}>
        <div
          className="content"
          style={{ background: color }}
          onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`);
          }}
        >
          {index + 1}{" "}
        </div>{" "}
      </Swiper.Item>
    ));

    return (
      <div>
        <Swiper autoplay loop>
          {items}
        </Swiper>
      </div>
    );
  }
}

// export default function index() {
//   const getSwipers = async () => {
//     const res = await axios.get("http://localhost:8080/home/swiper");
//     console.log("res", res);
//   };
//   const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
//   const items = colors.map((color, index) => (
//     <Swiper.Item key={index}>
//       <div
//         className="content"
//         style={{ background: color }}
//         onClick={() => {
//           Toast.show(`你点击了卡片 ${index + 1}`);
//         }}
//       >
//         {index + 1}{" "}
//       </div>{" "}
//     </Swiper.Item>
//   ));
//   return (
//     <div>
//       <Swiper autoplay loop>
//         {" "}
//         {items}{" "}
//       </Swiper>{" "}
//     </div>
//   );
// }
