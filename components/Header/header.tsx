import Navigation from "./navigation/navigation";
import styles from "./header.module.scss";
import Logo from "./logo";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h1>
          <Logo />
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
