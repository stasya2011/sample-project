import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles["inner-wrapper"]}>top </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles["inner-wrapper"]}>bottom</div>
      </div>
    </footer>
  );
};

export default Footer;
