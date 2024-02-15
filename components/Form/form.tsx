"use client";
import { useState } from "react";
import Image from "next/image";
import ReferralLink from "./referralLink";
import styles from "./form.module.scss";
import email from "../../public/assets/email.svg";

const errorMessage = { status: "Error State", img: "" };

const Form = ({ submite }: any) => {
  const [isError, setIsError] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const handleGetLink = async () => {
    const res = await submite();
    if (res && res.email) {
      setIsEmailConfirmed(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles["wrapper-inner"]}>
        <div>
          <h2 className={styles.title}>REFER FRIENDS AND GET REWARDS</h2>
          <p className={styles.text}>
            Refer your friends to us and earn hotel booking vouchers. We`ll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          {isEmailConfirmed ? (
            <ReferralLink reflink={"https://ratepunk.com/referral"} />
          ) : (
            <form className={styles["form-wrapper"]} action={handleGetLink}>
              {isError && (
                <h4 className={styles.error}>{errorMessage.status}</h4>
              )}
              <Image
                className={styles["email-img"]}
                alt="email"
                src={email}
                width={20}
                height={16}
              />
              <input type="email" placeholder="Enter your email address" />
              <button className={styles.btn}>Get Referral Link</button>
            </form>
          )}
        </div>

        <span className={styles["clarification"]}>
          Limits on max rewards apply.
        </span>
      </div>
    </section>
  );
};

export default Form;
