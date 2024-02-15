import { dataFooterBtns, quickLinks, socialIcons } from "@/constants";
import { IFooterBtn, IMenu, SocialIcon } from "@/types";
import Button from "./button";
import RateComponent from "./rateComponent/rateComponent";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import emeil from "../public/assets/email-footer.svg";
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
            <h3 className={styles.title}>QUICK LINKS</h3>
            <ul className={styles.list}>
              {quickLinks.map((link: IMenu) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={classNames(
              styles["bottom_item"],
              styles["bottom_item-flex"]
            )}
          >
            <div>
              <h3 className={styles.title}>CONTACT</h3>
              <div>
                <Image
                  src={emeil}
                  alt={"email"}
                  width={16}
                  height={16}
                  style={{ marginRight: 16 }}
                />
                hi@ratepunk.com
              </div>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>SOCIAL</h3>
              <div className={styles["social-btns"]}>
                {socialIcons.map((el: SocialIcon) => (
                  <div className={styles["social-btn"]} key={el.id}>
                    <Image src={el.href} width={16} height={16} alt={"icon"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div>© 2021 Ratepunk. All Rights Reserved.</div> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
