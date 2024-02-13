"use client";
import ReferralLink from "./referralLink";
import styles from "./form.module.scss";
import { useEffect } from "react";

const Form = ({ submite }: any) => {
  useEffect(() => {
    const fn = async () => {
      const dattatatat = await submite();
      console.log(dattatatat);
    };
    fn();
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles["wrapper-inner"]}>
        <h2 className={styles.title}>REFER FRIENDS AND GET REWARDS</h2>
        <p className={styles.text}>
          Refer your friends to us and earn hotel booking vouchers. We``ll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        {/* <ReferralLink /> */}
        <form className={styles["form-wrapper"]} action={submite}>
          <input type="email" placeholder="Enter your email address" />
          <button className={styles.btn}>Get Referral Link</button>
        </form>
        <span className={styles["clarification"]}>
          Limits on max rewards apply.
        </span>
      </div>
    </section>
  );
};

export default Form;
