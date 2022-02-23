import React from "react";
import { Swiper, Toast, Grid } from "antd-mobile";
import "./index.css";
import Nav1 from "../../assets/images/nav-1.png";
import { useNavigate } from "react-router-dom";

// 导入axios
import axios from "axios";
const navs = [
  { id: 1, img: Nav1, title: "整租", path: "/profile" },
  { id: 2, img: Nav1, title: "整租", path: "/news" },
  { id: 3, img: Nav1, title: "整租", path: "/houselist" },
  { id: 4, img: Nav1, title: "整租", path: "/index" },
];
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
    this.getSwipers();
  }

  renderSwipers() {
    return this.state.colors.map((color, index) => (
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
  }
  renderNavs() {
    return navs.map((item) => (
      <Grid.Item
        key={item.id}
        onClick={() => {
          // this.props.navigate(item.path);
          console.log(" this.path", item.path);
          const navigate = useNavigate();
          navigate(item.path);
        }}
      >
        <img src={item.img} alt="" />
        <h2> {item.title} </h2>{" "}
      </Grid.Item>
    ));
  }

  render() {
    // const items = this.state.colors.map((color, index) => (
    //   <Swiper.Item key={index}>
    //     <div
    //       className="content"
    //       style={{ background: color }}
    //       onClick={() => {
    //         Toast.show(`你点击了卡片 ${index + 1}`);
    //       }}
    //     >
    //       {index + 1}{" "}
    //     </div>{" "}
    //   </Swiper.Item>
    // ));

    return (
      <div>
        index页面{" "}
        {/* <Swiper autoplay loop>
                          {this.renderSwipers()}
                        </Swiper>
                        <Grid className="nav" columns={4}>
                          {this.renderNavs()}
                        </Grid> */}
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
