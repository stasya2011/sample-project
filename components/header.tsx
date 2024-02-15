"use client";

import { useState } from "react";
import Navigation from "./navigation/navigation";
import styles from "./header.module.scss";
import Logo from "./logo";
import NavBlock from "./navigation/navBlock";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h1>
          <Logo />
        </h1>
        <Navigation
          handleMenu={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
      <div>{isMobileMenuOpen && <NavBlock />}</div>
    </header>
  );
};

export default Header;
