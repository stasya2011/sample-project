import classNames from "classnames";
import styles from "./form.module.scss";

const ReferralLink = () => {
  return (
    <form
      className={classNames(styles["form-wrapper"], styles["referral-link"])}
    >
      <input type="email" placeholder="Enter your email address" />
      <button className={styles.btn}>Copy</button>
    </form>
  );
};

export default ReferralLink;
