import styles from "./mainLayout.module.scss";

import { FloatButton, Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Videos from "../pages/Videos";

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Layout
        className={styles["main-layout-container"]}
        style={{
          width: "100%",
          paddingLeft: "0",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <FloatButton.BackTop visibilityHeight={400} />
        <Suspense fallback={<Spin />}>
          <Content className={styles["content"]}>
            <div style={{ marginTop: "10px" }}>
              <Videos />
            </div>
          </Content>
        </Suspense>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
