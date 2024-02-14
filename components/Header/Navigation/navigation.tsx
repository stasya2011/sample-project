"use client";

import useIsSmallScreen from "@/hooks/hooks";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./navBlock";
import { useState } from "react";
import { createPortal } from "react-dom";
import MobileMenu from "../mobileMenu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSmallDevice } = useIsSmallScreen();
  //TODO MobileMenu!!!
  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {isSmallDevice ? (
        isMobileMenuOpen ? (
          createPortal(<MobileMenu closeMenu={closeMenu} />, document.body)
        ) : (
          <Image
            src={"/assets/menu.svg"}
            alt={"Menu"}
            width={19}
            height={19}
            className={styles["menu-mobile"]}
            onClick={openMenu}
          />
        )
      ) : (
        <NavBlock />
      )}
    </>
  );
};

export default Navigation;
