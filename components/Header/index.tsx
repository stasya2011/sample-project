import Image from "next/image";
import Navigation from "./Navigation";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h1>
          <Image
            src={"/assets/logo.svg"}
            alt={"Logo"}
            width={125}
            height={32}
            priority
          />
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
