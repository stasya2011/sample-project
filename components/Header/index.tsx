import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <div>
          <Image
            src={"/assets/logo.svg"}
            alt={"Logo"}
            width={125}
            height={32}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <Link href={"/chrome-extension"}>Chrome Extension</Link>
          <Link href={"/price-comparison"}>Price Comparison</Link>
          <Link href={"/blog"}>Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
