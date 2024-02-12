import { dataFooterBtns } from "@/constants";
import { IFooterBtn } from "@/types";
import Button from "../Button";
import RateComponent from "./RateComponent";
import styles from "./footer.module.scss";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <div
          className={classNames(
            styles["inner-wrapper"],
            styles["inner-wrapper-top"]
          )}
        >
          <div className={styles["btns"]}>
            {dataFooterBtns.map((btn: IFooterBtn) => (
              <Button key={btn.srcToImg} {...btn} />
            ))}
          </div>
          <div>
            <RateComponent />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles["inner-wrapper"]}>bottom</div>
      </div>
    </footer>
  );
};

export default Footer;
