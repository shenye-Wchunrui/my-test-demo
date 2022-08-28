import React from "react";
import style from "./App.module.css";
import { Header, Footer, SideMenu } from "./components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={style["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <div style={{ background: "green" }}>走马灯</div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
