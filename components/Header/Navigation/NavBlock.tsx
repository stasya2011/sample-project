import Link from "next/link";
import React from "react";
import styles from "../header.module.scss";

const NavBlock = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/chrome-extension"}>Chrome Extension</Link>
      <Link href={"/price-comparison"}>Price Comparison</Link>
      <Link href={"/blog"}>Blog</Link>
    </nav>
  );
};

export default NavBlock;
