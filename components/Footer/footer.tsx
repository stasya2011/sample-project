import { dataFooterBtns, quickLinks } from "@/constants";
import { IFooterBtn } from "@/types";
import Button from "../Button";
import RateComponent from "./RateComponent";
import Logo from "../Header/Logo";
import classNames from "classnames";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.top}>
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

          <RateComponent />
        </div>
      </section>
      <section className={styles.bottom}>
        <div
          className={classNames(
            styles["inner-wrapper"],
            styles["inner-wrapper-bottom"]
          )}
        >
          <div
            className={classNames(
              styles["bottom_item"],
              styles["bottom_item-flexElem_2"]
            )}
          >
            <Logo />
            <div className={styles.text}>
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you’re getting the best deal!
            </div>
          </div>
          <div className={classNames(styles["bottom_item"])}>
            <h3>QUICK LINKS</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className={classNames(styles["bottom_item"])}>
            <div>
              <h3>CONTACT</h3>
            </div>
            <div className={styles["bottom_title"]}>
              <h3>SOCIAL</h3>
            </div>
          </div>
          {/* <div>© 2021 Ratepunk. All Rights Reserved.</div> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
