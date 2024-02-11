import styles from "./form.module.scss";

const Form = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles["wrapper-inner"]}>
        <h2>REFER FRIENDS AND GET REWARDS</h2>
        <p>
          Refer your friends to us and earn hotel booking vouchers. We``ll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <form className={styles["form-wrapper"]}>
          <input type="email" placeholder="Enter your email address" />
          <button className={styles.btn}>Get Referral Link</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
