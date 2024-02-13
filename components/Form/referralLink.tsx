import Image from "next/image";
import classNames from "classnames";
import styles from "./form.module.scss";

const successMessage = { status: "Your email is confirmed!", img: "/assets" };

const ReferralLink = () => {
  return (
    <>
      <form
        className={classNames(styles["form-wrapper"], styles["referral-link"])}
      >
        <div className={styles.success}>
          <Image
            src={"/assets/success.svg"}
            alt={successMessage.status}
            width={32}
            height={32}
          />
          {successMessage.status}
        </div>
        <input type="email" placeholder="Enter your email address" />
        <button className={styles.btn}>Copy</button>
      </form>
    </>
  );
};

export default ReferralLink;
