import Navigation from "./Navigation";
import styles from "./header.module.scss";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
