"use client";

import useIsSmallScreen from "@/hooks/hooks";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./navBlock";
import close from "../../public/assets/close.svg";
import menu from "../../public/assets/menu.svg";

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
            src={close}
            alt={"Menu close"}
            width={19}
            height={19}
            className={styles["menu-mobile"]}
            onClick={closeMenu}
          />
        ) : (
          <Image
            src={menu}
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
