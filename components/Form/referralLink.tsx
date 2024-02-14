import Image from "next/image";
import classNames from "classnames";
import styles from "./form.module.scss";
import { useState } from "react";

const successMessage = { status: "Your email is confirmed!", img: "/assets" };

const ReferralLink = ({ reflink }: { reflink: string }) => {
  const [isShowAllert, setIsShowAllert] = useState(false);

  const copyLink = (e: React.MouseEvent) => {
    e.preventDefault();

    navigator.clipboard.writeText(reflink);
    setIsShowAllert(true);
    setTimeout(() => setIsShowAllert(false), 3000);
  };

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
        <input
          type="text"
          placeholder="Enter your email address"
          value={reflink}
          readOnly
        />
        {isShowAllert ? (
          <h3 className={styles["copied-link"]}>The link is copied</h3>
        ) : (
          ""
        )}
        <button onClick={copyLink} className={styles.btn}>
          Copy
        </button>
      </form>
    </>
  );
};

export default ReferralLink;
