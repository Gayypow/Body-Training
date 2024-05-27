import { Button, Typography } from "antd";
import styles from "./navbar.module.scss";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { videos } = useAppSelector((state) => state.video);
  const navigate = useNavigate();
  return (
    <nav className={styles["navbar"]}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title style={{ margin: 0 }}>Train</Typography.Title>
        <Button
          onClick={() => {
            navigate("/player");
          }}
          loading={Object.values(videos).includes(true)}
          style={{ width: "100px" }}
          type="primary"
          size="large"
        >
          Start
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
