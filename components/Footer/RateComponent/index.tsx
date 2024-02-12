import { Rate } from "antd";
import styles from "./rate.module.scss";

const RateComponent = () => {
  return (
    <div className={styles["rate"]}>
      <Rate style={{ marginRight: 16 }} /> Chrome Store reviews
    </div>
  );
};

export default RateComponent;
