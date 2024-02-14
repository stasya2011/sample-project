"use client";

import useIsSmallScreen from "@/hooks/hooks";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./navBlock";

const Navigation = ({
  handleMenu,
  isMobileMenuOpen,
}: {
  handleMenu: (value: boolean) => void;
  isMobileMenuOpen: boolean;
}) => {
  const { isSmallDevice } = useIsSmallScreen();
  const openMenu = () => {
    handleMenu(true);
  };

  const closeMenu = () => {
    handleMenu(false);
  };
  return (
    <>
      {isSmallDevice ? (
        isMobileMenuOpen ? (
          <Image
            src={"/assets/close.svg"}
            alt={"Menu close"}
            width={19}
            height={19}
            className={styles["menu-mobile"]}
            onClick={closeMenu}
          />
        ) : (
          <Image
            src={"/assets/menu.svg"}
            alt={"Menu open."}
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
